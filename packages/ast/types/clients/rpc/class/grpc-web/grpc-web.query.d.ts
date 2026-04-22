import { GenericParseContext } from "../../../../encoding";
import { ProtoService } from "@ahm23/telescope-types";
import * as t from '@babel/types';
export declare const createGrpcWebQueryInterface: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
export declare const createGrpcWebQueryClass: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
