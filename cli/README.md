# Bazekit CLI

A lightweight, modular CLI to fetch Bazekit UI component source files from a remote registry into your project.

## Quick Use (No Install)

Use on demand without adding a dependency:

```bash
# List components
npx @bazekit/cli list
pnpm dlx @bazekit/cli list

# Add components
npx @bazekit/cli add button card
pnpm dlx @bazekit/cli add button card

# Initialize config
npx @bazekit/cli init
```

You may prefix with `--` options exactly the same way using `npx` or `pnpm dlx`.

## Requirements

- Node.js >= 22

## Commands

| Command                                | Description                                                 |
| -------------------------------------- | ----------------------------------------------------------- |
| `bazekit init [-y]`                    | Create or overwrite `.bazekitrc` (interactive unless `-y`). |
| `bazekit list [-v]`                    | List component names (verbose prints file lists).           |
| `bazekit add <components...>`          | Download one or more components into configured root.       |
| `bazekit set-registry <url> [--force]` | Update registry JSON endpoint in `.bazekitrc`.              |

Run `bazekit --help` (or `npx @bazekit/cli --help`) for details.

## Configuration (`.bazekitrc`)

```jsonc
{
  "root": "src/components", // Base folder where components live
  "main": "main.ts", // Reserved for future exports
  "baseSubfolder": "base", // Subfolder under root for fetched components
  "registryUrl": "https://raw.githubusercontent.com/your/repo/main/registry/registry.json",
}
```

Modify manually or rerun `bazekit init`.

## Registry JSON Format

The registry at `registryUrl` must match:

```json
{
  "source": {
    "type": "github",
    "url": "https://raw.githubusercontent.com/mahi160/bazekit-ui",
    "branch": "main",
    "basePath": "src/components"
  },
  "components": {
    "button": {
      "folder": "button",
      "files": ["Button.tsx", "Button.module.css"],
      "dependencies": ["@base-ui-components/react"]
    }
  }
}
```

Meaning:

- `source` describes the repository and path containing components.
- `components` maps a component name to:
  - `folder` (optional) override folder name.
  - `files` array (required) relative filenames.
  - `dependencies` (optional) informational list of external package names.
    The effective base URL used for file downloads is constructed as:

```
source.url + '/' + branch + '/' + basePath(normalized) + '/'
```

Files fetched from: `baseUrl + componentName + '/' + filename`.

## Component Add Flow

1. Load registry & validate via Zod.
2. Ensure `<root>/<baseSubfolder>` exists.
3. For each component:
   - Create destination subfolder (`folder` or component name).
   - Prompt before overwriting existing files.
   - Stream each file via HTTPS to disk.

## Error Handling

- Network / parse errors print a clear message and abort the command.
- Unknown components and individual file fetch failures are reported but do not stop remaining downloads.

## Development

```bash
pnpm install
pnpm build    # produces dist/bazekit.cjs
```

Source in `src/`, bundled via esbuild with external dependencies.

## Design Principles

- Minimal surface area (few focused commands)
- Pure TypeScript, single bundled executable
- Schema-defined registry (Zod validated)
- Stateless operations (except in-memory registry caching per invocation)
- No heavy dependency tree

## License

Apache License 2.0. See `LICENSE` for full terms.

## Security & Trust

- Uses only HTTPS requests.
- No code execution from downloaded component files; they are written verbatim.
- Size guard (200 KB) prevents excessive registry payloads.
