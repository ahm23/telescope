import { buildQuery } from "../../../helper-func-types";
import { QueryCertificatesRequest, QueryCertificatesResponse } from "./query";
/* Certificates queries certificates */
export const getCertificates = buildQuery<QueryCertificatesRequest, QueryCertificatesResponse>({
  encode: QueryCertificatesRequest.encode,
  decode: QueryCertificatesResponse.decode,
  service: "akash.cert.v1beta2.Query",
  method: "Certificates"
});