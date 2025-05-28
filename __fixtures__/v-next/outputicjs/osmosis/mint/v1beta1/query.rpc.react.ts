import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
import { getParams, getEpochProvisions } from "./query.rpc.func";
/* Params returns the total set of minting parameters. */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* EpochProvisions returns the current minting epoch provisions value. */
export const useGetEpochProvisions = buildUseQuery<QueryEpochProvisionsRequest, QueryEpochProvisionsResponse>({
  builderQueryFn: getEpochProvisions,
  queryKeyPrefix: "EpochProvisionsQuery"
});