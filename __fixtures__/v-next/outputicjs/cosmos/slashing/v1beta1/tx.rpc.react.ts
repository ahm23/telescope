import { buildUseMutation } from "../../../react-query";
import { MsgUnjail } from "./tx";
import { unjail } from "./tx.rpc.func";
/* Unjail defines a method for unjailing a jailed validator, thus returning
 them into the bonded validator set, so they can begin receiving provisions
 and rewards again. */
export const useUnjail = buildUseMutation<MsgUnjail, Error>({
  builderMutationFn: unjail
});