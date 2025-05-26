import { buildUseMutation } from "../../../react-query";
import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
import { createCertificate, revokeCertificate } from "./cert.rpc.func";
/* CreateCertificate defines a method to create new certificate given proper inputs. */
export const useCreateCertificate = buildUseMutation<MsgCreateCertificate, Error>({
  builderMutationFn: createCertificate
});
/* RevokeCertificate defines a method to revoke the certificate */
export const useRevokeCertificate = buildUseMutation<MsgRevokeCertificate, Error>({
  builderMutationFn: revokeCertificate
});