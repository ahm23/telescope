import { buildUseQuery } from "../../../react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
import { getAccounts, getPayments } from "./query.rpc.func";
/* buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 Accounts queries all accounts */
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: getAccounts,
  queryKeyPrefix: "AccountsQuery"
});
/* buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 Payments queries all payments */
export const useGetPayments = buildUseQuery<QueryPaymentsRequest, QueryPaymentsResponse>({
  builderQueryFn: getPayments,
  queryKeyPrefix: "PaymentsQuery"
});