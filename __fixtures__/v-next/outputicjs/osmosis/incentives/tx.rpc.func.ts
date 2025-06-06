import { buildTx } from "../../helper-func-types";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
/**
 * @name createGauge
 * @package osmosis.incentives
 * @see protoservice: osmosis.incentives.CreateGauge
 */
export const createGauge = buildTx<MsgCreateGauge>({
  msg: MsgCreateGauge
});
/**
 * @name addToGauge
 * @package osmosis.incentives
 * @see protoservice: osmosis.incentives.AddToGauge
 */
export const addToGauge = buildTx<MsgAddToGauge>({
  msg: MsgAddToGauge
});