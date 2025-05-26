import { buildTx } from "../../../helper-func-types";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
/* SetWithdrawAddress defines a method to change the withdraw address
 for a delegator (or validator self-delegation). */
export const setWithdrawAddress = buildTx<MsgSetWithdrawAddress>({
  msg: MsgSetWithdrawAddress
});
/* WithdrawDelegatorReward defines a method to withdraw rewards of delegator
 from a single validator. */
export const withdrawDelegatorReward = buildTx<MsgWithdrawDelegatorReward>({
  msg: MsgWithdrawDelegatorReward
});
/* WithdrawValidatorCommission defines a method to withdraw the
 full commission to the validator address. */
export const withdrawValidatorCommission = buildTx<MsgWithdrawValidatorCommission>({
  msg: MsgWithdrawValidatorCommission
});
/* FundCommunityPool defines a method to allow an account to directly
 fund the community pool. */
export const fundCommunityPool = buildTx<MsgFundCommunityPool>({
  msg: MsgFundCommunityPool
});