import { buildQuery } from "../../../helper-func-types";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
/* GaugeIds takes the pool id and returns the matching gauge ids and durations */
export const getGaugeIds = buildQuery<QueryGaugeIdsRequest, QueryGaugeIdsResponse>({
  encode: QueryGaugeIdsRequest.encode,
  decode: QueryGaugeIdsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "GaugeIds"
});
/* DistrInfo returns the pool's matching gauge ids and weights. */
export const getDistrInfo = buildQuery<QueryDistrInfoRequest, QueryDistrInfoResponse>({
  encode: QueryDistrInfoRequest.encode,
  decode: QueryDistrInfoResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "DistrInfo"
});
/* Params returns pool incentives params. */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "Params"
});
/* LockableDurations returns lock durations for pools. */
export const getLockableDurations = buildQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  encode: QueryLockableDurationsRequest.encode,
  decode: QueryLockableDurationsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "LockableDurations"
});
/* IncentivizedPools returns currently incentivized pools */
export const getIncentivizedPools = buildQuery<QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse>({
  encode: QueryIncentivizedPoolsRequest.encode,
  decode: QueryIncentivizedPoolsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "IncentivizedPools"
});
/* ExternalIncentiveGauges returns external incentive gauges. */
export const getExternalIncentiveGauges = buildQuery<QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse>({
  encode: QueryExternalIncentiveGaugesRequest.encode,
  decode: QueryExternalIncentiveGaugesResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "ExternalIncentiveGauges"
});