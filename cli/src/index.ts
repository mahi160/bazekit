#!/usr/bin/env node
import { Command } from "commander";
import { add } from "./actions/add";
import { list } from "./actions/list";
import { init } from "./actions/init";
import { setRegistry } from "./actions/set-registry";

const program = new Command();
program
  .name("bazekit")
  .description("Bazekit UI component fetcher")
  .version("0.0.1");

program
  .command("add <components...>")
  .description("Download one or more components into config root")
  .action(async (components: string[]) => {
    await add(components);
  });

program
  .command("list")
  .description("List available components in registry")
  .option("-v, --verbose", "Show files for each component")
  .action(async (options: any) => {
    await list(options);
  });

program
  .command("init")
  .description("Create a .bazekitrc config interactively")
  .option("-y, --yes", "Use defaults without prompting")
  .action(async (options: any) => {
    await init(options);
  });

program
  .command("set-registry <url>")
  .description("Update registry URL in .bazekitrc")
  .option("-f, --force", "Force update even if unchanged")
  .action(async (url: string, options: any) => {
    await setRegistry(url, { force: options.force });
  });

program.parse();
