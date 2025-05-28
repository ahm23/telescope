import { buildUseQuery } from "../../../react-query";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
import { getGroupInfo, getGroupPolicyInfo, getGroupMembers, getGroupsByAdmin, getGroupPoliciesByGroup, getGroupPoliciesByAdmin, getProposal, getProposalsByGroupPolicy, getVoteByProposalVoter, getVotesByProposal, getVotesByVoter, getGroupsByMember, getTallyResult } from "./query.rpc.func";
/* GroupInfo queries group info based on group id. */
export const useGetGroupInfo = buildUseQuery<QueryGroupInfoRequest, QueryGroupInfoResponse>({
  builderQueryFn: getGroupInfo,
  queryKeyPrefix: "GroupInfoQuery"
});
/* GroupPolicyInfo queries group policy info based on account address of group policy. */
export const useGetGroupPolicyInfo = buildUseQuery<QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse>({
  builderQueryFn: getGroupPolicyInfo,
  queryKeyPrefix: "GroupPolicyInfoQuery"
});
/* GroupMembers queries members of a group */
export const useGetGroupMembers = buildUseQuery<QueryGroupMembersRequest, QueryGroupMembersResponse>({
  builderQueryFn: getGroupMembers,
  queryKeyPrefix: "GroupMembersQuery"
});
/* GroupsByAdmin queries groups by admin address. */
export const useGetGroupsByAdmin = buildUseQuery<QueryGroupsByAdminRequest, QueryGroupsByAdminResponse>({
  builderQueryFn: getGroupsByAdmin,
  queryKeyPrefix: "GroupsByAdminQuery"
});
/* GroupPoliciesByGroup queries group policies by group id. */
export const useGetGroupPoliciesByGroup = buildUseQuery<QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse>({
  builderQueryFn: getGroupPoliciesByGroup,
  queryKeyPrefix: "GroupPoliciesByGroupQuery"
});
/* GroupsByAdmin queries group policies by admin address. */
export const useGetGroupPoliciesByAdmin = buildUseQuery<QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse>({
  builderQueryFn: getGroupPoliciesByAdmin,
  queryKeyPrefix: "GroupPoliciesByAdminQuery"
});
/* Proposal queries a proposal based on proposal id. */
export const useGetProposal = buildUseQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: getProposal,
  queryKeyPrefix: "ProposalQuery"
});
/* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
export const useGetProposalsByGroupPolicy = buildUseQuery<QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse>({
  builderQueryFn: getProposalsByGroupPolicy,
  queryKeyPrefix: "ProposalsByGroupPolicyQuery"
});
/* VoteByProposalVoter queries a vote by proposal id and voter. */
export const useGetVoteByProposalVoter = buildUseQuery<QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse>({
  builderQueryFn: getVoteByProposalVoter,
  queryKeyPrefix: "VoteByProposalVoterQuery"
});
/* VotesByProposal queries a vote by proposal. */
export const useGetVotesByProposal = buildUseQuery<QueryVotesByProposalRequest, QueryVotesByProposalResponse>({
  builderQueryFn: getVotesByProposal,
  queryKeyPrefix: "VotesByProposalQuery"
});
/* VotesByVoter queries a vote by voter. */
export const useGetVotesByVoter = buildUseQuery<QueryVotesByVoterRequest, QueryVotesByVoterResponse>({
  builderQueryFn: getVotesByVoter,
  queryKeyPrefix: "VotesByVoterQuery"
});
/* GroupsByMember queries groups by member address. */
export const useGetGroupsByMember = buildUseQuery<QueryGroupsByMemberRequest, QueryGroupsByMemberResponse>({
  builderQueryFn: getGroupsByMember,
  queryKeyPrefix: "GroupsByMemberQuery"
});
/* TallyResult queries the tally of a proposal votes. */
export const useGetTallyResult = buildUseQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: getTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});