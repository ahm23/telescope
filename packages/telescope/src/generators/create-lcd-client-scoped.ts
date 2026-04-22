import * as dotty from 'dotty';
import { getNestedProto, isRefIncluded, createEmptyProtoRef } from '@ahm23/telescope-proto-parser';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { createScopedLCDFactory } from '@ahm23/telescope-ast';
import { ALLOWED_RPC_SERVICES, ProtoRef } from '@ahm23/telescope-types';
import { fixlocalpaths, getRelativePath } from '../utils';
import { Bundler } from '../bundler';
import { TelescopeParseContext } from '../build';
import { aggregateImports, getImportStatements } from '../imports';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    // if not enabled, exit
    if (!builder.options?.lcdClients?.enabled) {
        return;
    }

    // we have scopes!
    builder.options.lcdClients.scoped?.forEach(lcd => {
        if (lcd.dir !== bundler.bundle.base) return;
        makeLCD(
            builder,
            bundler,
            lcd
        );
    });
};

const getFileName = (dir, filename) => {
    const localname = join(dir, filename ?? 'lcd.ts');
    if (localname.endsWith('.ts')) return localname;
    return localname + '.ts';
};

const makeLCD = (
    builder: TelescopeBuilder,
    bundler: Bundler,
    lcd: {
        dir: string;
        filename?: string;
        packages: string[];
        protos?: string[];
        addToBundle: boolean;
        methodName?: string;
    }
) => {
    const dir = lcd.dir;
    const packages = lcd.packages;
    const protos = lcd.protos;
    const methodName = lcd.methodName ?? 'createLCDClient'
    const localname = getFileName(dir, lcd.filename);

    const obj = {};
    builder.lcdClients.forEach(file => {

        // ADD all option
        // which defaults to including cosmos
        // and defaults to base for each
        // if (!packages.includes(file.package)) {
        if (!isRefIncluded(createEmptyProtoRef(file.package, file.proto), {
            packages,
            protos
        })) {
            return;
        }

        const f = localname;
        const f2 = file.localname;
        const importPath = getRelativePath(f, f2);
        dotty.put(obj, file.package, importPath);
    });


    const ctx = new TelescopeParseContext(
        createEmptyProtoRef(dir, localname),
        builder.store,
        builder.options
    );

    const lcdast = createScopedLCDFactory(
        ctx.proto,
        obj,
        methodName,
        'LCDQueryClient' // make option later
    );

    const imports = aggregateImports(ctx, {}, localname);

    const importStmts = getImportStatements(
        localname,
        [...fixlocalpaths(imports)],
        builder.options
    );

    const prog = []
        .concat(importStmts)
        .concat(lcdast);

    const filename = bundler.getFilename(localname);
    bundler.writeAst(prog, filename);

    if (lcd.addToBundle) {
        bundler.addToBundleToPackage(`${dir}.ClientFactory`, localname)
    }
};
