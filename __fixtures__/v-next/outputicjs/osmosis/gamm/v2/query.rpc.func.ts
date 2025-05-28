import { buildQuery } from "../../../helper-func-types";
import { QuerySpotPriceRequest, QuerySpotPriceResponse } from "./query";
/* SpotPrice defines a gRPC query handler that returns the spot price given
 a base denomination and a quote denomination. */
export const getSpotPrice = buildQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  encode: QuerySpotPriceRequest.encode,
  decode: QuerySpotPriceResponse.decode,
  service: "osmosis.gamm.v2.Query",
  method: "SpotPrice"
});