export const externalIcJs = `
import { HttpEndpoint } from "@interchainjs/types";
import { Rpc } from "./helpers";
import { ClientOptions, createCosmosQueryClient } from "@interchainjs/cosmos";

const _rpcClients: Record<string, Rpc> = {};

export const getRpcEndpointKey = (rpcEndpoint: string | HttpEndpoint) => {
  if (typeof rpcEndpoint === 'string') {
    return rpcEndpoint;
  } else if (!!rpcEndpoint) {
    //@ts-ignore
    return rpcEndpoint.url;
  }
}

export const getRpcClient = async (rpcEndpoint: string | HttpEndpoint) => {
  const key = getRpcEndpointKey(rpcEndpoint);
  if (!key) return;
  if (_rpcClients.hasOwnProperty(key)) {
    return _rpcClients[key];
  }
  const rpc = await createRpcClient(rpcEndpoint);
  _rpcClients[key] = rpc;
  return rpc;
}

export const createRpcClient = async (rpcEndpoint: string | HttpEndpoint,
  options?: ClientOptions
) => {
  if (typeof rpcEndpoint === 'string') {
    return createCosmosQueryClient(rpcEndpoint, options);
  } else {
    const endpointStr = rpcEndpoint.url;
    const clientOptions = {
      ...options,
      headers: rpcEndpoint.headers
    };

    return createCosmosQueryClient(endpointStr, clientOptions);
  }
}
`;