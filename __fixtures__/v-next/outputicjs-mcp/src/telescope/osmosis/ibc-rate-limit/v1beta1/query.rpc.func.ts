import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
/**
 * Params defines a gRPC query method that returns the ibc-rate-limit module's
 * parameters.
 * @name getOsmosisIbcratelimitV1beta1Params
 * @package osmosis.ibcratelimit.v1beta1
 * @see proto service: osmosis.ibcratelimit.v1beta1.Params
 */
export const getOsmosisIbcratelimitV1beta1Params = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.ibcratelimit.v1beta1.Query",
  method: "Params"
});