import { loadConfig, saveConfig } from "./config.js";

export async function setRegistry(url: string, opts: { force?: boolean } = {}) {
  if (!url) {
    console.error("Registry URL required");
    return;
  }
  const cfg = loadConfig();
  const prev = cfg.registryUrl;
  if (!opts.force && prev === url) {
    console.log(`Registry URL already set to ${url}`);
    return;
  }
  cfg.registryUrl = url;
  saveConfig(cfg);
  console.log(`Updated registryUrl from '${prev}' to '${url}'`);
}
