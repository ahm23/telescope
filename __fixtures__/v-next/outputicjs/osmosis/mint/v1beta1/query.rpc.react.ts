import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
import { getOsmosisMintV1beta1Params, getEpochProvisions } from "./query.rpc.func";
/* Params returns the total set of minting parameters. */
export const useGetOsmosisMintV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getOsmosisMintV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/* EpochProvisions returns the current minting epoch provisions value. */
export const useGetEpochProvisions = buildUseQuery<QueryEpochProvisionsRequest, QueryEpochProvisionsResponse>({
  builderQueryFn: getEpochProvisions,
  queryKeyPrefix: "EpochProvisionsQuery"
});