import { buildTx } from "../../../../helper-func-types";
import { MsgTransfer } from "./tx";
/* Transfer defines a rpc handler method for MsgTransfer. */
export const transfer = buildTx<MsgTransfer>({
  msg: MsgTransfer
});