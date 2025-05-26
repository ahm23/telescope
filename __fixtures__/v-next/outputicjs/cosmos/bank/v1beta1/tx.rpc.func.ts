import { buildTx } from "../../../helper-func-types";
import { MsgSend, MsgMultiSend } from "./tx";
/* Send defines a method for sending coins from one account to another account. */
export const send = buildTx<MsgSend>({
  msg: MsgSend
});
/* MultiSend defines a method for sending coins from some accounts to other accounts. */
export const multiSend = buildTx<MsgMultiSend>({
  msg: MsgMultiSend
});