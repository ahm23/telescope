import { buildUseMutation } from "../../../react-query";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
import { storeCode, instantiateContract, executeContract, migrateContract, updateAdmin, clearAdmin } from "./tx.rpc.func";
/* StoreCode to submit Wasm code to the system */
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: storeCode
});
/* Instantiate creates a new smart contract instance for the given code id. */
export const useInstantiateContract = buildUseMutation<MsgInstantiateContract, Error>({
  builderMutationFn: instantiateContract
});
/* Execute submits the given message data to a smart contract */
export const useExecuteContract = buildUseMutation<MsgExecuteContract, Error>({
  builderMutationFn: executeContract
});
/* Migrate runs a code upgrade/ downgrade for a smart contract */
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: migrateContract
});
/* UpdateAdmin sets a new   admin for a smart contract */
export const useUpdateAdmin = buildUseMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: updateAdmin
});
/* ClearAdmin removes any admin stored for a smart contract */
export const useClearAdmin = buildUseMutation<MsgClearAdmin, Error>({
  builderMutationFn: clearAdmin
});