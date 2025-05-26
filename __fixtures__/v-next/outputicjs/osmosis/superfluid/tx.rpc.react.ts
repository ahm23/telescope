import { buildUseMutation } from "../../react-query";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
import { superfluidDelegate, superfluidUndelegate, superfluidUnbondLock, lockAndSuperfluidDelegate, unPoolWhitelistedPool } from "./tx.rpc.func";
/* Execute superfluid delegation for a lockup */
export const useSuperfluidDelegate = buildUseMutation<MsgSuperfluidDelegate, Error>({
  builderMutationFn: superfluidDelegate
});
/* Execute superfluid undelegation for a lockup */
export const useSuperfluidUndelegate = buildUseMutation<MsgSuperfluidUndelegate, Error>({
  builderMutationFn: superfluidUndelegate
});
/* For a given lock that is being superfluidly undelegated,
 also unbond the underlying lock. */
export const useSuperfluidUnbondLock = buildUseMutation<MsgSuperfluidUnbondLock, Error>({
  builderMutationFn: superfluidUnbondLock
});
/* Execute lockup lock and superfluid delegation in a single msg */
export const useLockAndSuperfluidDelegate = buildUseMutation<MsgLockAndSuperfluidDelegate, Error>({
  builderMutationFn: lockAndSuperfluidDelegate
});
export const useUnPoolWhitelistedPool = buildUseMutation<MsgUnPoolWhitelistedPool, Error>({
  builderMutationFn: unPoolWhitelistedPool
});