import { buildUseQuery } from "../../../react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
import { getAccounts, getAccount, getCosmosAuthV1beta1Params, getModuleAccounts, getBech32Prefix, getAddressBytesToString, getAddressStringToBytes } from "./query.rpc.func";
/* Accounts returns all the existing accounts

 Since: cosmos-sdk 0.43 */
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: getAccounts,
  queryKeyPrefix: "AccountsQuery"
});
/* Account returns account details based on address. */
export const useGetAccount = buildUseQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: getAccount,
  queryKeyPrefix: "AccountQuery"
});
/* Params queries all parameters. */
export const useGetCosmosAuthV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getCosmosAuthV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
/* ModuleAccounts returns all the existing module accounts. */
export const useGetModuleAccounts = buildUseQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  builderQueryFn: getModuleAccounts,
  queryKeyPrefix: "ModuleAccountsQuery"
});
/* Bech32 queries bech32Prefix */
export const useGetBech32Prefix = buildUseQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  builderQueryFn: getBech32Prefix,
  queryKeyPrefix: "Bech32PrefixQuery"
});
/* AddressBytesToString converts Account Address bytes to string */
export const useGetAddressBytesToString = buildUseQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  builderQueryFn: getAddressBytesToString,
  queryKeyPrefix: "AddressBytesToStringQuery"
});
/* AddressStringToBytes converts Address string to bytes */
export const useGetAddressStringToBytes = buildUseQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  builderQueryFn: getAddressStringToBytes,
  queryKeyPrefix: "AddressStringToBytesQuery"
});