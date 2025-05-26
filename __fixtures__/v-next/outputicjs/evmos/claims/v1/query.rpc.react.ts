import { buildUseQuery } from "../../../react-query";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimsRecordsRequest, QueryClaimsRecordsResponse, QueryClaimsRecordRequest, QueryClaimsRecordResponse } from "./query";
import { getTotalUnclaimed, getParams, getClaimsRecords, getClaimsRecord } from "./query.rpc.func";
/* TotalUnclaimed queries the total unclaimed tokens from the airdrop */
export const useGetTotalUnclaimed = buildUseQuery<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse>({
  builderQueryFn: getTotalUnclaimed,
  queryKeyPrefix: "TotalUnclaimedQuery"
});
/* Params returns the claims module parameters */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* ClaimsRecords returns all claims records */
export const useGetClaimsRecords = buildUseQuery<QueryClaimsRecordsRequest, QueryClaimsRecordsResponse>({
  builderQueryFn: getClaimsRecords,
  queryKeyPrefix: "ClaimsRecordsQuery"
});
/* ClaimsRecord returns the claims record for a given address */
export const useGetClaimsRecord = buildUseQuery<QueryClaimsRecordRequest, QueryClaimsRecordResponse>({
  builderQueryFn: getClaimsRecord,
  queryKeyPrefix: "ClaimsRecordQuery"
});