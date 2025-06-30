import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import { defaultContext } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';
import { useGetAllBalances } from 'outputicjs/cosmos/bank/v1beta1/query.rpc.react';
import { Coin } from 'outputicjs/types';

export const useAssets = (chainName: string) => {
  const { address } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const isReady = !!address && !!rpcEndpoint;

  const allBalancesQuery = useGetAllBalances({
    request: {
      address: address || '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 100n,
        countTotal: true,
        reverse: false,
      },
      resolveDenom: false,
    },
    options: {
      enabled: isReady,
      select: ({ balances }) => balances || [],
      context: defaultContext,
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['allBalances', address],
  });

  const data = useMemo(() => {
    if (!allBalancesQuery.data) return;

    const assets = allBalancesQuery.data.map(({ amount, denom }) => ({
      symbol: denom.toUpperCase(),
      displayAmount: new BigNumber(amount).dividedBy(1e6).toString(),
      amount,
      denom,
    }));

    return { assets };
  }, [allBalancesQuery.data]);

  return { 
    data, 
    isLoading: allBalancesQuery.isLoading,
    refetch: allBalancesQuery.refetch 
  };
};
