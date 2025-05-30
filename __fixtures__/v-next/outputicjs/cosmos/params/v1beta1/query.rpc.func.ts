import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
/* Params queries a specific parameter of a module, given its subspace and
 key. */
export const getCosmosParamsV1beta1Params = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.params.v1beta1.Query",
  method: "Params"
});
/* Subspaces queries for all registered subspaces and all keys for a subspace. */
export const getSubspaces = buildQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  encode: QuerySubspacesRequest.encode,
  decode: QuerySubspacesResponse.decode,
  service: "cosmos.params.v1beta1.Query",
  method: "Subspaces"
});