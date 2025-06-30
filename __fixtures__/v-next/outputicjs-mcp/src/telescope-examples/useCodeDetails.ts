import { defaultContext } from '@tanstack/react-query';
import { useGetCode } from 'outputicjs/cosmwasm/wasm/v1/query.rpc.react';

export const useCodeDetails = ({
  codeId,
  enabled = true,
}: {
  codeId: string | number;
  enabled?: boolean;
}) => {
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  return useGetCode({
    request: {
      codeId: BigInt(codeId),
    },
    options: {
      enabled: !!codeId && !!rpcEndpoint && enabled,
      context: defaultContext,
    },
    clientResolver: rpcEndpoint,
  });
};
