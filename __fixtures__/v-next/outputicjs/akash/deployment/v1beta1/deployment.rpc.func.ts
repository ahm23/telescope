import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./group";
import { buildTx } from "../../../helper-func-types";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
/* CreateDeployment defines a method to create new deployment given proper inputs. */
export const createDeployment = buildTx<MsgCreateDeployment>({
  msg: MsgCreateDeployment
});
/* DepositDeployment deposits more funds into the deployment account */
export const depositDeployment = buildTx<MsgDepositDeployment>({
  msg: MsgDepositDeployment
});
/* UpdateDeployment defines a method to update a deployment given proper inputs. */
export const updateDeployment = buildTx<MsgUpdateDeployment>({
  msg: MsgUpdateDeployment
});
/* CloseDeployment defines a method to close a deployment given proper inputs. */
export const closeDeployment = buildTx<MsgCloseDeployment>({
  msg: MsgCloseDeployment
});
/* CloseGroup defines a method to close a group of a deployment given proper inputs. */
export const closeGroup = buildTx<MsgCloseGroup>({
  msg: MsgCloseGroup
});
/* PauseGroup defines a method to close a group of a deployment given proper inputs. */
export const pauseGroup = buildTx<MsgPauseGroup>({
  msg: MsgPauseGroup
});
/* StartGroup defines a method to close a group of a deployment given proper inputs. */
export const startGroup = buildTx<MsgStartGroup>({
  msg: MsgStartGroup
});