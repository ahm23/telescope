import { buildTx } from "../../../helper-func-types";
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
/* SignProviderAttributes defines a method that signs provider attributes */
export const signProviderAttributes = buildTx<MsgSignProviderAttributes>({
  msg: MsgSignProviderAttributes
});
/* DeleteProviderAttributes defines a method that deletes provider attributes */
export const deleteProviderAttributes = buildTx<MsgDeleteProviderAttributes>({
  msg: MsgDeleteProviderAttributes
});