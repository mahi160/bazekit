import { z } from "zod";

export const RegistrySchema = z.object({
  source: z.object({
    type: z.literal("github"),
    url: z.string().url(),
    branch: z.string().default("main"),
    basePath: z.string().default(""),
  }),
  snippets: z.record(
    z.string(),
    z.object({
      type: z.string().default("component"),
      folder: z.string().optional(),
      files: z.array(z.string()).min(1),
      dependencies: z.array(z.string()).optional(),
    }),
  ),
});

export type RawRegistry = z.infer<typeof RegistrySchema>;

export interface Registry extends RawRegistry {
  baseUrl: string;
}

export function buildBaseUrl(raw: RawRegistry): string {
  const trimmedBase = raw.source.basePath.replace(/^\/+|\/+$/g, "");
  const normalizedRepo = raw.source.url.replace(/\/+$/g, "");
  return `${normalizedRepo}/${raw.source.branch}/${trimmedBase ? trimmedBase + "/" : ""}`;
}
