import { buildQuery } from "../../../helper-func-types";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimsRecordsRequest, QueryClaimsRecordsResponse, QueryClaimsRecordRequest, QueryClaimsRecordResponse } from "./query";
/**
 * TotalUnclaimed queries the total unclaimed tokens from the airdrop
 * @name getTotalUnclaimed
 * @package evmos.claims.v1
 * @see proto service: evmos.claims.v1.TotalUnclaimed
 */
export const getTotalUnclaimed = buildQuery<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse>({
  encode: QueryTotalUnclaimedRequest.encode,
  decode: QueryTotalUnclaimedResponse.decode,
  service: "evmos.claims.v1.Query",
  method: "TotalUnclaimed"
});
/**
 * Params returns the claims module parameters
 * @name getEvmosClaimsV1Params
 * @package evmos.claims.v1
 * @see proto service: evmos.claims.v1.Params
 */
export const getEvmosClaimsV1Params = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.claims.v1.Query",
  method: "Params"
});
/**
 * ClaimsRecords returns all claims records
 * @name getClaimsRecords
 * @package evmos.claims.v1
 * @see proto service: evmos.claims.v1.ClaimsRecords
 */
export const getClaimsRecords = buildQuery<QueryClaimsRecordsRequest, QueryClaimsRecordsResponse>({
  encode: QueryClaimsRecordsRequest.encode,
  decode: QueryClaimsRecordsResponse.decode,
  service: "evmos.claims.v1.Query",
  method: "ClaimsRecords"
});
/**
 * ClaimsRecord returns the claims record for a given address
 * @name getClaimsRecord
 * @package evmos.claims.v1
 * @see proto service: evmos.claims.v1.ClaimsRecord
 */
export const getClaimsRecord = buildQuery<QueryClaimsRecordRequest, QueryClaimsRecordResponse>({
  encode: QueryClaimsRecordRequest.encode,
  decode: QueryClaimsRecordResponse.decode,
  service: "evmos.claims.v1.Query",
  method: "ClaimsRecord"
});