import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { buildUseVueQuery } from "../../../vue-query";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";
import { getBalance, getAllBalances, getSpendableBalances, getTotalSupply, getSupplyOf, getParams, getDenomMetadata, getDenomsMetadata, getDenomOwners } from "./query.rpc.func";
/* Balance queries the balance of a single coin for a single account. */
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: getBalance,
  queryKeyPrefix: "BalanceQuery"
});
/* AllBalances queries the balance of all coins for a single account. */
export const useGetAllBalances = buildUseQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  builderQueryFn: getAllBalances,
  queryKeyPrefix: "AllBalancesQuery"
});
/* SpendableBalances queries the spenable balance of all coins for a single
 account. */
export const useGetSpendableBalances = buildUseQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  builderQueryFn: getSpendableBalances,
  queryKeyPrefix: "SpendableBalancesQuery"
});
/* TotalSupply queries the total supply of all coins. */
export const useGetTotalSupply = buildUseQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  builderQueryFn: getTotalSupply,
  queryKeyPrefix: "TotalSupplyQuery"
});
/* SupplyOf queries the supply of a single coin. */
export const useGetSupplyOf = buildUseQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  builderQueryFn: getSupplyOf,
  queryKeyPrefix: "SupplyOfQuery"
});
/* Params queries the parameters of x/bank module. */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* DenomsMetadata queries the client metadata of a given coin denomination. */
export const useGetDenomMetadata = buildUseQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  builderQueryFn: getDenomMetadata,
  queryKeyPrefix: "DenomMetadataQuery"
});
/* DenomsMetadata queries the client metadata for all registered coin
 denominations. */
export const useGetDenomsMetadata = buildUseQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  builderQueryFn: getDenomsMetadata,
  queryKeyPrefix: "DenomsMetadataQuery"
});
/* DenomOwners queries for all account addresses that own a particular token
 denomination. */
export const useGetDenomOwners = buildUseQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  builderQueryFn: getDenomOwners,
  queryKeyPrefix: "DenomOwnersQuery"
});