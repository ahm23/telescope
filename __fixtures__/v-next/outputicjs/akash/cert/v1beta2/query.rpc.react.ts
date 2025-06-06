import { buildUseQuery } from "../../../react-query";
import { QueryCertificatesRequest, QueryCertificatesResponse } from "./query";
import { getCertificates } from "./query.rpc.func";
/**
 * Certificates queries certificates
 * @name useGetCertificates
 * @package akash.cert.v1beta2
 * @see protoservice: akash.cert.v1beta2.Certificates
 */
export const useGetCertificates = buildUseQuery<QueryCertificatesRequest, QueryCertificatesResponse>({
  builderQueryFn: getCertificates,
  queryKeyPrefix: "CertificatesQuery"
});