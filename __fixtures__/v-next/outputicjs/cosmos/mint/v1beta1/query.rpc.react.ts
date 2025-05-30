import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
import { getCosmosMintV1beta1Params, getInflation, getAnnualProvisions } from "./query.rpc.func";
/* Params returns the total set of minting parameters. */
export const useGetCosmosMintV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getCosmosMintV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/* Inflation returns the current minting inflation value. */
export const useGetInflation = buildUseQuery<QueryInflationRequest, QueryInflationResponse>({
  builderQueryFn: getInflation,
  queryKeyPrefix: "InflationQuery"
});
/* AnnualProvisions current minting annual provisions value. */
export const useGetAnnualProvisions = buildUseQuery<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>({
  builderQueryFn: getAnnualProvisions,
  queryKeyPrefix: "AnnualProvisionsQuery"
});