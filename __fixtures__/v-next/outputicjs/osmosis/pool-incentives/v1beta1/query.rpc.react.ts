import { buildUseQuery } from "../../../react-query";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
import { getGaugeIds, getDistrInfo, getOsmosisPoolincentivesV1beta1Params, getLockableDurations, getIncentivizedPools, getExternalIncentiveGauges } from "./query.rpc.func";
/* GaugeIds takes the pool id and returns the matching gauge ids and durations */
export const useGetGaugeIds = buildUseQuery<QueryGaugeIdsRequest, QueryGaugeIdsResponse>({
  builderQueryFn: getGaugeIds,
  queryKeyPrefix: "GaugeIdsQuery"
});
/* DistrInfo returns the pool's matching gauge ids and weights. */
export const useGetDistrInfo = buildUseQuery<QueryDistrInfoRequest, QueryDistrInfoResponse>({
  builderQueryFn: getDistrInfo,
  queryKeyPrefix: "DistrInfoQuery"
});
/* Params returns pool incentives params. */
export const useGetOsmosisPoolincentivesV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getOsmosisPoolincentivesV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/* LockableDurations returns lock durations for pools. */
export const useGetLockableDurations = buildUseQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  builderQueryFn: getLockableDurations,
  queryKeyPrefix: "LockableDurationsQuery"
});
/* IncentivizedPools returns currently incentivized pools */
export const useGetIncentivizedPools = buildUseQuery<QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse>({
  builderQueryFn: getIncentivizedPools,
  queryKeyPrefix: "IncentivizedPoolsQuery"
});
/* ExternalIncentiveGauges returns external incentive gauges. */
export const useGetExternalIncentiveGauges = buildUseQuery<QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse>({
  builderQueryFn: getExternalIncentiveGauges,
  queryKeyPrefix: "ExternalIncentiveGaugesQuery"
});