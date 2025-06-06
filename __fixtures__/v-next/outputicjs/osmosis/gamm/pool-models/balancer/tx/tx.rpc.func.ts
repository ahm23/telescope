import { buildTx } from "../../../../../helper-func-types";
import { MsgCreateBalancerPool } from "./tx";
/**
 * @name createBalancerPool
 * @package osmosis.gamm.poolmodels.balancer.v1beta1
 * @see protoservice: osmosis.gamm.poolmodels.balancer.v1beta1.CreateBalancerPool
 */
export const createBalancerPool = buildTx<MsgCreateBalancerPool>({
  msg: MsgCreateBalancerPool
});