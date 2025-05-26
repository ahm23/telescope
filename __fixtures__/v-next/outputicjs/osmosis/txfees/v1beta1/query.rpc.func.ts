import { buildQuery } from "../../../helper-func-types";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
/* FeeTokens returns a list of all the whitelisted fee tokens and their
 corresponding pools. It does not include the BaseDenom, which has its own
 query endpoint */
export const getFeeTokens = buildQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
  encode: QueryFeeTokensRequest.encode,
  decode: QueryFeeTokensResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "FeeTokens"
});
/* DenomSpotPrice returns all spot prices by each registered token denom. */
export const getDenomSpotPrice = buildQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
  encode: QueryDenomSpotPriceRequest.encode,
  decode: QueryDenomSpotPriceResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "DenomSpotPrice"
});
/* Returns the poolID for a specified denom input. */
export const getDenomPoolId = buildQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
  encode: QueryDenomPoolIdRequest.encode,
  decode: QueryDenomPoolIdResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "DenomPoolId"
});
/* Returns a list of all base denom tokens and their corresponding pools. */
export const getBaseDenom = buildQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
  encode: QueryBaseDenomRequest.encode,
  decode: QueryBaseDenomResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "BaseDenom"
});