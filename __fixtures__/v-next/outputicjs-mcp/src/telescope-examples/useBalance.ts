import { useChain } from '@interchain-kit/react';
import { defaultContext } from '@tanstack/react-query';
import { useGetBalance } from 'outputicjs/cosmos/bank/v1beta1/query.rpc.react';

export const useBalance = (
  chainName: string,
  enabled: boolean = true,
  displayDenom?: string
) => {
  const { address, assetList } = useChain(chainName);

  let denom = assetList?.assets[0].base!;
  for (const asset of assetList?.assets || []) {
    if (asset.display.toLowerCase() === displayDenom?.toLowerCase()) {
      denom = asset.base;
      break;
    }
  }

  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443'; // Use dynamic endpoint

  const isReady = !!address && !!rpcEndpoint;

  const balanceQuery = useGetBalance({
    request: {
      denom,
      address: address || '',
    },
    options: {
      enabled: isReady && enabled,
      select: ({ balance }) => balance,
      context: defaultContext,
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['balance', address, denom],
  });

  return {
    balance: balanceQuery.data,
    isLoading: balanceQuery.isFetching,
  };
};
