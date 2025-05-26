import { buildUseQuery } from "../../../react-query";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";
import { getBalances } from "./query.rpc.func";
/* Retrieves the unvested, vested and locked tokens for a vesting account */
export const useGetBalances = buildUseQuery<QueryBalancesRequest, QueryBalancesResponse>({
  builderQueryFn: getBalances,
  queryKeyPrefix: "BalancesQuery"
});