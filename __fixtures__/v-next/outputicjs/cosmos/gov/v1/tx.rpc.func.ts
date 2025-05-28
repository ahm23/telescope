import { buildTx } from "../../../helper-func-types";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
/* SubmitProposal defines a method to create new proposal given a content. */
export const submitProposal = buildTx<MsgSubmitProposal>({
  msg: MsgSubmitProposal
});
/* ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
 to execute a legacy content-based proposal. */
export const execLegacyContent = buildTx<MsgExecLegacyContent>({
  msg: MsgExecLegacyContent
});
/* Vote defines a method to add a vote on a specific proposal. */
export const vote = buildTx<MsgVote>({
  msg: MsgVote
});
/* VoteWeighted defines a method to add a weighted vote on a specific proposal. */
export const voteWeighted = buildTx<MsgVoteWeighted>({
  msg: MsgVoteWeighted
});
/* Deposit defines a method to add deposit on a specific proposal. */
export const deposit = buildTx<MsgDeposit>({
  msg: MsgDeposit
});