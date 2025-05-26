import { buildTx } from "../../../helper-func-types";
import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
/* CreateClawbackVestingAccount creats a vesting account that is subject to
 clawback and the configuration of vesting and lockup schedules. */
export const createClawbackVestingAccount = buildTx<MsgCreateClawbackVestingAccount>({
  msg: MsgCreateClawbackVestingAccount
});
/* Clawback removes the unvested tokens from a ClawbackVestingAccount. */
export const clawback = buildTx<MsgClawback>({
  msg: MsgClawback
});