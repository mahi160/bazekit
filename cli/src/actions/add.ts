import fs from "fs";
import path from "path";
import https from "https";
import { loadRegistryRemote } from "./registry";
import { loadConfig } from "./config.js";
import readline from "readline";

export async function add(components: string[]): Promise<void> {
  if (!components || !components.length) {
    console.error("At least one component name required");
    return;
  }

  const cfg = loadConfig();
  let registry: import("./schema").Registry;
  try {
    registry = await loadRegistryRemote(cfg.registryUrl);
  } catch (e) {
    console.error(`Failed to load remote registry: ${(e as Error).message}`);
    console.error(
      `Set a valid 'registryUrl' in .bazekitrc (current: ${cfg.registryUrl}) using 'bazekit init' or manual edit.`,
    );
    return;
  }
  const rootDir = path.resolve(process.cwd(), cfg.root);
  const baseDir = path.join(rootDir, cfg.baseSubfolder);
  fs.mkdirSync(baseDir, { recursive: true });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const ask = (q: string) =>
    new Promise<string>((resolve) => rl.question(q, resolve));

  for (const component of components) {
    const def = (registry as any).snippets?.[component];
    if (!def) {
      console.error(`Unknown component '${component}'`);
      continue;
    }

    const files = def.files || [];
    if (!files.length) {
      console.error(`No files for component '${component}'`);
      continue;
    }
    const destDir = path.join(baseDir, def.folder || component);
    fs.mkdirSync(destDir, { recursive: true });

    const existing = files.filter((f: string) =>
      fs.existsSync(path.join(destDir, f)),
    );
    let overwriteAll = true;
    if (existing.length) {
      const answer = (
        await ask(
          `Component '${component}' has existing files (${existing.join(", ")}). Overwrite? [y/N]: `,
        )
      )
        .trim()
        .toLowerCase();
      overwriteAll = answer === "y" || answer === "yes";
      if (!overwriteAll) {
        console.log(`Skipping overwrite for component '${component}'`);
      }
    }

    for (const filename of files) {
      const url = `${registry.baseUrl}${component}/${filename}`;
      const destPath = path.join(destDir, filename);
      if (!overwriteAll && fs.existsSync(destPath)) {
        console.log(`Skip existing ${destPath}`);
        continue;
      }

      await new Promise<void>((resolve) => {
        https
          .get(url, (res) => {
            if (res.statusCode !== 200) {
              console.error(`Failed ${filename} (${res.statusCode})`);
              res.resume();
              return resolve();
            }
            const out = fs.createWriteStream(destPath);
            res.pipe(out);
            out.on("finish", () =>
              out.close(() => {
                console.log(`Created ${destPath}`);
                resolve();
              }),
            );
          })
          .on("error", (err) => {
            console.error(`Network error: ${(err as Error).message}`);
            resolve();
          });
      });
    }
    console.log(`Component '${component}' added in ${destDir}`);
  }
  rl.close();
}
