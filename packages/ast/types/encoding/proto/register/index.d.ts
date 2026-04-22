import * as t from "@babel/types";
import { ProtoParseContext } from "../../context";
import { ProtoType } from "@ahm23/telescope-types";
export * from "./utils";
export declare const registerTypeUrlMethod: (args: {
    context: ProtoParseContext;
    name: string;
    proto: ProtoType;
}) => t.ObjectMethod;
export declare const createRegisterType: (typeName: string) => t.ExpressionStatement;
