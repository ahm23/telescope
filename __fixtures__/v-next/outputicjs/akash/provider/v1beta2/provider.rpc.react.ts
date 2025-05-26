import { buildUseMutation } from "../../../react-query";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
import { createProvider, updateProvider, deleteProvider } from "./provider.rpc.func";
/* CreateProvider defines a method that creates a provider given the proper inputs */
export const useCreateProvider = buildUseMutation<MsgCreateProvider, Error>({
  builderMutationFn: createProvider
});
/* UpdateProvider defines a method that updates a provider given the proper inputs */
export const useUpdateProvider = buildUseMutation<MsgUpdateProvider, Error>({
  builderMutationFn: updateProvider
});
/* DeleteProvider defines a method that deletes a provider given the proper inputs */
export const useDeleteProvider = buildUseMutation<MsgDeleteProvider, Error>({
  builderMutationFn: deleteProvider
});