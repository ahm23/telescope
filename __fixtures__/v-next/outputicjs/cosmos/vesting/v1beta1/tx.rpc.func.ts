import { buildTx } from "../../../helper-func-types";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
/* CreateVestingAccount defines a method that enables creating a vesting
 account. */
export const createVestingAccount = buildTx<MsgCreateVestingAccount>({
  msg: MsgCreateVestingAccount
});
/* CreatePermanentLockedAccount defines a method that enables creating a permanent
 locked account. */
export const createPermanentLockedAccount = buildTx<MsgCreatePermanentLockedAccount>({
  msg: MsgCreatePermanentLockedAccount
});
/* CreatePeriodicVestingAccount defines a method that enables creating a
 periodic vesting account. */
export const createPeriodicVestingAccount = buildTx<MsgCreatePeriodicVestingAccount>({
  msg: MsgCreatePeriodicVestingAccount
});