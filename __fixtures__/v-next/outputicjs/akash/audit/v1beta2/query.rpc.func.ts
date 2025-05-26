import { buildQuery } from "../../../helper-func-types";
import { QueryAllProvidersAttributesRequest, QueryProvidersResponse, QueryProviderAttributesRequest, QueryProviderAuditorRequest, QueryAuditorAttributesRequest } from "./query";
/* AllProvidersAttributes queries all providers
 buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
export const getAllProvidersAttributes = buildQuery<QueryAllProvidersAttributesRequest, QueryProvidersResponse>({
  encode: QueryAllProvidersAttributesRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.Query",
  method: "AllProvidersAttributes"
});
/* ProviderAttributes queries all provider signed attributes
 buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
export const getProviderAttributes = buildQuery<QueryProviderAttributesRequest, QueryProvidersResponse>({
  encode: QueryProviderAttributesRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.Query",
  method: "ProviderAttributes"
});
/* ProviderAuditorAttributes queries provider signed attributes by specific auditor
 buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
export const getProviderAuditorAttributes = buildQuery<QueryProviderAuditorRequest, QueryProvidersResponse>({
  encode: QueryProviderAuditorRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.Query",
  method: "ProviderAuditorAttributes"
});
/* AuditorAttributes queries all providers signed by this auditor
 buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
export const getAuditorAttributes = buildQuery<QueryAuditorAttributesRequest, QueryProvidersResponse>({
  encode: QueryAuditorAttributesRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.Query",
  method: "AuditorAttributes"
});