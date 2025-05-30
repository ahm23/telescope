import { buildUseQuery } from "../../react-query";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getModuleBalance, getModuleLockedAmount, getAccountUnlockableCoins, getAccountUnlockingCoins, getAccountLockedCoins, getAccountLockedPastTime, getAccountLockedPastTimeNotUnlockingOnly, getAccountUnlockedBeforeTime, getAccountLockedPastTimeDenom, getLockedDenom, getLockedByID, getSyntheticLockupsByLockupID, getAccountLockedLongerDuration, getAccountLockedDuration, getAccountLockedLongerDurationNotUnlockingOnly, getAccountLockedLongerDurationDenom, getOsmosisLockupParams } from "./query.rpc.func";
/* Return full balance of the module */
export const useGetModuleBalance = buildUseQuery<ModuleBalanceRequest, ModuleBalanceResponse>({
  builderQueryFn: getModuleBalance,
  queryKeyPrefix: "ModuleBalanceQuery"
});
/* Return locked balance of the module */
export const useGetModuleLockedAmount = buildUseQuery<ModuleLockedAmountRequest, ModuleLockedAmountResponse>({
  builderQueryFn: getModuleLockedAmount,
  queryKeyPrefix: "ModuleLockedAmountQuery"
});
/* Returns unlockable coins which are not withdrawn yet */
export const useGetAccountUnlockableCoins = buildUseQuery<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>({
  builderQueryFn: getAccountUnlockableCoins,
  queryKeyPrefix: "AccountUnlockableCoinsQuery"
});
/* Returns unlocking coins */
export const useGetAccountUnlockingCoins = buildUseQuery<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>({
  builderQueryFn: getAccountUnlockingCoins,
  queryKeyPrefix: "AccountUnlockingCoinsQuery"
});
/* Return a locked coins that can't be withdrawn */
export const useGetAccountLockedCoins = buildUseQuery<AccountLockedCoinsRequest, AccountLockedCoinsResponse>({
  builderQueryFn: getAccountLockedCoins,
  queryKeyPrefix: "AccountLockedCoinsQuery"
});
/* Returns locked records of an account with unlock time beyond timestamp */
export const useGetAccountLockedPastTime = buildUseQuery<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>({
  builderQueryFn: getAccountLockedPastTime,
  queryKeyPrefix: "AccountLockedPastTimeQuery"
});
/* Returns locked records of an account with unlock time beyond timestamp
 excluding tokens started unlocking */
export const useGetAccountLockedPastTimeNotUnlockingOnly = buildUseQuery<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>({
  builderQueryFn: getAccountLockedPastTimeNotUnlockingOnly,
  queryKeyPrefix: "AccountLockedPastTimeNotUnlockingOnlyQuery"
});
/* Returns unlocked records with unlock time before timestamp */
export const useGetAccountUnlockedBeforeTime = buildUseQuery<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>({
  builderQueryFn: getAccountUnlockedBeforeTime,
  queryKeyPrefix: "AccountUnlockedBeforeTimeQuery"
});
/* Returns lock records by address, timestamp, denom */
export const useGetAccountLockedPastTimeDenom = buildUseQuery<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>({
  builderQueryFn: getAccountLockedPastTimeDenom,
  queryKeyPrefix: "AccountLockedPastTimeDenomQuery"
});
/* Returns total locked per denom with longer past given time */
export const useGetLockedDenom = buildUseQuery<LockedDenomRequest, LockedDenomResponse>({
  builderQueryFn: getLockedDenom,
  queryKeyPrefix: "LockedDenomQuery"
});
/* Returns lock record by id */
export const useGetLockedByID = buildUseQuery<LockedRequest, LockedResponse>({
  builderQueryFn: getLockedByID,
  queryKeyPrefix: "LockedByIDQuery"
});
/* Returns synthetic lockups by native lockup id */
export const useGetSyntheticLockupsByLockupID = buildUseQuery<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>({
  builderQueryFn: getSyntheticLockupsByLockupID,
  queryKeyPrefix: "SyntheticLockupsByLockupIDQuery"
});
/* Returns account locked records with longer duration */
export const useGetAccountLockedLongerDuration = buildUseQuery<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>({
  builderQueryFn: getAccountLockedLongerDuration,
  queryKeyPrefix: "AccountLockedLongerDurationQuery"
});
/* Returns account locked records with a specific duration */
export const useGetAccountLockedDuration = buildUseQuery<AccountLockedDurationRequest, AccountLockedDurationResponse>({
  builderQueryFn: getAccountLockedDuration,
  queryKeyPrefix: "AccountLockedDurationQuery"
});
/* Returns account locked records with longer duration excluding tokens
 started unlocking */
export const useGetAccountLockedLongerDurationNotUnlockingOnly = buildUseQuery<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>({
  builderQueryFn: getAccountLockedLongerDurationNotUnlockingOnly,
  queryKeyPrefix: "AccountLockedLongerDurationNotUnlockingOnlyQuery"
});
/* Returns account's locked records for a denom with longer duration */
export const useGetAccountLockedLongerDurationDenom = buildUseQuery<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>({
  builderQueryFn: getAccountLockedLongerDurationDenom,
  queryKeyPrefix: "AccountLockedLongerDurationDenomQuery"
});
/* Params returns lockup params. */
export const useGetOsmosisLockupParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getOsmosisLockupParams,
  queryKeyPrefix: "ParamsQuery"
});