import { buildTx } from "../../../helper-func-types";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
/* GrantAllowance grants fee allowance to the grantee on the granter's
 account with the provided expiration time. */
export const grantAllowance = buildTx<MsgGrantAllowance>({
  msg: MsgGrantAllowance
});
/* RevokeAllowance revokes any fee allowance of granter's account that
 has been granted to the grantee. */
export const revokeAllowance = buildTx<MsgRevokeAllowance>({
  msg: MsgRevokeAllowance
});