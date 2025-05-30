import { buildUseQuery } from "../../../react-query";
import { QueryTokenPairsRequest, QueryTokenPairsResponse, QueryTokenPairRequest, QueryTokenPairResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getTokenPairs, getTokenPair, getEvmosErc20V1Params } from "./query.rpc.func";
/* TokenPairs retrieves registered token pairs */
export const useGetTokenPairs = buildUseQuery<QueryTokenPairsRequest, QueryTokenPairsResponse>({
  builderQueryFn: getTokenPairs,
  queryKeyPrefix: "TokenPairsQuery"
});
/* TokenPair retrieves a registered token pair */
export const useGetTokenPair = buildUseQuery<QueryTokenPairRequest, QueryTokenPairResponse>({
  builderQueryFn: getTokenPair,
  queryKeyPrefix: "TokenPairQuery"
});
/* Params retrieves the erc20 module params */
export const useGetEvmosErc20V1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getEvmosErc20V1Params,
  queryKeyPrefix: "ParamsQuery"
});