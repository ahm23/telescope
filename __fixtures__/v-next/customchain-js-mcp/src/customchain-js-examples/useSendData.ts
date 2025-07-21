import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import { useGetBalance } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.react';
import { defaultContext } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';

export const useSendData = (chainName: string) => {
  const { address, assetList } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const coin = assetList?.assets[0];
  const denom = coin?.base || 'uatom';
  const exponent = coin?.denomUnits?.find(unit => unit.denom === coin.display)?.exponent || 6;

  const balanceQuery = useGetBalance({
    request: {
      address: address || '',
      denom,
    },
    options: {
      enabled: !!address && !!rpcEndpoint,
      context: defaultContext,
      select: ({ balance }) => {
        const amount = balance?.amount || '0';
        const displayAmount = new BigNumber(amount).dividedBy(Math.pow(10, exponent));
        return {
          amount,
          displayAmount: displayAmount.toString(),
          denom: balance?.denom || denom,
        };
      },
    },
    clientResolver: rpcEndpoint,
  });

  const data = useMemo(() => {
    if (!balanceQuery.data) return;

    return {
      balance: balanceQuery.data,
      canSend: new BigNumber(balanceQuery.data.amount).isGreaterThan(0),
      fee: {
        amount: '5000',
        displayAmount: new BigNumber('5000').dividedBy(Math.pow(10, exponent)).toString(),
        denom,
      },
    };
  }, [balanceQuery.data, denom, exponent]);

  return {
    data,
    isLoading: balanceQuery.isLoading,
    refetch: balanceQuery.refetch,
  };
};
