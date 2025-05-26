import { buildQuery } from "../../../helper-func-types";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
/* EpochInfos provide running epochInfos */
export const getEpochInfos = buildQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  encode: QueryEpochsInfoRequest.encode,
  decode: QueryEpochsInfoResponse.decode,
  service: "evmos.epochs.v1.Query",
  method: "EpochInfos"
});
/* CurrentEpoch provide current epoch of specified identifier */
export const getCurrentEpoch = buildQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  encode: QueryCurrentEpochRequest.encode,
  decode: QueryCurrentEpochResponse.decode,
  service: "evmos.epochs.v1.Query",
  method: "CurrentEpoch"
});