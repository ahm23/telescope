import { buildTx } from "../../../helper-func-types";
import { MsgVerifyInvariant } from "./tx";
/* VerifyInvariant defines a method to verify a particular invariance. */
export const verifyInvariant = buildTx<MsgVerifyInvariant>({
  msg: MsgVerifyInvariant
});