import * as t from "@babel/types";
import { ProtoType } from "@cosmology/types";
import { ProtoParseContext } from "../../context";
export declare const createRegisterObject: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExpressionStatement;
export declare const createRegisterAminoProtoMapping: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExpressionStatement;
/**
 * create ast: if(!GlobalDecoderRegistry.registerExistingTypeUrl(SignerInfo.typeUrl)){
 *    return;
 *  }
 * @param context
 * @param name
 * @returns
 */
export declare const createIfGlobalDecoderRegistryRegisterExistingTypeUrl: (context: ProtoParseContext, name: string, proto: ProtoType) => t.IfStatement;
