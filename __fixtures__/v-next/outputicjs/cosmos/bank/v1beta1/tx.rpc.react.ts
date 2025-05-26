import { buildUseMutation } from "../../../react-query";
import { MsgSend, MsgMultiSend } from "./tx";
import { send, multiSend } from "./tx.rpc.func";
/* Send defines a method for sending coins from one account to another account. */
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: send
});
/* MultiSend defines a method for sending coins from some accounts to other accounts. */
export const useMultiSend = buildUseMutation<MsgMultiSend, Error>({
  builderMutationFn: multiSend
});