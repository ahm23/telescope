import { buildUseQuery } from "../../../react-query";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
import { getConfig } from "./query.rpc.func";
/**
 * Config returns the current app config.
 * @name useGetConfig
 * @package cosmos.app.v1alpha1
 * @see protoservice: cosmos.app.v1alpha1.Config
 */
export const useGetConfig = buildUseQuery<QueryConfigRequest, QueryConfigResponse>({
  builderQueryFn: getConfig,
  queryKeyPrefix: "ConfigQuery"
});