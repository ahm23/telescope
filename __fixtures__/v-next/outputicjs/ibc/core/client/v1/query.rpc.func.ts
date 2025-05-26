import { buildQuery } from "../../../../helper-func-types";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
/* ClientState queries an IBC light client. */
export const getClientState = buildQuery<QueryClientStateRequest, QueryClientStateResponse>({
  encode: QueryClientStateRequest.encode,
  decode: QueryClientStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientState"
});
/* ClientStates queries all the IBC light clients of a chain. */
export const getClientStates = buildQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  encode: QueryClientStatesRequest.encode,
  decode: QueryClientStatesResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientStates"
});
/* ConsensusState queries a consensus state associated with a client state at
 a given height. */
export const getConsensusState = buildQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  encode: QueryConsensusStateRequest.encode,
  decode: QueryConsensusStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ConsensusState"
});
/* ConsensusStates queries all the consensus state associated with a given
 client. */
export const getConsensusStates = buildQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  encode: QueryConsensusStatesRequest.encode,
  decode: QueryConsensusStatesResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ConsensusStates"
});
/* Status queries the status of an IBC client. */
export const getClientStatus = buildQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  encode: QueryClientStatusRequest.encode,
  decode: QueryClientStatusResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientStatus"
});
/* ClientParams queries all parameters of the ibc client. */
export const getClientParams = buildQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  encode: QueryClientParamsRequest.encode,
  decode: QueryClientParamsResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientParams"
});
/* UpgradedClientState queries an Upgraded IBC light client. */
export const getUpgradedClientState = buildQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  encode: QueryUpgradedClientStateRequest.encode,
  decode: QueryUpgradedClientStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "UpgradedClientState"
});
/* UpgradedConsensusState queries an Upgraded IBC consensus state. */
export const getUpgradedConsensusState = buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encode: QueryUpgradedConsensusStateRequest.encode,
  decode: QueryUpgradedConsensusStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "UpgradedConsensusState"
});