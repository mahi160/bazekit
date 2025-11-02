import fs from "fs";
import path from "path";

export interface BazekitConfig {
  root: string; // base component root (e.g. src/components)
  main: string; // main entry file name
  baseSubfolder: string; // subfolder inside root for added components
  registryUrl: string; // remote registry JSON URL
}

const RC_NAME = ".bazekitrc";
const REGISTRY_URL =
  "https://raw.githubusercontent.com/mahi160/bazekit-cli/refs/heads/main/registry/registry.json";

export function configPath(): string {
  return path.join(process.cwd(), RC_NAME);
}

export function loadConfig(): BazekitConfig {
  const p = configPath();
  if (!fs.existsSync(p)) {
    return {
      root: "src/components",
      main: "main.ts",
      baseSubfolder: "base",
      registryUrl: REGISTRY_URL,
    };
  }
  try {
    const parsed = JSON.parse(fs.readFileSync(p, "utf8"));
    if (!parsed.registryUrl) {
      parsed.registryUrl = REGISTRY_URL;
    }
    return parsed as BazekitConfig;
  } catch (e) {
    throw new Error(`Failed to parse ${RC_NAME}: ${(e as Error).message}`);
  }
}

export function saveConfig(cfg: BazekitConfig) {
  fs.writeFileSync(configPath(), JSON.stringify(cfg, null, 2));
  console.log(`Saved configuration to ${configPath()}`);
}
