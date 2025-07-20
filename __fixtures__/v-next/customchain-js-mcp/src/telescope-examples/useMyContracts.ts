import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import { useGetContractsByCreator } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.react';
import { defaultContext } from '@tanstack/react-query';

export const useMyContracts = (chainName: string) => {
  const { address } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const contractsQuery = useGetContractsByCreator({
    request: {
      creatorAddress: address || '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 100n,
        countTotal: true,
        reverse: false,
      },
    },
    options: {
      enabled: !!address && !!rpcEndpoint,
      context: defaultContext,
      select: ({ contractAddresses }) => contractAddresses,
    },
    clientResolver: rpcEndpoint,
  });

  const data = useMemo(() => {
    if (!contractsQuery.data) return;

    return {
      contracts: contractsQuery.data.map((address) => ({
        address,
        label: `Contract ${address.slice(0, 8)}...`,
      })),
      count: contractsQuery.data.length,
    };
  }, [contractsQuery.data]);

  return {
    data,
    isLoading: contractsQuery.isLoading,
    refetch: contractsQuery.refetch,
  };
};
