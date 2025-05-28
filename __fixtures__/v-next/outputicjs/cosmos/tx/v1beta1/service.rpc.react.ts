import { buildUseQuery } from "../../../react-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
import { getSimulate, getGetTx, getBroadcastTx, getGetTxsEvent, getGetBlockWithTxs } from "./service.rpc.func";
/* Simulate simulates executing a transaction for estimating gas usage. */
export const useGetSimulate = buildUseQuery<SimulateRequest, SimulateResponse>({
  builderQueryFn: getSimulate,
  queryKeyPrefix: "SimulateQuery"
});
/* GetTx fetches a tx by hash. */
export const useGetGetTx = buildUseQuery<GetTxRequest, GetTxResponse>({
  builderQueryFn: getGetTx,
  queryKeyPrefix: "GetTxQuery"
});
/* BroadcastTx broadcast transaction. */
export const useGetBroadcastTx = buildUseQuery<BroadcastTxRequest, BroadcastTxResponse>({
  builderQueryFn: getBroadcastTx,
  queryKeyPrefix: "BroadcastTxQuery"
});
/* GetTxsEvent fetches txs by event. */
export const useGetGetTxsEvent = buildUseQuery<GetTxsEventRequest, GetTxsEventResponse>({
  builderQueryFn: getGetTxsEvent,
  queryKeyPrefix: "GetTxsEventQuery"
});
/* GetBlockWithTxs fetches a block with decoded txs.

 Since: cosmos-sdk 0.45.2 */
export const useGetGetBlockWithTxs = buildUseQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  builderQueryFn: getGetBlockWithTxs,
  queryKeyPrefix: "GetBlockWithTxsQuery"
});