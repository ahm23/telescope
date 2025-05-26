import { buildUseMutation } from "../../../react-query";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
import { createValidator, editValidator, delegate, beginRedelegate, undelegate } from "./tx.rpc.func";
/* CreateValidator defines a method for creating a new validator. */
export const useCreateValidator = buildUseMutation<MsgCreateValidator, Error>({
  builderMutationFn: createValidator
});
/* EditValidator defines a method for editing an existing validator. */
export const useEditValidator = buildUseMutation<MsgEditValidator, Error>({
  builderMutationFn: editValidator
});
/* Delegate defines a method for performing a delegation of coins
 from a delegator to a validator. */
export const useDelegate = buildUseMutation<MsgDelegate, Error>({
  builderMutationFn: delegate
});
/* BeginRedelegate defines a method for performing a redelegation
 of coins from a delegator and source validator to a destination validator. */
export const useBeginRedelegate = buildUseMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: beginRedelegate
});
/* Undelegate defines a method for performing an undelegation from a
 delegate and a validator. */
export const useUndelegate = buildUseMutation<MsgUndelegate, Error>({
  builderMutationFn: undelegate
});