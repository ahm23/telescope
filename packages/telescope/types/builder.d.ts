import { ProtoStore } from '@ahm23/telescope-proto-parser';
import { TelescopeParseContext } from './build';
import { TelescopeOptions } from '@ahm23/telescope-types';
import { BundlerFile, TelescopeInput } from './types';
export declare class TelescopeBuilder {
    store: ProtoStore;
    protoDirs: string[];
    outPath: string;
    options: TelescopeOptions;
    contexts: TelescopeParseContext[];
    files: string[];
    readonly converters: BundlerFile[];
    readonly lcdClients: BundlerFile[];
    readonly rpcQueryClients: BundlerFile[];
    readonly rpcMsgClients: BundlerFile[];
    readonly registries: BundlerFile[];
    readonly stateManagers: Record<string, BundlerFile[]>;
    readonly functionMappings: Record<string, Record<string, Record<string, {
        functionName: string;
        hookName: string;
        comment?: string;
        requestType: string;
        responseType: string;
        sourceFilename?: string;
        hookSourceFilename?: string;
        typeSourceFilename?: string;
    }>>>;
    constructor({ protoDirs, outPath, store, options, }: TelescopeInput & {
        store?: ProtoStore;
    });
    context(ref: any): TelescopeParseContext;
    addFunctionMapping(packageName: string, serviceName: string, methodName: string, functionName: string, hookName: string, comment?: string, requestType?: string, responseType?: string, sourceFilename?: string, hookSourceFilename?: string, typeSourceFilename?: string): void;
    getFunctionMappings(): Record<string, Record<string, Record<string, {
        functionName: string;
        hookName: string;
        comment?: string;
        requestType: string;
        responseType: string;
        sourceFilename?: string;
        hookSourceFilename?: string;
        typeSourceFilename?: string;
    }>>>;
    addStateManagers(type: string, files: BundlerFile[]): void;
    addRPCQueryClients(files: BundlerFile[]): void;
    addRPCMsgClients(files: BundlerFile[]): void;
    addLCDClients(files: BundlerFile[]): void;
    addRegistries(files: BundlerFile[]): void;
    addConverters(files: BundlerFile[]): void;
    build(): Promise<void>;
}
