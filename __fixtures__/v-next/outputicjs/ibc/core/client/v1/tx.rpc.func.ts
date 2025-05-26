import { buildTx } from "../../../../helper-func-types";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
/* CreateClient defines a rpc handler method for MsgCreateClient. */
export const createClient = buildTx<MsgCreateClient>({
  msg: MsgCreateClient
});
/* UpdateClient defines a rpc handler method for MsgUpdateClient. */
export const updateClient = buildTx<MsgUpdateClient>({
  msg: MsgUpdateClient
});
/* UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
export const upgradeClient = buildTx<MsgUpgradeClient>({
  msg: MsgUpgradeClient
});
/* SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
export const submitMisbehaviour = buildTx<MsgSubmitMisbehaviour>({
  msg: MsgSubmitMisbehaviour
});