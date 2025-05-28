import { buildUseMutation } from "../../../../react-query";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
import { createClient, updateClient, upgradeClient, submitMisbehaviour } from "./tx.rpc.func";
/* CreateClient defines a rpc handler method for MsgCreateClient. */
export const useCreateClient = buildUseMutation<MsgCreateClient, Error>({
  builderMutationFn: createClient
});
/* UpdateClient defines a rpc handler method for MsgUpdateClient. */
export const useUpdateClient = buildUseMutation<MsgUpdateClient, Error>({
  builderMutationFn: updateClient
});
/* UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
export const useUpgradeClient = buildUseMutation<MsgUpgradeClient, Error>({
  builderMutationFn: upgradeClient
});
/* SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
export const useSubmitMisbehaviour = buildUseMutation<MsgSubmitMisbehaviour, Error>({
  builderMutationFn: submitMisbehaviour
});