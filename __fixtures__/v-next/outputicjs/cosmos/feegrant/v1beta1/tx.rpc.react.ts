import { buildUseMutation } from "../../../react-query";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
import { grantAllowance, revokeAllowance } from "./tx.rpc.func";
/* GrantAllowance grants fee allowance to the grantee on the granter's
 account with the provided expiration time. */
export const useGrantAllowance = buildUseMutation<MsgGrantAllowance, Error>({
  builderMutationFn: grantAllowance
});
/* RevokeAllowance revokes any fee allowance of granter's account that
 has been granted to the grantee. */
export const useRevokeAllowance = buildUseMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: revokeAllowance
});