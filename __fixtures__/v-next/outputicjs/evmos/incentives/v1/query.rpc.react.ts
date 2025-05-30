import { buildUseQuery } from "../../../react-query";
import { QueryIncentivesRequest, QueryIncentivesResponse, QueryIncentiveRequest, QueryIncentiveResponse, QueryGasMetersRequest, QueryGasMetersResponse, QueryGasMeterRequest, QueryGasMeterResponse, QueryAllocationMetersRequest, QueryAllocationMetersResponse, QueryAllocationMeterRequest, QueryAllocationMeterResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getIncentives, getIncentive, getGasMeters, getGasMeter, getAllocationMeters, getAllocationMeter, getEvmosIncentivesV1Params } from "./query.rpc.func";
/* Incentives retrieves registered incentives */
export const useGetIncentives = buildUseQuery<QueryIncentivesRequest, QueryIncentivesResponse>({
  builderQueryFn: getIncentives,
  queryKeyPrefix: "IncentivesQuery"
});
/* Incentive retrieves a registered incentive */
export const useGetIncentive = buildUseQuery<QueryIncentiveRequest, QueryIncentiveResponse>({
  builderQueryFn: getIncentive,
  queryKeyPrefix: "IncentiveQuery"
});
/* GasMeters retrieves active gas meters for a given contract */
export const useGetGasMeters = buildUseQuery<QueryGasMetersRequest, QueryGasMetersResponse>({
  builderQueryFn: getGasMeters,
  queryKeyPrefix: "GasMetersQuery"
});
/* GasMeter Retrieves a active gas meter */
export const useGetGasMeter = buildUseQuery<QueryGasMeterRequest, QueryGasMeterResponse>({
  builderQueryFn: getGasMeter,
  queryKeyPrefix: "GasMeterQuery"
});
/* AllocationMeters retrieves active allocation meters for a given
 denomination */
export const useGetAllocationMeters = buildUseQuery<QueryAllocationMetersRequest, QueryAllocationMetersResponse>({
  builderQueryFn: getAllocationMeters,
  queryKeyPrefix: "AllocationMetersQuery"
});
/* AllocationMeter Retrieves a active gas meter */
export const useGetAllocationMeter = buildUseQuery<QueryAllocationMeterRequest, QueryAllocationMeterResponse>({
  builderQueryFn: getAllocationMeter,
  queryKeyPrefix: "AllocationMeterQuery"
});
/* Params retrieves the incentives module params */
export const useGetEvmosIncentivesV1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getEvmosIncentivesV1Params,
  queryKeyPrefix: "ParamsQuery"
});