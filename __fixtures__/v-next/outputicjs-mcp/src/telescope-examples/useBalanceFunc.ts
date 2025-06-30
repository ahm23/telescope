import { getBalance } from 'outputicjs/cosmos/bank/v1beta1/query.rpc.func';
import { defaultRpcEndpoint } from '@/config';

export const useBalanceFunc = async (address: string, denom: string) => {
  try {
    const { balance } = await getBalance(defaultRpcEndpoint, {
      address,
      denom,
    });

    return {
      balance: balance?.amount || '0',
      denom: balance?.denom || denom,
    };
  } catch (error) {
    console.error('Error fetching balance:', error);
    return {
      balance: '0',
      denom,
    };
  }
};
