import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
/**
 * Params retrieves the total set of recovery parameters.
 * @name getEvmosRecoveryV1Params
 * @package evmos.recovery.v1
 * @see proto service: evmos.recovery.v1.Params
 */
export const getEvmosRecoveryV1Params = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.recovery.v1.Query",
  method: "Params"
});