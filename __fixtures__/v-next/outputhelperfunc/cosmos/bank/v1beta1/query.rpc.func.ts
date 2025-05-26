import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { buildUseVueQuery } from "../../../vue-query";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";
/* Balance queries the balance of a single coin for a single account. */
export const getBalance = buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Balance",
  deps: [QueryBalanceRequest, QueryBalanceResponse]
});
/* AllBalances queries the balance of all coins for a single account. */
export const getAllBalances = buildQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  encode: QueryAllBalancesRequest.encode,
  decode: QueryAllBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllBalances",
  deps: [QueryAllBalancesRequest, QueryAllBalancesResponse]
});
/* SpendableBalances queries the spenable balance of all coins for a single
 account. */
export const getSpendableBalances = buildQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  encode: QuerySpendableBalancesRequest.encode,
  decode: QuerySpendableBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SpendableBalances",
  deps: [QuerySpendableBalancesRequest, QuerySpendableBalancesResponse]
});
/* TotalSupply queries the total supply of all coins. */
export const getTotalSupply = buildQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  encode: QueryTotalSupplyRequest.encode,
  decode: QueryTotalSupplyResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalSupply",
  deps: [QueryTotalSupplyRequest, QueryTotalSupplyResponse]
});
/* SupplyOf queries the supply of a single coin. */
export const getSupplyOf = buildQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  encode: QuerySupplyOfRequest.encode,
  decode: QuerySupplyOfResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SupplyOf",
  deps: [QuerySupplyOfRequest, QuerySupplyOfResponse]
});
/* Params queries the parameters of x/bank module. */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/* DenomsMetadata queries the client metadata of a given coin denomination. */
export const getDenomMetadata = buildQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  encode: QueryDenomMetadataRequest.encode,
  decode: QueryDenomMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomMetadata",
  deps: [QueryDenomMetadataRequest, QueryDenomMetadataResponse]
});
/* DenomsMetadata queries the client metadata for all registered coin
 denominations. */
export const getDenomsMetadata = buildQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  encode: QueryDenomsMetadataRequest.encode,
  decode: QueryDenomsMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomsMetadata",
  deps: [QueryDenomsMetadataRequest, QueryDenomsMetadataResponse]
});
/* DenomOwners queries for all account addresses that own a particular token
 denomination. */
export const getDenomOwners = buildQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  encode: QueryDenomOwnersRequest.encode,
  decode: QueryDenomOwnersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomOwners",
  deps: [QueryDenomOwnersRequest, QueryDenomOwnersResponse]
});