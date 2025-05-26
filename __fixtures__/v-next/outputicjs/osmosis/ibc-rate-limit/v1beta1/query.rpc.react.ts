import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
import { getParams } from "./query.rpc.func";
/* Params defines a gRPC query method that returns the ibc-rate-limit module's
 parameters. */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});