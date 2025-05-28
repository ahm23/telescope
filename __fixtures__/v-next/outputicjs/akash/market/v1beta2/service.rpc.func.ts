import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { buildTx } from "../../../helper-func-types";
/* CreateBid defines a method to create a bid given proper inputs. */
export const createBid = buildTx<MsgCreateBid>({
  msg: MsgCreateBid
});
/* CloseBid defines a method to close a bid given proper inputs. */
export const closeBid = buildTx<MsgCloseBid>({
  msg: MsgCloseBid
});
/* WithdrawLease withdraws accrued funds from the lease payment */
export const withdrawLease = buildTx<MsgWithdrawLease>({
  msg: MsgWithdrawLease
});
/* CreateLease creates a new lease */
export const createLease = buildTx<MsgCreateLease>({
  msg: MsgCreateLease
});
/* CloseLease defines a method to close an order given proper inputs. */
export const closeLease = buildTx<MsgCloseLease>({
  msg: MsgCloseLease
});