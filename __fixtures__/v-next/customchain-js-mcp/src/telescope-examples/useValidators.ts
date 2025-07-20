import { useMemo } from 'react';
import { BondStatus, bondStatusToJSON } from 'customchain-js/cosmos/staking/v1beta1/staking';
import { useGetValidators } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.react';
import { defaultContext } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';

export const useValidators = (chainName: string) => {
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

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
      enabled: !!rpcEndpoint,
      select: ({ validators }) => {
        return validators
          .sort((a, b) => new BigNumber(b.tokens).minus(a.tokens).toNumber())
          .map((validator) => ({
            operatorAddress: validator.operatorAddress,
            moniker: validator.description?.moniker || '',
            tokens: validator.tokens,
            delegatorShares: validator.delegatorShares,
            commission: validator.commission?.commissionRates?.rate || '0',
            status: validator.status,
            jailed: validator.jailed,
          }));
      },
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['validators', chainName],
  });

  return {
    data: validatorsQuery.data,
    isLoading: validatorsQuery.isLoading,
    refetch: validatorsQuery.refetch,
  };
};
