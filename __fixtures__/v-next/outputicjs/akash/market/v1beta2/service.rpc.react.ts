import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { buildUseMutation } from "../../../react-query";
import { createBid, closeBid, withdrawLease, createLease, closeLease } from "./service.rpc.func";
/* CreateBid defines a method to create a bid given proper inputs. */
export const useCreateBid = buildUseMutation<MsgCreateBid, Error>({
  builderMutationFn: createBid
});
/* CloseBid defines a method to close a bid given proper inputs. */
export const useCloseBid = buildUseMutation<MsgCloseBid, Error>({
  builderMutationFn: closeBid
});
/* WithdrawLease withdraws accrued funds from the lease payment */
export const useWithdrawLease = buildUseMutation<MsgWithdrawLease, Error>({
  builderMutationFn: withdrawLease
});
/* CreateLease creates a new lease */
export const useCreateLease = buildUseMutation<MsgCreateLease, Error>({
  builderMutationFn: createLease
});
/* CloseLease defines a method to close an order given proper inputs. */
export const useCloseLease = buildUseMutation<MsgCloseLease, Error>({
  builderMutationFn: closeLease
});