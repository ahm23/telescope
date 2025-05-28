import { buildQuery } from "../../../../helper-func-types";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/* DenomTrace queries a denomination trace information. */
export const getDenomTrace = buildQuery<QueryDenomTraceRequest, QueryDenomTraceResponse>({
  encode: QueryDenomTraceRequest.encode,
  decode: QueryDenomTraceResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "DenomTrace"
});
/* DenomTraces queries all denomination traces. */
export const getDenomTraces = buildQuery<QueryDenomTracesRequest, QueryDenomTracesResponse>({
  encode: QueryDenomTracesRequest.encode,
  decode: QueryDenomTracesResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "DenomTraces"
});
/* Params queries all parameters of the ibc-transfer module. */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "Params"
});