import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import { useGetGranterGrants, useGetGranteeGrants } from 'outputicjs/cosmos/authz/v1beta1/query.rpc.react';
import { defaultContext } from '@tanstack/react-query';

export const useGrants = (chainName: string) => {
  const { address } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const granterQuery = useGetGranterGrants({
    request: {
      granter: address || '',
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
      select: ({ grants }) => grants,
    },
    clientResolver: rpcEndpoint,
  });

  const granteeQuery = useGetGranteeGrants({
    request: {
      grantee: address || '',
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
      select: ({ grants }) => grants,
    },
    clientResolver: rpcEndpoint,
  });

  const data = useMemo(() => {
    return {
      granterGrants: granterQuery.data || [],
      granteeGrants: granteeQuery.data || [],
    };
  }, [granterQuery.data, granteeQuery.data]);

  const isLoading = granterQuery.isLoading || granteeQuery.isLoading;

  return {
    data,
    isLoading,
    refetch: () => {
      granterQuery.refetch();
      granteeQuery.refetch();
    },
  };
};
