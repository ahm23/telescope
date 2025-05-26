import { buildUseMutation } from "../../../react-query";
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
import { signProviderAttributes, deleteProviderAttributes } from "./audit.rpc.func";
/* SignProviderAttributes defines a method that signs provider attributes */
export const useSignProviderAttributes = buildUseMutation<MsgSignProviderAttributes, Error>({
  builderMutationFn: signProviderAttributes
});
/* DeleteProviderAttributes defines a method that deletes provider attributes */
export const useDeleteProviderAttributes = buildUseMutation<MsgDeleteProviderAttributes, Error>({
  builderMutationFn: deleteProviderAttributes
});