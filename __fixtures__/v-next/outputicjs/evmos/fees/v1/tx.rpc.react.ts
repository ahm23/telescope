import { buildUseMutation } from "../../../react-query";
import { MsgRegisterDevFeeInfo, MsgCancelDevFeeInfo, MsgUpdateDevFeeInfo } from "./tx";
import { registerDevFeeInfo, cancelDevFeeInfo, updateDevFeeInfo } from "./tx.rpc.func";
/* RegisterDevFeeInfo is used by a deployer to register a new contract for
 receiving transaction fees */
export const useRegisterDevFeeInfo = buildUseMutation<MsgRegisterDevFeeInfo, Error>({
  builderMutationFn: registerDevFeeInfo
});
/* CancelDevFeeInfo is used by a deployer to cancel a registered contract
 and stop receiving transaction fees */
export const useCancelDevFeeInfo = buildUseMutation<MsgCancelDevFeeInfo, Error>({
  builderMutationFn: cancelDevFeeInfo
});
/* UpdateDevFeeInfo is used by a deployer to update the withdraw address */
export const useUpdateDevFeeInfo = buildUseMutation<MsgUpdateDevFeeInfo, Error>({
  builderMutationFn: updateDevFeeInfo
});