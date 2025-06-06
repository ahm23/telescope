import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
/**
 * Params returns the total set of minting parameters.
 * @name getCosmosMintV1beta1Params
 * @package cosmos.mint.v1beta1
 * @see protoservice: cosmos.mint.v1beta1.Params
 */
export const getCosmosMintV1beta1Params = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.mint.v1beta1.Query",
  method: "Params"
});
/**
 * Inflation returns the current minting inflation value.
 * @name getInflation
 * @package cosmos.mint.v1beta1
 * @see protoservice: cosmos.mint.v1beta1.Inflation
 */
export const getInflation = buildQuery<QueryInflationRequest, QueryInflationResponse>({
  encode: QueryInflationRequest.encode,
  decode: QueryInflationResponse.decode,
  service: "cosmos.mint.v1beta1.Query",
  method: "Inflation"
});
/**
 * AnnualProvisions current minting annual provisions value.
 * @name getAnnualProvisions
 * @package cosmos.mint.v1beta1
 * @see protoservice: cosmos.mint.v1beta1.AnnualProvisions
 */
export const getAnnualProvisions = buildQuery<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>({
  encode: QueryAnnualProvisionsRequest.encode,
  decode: QueryAnnualProvisionsResponse.decode,
  service: "cosmos.mint.v1beta1.Query",
  method: "AnnualProvisions"
});