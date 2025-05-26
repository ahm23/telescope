import { buildUseQuery } from "../../../react-query";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
import { getFeeTokens, getDenomSpotPrice, getDenomPoolId, getBaseDenom } from "./query.rpc.func";
/* FeeTokens returns a list of all the whitelisted fee tokens and their
 corresponding pools. It does not include the BaseDenom, which has its own
 query endpoint */
export const useGetFeeTokens = buildUseQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
  builderQueryFn: getFeeTokens,
  queryKeyPrefix: "FeeTokensQuery"
});
/* DenomSpotPrice returns all spot prices by each registered token denom. */
export const useGetDenomSpotPrice = buildUseQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
  builderQueryFn: getDenomSpotPrice,
  queryKeyPrefix: "DenomSpotPriceQuery"
});
/* Returns the poolID for a specified denom input. */
export const useGetDenomPoolId = buildUseQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
  builderQueryFn: getDenomPoolId,
  queryKeyPrefix: "DenomPoolIdQuery"
});
/* Returns a list of all base denom tokens and their corresponding pools. */
export const useGetBaseDenom = buildUseQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
  builderQueryFn: getBaseDenom,
  queryKeyPrefix: "BaseDenomQuery"
});