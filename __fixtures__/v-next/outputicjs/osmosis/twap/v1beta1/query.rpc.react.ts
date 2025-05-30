import { buildUseQuery } from "../../../react-query";
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse } from "./query";
import { getOsmosisTwapV1beta1Params, getArithmeticTwap, getArithmeticTwapToNow } from "./query.rpc.func";
export const useGetOsmosisTwapV1beta1Params = buildUseQuery<ParamsRequest, ParamsResponse>({
  builderQueryFn: getOsmosisTwapV1beta1Params,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetArithmeticTwap = buildUseQuery<ArithmeticTwapRequest, ArithmeticTwapResponse>({
  builderQueryFn: getArithmeticTwap,
  queryKeyPrefix: "ArithmeticTwapQuery"
});
export const useGetArithmeticTwapToNow = buildUseQuery<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>({
  builderQueryFn: getArithmeticTwapToNow,
  queryKeyPrefix: "ArithmeticTwapToNowQuery"
});