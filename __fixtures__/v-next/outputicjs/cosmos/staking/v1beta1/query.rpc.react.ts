import { buildUseQuery } from "../../../react-query";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getValidators, getValidator, getValidatorDelegations, getValidatorUnbondingDelegations, getDelegation, getUnbondingDelegation, getDelegatorDelegations, getDelegatorUnbondingDelegations, getRedelegations, getDelegatorValidators, getDelegatorValidator, getHistoricalInfo, getPool, getCosmosStakingV1beta1Params } from "./query.rpc.func";
/* Validators queries all validators that match the given status. */
export const useGetValidators = buildUseQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  builderQueryFn: getValidators,
  queryKeyPrefix: "ValidatorsQuery"
});
/* Validator queries validator info for given validator address. */
export const useGetValidator = buildUseQuery<QueryValidatorRequest, QueryValidatorResponse>({
  builderQueryFn: getValidator,
  queryKeyPrefix: "ValidatorQuery"
});
/* ValidatorDelegations queries delegate info for given validator. */
export const useGetValidatorDelegations = buildUseQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  builderQueryFn: getValidatorDelegations,
  queryKeyPrefix: "ValidatorDelegationsQuery"
});
/* ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
export const useGetValidatorUnbondingDelegations = buildUseQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  builderQueryFn: getValidatorUnbondingDelegations,
  queryKeyPrefix: "ValidatorUnbondingDelegationsQuery"
});
/* Delegation queries delegate info for given validator delegator pair. */
export const useGetDelegation = buildUseQuery<QueryDelegationRequest, QueryDelegationResponse>({
  builderQueryFn: getDelegation,
  queryKeyPrefix: "DelegationQuery"
});
/* UnbondingDelegation queries unbonding info for given validator delegator
 pair. */
export const useGetUnbondingDelegation = buildUseQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  builderQueryFn: getUnbondingDelegation,
  queryKeyPrefix: "UnbondingDelegationQuery"
});
/* DelegatorDelegations queries all delegations of a given delegator address. */
export const useGetDelegatorDelegations = buildUseQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  builderQueryFn: getDelegatorDelegations,
  queryKeyPrefix: "DelegatorDelegationsQuery"
});
/* DelegatorUnbondingDelegations queries all unbonding delegations of a given
 delegator address. */
export const useGetDelegatorUnbondingDelegations = buildUseQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  builderQueryFn: getDelegatorUnbondingDelegations,
  queryKeyPrefix: "DelegatorUnbondingDelegationsQuery"
});
/* Redelegations queries redelegations of given address. */
export const useGetRedelegations = buildUseQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  builderQueryFn: getRedelegations,
  queryKeyPrefix: "RedelegationsQuery"
});
/* DelegatorValidators queries all validators info for given delegator
 address. */
export const useGetDelegatorValidators = buildUseQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  builderQueryFn: getDelegatorValidators,
  queryKeyPrefix: "DelegatorValidatorsQuery"
});
/* DelegatorValidator queries validator info for given delegator validator
 pair. */
export const useGetDelegatorValidator = buildUseQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  builderQueryFn: getDelegatorValidator,
  queryKeyPrefix: "DelegatorValidatorQuery"
});
/* HistoricalInfo queries the historical info for given height. */
export const useGetHistoricalInfo = buildUseQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  builderQueryFn: getHistoricalInfo,
  queryKeyPrefix: "HistoricalInfoQuery"
});
/* Pool queries the pool info. */
export const useGetPool = buildUseQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: getPool,
  queryKeyPrefix: "PoolQuery"
});
/* Parameters queries the staking parameters. */
export const useGetCosmosStakingV1beta1Params = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getCosmosStakingV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});