import { buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse } from "./query";
/* Params returns the total set of superfluid parameters. */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "Params"
});
/* Returns superfluid asset type, whether if it's a native asset or an lp
 share. */
export const getAssetType = buildQuery<AssetTypeRequest, AssetTypeResponse>({
  encode: AssetTypeRequest.encode,
  decode: AssetTypeResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AssetType"
});
/* Returns all registered superfluid assets. */
export const getAllAssets = buildQuery<AllAssetsRequest, AllAssetsResponse>({
  encode: AllAssetsRequest.encode,
  decode: AllAssetsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AllAssets"
});
/* Returns the osmo equivalent multiplier used in the most recent epoch. */
export const getAssetMultiplier = buildQuery<AssetMultiplierRequest, AssetMultiplierResponse>({
  encode: AssetMultiplierRequest.encode,
  decode: AssetMultiplierResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AssetMultiplier"
});
/* Returns all superfluid intermediary accounts. */
export const getAllIntermediaryAccounts = buildQuery<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>({
  encode: AllIntermediaryAccountsRequest.encode,
  decode: AllIntermediaryAccountsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AllIntermediaryAccounts"
});
/* Returns intermediary account connected to a superfluid staked lock by id */
export const getConnectedIntermediaryAccount = buildQuery<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>({
  encode: ConnectedIntermediaryAccountRequest.encode,
  decode: ConnectedIntermediaryAccountResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "ConnectedIntermediaryAccount"
});
/* Returns the amount of delegations of specific denom for all validators */
export const getTotalDelegationByValidatorForDenom = buildQuery<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>({
  encode: QueryTotalDelegationByValidatorForDenomRequest.encode,
  decode: QueryTotalDelegationByValidatorForDenomResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "TotalDelegationByValidatorForDenom"
});
/* Returns the total amount of osmo superfluidly staked.
 Response is denominated in uosmo. */
export const getTotalSuperfluidDelegations = buildQuery<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>({
  encode: TotalSuperfluidDelegationsRequest.encode,
  decode: TotalSuperfluidDelegationsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "TotalSuperfluidDelegations"
});
/* Returns the coins superfluid delegated for the delegator, validator, denom
 triplet */
export const getSuperfluidDelegationAmount = buildQuery<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>({
  encode: SuperfluidDelegationAmountRequest.encode,
  decode: SuperfluidDelegationAmountResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidDelegationAmount"
});
/* Returns all the delegated superfluid poistions for a specific delegator. */
export const getSuperfluidDelegationsByDelegator = buildQuery<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>({
  encode: SuperfluidDelegationsByDelegatorRequest.encode,
  decode: SuperfluidDelegationsByDelegatorResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidDelegationsByDelegator"
});
/* Returns all the undelegating superfluid poistions for a specific delegator. */
export const getSuperfluidUndelegationsByDelegator = buildQuery<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>({
  encode: SuperfluidUndelegationsByDelegatorRequest.encode,
  decode: SuperfluidUndelegationsByDelegatorResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidUndelegationsByDelegator"
});
/* Returns all the superfluid positions of a specific denom delegated to one
 validator */
export const getSuperfluidDelegationsByValidatorDenom = buildQuery<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>({
  encode: SuperfluidDelegationsByValidatorDenomRequest.encode,
  decode: SuperfluidDelegationsByValidatorDenomResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidDelegationsByValidatorDenom"
});
/* Returns the amount of a specific denom delegated to a specific validator
 This is labeled an estimate, because the way it calculates the amount can
 lead rounding errors from the true delegated amount */
export const getEstimateSuperfluidDelegatedAmountByValidatorDenom = buildQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({
  encode: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode,
  decode: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "EstimateSuperfluidDelegatedAmountByValidatorDenom"
});
/* Returns the specified delegations for a specific delegator */
export const getTotalDelegationByDelegator = buildQuery<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>({
  encode: QueryTotalDelegationByDelegatorRequest.encode,
  decode: QueryTotalDelegationByDelegatorResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "TotalDelegationByDelegator"
});
/* Returns a list of whitelisted pool ids to unpool. */
export const getUnpoolWhitelist = buildQuery<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>({
  encode: QueryUnpoolWhitelistRequest.encode,
  decode: QueryUnpoolWhitelistResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "UnpoolWhitelist"
});