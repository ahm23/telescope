import { buildUseQuery } from "../../../react-query";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
import { getProviders, getProvider } from "./query.rpc.func";
/* Providers queries providers */
export const useGetProviders = buildUseQuery<QueryProvidersRequest, QueryProvidersResponse>({
  builderQueryFn: getProviders,
  queryKeyPrefix: "ProvidersQuery"
});
/* Provider queries provider details */
export const useGetProvider = buildUseQuery<QueryProviderRequest, QueryProviderResponse>({
  builderQueryFn: getProvider,
  queryKeyPrefix: "ProviderQuery"
});