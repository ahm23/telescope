import { buildTx } from "../../../helper-func-types";
import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
/* CreateCertificate defines a method to create new certificate given proper inputs. */
export const createCertificate = buildTx<MsgCreateCertificate>({
  msg: MsgCreateCertificate
});
/* RevokeCertificate defines a method to revoke the certificate */
export const revokeCertificate = buildTx<MsgRevokeCertificate>({
  msg: MsgRevokeCertificate
});