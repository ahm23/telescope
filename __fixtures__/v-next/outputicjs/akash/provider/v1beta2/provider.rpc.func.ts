import { buildTx } from "../../../helper-func-types";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
/* CreateProvider defines a method that creates a provider given the proper inputs */
export const createProvider = buildTx<MsgCreateProvider>({
  msg: MsgCreateProvider
});
/* UpdateProvider defines a method that updates a provider given the proper inputs */
export const updateProvider = buildTx<MsgUpdateProvider>({
  msg: MsgUpdateProvider
});
/* DeleteProvider defines a method that deletes a provider given the proper inputs */
export const deleteProvider = buildTx<MsgDeleteProvider>({
  msg: MsgDeleteProvider
});