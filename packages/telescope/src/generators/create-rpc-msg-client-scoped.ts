import * as dotty from 'dotty';
import { createEmptyProtoRef, getNestedProto } from '@ahm23/telescope-proto-parser';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { createScopedRpcFactory, createScopedGrpcWebMsgFactory, createRpcMsgExtension, importStmt } from '@ahm23/telescope-ast';
import { ProtoRef } from '@ahm23/telescope-types';
import { fixlocalpaths, getRelativePath } from '../utils';
import { Bundler } from '../bundler';
import { aggregateImports, getDepsFromQueries, getImportStatements } from '../imports';
import { TelescopeParseContext } from '../build';
import { pascal } from 'case';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
    // if not enabled, exit
    if (!builder.options?.rpcClients?.enabled) {
        return;
    }

    if (builder.options?.rpcClients?.inline) {
        return;
    }

    // we have scopes!
    builder.options.rpcClients.scoped?.forEach(rpc => {
        if (rpc.dir !== bundler.bundle.base) return;
        makeRPC(
            builder,
            bundler,
            rpc
        );
    });
};

const getFileName = (dir, filename) => {
    filename = filename.replace(/\.ts$/, '');
    const localname = join(dir, filename + '.tx');
    return localname + '.ts';
};

const makeRPC = (
    builder: TelescopeBuilder,
    bundler: Bundler,
    rpc: {
        dir: string;
        filename?: string;
        packages: string[];
        addToBundle: boolean;
        methodNameQuery?: string;
        methodNameTx?: string;
        isAll?: boolean;
    }
) => {
    const dir = rpc.dir;
    const packages = rpc.packages;
    const methodName = rpc.methodNameTx ?? 'createRPCMsgClient'
    const localname = getFileName(dir, rpc.filename ?? 'rpc');

    const obj = {};
    builder.rpcMsgClients.forEach(file => {

        // ADD all option
        // which defaults to including cosmos
        // and defaults to base for each
        if (!packages.includes(file.package)) {
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

    let rpcast;
    let msgExt: any = [];
    let txRpcImport: any = [];
    switch (builder.options?.rpcClients?.type) {
        case "grpc-gateway":
        // TODO no working scoped clients for grpc-gateway right now
        case "tendermint":
            // TODO add addUtil to generic context
            ctx.proto.addUtil('Rpc');

            rpcast = createScopedRpcFactory(
                obj,
                methodName,
                'MsgClientImpl', // make option later,
                ctx.options
            );

            if(rpc.isAll && ctx.proto.pluginValue('env') === 'v-next' && ctx.proto.pluginValue('rpcClients.extensions') && ctx.proto.pluginValue('stargateClients.addGetTxRpc')) {
              const txRpcName = 'getSigning' + pascal(bundler.bundle.base + 'TxRpc');

              txRpcImport = importStmt([txRpcName], `./client${ctx.options.restoreImportExtension ?? ""}`)

              msgExt = createRpcMsgExtension(ctx.proto, txRpcName);
            }
            break;
        case "grpc-web":
            ctx.proto.addUtil('grpc');
            ctx.proto.addUtil('NodeHttpTransport');

            rpcast = createScopedGrpcWebMsgFactory(
                obj,
                methodName,
                'MsgClientImpl', // make option later,
                ctx.options
            );
            break;
        default:
            break;
    }

    const serviceImports = getDepsFromQueries(
        ctx.queries,
        localname
    );

    const imports = aggregateImports(ctx, serviceImports, localname);

    const importStmts = getImportStatements(
        localname,
        [...fixlocalpaths(imports)],
        builder.options
    );

    const prog = []
        .concat(txRpcImport)
        .concat(importStmts)
        .concat(rpcast)
        .concat(msgExt);

    const filename = bundler.getFilename(localname);
    bundler.writeAst(prog, filename);
    if (rpc.addToBundle) {
        bundler.addToBundleToPackage(`${dir}.ClientFactory`, localname)
    }
};
