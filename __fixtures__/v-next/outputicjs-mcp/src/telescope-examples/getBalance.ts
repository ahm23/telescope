import { getBalance } from 'outputicjs/cosmos/bank/v1beta1/query.rpc.func';
import { send } from 'outputicjs/cosmos/bank/v1beta1/tx.rpc.func';
import { MsgSend } from 'outputicjs/cosmos/bank/v1beta1/tx';

const main = async () => {
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';
  const denom = 'uatom';
  const address = 'cosmos1...'; // Your address here

  // Query balance
  const { balance } = await getBalance(rpcEndpoint, {
    address,
    denom,
  });

  console.log(`Balance: ${balance?.amount} ${denom}`);

  // Example: Send transaction (requires signer setup)
  /*
  const fee = {
    amount: [{ denom, amount: '5000' }],
    gas: '200000',
  };

  const token = {
    amount: '1000000',
    denom,
  };

  const msg = MsgSend.fromPartial({
    fromAddress: address,
    toAddress: 'cosmos1recipient...',
    amount: [token],
  });

  // const tx = await send(signer, address, msg, fee, 'Payment');
  */
};

main().catch(console.error);
