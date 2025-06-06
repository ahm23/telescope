import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
/**
 * Params defines a gRPC query method that returns the tokenfactory module's
 * parameters.
 * @name getOsmosisTokenfactoryV1beta1Params
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.Params
 */
export const getOsmosisTokenfactoryV1beta1Params = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.tokenfactory.v1beta1.Query",
  method: "Params"
});
/**
 * DenomAuthorityMetadata defines a gRPC query method for fetching
 * DenomAuthorityMetadata for a particular denom.
 * @name getDenomAuthorityMetadata
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata
 */
export const getDenomAuthorityMetadata = buildQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  encode: QueryDenomAuthorityMetadataRequest.encode,
  decode: QueryDenomAuthorityMetadataResponse.decode,
  service: "osmosis.tokenfactory.v1beta1.Query",
  method: "DenomAuthorityMetadata"
});
/**
 * DenomsFromCreator defines a gRPC query method for fetching all
 * denominations created by a specific admin/creator.
 * @name getDenomsFromCreator
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.DenomsFromCreator
 */
export const getDenomsFromCreator = buildQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  encode: QueryDenomsFromCreatorRequest.encode,
  decode: QueryDenomsFromCreatorResponse.decode,
  service: "osmosis.tokenfactory.v1beta1.Query",
  method: "DenomsFromCreator"
});