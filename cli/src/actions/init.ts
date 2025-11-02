import readline from "readline";
import { saveConfig, loadConfig, BazekitConfig } from "./config.js";

export interface InitOptions {
  yes?: boolean;
}

export async function init(opts: InitOptions = {}): Promise<void> {
  const defaults = loadConfig();
  if (opts.yes) {
    saveConfig(defaults);
    return;
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const ask = (q: string) =>
    new Promise<string>((resolve) => rl.question(q, resolve));

  const root =
    (await ask(`Component root folder (${defaults.root}): `)).trim() ||
    defaults.root;
  const main =
    (await ask(`Main file name (${defaults.main}): `)).trim() || defaults.main;
  const baseSubfolder =
    (await ask(`Base subfolder (${defaults.baseSubfolder}): `)).trim() ||
    defaults.baseSubfolder;

  const registryUrl =
    (await ask(`Registry URL (${defaults.registryUrl}): `)).trim() ||
    defaults.registryUrl;

  rl.close();

  const cfg: BazekitConfig = { root, main, baseSubfolder, registryUrl };
  saveConfig(cfg);
}
