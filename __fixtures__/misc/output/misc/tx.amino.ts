import { EncodingTestForDontOmit, EncodingTestForDontOmitSDKType } from "./all_fields";
import { InputMsg, InputMsgSDKType } from "./tx";
export const AminoConverter = {
  "/misc.InputMsg": {
    aminoType: "/misc.InputMsg",
    toAmino: InputMsg.toAmino,
    fromAmino: InputMsg.fromAmino
  }
};