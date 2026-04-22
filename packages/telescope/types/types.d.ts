import { ImportDeclaration } from '@babel/types';
import { ProtoServiceMethod, TelescopeOptions } from '@ahm23/telescope-types';
export interface ExportObj {
    pkg: string;
    localname: string;
    relativePath: string;
    exportedIdentifiers: string[];
    isHelperFunc?: boolean;
}
export interface Bundle {
    bundleVariables: {};
    bundleFile: string;
    importPaths: ImportDeclaration[];
    exportObjs?: ExportObj[];
    base: string;
}
export interface BundlerFile {
    proto?: string;
    package?: string;
    localname: string;
    filename: string;
    isMsg?: boolean;
    instantExportedMethods?: ProtoServiceMethod[];
}
export interface ImportObj {
    type: 'import' | 'default' | 'namespace' | string;
    name: string;
    path: string;
    importAs?: string;
    protoPath?: string;
}
export type UtilValue = ImportObj | string;
export interface DerivedImportObj extends ImportObj {
    orig: string;
}
export interface ImportHash {
    [key: string]: string[];
}
export interface TelescopeInput {
    protoDirs: string[];
    outPath: string;
    options: TelescopeOptions;
}
