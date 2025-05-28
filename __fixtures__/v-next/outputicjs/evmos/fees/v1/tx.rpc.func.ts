import { buildTx } from "../../../helper-func-types";
import { MsgRegisterDevFeeInfo, MsgCancelDevFeeInfo, MsgUpdateDevFeeInfo } from "./tx";
/* RegisterDevFeeInfo is used by a deployer to register a new contract for
 receiving transaction fees */
export const registerDevFeeInfo = buildTx<MsgRegisterDevFeeInfo>({
  msg: MsgRegisterDevFeeInfo
});
/* CancelDevFeeInfo is used by a deployer to cancel a registered contract
 and stop receiving transaction fees */
export const cancelDevFeeInfo = buildTx<MsgCancelDevFeeInfo>({
  msg: MsgCancelDevFeeInfo
});
/* UpdateDevFeeInfo is used by a deployer to update the withdraw address */
export const updateDevFeeInfo = buildTx<MsgUpdateDevFeeInfo>({
  msg: MsgUpdateDevFeeInfo
});