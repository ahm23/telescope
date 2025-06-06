import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { buildUseVueQuery } from "../../../vue-query";
import { QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsRequestSDKType, QueryProposalsResponse, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteRequestSDKType, QueryVoteResponse, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesRequestSDKType, QueryVotesResponse, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositRequestSDKType, QueryDepositResponse, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsRequestSDKType, QueryDepositsResponse, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
import { getProposal, getProposals, helperVote, helperVotes, getParams, checkDeposit, goOverDeposits, getTallyResult } from "./query.rpc.func";
/**
 * Proposal queries proposal details based on ProposalID.
 * @name useGetProposal
 * @package cosmos.gov.v1beta1
 * @see protoservice: cosmos.gov.v1beta1.Proposal
 */
export const useGetProposal = buildUseQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: getProposal,
  queryKeyPrefix: "ProposalQuery"
});
/**
 * Proposals queries all proposals based on given status.
 * @name useGetProposals
 * @package cosmos.gov.v1beta1
 * @see protoservice: cosmos.gov.v1beta1.Proposals
 */
export const useGetProposals = buildUseQuery<QueryProposalsRequest, QueryProposalsResponse>({
  builderQueryFn: getProposals,
  queryKeyPrefix: "ProposalsQuery"
});
/**
 * Vote queries voted information based on proposalID, voterAddr.
 * @name useHelperVote
 * @package cosmos.gov.v1beta1
 * @see protoservice: cosmos.gov.v1beta1.Vote
 */
export const useHelperVote = buildUseQuery<QueryVoteRequest, QueryVoteResponse>({
  builderQueryFn: helperVote,
  queryKeyPrefix: "VoteQuery"
});
/**
 * Votes queries votes of a given proposal.
 * @name useHelperVotes
 * @package cosmos.gov.v1beta1
 * @see protoservice: cosmos.gov.v1beta1.Votes
 */
export const useHelperVotes = buildUseQuery<QueryVotesRequest, QueryVotesResponse>({
  builderQueryFn: helperVotes,
  queryKeyPrefix: "VotesQuery"
});
/**
 * Params queries all parameters of the gov module.
 * @name useGetParams
 * @package cosmos.gov.v1beta1
 * @see protoservice: cosmos.gov.v1beta1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * Deposit queries single deposit information based proposalID, depositAddr.
 * @name useCheckDeposit
 * @package cosmos.gov.v1beta1
 * @see protoservice: cosmos.gov.v1beta1.Deposit
 */
export const useCheckDeposit = buildUseQuery<QueryDepositRequest, QueryDepositResponse>({
  builderQueryFn: checkDeposit,
  queryKeyPrefix: "DepositQuery"
});
/**
 * Deposits queries all deposits of a single proposal.
 * @name useGoOverDeposits
 * @package cosmos.gov.v1beta1
 * @see protoservice: cosmos.gov.v1beta1.Deposits
 */
export const useGoOverDeposits = buildUseQuery<QueryDepositsRequest, QueryDepositsResponse>({
  builderQueryFn: goOverDeposits,
  queryKeyPrefix: "DepositsQuery"
});
/**
 * TallyResult queries the tally of a proposal vote.
 * @name useGetTallyResult
 * @package cosmos.gov.v1beta1
 * @see protoservice: cosmos.gov.v1beta1.TallyResult
 */
export const useGetTallyResult = buildUseQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: getTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});