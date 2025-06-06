import { buildQuery } from "../../../../helper-func-types";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/**
 * DenomTrace queries a denomination trace information.
 * @name getDenomTrace
 * @package ibc.applications.transfer.v1
 * @see protoservice: ibc.applications.transfer.v1.DenomTrace
 */
export const getDenomTrace = buildQuery<QueryDenomTraceRequest, QueryDenomTraceResponse>({
  encode: QueryDenomTraceRequest.encode,
  decode: QueryDenomTraceResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "DenomTrace"
});
/**
 * DenomTraces queries all denomination traces.
 * @name getDenomTraces
 * @package ibc.applications.transfer.v1
 * @see protoservice: ibc.applications.transfer.v1.DenomTraces
 */
export const getDenomTraces = buildQuery<QueryDenomTracesRequest, QueryDenomTracesResponse>({
  encode: QueryDenomTracesRequest.encode,
  decode: QueryDenomTracesResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "DenomTraces"
});
/**
 * Params queries all parameters of the ibc-transfer module.
 * @name getIbcApplicationsTransferV1Params
 * @package ibc.applications.transfer.v1
 * @see protoservice: ibc.applications.transfer.v1.Params
 */
export const getIbcApplicationsTransferV1Params = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "Params"
});