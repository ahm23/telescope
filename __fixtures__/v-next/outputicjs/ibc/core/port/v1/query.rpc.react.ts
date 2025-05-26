import { buildUseQuery } from "../../../../react-query";
import { QueryAppVersionRequest, QueryAppVersionResponse } from "./query";
import { getAppVersion } from "./query.rpc.func";
/* AppVersion queries an IBC Port and determines the appropriate application version to be used */
export const useGetAppVersion = buildUseQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  builderQueryFn: getAppVersion,
  queryKeyPrefix: "AppVersionQuery"
});