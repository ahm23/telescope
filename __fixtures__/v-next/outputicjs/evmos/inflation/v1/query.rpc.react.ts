import { buildUseQuery } from "../../../react-query";
import { QueryPeriodRequest, QueryPeriodResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getPeriod, getEpochMintProvision, getSkippedEpochs, getCirculatingSupply, getInflationRate, getParams } from "./query.rpc.func";
/* Period retrieves current period. */
export const useGetPeriod = buildUseQuery<QueryPeriodRequest, QueryPeriodResponse>({
  builderQueryFn: getPeriod,
  queryKeyPrefix: "PeriodQuery"
});
/* EpochMintProvision retrieves current minting epoch provision value. */
export const useGetEpochMintProvision = buildUseQuery<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>({
  builderQueryFn: getEpochMintProvision,
  queryKeyPrefix: "EpochMintProvisionQuery"
});
/* SkippedEpochs retrieves the total number of skipped epochs. */
export const useGetSkippedEpochs = buildUseQuery<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>({
  builderQueryFn: getSkippedEpochs,
  queryKeyPrefix: "SkippedEpochsQuery"
});
/* CirculatingSupply retrieves the total number of tokens that are in
 circulation (i.e. excluding unvested tokens). */
export const useGetCirculatingSupply = buildUseQuery<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>({
  builderQueryFn: getCirculatingSupply,
  queryKeyPrefix: "CirculatingSupplyQuery"
});
/* InflationRate retrieves the inflation rate of the current period. */
export const useGetInflationRate = buildUseQuery<QueryInflationRateRequest, QueryInflationRateResponse>({
  builderQueryFn: getInflationRate,
  queryKeyPrefix: "InflationRateQuery"
});
/* Params retrieves the total set of minting parameters. */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});