import * as t from "@babel/types";
import { TelescopeOptions } from "@ahm23/telescope-types";
export declare function getExportedTypeNames(program: t.Statement[]): string[];
export declare const writeAstToFile: (outPath: string, options: TelescopeOptions, program: t.Statement[], filename: string) => void;
export declare const writeContentToFile: (outPath: string, options: TelescopeOptions, content: string, filename: string) => void;
