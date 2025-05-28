import { buildQuery } from "../../../helper-func-types";
import { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./query";
export const getPools = buildQuery<QueryPoolsRequest, QueryPoolsResponse>({
  encode: QueryPoolsRequest.encode,
  decode: QueryPoolsResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "Pools"
});
export const getNumPools = buildQuery<QueryNumPoolsRequest, QueryNumPoolsResponse>({
  encode: QueryNumPoolsRequest.encode,
  decode: QueryNumPoolsResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "NumPools"
});
export const getTotalLiquidity = buildQuery<QueryTotalLiquidityRequest, QueryTotalLiquidityResponse>({
  encode: QueryTotalLiquidityRequest.encode,
  decode: QueryTotalLiquidityResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "TotalLiquidity"
});
/* PoolsWithFilter allows you to query specific pools with requested
 parameters */
export const getPoolsWithFilter = buildQuery<QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse>({
  encode: QueryPoolsWithFilterRequest.encode,
  decode: QueryPoolsWithFilterResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "PoolsWithFilter"
});
/* Per Pool gRPC Endpoints */
export const getPool = buildQuery<QueryPoolRequest, QueryPoolResponse>({
  encode: QueryPoolRequest.encode,
  decode: QueryPoolResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "Pool"
});
/* PoolType returns the type of the pool.
 Returns "Balancer" as a string literal when the pool is a balancer pool.
 Errors if the pool is failed to be type caseted. */
export const getPoolType = buildQuery<QueryPoolTypeRequest, QueryPoolTypeResponse>({
  encode: QueryPoolTypeRequest.encode,
  decode: QueryPoolTypeResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "PoolType"
});
/* Simulates joining pool without a swap. Returns the amount of shares you'd
 get and tokens needed to provide */
export const getCalcJoinPoolNoSwapShares = buildQuery<QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse>({
  encode: QueryCalcJoinPoolNoSwapSharesRequest.encode,
  decode: QueryCalcJoinPoolNoSwapSharesResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "CalcJoinPoolNoSwapShares"
});
export const getCalcJoinPoolShares = buildQuery<QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse>({
  encode: QueryCalcJoinPoolSharesRequest.encode,
  decode: QueryCalcJoinPoolSharesResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "CalcJoinPoolShares"
});
export const getCalcExitPoolCoinsFromShares = buildQuery<QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse>({
  encode: QueryCalcExitPoolCoinsFromSharesRequest.encode,
  decode: QueryCalcExitPoolCoinsFromSharesResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "CalcExitPoolCoinsFromShares"
});
export const getPoolParams = buildQuery<QueryPoolParamsRequest, QueryPoolParamsResponse>({
  encode: QueryPoolParamsRequest.encode,
  decode: QueryPoolParamsResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "PoolParams"
});
export const getTotalPoolLiquidity = buildQuery<QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse>({
  encode: QueryTotalPoolLiquidityRequest.encode,
  decode: QueryTotalPoolLiquidityResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "TotalPoolLiquidity"
});
export const getTotalShares = buildQuery<QueryTotalSharesRequest, QueryTotalSharesResponse>({
  encode: QueryTotalSharesRequest.encode,
  decode: QueryTotalSharesResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "TotalShares"
});
/* SpotPrice defines a gRPC query handler that returns the spot price given
 a base denomination and a quote denomination. */
export const getSpotPrice = buildQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  encode: QuerySpotPriceRequest.encode,
  decode: QuerySpotPriceResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "SpotPrice"
});
/* Estimate the swap. */
export const getEstimateSwapExactAmountIn = buildQuery<QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse>({
  encode: QuerySwapExactAmountInRequest.encode,
  decode: QuerySwapExactAmountInResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "EstimateSwapExactAmountIn"
});
export const getEstimateSwapExactAmountOut = buildQuery<QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse>({
  encode: QuerySwapExactAmountOutRequest.encode,
  decode: QuerySwapExactAmountOutResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "EstimateSwapExactAmountOut"
});