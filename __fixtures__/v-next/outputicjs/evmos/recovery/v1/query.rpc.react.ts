import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
import { getEvmosRecoveryV1Params } from "./query.rpc.func";
/* Params retrieves the total set of recovery parameters. */
export const useGetEvmosRecoveryV1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getEvmosRecoveryV1Params,
  queryKeyPrefix: "ParamsQuery"
});