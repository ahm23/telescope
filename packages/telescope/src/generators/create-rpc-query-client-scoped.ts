import * as dotty from 'dotty';
import { getNestedProto, isRefIncluded, createEmptyProtoRef } from '@ahm23/telescope-proto-parser';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { createScopedRpcTmFactory, createScopedGrpcWebFactory, createScopedGrpcGatewayFactory } from '@ahm23/telescope-ast';
import { ProtoRef } from '@ahm23/telescope-types';
import { fixlocalpaths, getRelativePath } from '../utils';
import { Bundler } from '../bundler';
import { TelescopeParseContext } from '../build';
import { aggregateImports, getDepsFromQueries, getImportStatements } from '../imports';

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
    const localname = join(dir, filename + '.query');
    return localname + '.ts';
};

const makeRPC = (
    builder: TelescopeBuilder,
    bundler: Bundler,
    rpc: {
        dir: string;
        filename?: string;
        packages: string[];
        protos?: string[];
        addToBundle: boolean;
        methodNameQuery?: string;
        methodNameTx?: string;
    }
) => {
    const dir = rpc.dir;
    const packages = rpc.packages;
    const protos = rpc.protos;
    const methodName = rpc.methodNameQuery ?? 'createRPCQueryClient'
    const localname = getFileName(dir, rpc.filename ?? 'rpc');

    const obj = {};
    builder.rpcQueryClients.forEach(file => {

        // ADD all option
        // which defaults to including cosmos
        // and defaults to base for each
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
    //based on rpc type to generate client from client factory
    let rpcast;

    switch (builder.options?.rpcClients?.type) {
        case "grpc-gateway":
            rpcast = createScopedGrpcGatewayFactory(
                ctx.proto,
                obj,
                "createGrpcGateWayClient"
                // 'QueryClientImpl' // make option later
            );
            break;
        case "tendermint":
            // TODO add addUtil to generic context
            ctx.proto.addUtil('Rpc');

            rpcast = createScopedRpcTmFactory(
                ctx.proto,
                obj,
                methodName
                // 'QueryClientImpl' // make option later
            );
            break;
        case "grpc-web":
            rpcast = createScopedGrpcWebFactory(
                ctx.proto,
                obj,
                "createGrpcWebClient"
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
        .concat(importStmts)
        .concat(rpcast);

    const filename = bundler.getFilename(localname);
    bundler.writeAst(prog, filename);
    if (rpc.addToBundle) {
        bundler.addToBundleToPackage(`${dir}.ClientFactory`, localname)
    }
};
