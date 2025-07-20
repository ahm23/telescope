import { assetLists, chains } from "@chain-registry/v2";

/**
 * mainnet: 'cosmos'
 * testnet: 'cosmoshub-testnet'
 * mainnet rpc: 'https://cosmos-rpc.quickapi.com:443'
 * testnet rpc: 'https://rpc.testnet.cosmos.network:443'
 */
export const defaultChainName = 'cosmos'
export const defaultRpcEndpoint = 'https://cosmos-rpc.quickapi.com:443'

export const defaultChain = chains.find((chain) => chain.chainName === defaultChainName)

export const defaultAssetList = assetLists.find((assetList) => assetList.chainName === defaultChainName)
