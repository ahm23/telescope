import * as t from "@babel/types";
import { TelescopeOptions } from "@ahm23/telescope-types";
export declare const recursiveModuleBundle: (options: TelescopeOptions, obj: any) => any;
export declare const recursiveOtherNameSpaces: (objs: any) => t.ObjectProperty[];
export declare const importNamespace: (ident: string, path: string) => t.ImportDeclaration;
export declare const exportAllFromImportDeclarations: (importDeclarations: t.ImportDeclaration[]) => t.ExportAllDeclaration[];
export declare const exportAllFromRelPath: (relPath: string) => t.ExportAllDeclaration;
/**
 * e.g. export { MsgCreatePost, MsgUpdatePost as aliasMsgUpdatePost} from "./msg";
 * @param types
 * @param relPath
 */
export declare const exportTypesWithAlias: (types: {
    name: string;
    alias: string;
}[], relPath: string) => t.ExportNamedDeclaration;
