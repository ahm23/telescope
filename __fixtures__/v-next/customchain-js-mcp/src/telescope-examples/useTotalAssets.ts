import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import { useGetAllBalances } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.react';
import { defaultContext } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';

export const getPagination = (limit: bigint) => ({
  key: new Uint8Array(),
  offset: 0n,
  limit,
  countTotal: true,
  reverse: false,
});

export const useTotalAssets = (chainName: string) => {
  const { address, assetList } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const allBalancesQuery = useGetAllBalances({
    request: {
      address: address || '',
      pagination: getPagination(100n),
      resolveDenom: false,
    },
    options: {
      enabled: !!address && !!rpcEndpoint,
      select: ({ balances }) => balances || [],
      context: defaultContext,
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['totalAssets', address],
  });

  const data = useMemo(() => {
    if (!allBalancesQuery.data) return;

    const totalValue = allBalancesQuery.data.reduce((sum, balance) => {
      return sum.plus(balance.amount);
    }, new BigNumber(0));

    return {
      balances: allBalancesQuery.data,
      totalCount: allBalancesQuery.data.length,
      totalValue: totalValue.toString(),
      nonZeroBalances: allBalancesQuery.data.filter(
        balance => new BigNumber(balance.amount).isGreaterThan(0)
      ),
    };
  }, [allBalancesQuery.data]);

  return {
    data,
    isLoading: allBalancesQuery.isLoading,
    refetch: allBalancesQuery.refetch,
  };
};
