import { buildTx } from "../../../helper-func-types";
import { MsgUnjail } from "./tx";
/* Unjail defines a method for unjailing a jailed validator, thus returning
 them into the bonded validator set, so they can begin receiving provisions
 and rewards again. */
export const unjail = buildTx<MsgUnjail>({
  msg: MsgUnjail
});