import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
/* Params returns the total set of minting parameters. */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.mint.v1beta1.Query",
  method: "Params"
});
/* EpochProvisions returns the current minting epoch provisions value. */
export const getEpochProvisions = buildQuery<QueryEpochProvisionsRequest, QueryEpochProvisionsResponse>({
  encode: QueryEpochProvisionsRequest.encode,
  decode: QueryEpochProvisionsResponse.decode,
  service: "osmosis.mint.v1beta1.Query",
  method: "EpochProvisions"
});