import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { assertIsDeliverTxSuccess } from '@cosmjs/stargate';
import BigNumber from 'bignumber.js';
// @ts-nocheck
import { generateMnemonic } from '@interchainjs/crypto';
import { waitUntil } from '@interchainjs/utils';

//@ts-ignore
import { getSigningIbcClient } from './codegen';
import { useChain, Config } from 'starshipjs';

export const calcShareOutAmount = (poolInfo, coinsNeeded) => {
  return poolInfo.poolAssets
    .map(({ token }, i) => {
      const tokenInAmount = new BigNumber(coinsNeeded[i].amount);
      const totalShare = new BigNumber(poolInfo.totalShares.amount);
      const totalShareExp = totalShare.shiftedBy(-18);
      const poolAssetAmount = new BigNumber(token.amount);

      return tokenInAmount
        .multipliedBy(totalShareExp)
        .dividedBy(poolAssetAmount)
        .shiftedBy(18)
        .decimalPlaces(0, BigNumber.ROUND_HALF_UP)
        .toString();
    })
    .sort((a, b) => (new BigNumber(a).lt(b) ? -1 : 1))[0];
};

export const transferIbcTokens = async (
  fromChain,
  toChain,
  toAddress,
  amount
) => {
  const registry = Config.registry;
  const { chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
    useChain(fromChain);
  const denom = (await getCoin()).base;

  const { chainInfo: toChainInfo } = useChain(toChain);

  const chainId = chainInfo.chain.chainId || chainInfo.chain.chain_id;
  const toChainId = toChainInfo.chain.chainId || toChainInfo.chain.chain_id;
  const ibcInfos = registry.getChainIbcData(chainId);
  const ibcInfo = ibcInfos.find(
    (i) => {
      const c1 = i.chain1 || i.chain_1;
      const c2 = i.chain2 || i.chain_2;
      return (c1?.chainName || c1?.chain_name) === chainId &&
        (c2?.chainName || c2?.chain_name) === toChainId;
    }
  );

  if (!ibcInfo) {
    throw new Error('cannot find IBC info');
  }

  const chain1Data = ibcInfo.channels[0].chain1 || ibcInfo.channels[0].chain_1;
  const sourcePort = chain1Data?.portId || chain1Data?.port_id;
  const sourceChannel = chain1Data?.channelId || chain1Data?.channel_id;

  // Create temp address on fromChain that will transfer the funds
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    generateMnemonic(),
    { prefix: chainInfo.chain.bech32Prefix || chainInfo.chain.bech32_prefix }
  );
  const fromAddress = (await wallet.getAccounts())[0].address;

  // Transfer funds to address from faucet
  await creditFromFaucet(fromAddress);

  // Create ibc client to transfer tokens
  const fromClient = await getSigningIbcClient({
    rpcEndpoint: await getRpcEndpoint(),
    signer: wallet
  });

  const currentTime = Math.floor(Date.now() / 1000);
  const timeoutTime = currentTime + 300; // 5 minutes

  const fee = {
    amount: [
      {
        denom,
        amount: '1000000'
      }
    ],
    gas: '550000'
  };

  const token = {
    denom,
    amount
  };

  // send ibc tokens
  const resp = await fromClient.sendIbcTokens(
    fromAddress,
    toAddress,
    token,
    sourcePort,
    sourceChannel,
    undefined,
    timeoutTime,
    fee
  );

  assertIsDeliverTxSuccess(resp);

  return token;
};

// Re-export utilities for starship tests
export { generateMnemonic, waitUntil };
