import { buildUseMutation } from "../../../../react-query";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
import { connectionOpenInit, connectionOpenTry, connectionOpenAck, connectionOpenConfirm } from "./tx.rpc.func";
/* ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
export const useConnectionOpenInit = buildUseMutation<MsgConnectionOpenInit, Error>({
  builderMutationFn: connectionOpenInit
});
/* ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
export const useConnectionOpenTry = buildUseMutation<MsgConnectionOpenTry, Error>({
  builderMutationFn: connectionOpenTry
});
/* ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
export const useConnectionOpenAck = buildUseMutation<MsgConnectionOpenAck, Error>({
  builderMutationFn: connectionOpenAck
});
/* ConnectionOpenConfirm defines a rpc handler method for
 MsgConnectionOpenConfirm. */
export const useConnectionOpenConfirm = buildUseMutation<MsgConnectionOpenConfirm, Error>({
  builderMutationFn: connectionOpenConfirm
});