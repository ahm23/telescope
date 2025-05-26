import { buildUseQuery } from "../../../react-query";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse } from "./query";
import { getContractInfo, getContractHistory, getContractsByCode, getAllContractState, getRawContractState, getSmartContractState, getCode, getCodes, getPinnedCodes } from "./query.rpc.func";
/* ContractInfo gets the contract meta data */
export const useGetContractInfo = buildUseQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  builderQueryFn: getContractInfo,
  queryKeyPrefix: "ContractInfoQuery"
});
/* ContractHistory gets the contract code history */
export const useGetContractHistory = buildUseQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  builderQueryFn: getContractHistory,
  queryKeyPrefix: "ContractHistoryQuery"
});
/* ContractsByCode lists all smart contracts for a code id */
export const useGetContractsByCode = buildUseQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  builderQueryFn: getContractsByCode,
  queryKeyPrefix: "ContractsByCodeQuery"
});
/* AllContractState gets all raw store data for a single contract */
export const useGetAllContractState = buildUseQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  builderQueryFn: getAllContractState,
  queryKeyPrefix: "AllContractStateQuery"
});
/* RawContractState gets single key from the raw store data of a contract */
export const useGetRawContractState = buildUseQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  builderQueryFn: getRawContractState,
  queryKeyPrefix: "RawContractStateQuery"
});
/* SmartContractState get smart query result from the contract */
export const useGetSmartContractState = buildUseQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  builderQueryFn: getSmartContractState,
  queryKeyPrefix: "SmartContractStateQuery"
});
/* Code gets the binary code and metadata for a singe wasm code */
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: getCode,
  queryKeyPrefix: "CodeQuery"
});
/* Codes gets the metadata for all stored wasm codes */
export const useGetCodes = buildUseQuery<QueryCodesRequest, QueryCodesResponse>({
  builderQueryFn: getCodes,
  queryKeyPrefix: "CodesQuery"
});
/* PinnedCodes gets the pinned code ids */
export const useGetPinnedCodes = buildUseQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  builderQueryFn: getPinnedCodes,
  queryKeyPrefix: "PinnedCodesQuery"
});