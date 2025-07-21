import { assetLists, chains } from "@chain-registry/v2";

/**
 * Chain configuration example
 * mainnet: 'cosmos'
 * testnet: 'cosmoshub-testnet' 
 * mainnet rpc: 'https://cosmos-rpc.quickapi.com:443'
 * testnet rpc: 'https://rpc.testnet.cosmos.network:443'
 */
export const targetChainName = 'cosmos';
export const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';
export const chain = chains.find((chain) => chain.chainName === targetChainName);
export const assetList = assetLists.find((assetList) => assetList.chainName === targetChainName);
