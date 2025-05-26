import { buildQuery } from "../../helper-func-types";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
/* ModuleToDistributeCoins returns coins that are going to be distributed */
export const getModuleToDistributeCoins = buildQuery<ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse>({
  encode: ModuleToDistributeCoinsRequest.encode,
  decode: ModuleToDistributeCoinsResponse.decode,
  service: "osmosis.incentives.Query",
  method: "ModuleToDistributeCoins"
});
/* GaugeByID returns gauges by their respective ID */
export const getGaugeByID = buildQuery<GaugeByIDRequest, GaugeByIDResponse>({
  encode: GaugeByIDRequest.encode,
  decode: GaugeByIDResponse.decode,
  service: "osmosis.incentives.Query",
  method: "GaugeByID"
});
/* Gauges returns both upcoming and active gauges */
export const getGauges = buildQuery<GaugesRequest, GaugesResponse>({
  encode: GaugesRequest.encode,
  decode: GaugesResponse.decode,
  service: "osmosis.incentives.Query",
  method: "Gauges"
});
/* ActiveGauges returns active gauges */
export const getActiveGauges = buildQuery<ActiveGaugesRequest, ActiveGaugesResponse>({
  encode: ActiveGaugesRequest.encode,
  decode: ActiveGaugesResponse.decode,
  service: "osmosis.incentives.Query",
  method: "ActiveGauges"
});
/* ActiveGaugesPerDenom returns active gauges by denom */
export const getActiveGaugesPerDenom = buildQuery<ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse>({
  encode: ActiveGaugesPerDenomRequest.encode,
  decode: ActiveGaugesPerDenomResponse.decode,
  service: "osmosis.incentives.Query",
  method: "ActiveGaugesPerDenom"
});
/* Returns scheduled gauges that have not yet occured */
export const getUpcomingGauges = buildQuery<UpcomingGaugesRequest, UpcomingGaugesResponse>({
  encode: UpcomingGaugesRequest.encode,
  decode: UpcomingGaugesResponse.decode,
  service: "osmosis.incentives.Query",
  method: "UpcomingGauges"
});
/* UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
 by denom */
export const getUpcomingGaugesPerDenom = buildQuery<UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse>({
  encode: UpcomingGaugesPerDenomRequest.encode,
  decode: UpcomingGaugesPerDenomResponse.decode,
  service: "osmosis.incentives.Query",
  method: "UpcomingGaugesPerDenom"
});
/* RewardsEst returns an estimate of the rewards from now until a specified
 time in the future The querier either provides an address or a set of locks
 for which they want to find the associated rewards */
export const getRewardsEst = buildQuery<RewardsEstRequest, RewardsEstResponse>({
  encode: RewardsEstRequest.encode,
  decode: RewardsEstResponse.decode,
  service: "osmosis.incentives.Query",
  method: "RewardsEst"
});
/* LockableDurations returns lockable durations that are valid to distribute
 incentives for */
export const getLockableDurations = buildQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  encode: QueryLockableDurationsRequest.encode,
  decode: QueryLockableDurationsResponse.decode,
  service: "osmosis.incentives.Query",
  method: "LockableDurations"
});