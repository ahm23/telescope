import { buildQuery } from "../../../helper-func-types";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosResponse, QueryDevFeeInfoRequest, QueryDevFeeInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse } from "./query";
/* DevFeeInfos retrieves all registered contracts for fee distribution */
export const getDevFeeInfos = buildQuery<QueryDevFeeInfosRequest, QueryDevFeeInfosResponse>({
  encode: QueryDevFeeInfosRequest.encode,
  decode: QueryDevFeeInfosResponse.decode,
  service: "evmos.fees.v1.Query",
  method: "DevFeeInfos"
});
/* DevFeeInfo retrieves a registered contract for fee distribution */
export const getDevFeeInfo = buildQuery<QueryDevFeeInfoRequest, QueryDevFeeInfoResponse>({
  encode: QueryDevFeeInfoRequest.encode,
  decode: QueryDevFeeInfoResponse.decode,
  service: "evmos.fees.v1.Query",
  method: "DevFeeInfo"
});
/* Params retrieves the fees module params */
export const getEvmosFeesV1Params = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.fees.v1.Query",
  method: "Params"
});
/* DevFeeInfosPerDeployer retrieves all contracts that a deployer has
 registered for fee distribution */
export const getDevFeeInfosPerDeployer = buildQuery<QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse>({
  encode: QueryDevFeeInfosPerDeployerRequest.encode,
  decode: QueryDevFeeInfosPerDeployerResponse.decode,
  service: "evmos.fees.v1.Query",
  method: "DevFeeInfosPerDeployer"
});