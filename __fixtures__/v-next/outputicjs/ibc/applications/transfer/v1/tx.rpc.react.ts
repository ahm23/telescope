import { buildUseMutation } from "../../../../react-query";
import { MsgTransfer } from "./tx";
import { transfer } from "./tx.rpc.func";
/* Transfer defines a rpc handler method for MsgTransfer. */
export const useTransfer = buildUseMutation<MsgTransfer, Error>({
  builderMutationFn: transfer
});