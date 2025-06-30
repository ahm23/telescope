import { useMemo } from 'react';
import { useGetProposals } from 'outputicjs/cosmos/gov/v1beta1/query.rpc.react';
import { ProposalStatus, proposalStatusToJSON } from 'outputicjs/cosmos/gov/v1beta1/gov';
import { defaultContext } from '@tanstack/react-query';

export const useVoting = (chainName: string) => {
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const proposalsQuery = useGetProposals({
    request: {
      proposalStatus: proposalStatusToJSON(ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD),
      voter: '',
      depositor: '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 50n,
        countTotal: true,
        reverse: true,
      },
    },
    options: {
      context: defaultContext,
      enabled: !!rpcEndpoint,
      select: ({ proposals }) => proposals,
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['proposals', chainName],
  });

  const data = useMemo(() => {
    if (!proposalsQuery.data) return;

    return {
      proposals: proposalsQuery.data.map((proposal) => ({
        proposalId: proposal.proposalId.toString(),
        title: proposal.content?.title || '',
        description: proposal.content?.description || '',
        status: proposal.status,
        submitTime: proposal.submitTime,
        votingStartTime: proposal.votingStartTime,
        votingEndTime: proposal.votingEndTime,
      })),
    };
  }, [proposalsQuery.data]);

  return {
    data,
    isLoading: proposalsQuery.isLoading,
    refetch: proposalsQuery.refetch,
  };
};
