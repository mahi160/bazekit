import https from "https";
import { RegistrySchema, buildBaseUrl, Registry, RawRegistry } from "./schema";

function fetchJson(url: string, sizeLimit = 200_000): Promise<any> {
  return new Promise((resolve, reject) => {
    const u = url.startsWith("http://")
      ? url.replace("http://", "https://")
      : url;
    https
      .get(u, (res) => {
        if ((res.statusCode || 0) >= 300)
          return reject(new Error(`HTTP ${res.statusCode}`));
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
          if (data.length > sizeLimit) {
            res.destroy();
            reject(new Error("Registry too large"));
          }
        });
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error(`Invalid JSON: ${(e as Error).message}`));
          }
        });
      })
      .on("error", reject);
  });
}

let cache: { url: string; registry: Registry } | null = null;

export async function loadRegistryRemote(
  url: string,
  force = false,
): Promise<Registry> {
  if (!force && cache && cache.url === url) return cache.registry;
  const raw: RawRegistry = RegistrySchema.parse(await fetchJson(url));
  const registry: Registry = { ...raw, baseUrl: buildBaseUrl(raw) };
  cache = { url, registry };
  return registry;
}
