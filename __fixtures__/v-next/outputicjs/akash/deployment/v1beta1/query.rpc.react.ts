import { buildUseQuery } from "../../../react-query";
import { QueryDeploymentsRequest, QueryDeploymentsResponse, QueryDeploymentRequest, QueryDeploymentResponse, QueryGroupRequest, QueryGroupResponse } from "./query";
import { getDeployments, getDeployment, getGroup } from "./query.rpc.func";
/* Deployments queries deployments */
export const useGetDeployments = buildUseQuery<QueryDeploymentsRequest, QueryDeploymentsResponse>({
  builderQueryFn: getDeployments,
  queryKeyPrefix: "DeploymentsQuery"
});
/* Deployment queries deployment details */
export const useGetDeployment = buildUseQuery<QueryDeploymentRequest, QueryDeploymentResponse>({
  builderQueryFn: getDeployment,
  queryKeyPrefix: "DeploymentQuery"
});
/* Group queries group details */
export const useGetGroup = buildUseQuery<QueryGroupRequest, QueryGroupResponse>({
  builderQueryFn: getGroup,
  queryKeyPrefix: "GroupQuery"
});