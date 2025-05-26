import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { buildUseVueQuery } from "../../../vue-query";
import { QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsRequestSDKType, QueryProposalsResponse, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteRequestSDKType, QueryVoteResponse, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesRequestSDKType, QueryVotesResponse, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositRequestSDKType, QueryDepositResponse, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsRequestSDKType, QueryDepositsResponse, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
import { getProposal, getProposals, helperVote, helperVotes, getParams, checkDeposit, goOverDeposits, getTallyResult } from "./query.rpc.func";
/* Proposal queries proposal details based on ProposalID. */
export const useGetProposal = buildUseVueQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: getProposal,
  queryKeyPrefix: "ProposalQuery"
});
/* Proposals queries all proposals based on given status. */
export const useGetProposals = buildUseVueQuery<QueryProposalsRequest, QueryProposalsResponse>({
  builderQueryFn: getProposals,
  queryKeyPrefix: "ProposalsQuery"
});
/* Vote queries voted information based on proposalID, voterAddr. */
export const useHelperVote = buildUseVueQuery<QueryVoteRequest, QueryVoteResponse>({
  builderQueryFn: helperVote,
  queryKeyPrefix: "VoteQuery"
});
/* Votes queries votes of a given proposal. */
export const useHelperVotes = buildUseVueQuery<QueryVotesRequest, QueryVotesResponse>({
  builderQueryFn: helperVotes,
  queryKeyPrefix: "VotesQuery"
});
/* Params queries all parameters of the gov module. */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* Deposit queries single deposit information based proposalID, depositAddr. */
export const useCheckDeposit = buildUseVueQuery<QueryDepositRequest, QueryDepositResponse>({
  builderQueryFn: checkDeposit,
  queryKeyPrefix: "DepositQuery"
});
/* Deposits queries all deposits of a single proposal. */
export const useGoOverDeposits = buildUseVueQuery<QueryDepositsRequest, QueryDepositsResponse>({
  builderQueryFn: goOverDeposits,
  queryKeyPrefix: "DepositsQuery"
});
/* TallyResult queries the tally of a proposal vote. */
export const useGetTallyResult = buildUseVueQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: getTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});