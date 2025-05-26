import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
import { getParams, getDenomAuthorityMetadata, getDenomsFromCreator } from "./query.rpc.func";
/* Params defines a gRPC query method that returns the tokenfactory module's
 parameters. */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
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