import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
/**
 * Params returns the total set of minting parameters.
 * @name getOsmosisMintV1beta1Params
 * @package osmosis.mint.v1beta1
 * @see protoservice: osmosis.mint.v1beta1.Params
 */
export const getOsmosisMintV1beta1Params = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.mint.v1beta1.Query",
  method: "Params"
});
/**
 * EpochProvisions returns the current minting epoch provisions value.
 * @name getEpochProvisions
 * @package osmosis.mint.v1beta1
 * @see protoservice: osmosis.mint.v1beta1.EpochProvisions
 */
export const getEpochProvisions = buildQuery<QueryEpochProvisionsRequest, QueryEpochProvisionsResponse>({
  encode: QueryEpochProvisionsRequest.encode,
  decode: QueryEpochProvisionsResponse.decode,
  service: "osmosis.mint.v1beta1.Query",
  method: "EpochProvisions"
});