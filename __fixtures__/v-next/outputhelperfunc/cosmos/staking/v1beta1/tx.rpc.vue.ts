import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { buildTx } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";
import { createValidator, editValidator, delegate, beginRedelegate, undelegate } from "./tx.rpc.func";
/* CreateValidator defines a method for creating a new validator. */
export const useCreateValidator = buildUseVueMutation<MsgCreateValidator, Error>({
  builderMutationFn: createValidator
});
/* EditValidator defines a method for editing an existing validator. */
export const useEditValidator = buildUseVueMutation<MsgEditValidator, Error>({
  builderMutationFn: editValidator
});
/* Delegate defines a method for performing a delegation of coins
 from a delegator to a validator. */
export const useDelegate = buildUseVueMutation<MsgDelegate, Error>({
  builderMutationFn: delegate
});
/* BeginRedelegate defines a method for performing a redelegation
 of coins from a delegator and source validator to a destination validator. */
export const useBeginRedelegate = buildUseVueMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: beginRedelegate
});
/* Undelegate defines a method for performing an undelegation from a
 delegate and a validator. */
export const useUndelegate = buildUseVueMutation<MsgUndelegate, Error>({
  builderMutationFn: undelegate
});