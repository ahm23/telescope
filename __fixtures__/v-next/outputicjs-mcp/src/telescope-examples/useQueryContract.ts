import { defaultContext } from '@tanstack/react-query';
import { useGetSmartContractState } from 'outputicjs/cosmwasm/wasm/v1/query.rpc.react';

export const useQueryContract = ({
  contractAddress,
  queryMsg,
  enabled = true,
}: {
  contractAddress: string;
  queryMsg: object;
  enabled?: boolean;
}) => {
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  return useGetSmartContractState({
    request: {
      address: contractAddress,
      queryData: new TextEncoder().encode(JSON.stringify(queryMsg)),
    },
    options: {
      enabled: !!contractAddress && !!queryMsg && !!rpcEndpoint && enabled,
      context: defaultContext,
      select: ({ data }) => {
        if (data) {
          return JSON.parse(new TextDecoder().decode(data));
        }
        return null;
      },
    },
    clientResolver: rpcEndpoint,
  });
};
