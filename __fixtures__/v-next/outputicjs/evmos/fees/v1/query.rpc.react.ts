import { buildUseQuery } from "../../../react-query";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosResponse, QueryDevFeeInfoRequest, QueryDevFeeInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse } from "./query";
import { getDevFeeInfos, getDevFeeInfo, getEvmosFeesV1Params, getDevFeeInfosPerDeployer } from "./query.rpc.func";
/* DevFeeInfos retrieves all registered contracts for fee distribution */
export const useGetDevFeeInfos = buildUseQuery<QueryDevFeeInfosRequest, QueryDevFeeInfosResponse>({
  builderQueryFn: getDevFeeInfos,
  queryKeyPrefix: "DevFeeInfosQuery"
});
/* DevFeeInfo retrieves a registered contract for fee distribution */
export const useGetDevFeeInfo = buildUseQuery<QueryDevFeeInfoRequest, QueryDevFeeInfoResponse>({
  builderQueryFn: getDevFeeInfo,
  queryKeyPrefix: "DevFeeInfoQuery"
});
/* Params retrieves the fees module params */
export const useGetEvmosFeesV1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getEvmosFeesV1Params,
  queryKeyPrefix: "ParamsQuery"
});
/* DevFeeInfosPerDeployer retrieves all contracts that a deployer has
 registered for fee distribution */
export const useGetDevFeeInfosPerDeployer = buildUseQuery<QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse>({
  builderQueryFn: getDevFeeInfosPerDeployer,
  queryKeyPrefix: "DevFeeInfosPerDeployerQuery"
});