import { buildUseQuery } from "../../../../react-query";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getDenomTrace, getDenomTraces, getIbcApplicationsTransferV1Params } from "./query.rpc.func";
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
export const useGetIbcApplicationsTransferV1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getIbcApplicationsTransferV1Params,
  queryKeyPrefix: "ParamsQuery"
});