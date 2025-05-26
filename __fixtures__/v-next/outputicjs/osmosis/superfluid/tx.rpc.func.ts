import { buildTx } from "../../helper-func-types";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
/* Execute superfluid delegation for a lockup */
export const superfluidDelegate = buildTx<MsgSuperfluidDelegate>({
  msg: MsgSuperfluidDelegate
});
/* Execute superfluid undelegation for a lockup */
export const superfluidUndelegate = buildTx<MsgSuperfluidUndelegate>({
  msg: MsgSuperfluidUndelegate
});
/* For a given lock that is being superfluidly undelegated,
 also unbond the underlying lock. */
export const superfluidUnbondLock = buildTx<MsgSuperfluidUnbondLock>({
  msg: MsgSuperfluidUnbondLock
});
/* Execute lockup lock and superfluid delegation in a single msg */
export const lockAndSuperfluidDelegate = buildTx<MsgLockAndSuperfluidDelegate>({
  msg: MsgLockAndSuperfluidDelegate
});
export const unPoolWhitelistedPool = buildTx<MsgUnPoolWhitelistedPool>({
  msg: MsgUnPoolWhitelistedPool
});