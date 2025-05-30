import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
import { getOsmosisTokenfactoryV1beta1Params, getDenomAuthorityMetadata, getDenomsFromCreator } from "./query.rpc.func";
/* Params defines a gRPC query method that returns the tokenfactory module's
 parameters. */
export const useGetOsmosisTokenfactoryV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getOsmosisTokenfactoryV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/* DenomAuthorityMetadata defines a gRPC query method for fetching
 DenomAuthorityMetadata for a particular denom. */
export const useGetDenomAuthorityMetadata = buildUseQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  builderQueryFn: getDenomAuthorityMetadata,
  queryKeyPrefix: "DenomAuthorityMetadataQuery"
});
/* DenomsFromCreator defines a gRPC query method for fetching all
 denominations created by a specific admin/creator. */
export const useGetDenomsFromCreator = buildUseQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  builderQueryFn: getDenomsFromCreator,
  queryKeyPrefix: "DenomsFromCreatorQuery"
});