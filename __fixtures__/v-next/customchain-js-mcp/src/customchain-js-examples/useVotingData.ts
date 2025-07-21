import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import {
  useGetProposals,
  useGetVote,
  useGetTallyResult,
} from 'customchain-js/cosmos/gov/v1beta1/query.rpc.react';
import { ProposalStatus, proposalStatusToJSON } from 'customchain-js/cosmos/gov/v1beta1/gov';
import { defaultContext } from '@tanstack/react-query';

export const useVotingData = (chainName: string) => {
  const { address } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const isEnabled = !!rpcEndpoint;

  const proposalsQuery = useGetProposals({
    request: {
      proposalStatus: proposalStatusToJSON(ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED),
      voter: '',
      depositor: '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 100n,
        countTotal: true,
        reverse: true,
      },
    },
    options: {
      context: defaultContext,
      enabled: isEnabled,
      select: ({ proposals }) => proposals,
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['allProposals', chainName],
  });

  const activeProposals = useMemo(() => {
    return proposalsQuery.data?.filter(
      (proposal) => proposal.status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
    ) || [];
  }, [proposalsQuery.data]);

  const data = useMemo(() => {
    if (!proposalsQuery.data) return;

    const categorized = {
      active: activeProposals,
      passed: proposalsQuery.data.filter(
        (p) => p.status === ProposalStatus.PROPOSAL_STATUS_PASSED
      ),
      rejected: proposalsQuery.data.filter(
        (p) => p.status === ProposalStatus.PROPOSAL_STATUS_REJECTED
      ),
      failed: proposalsQuery.data.filter(
        (p) => p.status === ProposalStatus.PROPOSAL_STATUS_FAILED
      ),
    };

    return {
      proposals: proposalsQuery.data,
      categorized,
      activeCount: categorized.active.length,
    };
  }, [proposalsQuery.data, activeProposals]);

  return {
    data,
    isLoading: proposalsQuery.isLoading,
    refetch: proposalsQuery.refetch,
  };
};
