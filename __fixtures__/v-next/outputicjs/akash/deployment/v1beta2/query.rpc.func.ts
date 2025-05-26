import { buildQuery } from "../../../helper-func-types";
import { QueryDeploymentsRequest, QueryDeploymentsResponse, QueryDeploymentRequest, QueryDeploymentResponse, QueryGroupRequest, QueryGroupResponse } from "./query";
/* Deployments queries deployments */
export const getDeployments = buildQuery<QueryDeploymentsRequest, QueryDeploymentsResponse>({
  encode: QueryDeploymentsRequest.encode,
  decode: QueryDeploymentsResponse.decode,
  service: "akash.deployment.v1beta2.Query",
  method: "Deployments"
});
/* Deployment queries deployment details */
export const getDeployment = buildQuery<QueryDeploymentRequest, QueryDeploymentResponse>({
  encode: QueryDeploymentRequest.encode,
  decode: QueryDeploymentResponse.decode,
  service: "akash.deployment.v1beta2.Query",
  method: "Deployment"
});
/* Group queries group details */
export const getGroup = buildQuery<QueryGroupRequest, QueryGroupResponse>({
  encode: QueryGroupRequest.encode,
  decode: QueryGroupResponse.decode,
  service: "akash.deployment.v1beta2.Query",
  method: "Group"
});