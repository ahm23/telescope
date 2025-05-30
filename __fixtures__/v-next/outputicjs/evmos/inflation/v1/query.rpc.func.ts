import { buildQuery } from "../../../helper-func-types";
import { QueryPeriodRequest, QueryPeriodResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/* Period retrieves current period. */
export const getPeriod = buildQuery<QueryPeriodRequest, QueryPeriodResponse>({
  encode: QueryPeriodRequest.encode,
  decode: QueryPeriodResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "Period"
});
/* EpochMintProvision retrieves current minting epoch provision value. */
export const getEpochMintProvision = buildQuery<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>({
  encode: QueryEpochMintProvisionRequest.encode,
  decode: QueryEpochMintProvisionResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "EpochMintProvision"
});
/* SkippedEpochs retrieves the total number of skipped epochs. */
export const getSkippedEpochs = buildQuery<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>({
  encode: QuerySkippedEpochsRequest.encode,
  decode: QuerySkippedEpochsResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "SkippedEpochs"
});
/* CirculatingSupply retrieves the total number of tokens that are in
 circulation (i.e. excluding unvested tokens). */
export const getCirculatingSupply = buildQuery<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>({
  encode: QueryCirculatingSupplyRequest.encode,
  decode: QueryCirculatingSupplyResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "CirculatingSupply"
});
/* InflationRate retrieves the inflation rate of the current period. */
export const getInflationRate = buildQuery<QueryInflationRateRequest, QueryInflationRateResponse>({
  encode: QueryInflationRateRequest.encode,
  decode: QueryInflationRateResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "InflationRate"
});
/* Params retrieves the total set of minting parameters. */
export const getEvmosInflationV1Params = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "Params"
});