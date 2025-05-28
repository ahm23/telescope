import { buildUseMutation } from "../../../react-query";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
import { setWithdrawAddress, withdrawDelegatorReward, withdrawValidatorCommission, fundCommunityPool } from "./tx.rpc.func";
/* SetWithdrawAddress defines a method to change the withdraw address
 for a delegator (or validator self-delegation). */
export const useSetWithdrawAddress = buildUseMutation<MsgSetWithdrawAddress, Error>({
  builderMutationFn: setWithdrawAddress
});
/* WithdrawDelegatorReward defines a method to withdraw rewards of delegator
 from a single validator. */
export const useWithdrawDelegatorReward = buildUseMutation<MsgWithdrawDelegatorReward, Error>({
  builderMutationFn: withdrawDelegatorReward
});
/* WithdrawValidatorCommission defines a method to withdraw the
 full commission to the validator address. */
export const useWithdrawValidatorCommission = buildUseMutation<MsgWithdrawValidatorCommission, Error>({
  builderMutationFn: withdrawValidatorCommission
});
/* FundCommunityPool defines a method to allow an account to directly
 fund the community pool. */
export const useFundCommunityPool = buildUseMutation<MsgFundCommunityPool, Error>({
  builderMutationFn: fundCommunityPool
});