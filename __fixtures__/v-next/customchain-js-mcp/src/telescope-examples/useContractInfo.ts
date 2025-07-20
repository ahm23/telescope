import { defaultContext } from '@tanstack/react-query';
import { useGetContractInfo } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.react';

export const useContractInfo = ({
  contractAddress,
  enabled = true,
}: {
  contractAddress: string;
  enabled?: boolean;
}) => {
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  return useGetContractInfo({
    request: {
      address: contractAddress,
    },
    options: {
      enabled: !!contractAddress && !!rpcEndpoint && enabled,
      context: defaultContext,
    },
    clientResolver: rpcEndpoint,
  });
};
