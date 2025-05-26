import { buildTx } from "../../helper-func-types";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
/* LockTokens lock tokens */
export const lockTokens = buildTx<MsgLockTokens>({
  msg: MsgLockTokens
});
/* BeginUnlockingAll begin unlocking all tokens */
export const beginUnlockingAll = buildTx<MsgBeginUnlockingAll>({
  msg: MsgBeginUnlockingAll
});
/* MsgBeginUnlocking begins unlocking tokens by lock ID */
export const beginUnlocking = buildTx<MsgBeginUnlocking>({
  msg: MsgBeginUnlocking
});
/* MsgEditLockup edits the existing lockups by lock ID */
export const extendLockup = buildTx<MsgExtendLockup>({
  msg: MsgExtendLockup
});
export const forceUnlock = buildTx<MsgForceUnlock>({
  msg: MsgForceUnlock
});