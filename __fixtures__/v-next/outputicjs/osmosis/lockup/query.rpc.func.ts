import { buildQuery } from "../../helper-func-types";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/**
 * Return full balance of the module
 * @name getModuleBalance
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.ModuleBalance
 */
export const getModuleBalance = buildQuery<ModuleBalanceRequest, ModuleBalanceResponse>({
  encode: ModuleBalanceRequest.encode,
  decode: ModuleBalanceResponse.decode,
  service: "osmosis.lockup.Query",
  method: "ModuleBalance"
});
/**
 * Return locked balance of the module
 * @name getModuleLockedAmount
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.ModuleLockedAmount
 */
export const getModuleLockedAmount = buildQuery<ModuleLockedAmountRequest, ModuleLockedAmountResponse>({
  encode: ModuleLockedAmountRequest.encode,
  decode: ModuleLockedAmountResponse.decode,
  service: "osmosis.lockup.Query",
  method: "ModuleLockedAmount"
});
/**
 * Returns unlockable coins which are not withdrawn yet
 * @name getAccountUnlockableCoins
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.AccountUnlockableCoins
 */
export const getAccountUnlockableCoins = buildQuery<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>({
  encode: AccountUnlockableCoinsRequest.encode,
  decode: AccountUnlockableCoinsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountUnlockableCoins"
});
/**
 * Returns unlocking coins
 * @name getAccountUnlockingCoins
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.AccountUnlockingCoins
 */
export const getAccountUnlockingCoins = buildQuery<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>({
  encode: AccountUnlockingCoinsRequest.encode,
  decode: AccountUnlockingCoinsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountUnlockingCoins"
});
/**
 * Return a locked coins that can't be withdrawn
 * @name getAccountLockedCoins
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.AccountLockedCoins
 */
export const getAccountLockedCoins = buildQuery<AccountLockedCoinsRequest, AccountLockedCoinsResponse>({
  encode: AccountLockedCoinsRequest.encode,
  decode: AccountLockedCoinsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedCoins"
});
/**
 * Returns locked records of an account with unlock time beyond timestamp
 * @name getAccountLockedPastTime
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.AccountLockedPastTime
 */
export const getAccountLockedPastTime = buildQuery<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>({
  encode: AccountLockedPastTimeRequest.encode,
  decode: AccountLockedPastTimeResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedPastTime"
});
/**
 * Returns locked records of an account with unlock time beyond timestamp
 * excluding tokens started unlocking
 * @name getAccountLockedPastTimeNotUnlockingOnly
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.AccountLockedPastTimeNotUnlockingOnly
 */
export const getAccountLockedPastTimeNotUnlockingOnly = buildQuery<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>({
  encode: AccountLockedPastTimeNotUnlockingOnlyRequest.encode,
  decode: AccountLockedPastTimeNotUnlockingOnlyResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedPastTimeNotUnlockingOnly"
});
/**
 * Returns unlocked records with unlock time before timestamp
 * @name getAccountUnlockedBeforeTime
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.AccountUnlockedBeforeTime
 */
export const getAccountUnlockedBeforeTime = buildQuery<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>({
  encode: AccountUnlockedBeforeTimeRequest.encode,
  decode: AccountUnlockedBeforeTimeResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountUnlockedBeforeTime"
});
/**
 * Returns lock records by address, timestamp, denom
 * @name getAccountLockedPastTimeDenom
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.AccountLockedPastTimeDenom
 */
export const getAccountLockedPastTimeDenom = buildQuery<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>({
  encode: AccountLockedPastTimeDenomRequest.encode,
  decode: AccountLockedPastTimeDenomResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedPastTimeDenom"
});
/**
 * Returns total locked per denom with longer past given time
 * @name getLockedDenom
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.LockedDenom
 */
export const getLockedDenom = buildQuery<LockedDenomRequest, LockedDenomResponse>({
  encode: LockedDenomRequest.encode,
  decode: LockedDenomResponse.decode,
  service: "osmosis.lockup.Query",
  method: "LockedDenom"
});
/**
 * Returns lock record by id
 * @name getLockedByID
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.LockedByID
 */
export const getLockedByID = buildQuery<LockedRequest, LockedResponse>({
  encode: LockedRequest.encode,
  decode: LockedResponse.decode,
  service: "osmosis.lockup.Query",
  method: "LockedByID"
});
/**
 * Returns synthetic lockups by native lockup id
 * @name getSyntheticLockupsByLockupID
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.SyntheticLockupsByLockupID
 */
export const getSyntheticLockupsByLockupID = buildQuery<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>({
  encode: SyntheticLockupsByLockupIDRequest.encode,
  decode: SyntheticLockupsByLockupIDResponse.decode,
  service: "osmosis.lockup.Query",
  method: "SyntheticLockupsByLockupID"
});
/**
 * Returns account locked records with longer duration
 * @name getAccountLockedLongerDuration
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.AccountLockedLongerDuration
 */
export const getAccountLockedLongerDuration = buildQuery<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>({
  encode: AccountLockedLongerDurationRequest.encode,
  decode: AccountLockedLongerDurationResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedLongerDuration"
});
/**
 * Returns account locked records with a specific duration
 * @name getAccountLockedDuration
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.AccountLockedDuration
 */
export const getAccountLockedDuration = buildQuery<AccountLockedDurationRequest, AccountLockedDurationResponse>({
  encode: AccountLockedDurationRequest.encode,
  decode: AccountLockedDurationResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedDuration"
});
/**
 * Returns account locked records with longer duration excluding tokens
 * started unlocking
 * @name getAccountLockedLongerDurationNotUnlockingOnly
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnly
 */
export const getAccountLockedLongerDurationNotUnlockingOnly = buildQuery<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>({
  encode: AccountLockedLongerDurationNotUnlockingOnlyRequest.encode,
  decode: AccountLockedLongerDurationNotUnlockingOnlyResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedLongerDurationNotUnlockingOnly"
});
/**
 * Returns account's locked records for a denom with longer duration
 * @name getAccountLockedLongerDurationDenom
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.AccountLockedLongerDurationDenom
 */
export const getAccountLockedLongerDurationDenom = buildQuery<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>({
  encode: AccountLockedLongerDurationDenomRequest.encode,
  decode: AccountLockedLongerDurationDenomResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedLongerDurationDenom"
});
/**
 * Params returns lockup params.
 * @name getOsmosisLockupParams
 * @package osmosis.lockup
 * @see protoservice: osmosis.lockup.Params
 */
export const getOsmosisLockupParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "Params"
});