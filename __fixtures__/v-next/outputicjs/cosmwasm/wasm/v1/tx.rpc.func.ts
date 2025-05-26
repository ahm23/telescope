import { buildTx } from "../../../helper-func-types";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
/* StoreCode to submit Wasm code to the system */
export const storeCode = buildTx<MsgStoreCode>({
  msg: MsgStoreCode
});
/* Instantiate creates a new smart contract instance for the given code id. */
export const instantiateContract = buildTx<MsgInstantiateContract>({
  msg: MsgInstantiateContract
});
/* Execute submits the given message data to a smart contract */
export const executeContract = buildTx<MsgExecuteContract>({
  msg: MsgExecuteContract
});
/* Migrate runs a code upgrade/ downgrade for a smart contract */
export const migrateContract = buildTx<MsgMigrateContract>({
  msg: MsgMigrateContract
});
/* UpdateAdmin sets a new   admin for a smart contract */
export const updateAdmin = buildTx<MsgUpdateAdmin>({
  msg: MsgUpdateAdmin
});
/* ClearAdmin removes any admin stored for a smart contract */
export const clearAdmin = buildTx<MsgClearAdmin>({
  msg: MsgClearAdmin
});