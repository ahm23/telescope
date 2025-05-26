import { buildUseMutation } from "../../../react-query";
import { MsgVerifyInvariant } from "./tx";
import { verifyInvariant } from "./tx.rpc.func";
/* VerifyInvariant defines a method to verify a particular invariance. */
export const useVerifyInvariant = buildUseMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: verifyInvariant
});