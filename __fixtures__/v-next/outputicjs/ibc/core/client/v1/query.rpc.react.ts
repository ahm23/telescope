import { buildUseQuery } from "../../../../react-query";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
import { getClientState, getClientStates, getConsensusState, getConsensusStates, getClientStatus, getClientParams, getUpgradedClientState, getUpgradedConsensusState } from "./query.rpc.func";
/* ClientState queries an IBC light client. */
export const useGetClientState = buildUseQuery<QueryClientStateRequest, QueryClientStateResponse>({
  builderQueryFn: getClientState,
  queryKeyPrefix: "ClientStateQuery"
});
/* ClientStates queries all the IBC light clients of a chain. */
export const useGetClientStates = buildUseQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  builderQueryFn: getClientStates,
  queryKeyPrefix: "ClientStatesQuery"
});
/* ConsensusState queries a consensus state associated with a client state at
 a given height. */
export const useGetConsensusState = buildUseQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  builderQueryFn: getConsensusState,
  queryKeyPrefix: "ConsensusStateQuery"
});
/* ConsensusStates queries all the consensus state associated with a given
 client. */
export const useGetConsensusStates = buildUseQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  builderQueryFn: getConsensusStates,
  queryKeyPrefix: "ConsensusStatesQuery"
});
/* Status queries the status of an IBC client. */
export const useGetClientStatus = buildUseQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  builderQueryFn: getClientStatus,
  queryKeyPrefix: "ClientStatusQuery"
});
/* ClientParams queries all parameters of the ibc client. */
export const useGetClientParams = buildUseQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  builderQueryFn: getClientParams,
  queryKeyPrefix: "ClientParamsQuery"
});
/* UpgradedClientState queries an Upgraded IBC light client. */
export const useGetUpgradedClientState = buildUseQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  builderQueryFn: getUpgradedClientState,
  queryKeyPrefix: "UpgradedClientStateQuery"
});
/* UpgradedConsensusState queries an Upgraded IBC consensus state. */
export const useGetUpgradedConsensusState = buildUseQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: getUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});