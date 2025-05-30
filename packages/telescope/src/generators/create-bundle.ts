import { Bundler } from "../bundler";
import { TelescopeBuilder } from "../builder";
import { exportAllFromImportDeclarations, recursiveModuleBundle } from "@cosmology/ast";
import { duplicateImportPathsWithExt } from "@cosmology/utils";

export const plugin = (builder: TelescopeBuilder, bundler: Bundler) => {
  if (!builder.options.bundle.enabled) {
    return;
  }

  let prog = [];

  if (builder.options.bundle.type === "namespace") {
    const importPaths = duplicateImportPathsWithExt(
      bundler.bundle.importPaths,
      builder.options.restoreImportExtension
    );

    // [x] bundle
    const body = recursiveModuleBundle(
      builder.options,
      bundler.bundle.bundleVariables
    );
    prog = prog.concat(importPaths).concat(body);
  } else if (builder.options.bundle.type === "module") {
    const body = exportAllFromImportDeclarations(
      bundler.bundle.importPaths.filter((importPath) => {
        // exclude .registry
        return !importPath.source.value.includes(".registry");
      })
    );
    prog = prog.concat(body);
  }

  const localname = bundler.bundle.bundleFile;
  const filename = bundler.getFilename(localname);

  bundler.writeAst(prog, filename);

  // [x] write an index file for each base
  bundler.files.forEach((file) => builder.files.push(file));
};
