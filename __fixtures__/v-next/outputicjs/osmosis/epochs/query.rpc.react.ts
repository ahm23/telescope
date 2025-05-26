import { buildUseQuery } from "../../react-query";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
import { getEpochInfos, getCurrentEpoch } from "./query.rpc.func";
/* EpochInfos provide running epochInfos */
export const useGetEpochInfos = buildUseQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  builderQueryFn: getEpochInfos,
  queryKeyPrefix: "EpochInfosQuery"
});
/* CurrentEpoch provide current epoch of specified identifier */
export const useGetCurrentEpoch = buildUseQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  builderQueryFn: getCurrentEpoch,
  queryKeyPrefix: "CurrentEpochQuery"
});