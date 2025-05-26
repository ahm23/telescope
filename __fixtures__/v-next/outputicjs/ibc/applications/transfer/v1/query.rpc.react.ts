import { buildUseQuery } from "../../../../react-query";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getDenomTrace, getDenomTraces, getParams } from "./query.rpc.func";
/* DenomTrace queries a denomination trace information. */
export const useGetDenomTrace = buildUseQuery<QueryDenomTraceRequest, QueryDenomTraceResponse>({
  builderQueryFn: getDenomTrace,
  queryKeyPrefix: "DenomTraceQuery"
});
/* DenomTraces queries all denomination traces. */
export const useGetDenomTraces = buildUseQuery<QueryDenomTracesRequest, QueryDenomTracesResponse>({
  builderQueryFn: getDenomTraces,
  queryKeyPrefix: "DenomTracesQuery"
});
/* Params queries all parameters of the ibc-transfer module. */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});