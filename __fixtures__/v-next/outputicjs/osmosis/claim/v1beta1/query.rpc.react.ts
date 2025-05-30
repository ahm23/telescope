import { buildUseQuery } from "../../../react-query";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
import { getModuleAccountBalance, getOsmosisClaimV1beta1Params, getClaimRecord, getClaimableForAction, getTotalClaimable } from "./query.rpc.func";
export const useGetModuleAccountBalance = buildUseQuery<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>({
  builderQueryFn: getModuleAccountBalance,
  queryKeyPrefix: "ModuleAccountBalanceQuery"
});
export const useGetOsmosisClaimV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getOsmosisClaimV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetClaimRecord = buildUseQuery<QueryClaimRecordRequest, QueryClaimRecordResponse>({
  builderQueryFn: getClaimRecord,
  queryKeyPrefix: "ClaimRecordQuery"
});
export const useGetClaimableForAction = buildUseQuery<QueryClaimableForActionRequest, QueryClaimableForActionResponse>({
  builderQueryFn: getClaimableForAction,
  queryKeyPrefix: "ClaimableForActionQuery"
});
export const useGetTotalClaimable = buildUseQuery<QueryTotalClaimableRequest, QueryTotalClaimableResponse>({
  builderQueryFn: getTotalClaimable,
  queryKeyPrefix: "TotalClaimableQuery"
});