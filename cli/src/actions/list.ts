import { loadRegistryRemote } from "./registry";
import { loadConfig } from "./config.js";

export interface ListOptions {
  verbose?: boolean;
}

export async function list(opts: ListOptions = {}): Promise<void> {
  const cfg = loadConfig();
  let registry;
  try {
    registry = await loadRegistryRemote(cfg.registryUrl);
  } catch (e) {
    console.error(`Failed to load remote registry: ${(e as Error).message}`);
    console.error(
      `Set a valid 'registryUrl' in .bazekitrc (current: ${cfg.registryUrl}) using 'bazekit init' or manual edit.`,
    );
    return;
  }
  const names = Object.keys((registry as any).snippets || {});
  if (!names.length) {
    console.log("No components in registry");
    return;
  }
  for (const name of names) {
    const def = (registry as any).snippets[name];
    if (opts.verbose) {
      console.log(`${name}: ${def.files.join(", ")}`);
    } else {
      console.log(name);
    }
  }
}
