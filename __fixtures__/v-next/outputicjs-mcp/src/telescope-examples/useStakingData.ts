import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import BigNumber from 'bignumber.js';
import {
  BondStatus,
  bondStatusToJSON,
} from 'outputicjs/cosmos/staking/v1beta1/staking';
import { useGetBalance } from 'outputicjs/cosmos/bank/v1beta1/query.rpc.react';
import {
  useGetDelegatorValidators,
  useGetDelegatorDelegations,
  useGetValidators,
  useGetParams as useStakingParams,
  useGetPool,
} from 'outputicjs/cosmos/staking/v1beta1/query.rpc.react';
import {
  useGetDelegationTotalRewards,
  useGetParams as useDistributionParams,
} from 'outputicjs/cosmos/distribution/v1beta1/query.rpc.react';
import { useGetAnnualProvisions } from 'outputicjs/cosmos/mint/v1beta1/query.rpc.react';
import { defaultContext } from '@tanstack/react-query';

export const useStakingData = (chainName: string) => {
  const { address, assetList } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const coin = assetList?.assets[0];
  const denom = coin?.base || 'uatom';

  const isDataQueryEnabled = !!address && !!rpcEndpoint;

  const balanceQuery = useGetBalance({
    request: {
      address: address || '',
      denom,
    },
    options: {
      context: defaultContext,
      enabled: isDataQueryEnabled,
      select: ({ balance }) => balance?.amount || '0',
      refetchOnMount: 'always',
    },
    clientResolver: rpcEndpoint,
  });

  const validatorsQuery = useGetValidators({
    request: {
      status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED),
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 200n,
        countTotal: true,
        reverse: false,
      },
    },
    options: {
      context: defaultContext,
      enabled: isDataQueryEnabled,
      select: ({ validators }) => {
        return validators.sort((a, b) =>
          new BigNumber(b.tokens).minus(a.tokens).toNumber(),
        );
      },
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['validators', chainName],
  });

  const delegationsQuery = useGetDelegatorDelegations({
    request: {
      delegatorAddr: address || '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 100n,
        countTotal: true,
        reverse: false,
      },
    },
    options: {
      context: defaultContext,
      enabled: isDataQueryEnabled,
      select: ({ delegationResponses }) => delegationResponses,
    },
    clientResolver: rpcEndpoint,
  });

  const rewardsQuery = useGetDelegationTotalRewards({
    request: {
      delegatorAddress: address || '',
    },
    options: {
      context: defaultContext,
      enabled: isDataQueryEnabled,
      select: (data) => data,
    },
    clientResolver: rpcEndpoint,
  });

  const allQueries = {
    balance: balanceQuery,
    validators: validatorsQuery,
    delegations: delegationsQuery,
    rewards: rewardsQuery,
  };

  const isLoading = Object.values(allQueries).some(
    ({ isLoading }) => isLoading,
  );

  const data = useMemo(() => {
    if (isLoading) return;

    return {
      balance: balanceQuery.data,
      validators: validatorsQuery.data,
      delegations: delegationsQuery.data,
      rewards: rewardsQuery.data,
    };
  }, [isLoading, balanceQuery.data, validatorsQuery.data, delegationsQuery.data, rewardsQuery.data]);

  const refetch = () => {
    Object.values(allQueries).forEach((query) => query.refetch());
  };

  return { data, isLoading, refetch };
};
