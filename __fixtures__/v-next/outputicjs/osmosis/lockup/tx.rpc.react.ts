import { buildUseMutation } from "../../react-query";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
import { lockTokens, beginUnlockingAll, beginUnlocking, extendLockup, forceUnlock } from "./tx.rpc.func";
/* LockTokens lock tokens */
export const useLockTokens = buildUseMutation<MsgLockTokens, Error>({
  builderMutationFn: lockTokens
});
/* BeginUnlockingAll begin unlocking all tokens */
export const useBeginUnlockingAll = buildUseMutation<MsgBeginUnlockingAll, Error>({
  builderMutationFn: beginUnlockingAll
});
/* MsgBeginUnlocking begins unlocking tokens by lock ID */
export const useBeginUnlocking = buildUseMutation<MsgBeginUnlocking, Error>({
  builderMutationFn: beginUnlocking
});
/* MsgEditLockup edits the existing lockups by lock ID */
export const useExtendLockup = buildUseMutation<MsgExtendLockup, Error>({
  builderMutationFn: extendLockup
});
export const useForceUnlock = buildUseMutation<MsgForceUnlock, Error>({
  builderMutationFn: forceUnlock
});