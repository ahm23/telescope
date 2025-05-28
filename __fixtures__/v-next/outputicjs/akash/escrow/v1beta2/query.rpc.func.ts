import { buildQuery } from "../../../helper-func-types";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
/* buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 Accounts queries all accounts */
export const getAccounts = buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: QueryAccountsResponse.decode,
  service: "akash.escrow.v1beta2.Query",
  method: "Accounts"
});
/* buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 Payments queries all payments */
export const getPayments = buildQuery<QueryPaymentsRequest, QueryPaymentsResponse>({
  encode: QueryPaymentsRequest.encode,
  decode: QueryPaymentsResponse.decode,
  service: "akash.escrow.v1beta2.Query",
  method: "Payments"
});