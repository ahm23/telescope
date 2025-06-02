import { Bundler } from "../bundler";
import { TelescopeBuilder } from "../builder";
import {
  exportAllFromRelPath,
  exportTypesWithAlias,
  recursiveModuleBundle,
} from "@cosmology/ast";
import { duplicateImportPathsWithExt, makeAliasName } from "@cosmology/utils";

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
    // get export objs
    const exportObjs = bundler.bundle.exportObjs;
    if (!exportObjs) {
      return;
    }

    // check each of exported identifiers is duplicated
    exportObjs.forEach((exportObj) => {
      const duplicatedTypeNames = exportObj.exportedIdentifiers.filter(
        (identifier) => {
          let isDuplicated = false;
          if (exportObj.isHelperFunc) {
            const duplicatedHelperFuncs =
              builder.store.getHelperFuncsInMultipleFiles();

            isDuplicated = duplicatedHelperFuncs.some((helperFunc) => {
              return helperFunc === identifier;
            });
          } else {
            const duplicatedTypes = builder.store.getTypesInMultipleFiles();
            isDuplicated = duplicatedTypes.some((type) => {
              return type === identifier;
            });
          }
          return isDuplicated;
        }
      );
      if (duplicatedTypeNames.length > 0) {
        // export each, some duplicated with alias
        const typesWithAlias = exportObj.exportedIdentifiers.map((identifier) => {
          const duplicatedType = duplicatedTypeNames.find((type) => type === identifier);
          if (duplicatedType) {
            let alias: string;
            if (exportObj.isHelperFunc) {
              const serialNumber = builder.store.getAndIncTypeSerialNumber(identifier);
              if (serialNumber > 0) {
                alias = `${identifier}${serialNumber}`;
              } else {
                alias = identifier;
              }
            } else {
              const serialNumber = builder.store.getAndIncTypeSerialNumber(identifier);
              if (serialNumber > 0) {
                alias = makeAliasName({ package: exportObj.pkg, name: identifier });
              } else {
                alias = identifier;
              }
            }
            return { name: identifier, alias: alias };
          }
          return { name: identifier, alias: identifier };
        });
        prog.push(exportTypesWithAlias(typesWithAlias, exportObj.relativePath));
      } else {
        // export *
        prog.push(exportAllFromRelPath(exportObj.relativePath));
      }
    });
  }

  const localname = bundler.bundle.bundleFile;
  const filename = bundler.getFilename(localname);

  bundler.writeAst(prog, filename);

  // [x] write an index file for each base
  bundler.files.forEach((file) => builder.files.push(file));
};
