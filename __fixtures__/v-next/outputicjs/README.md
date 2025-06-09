# Generated Code

# Package Documentation


## akash.audit.v1beta1

### Transaction Methods

**SignProviderAttributes**
- Function: `signProviderAttributesAkashAuditV1beta1`
- Hook: `useSignProviderAttributesAkashAuditV1beta1`
- Description: SignProviderAttributes defines a method that signs provider attributes
- Request: MsgSignProviderAttributes
- Response: MsgSignProviderAttributesResponse

**DeleteProviderAttributes**
- Function: `deleteProviderAttributesAkashAuditV1beta1`
- Hook: `useDeleteProviderAttributesAkashAuditV1beta1`
- Description: DeleteProviderAttributes defines a method that deletes provider attributes
- Request: MsgDeleteProviderAttributes
- Response: MsgDeleteProviderAttributesResponse


## akash.audit.v1beta2

### Query Methods

**AllProvidersAttributes**
- Function: `getAllProvidersAttributes`
- Hook: `useGetAllProvidersAttributes`
- Description: AllProvidersAttributes queries all providers
 buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
- Request: QueryAllProvidersAttributesRequest
- Response: QueryProvidersResponse

**ProviderAttributes**
- Function: `getProviderAttributes`
- Hook: `useGetProviderAttributes`
- Description: ProviderAttributes queries all provider signed attributes
 buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
- Request: QueryProviderAttributesRequest
- Response: QueryProvidersResponse

**ProviderAuditorAttributes**
- Function: `getProviderAuditorAttributes`
- Hook: `useGetProviderAuditorAttributes`
- Description: ProviderAuditorAttributes queries provider signed attributes by specific auditor
 buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
- Request: QueryProviderAuditorRequest
- Response: QueryProvidersResponse

**AuditorAttributes**
- Function: `getAuditorAttributes`
- Hook: `useGetAuditorAttributes`
- Description: AuditorAttributes queries all providers signed by this auditor
 buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
- Request: QueryAuditorAttributesRequest
- Response: QueryProvidersResponse

### Transaction Methods

**SignProviderAttributes**
- Function: `signProviderAttributesAkashAuditV1beta2`
- Hook: `useSignProviderAttributesAkashAuditV1beta2`
- Description: SignProviderAttributes defines a method that signs provider attributes
- Request: MsgSignProviderAttributes
- Response: MsgSignProviderAttributesResponse

**DeleteProviderAttributes**
- Function: `deleteProviderAttributesAkashAuditV1beta2`
- Hook: `useDeleteProviderAttributesAkashAuditV1beta2`
- Description: DeleteProviderAttributes defines a method that deletes provider attributes
- Request: MsgDeleteProviderAttributes
- Response: MsgDeleteProviderAttributesResponse


## akash.cert.v1beta2

### Query Methods

**Certificates**
- Function: `getCertificates`
- Hook: `useGetCertificates`
- Description: Certificates queries certificates
- Request: QueryCertificatesRequest
- Response: QueryCertificatesResponse

### Transaction Methods

**CreateCertificate**
- Function: `createCertificate`
- Hook: `useCreateCertificate`
- Description: CreateCertificate defines a method to create new certificate given proper inputs.
- Request: MsgCreateCertificate
- Response: MsgCreateCertificateResponse

**RevokeCertificate**
- Function: `revokeCertificate`
- Hook: `useRevokeCertificate`
- Description: RevokeCertificate defines a method to revoke the certificate
- Request: MsgRevokeCertificate
- Response: MsgRevokeCertificateResponse


## akash.deployment.v1beta1

### Query Methods

**Deployments**
- Function: `getDeploymentsAkashDeploymentV1beta1`
- Hook: `useGetDeploymentsAkashDeploymentV1beta1`
- Description: Deployments queries deployments
- Request: QueryDeploymentsRequest
- Response: QueryDeploymentsResponse

**Deployment**
- Function: `getDeploymentAkashDeploymentV1beta1`
- Hook: `useGetDeploymentAkashDeploymentV1beta1`
- Description: Deployment queries deployment details
- Request: QueryDeploymentRequest
- Response: QueryDeploymentResponse

**Group**
- Function: `getGroupAkashDeploymentV1beta1`
- Hook: `useGetGroupAkashDeploymentV1beta1`
- Description: Group queries group details
- Request: QueryGroupRequest
- Response: QueryGroupResponse

### Transaction Methods

**CreateDeployment**
- Function: `createDeploymentAkashDeploymentV1beta1`
- Hook: `useCreateDeploymentAkashDeploymentV1beta1`
- Description: CreateDeployment defines a method to create new deployment given proper inputs.
- Request: MsgCreateDeployment
- Response: MsgCreateDeploymentResponse

**DepositDeployment**
- Function: `depositDeploymentAkashDeploymentV1beta1`
- Hook: `useDepositDeploymentAkashDeploymentV1beta1`
- Description: DepositDeployment deposits more funds into the deployment account
- Request: MsgDepositDeployment
- Response: MsgDepositDeploymentResponse

**UpdateDeployment**
- Function: `updateDeploymentAkashDeploymentV1beta1`
- Hook: `useUpdateDeploymentAkashDeploymentV1beta1`
- Description: UpdateDeployment defines a method to update a deployment given proper inputs.
- Request: MsgUpdateDeployment
- Response: MsgUpdateDeploymentResponse

**CloseDeployment**
- Function: `closeDeploymentAkashDeploymentV1beta1`
- Hook: `useCloseDeploymentAkashDeploymentV1beta1`
- Description: CloseDeployment defines a method to close a deployment given proper inputs.
- Request: MsgCloseDeployment
- Response: MsgCloseDeploymentResponse

**CloseGroup**
- Function: `closeGroupAkashDeploymentV1beta1`
- Hook: `useCloseGroupAkashDeploymentV1beta1`
- Description: CloseGroup defines a method to close a group of a deployment given proper inputs.
- Request: MsgCloseGroup
- Response: MsgCloseGroupResponse

**PauseGroup**
- Function: `pauseGroupAkashDeploymentV1beta1`
- Hook: `usePauseGroupAkashDeploymentV1beta1`
- Description: PauseGroup defines a method to close a group of a deployment given proper inputs.
- Request: MsgPauseGroup
- Response: MsgPauseGroupResponse

**StartGroup**
- Function: `startGroupAkashDeploymentV1beta1`
- Hook: `useStartGroupAkashDeploymentV1beta1`
- Description: StartGroup defines a method to close a group of a deployment given proper inputs.
- Request: MsgStartGroup
- Response: MsgStartGroupResponse


## akash.deployment.v1beta2

### Query Methods

**Deployments**
- Function: `getDeploymentsAkashDeploymentV1beta2`
- Hook: `useGetDeploymentsAkashDeploymentV1beta2`
- Description: Deployments queries deployments
- Request: QueryDeploymentsRequest
- Response: QueryDeploymentsResponse

**Deployment**
- Function: `getDeploymentAkashDeploymentV1beta2`
- Hook: `useGetDeploymentAkashDeploymentV1beta2`
- Description: Deployment queries deployment details
- Request: QueryDeploymentRequest
- Response: QueryDeploymentResponse

**Group**
- Function: `getGroupAkashDeploymentV1beta2`
- Hook: `useGetGroupAkashDeploymentV1beta2`
- Description: Group queries group details
- Request: QueryGroupRequest
- Response: QueryGroupResponse

### Transaction Methods

**CreateDeployment**
- Function: `createDeploymentAkashDeploymentV1beta2`
- Hook: `useCreateDeploymentAkashDeploymentV1beta2`
- Description: CreateDeployment defines a method to create new deployment given proper inputs.
- Request: MsgCreateDeployment
- Response: MsgCreateDeploymentResponse

**DepositDeployment**
- Function: `depositDeploymentAkashDeploymentV1beta2`
- Hook: `useDepositDeploymentAkashDeploymentV1beta2`
- Description: DepositDeployment deposits more funds into the deployment account
- Request: MsgDepositDeployment
- Response: MsgDepositDeploymentResponse

**UpdateDeployment**
- Function: `updateDeploymentAkashDeploymentV1beta2`
- Hook: `useUpdateDeploymentAkashDeploymentV1beta2`
- Description: UpdateDeployment defines a method to update a deployment given proper inputs.
- Request: MsgUpdateDeployment
- Response: MsgUpdateDeploymentResponse

**CloseDeployment**
- Function: `closeDeploymentAkashDeploymentV1beta2`
- Hook: `useCloseDeploymentAkashDeploymentV1beta2`
- Description: CloseDeployment defines a method to close a deployment given proper inputs.
- Request: MsgCloseDeployment
- Response: MsgCloseDeploymentResponse

**CloseGroup**
- Function: `closeGroupAkashDeploymentV1beta2`
- Hook: `useCloseGroupAkashDeploymentV1beta2`
- Description: CloseGroup defines a method to close a group of a deployment given proper inputs.
- Request: MsgCloseGroup
- Response: MsgCloseGroupResponse

**PauseGroup**
- Function: `pauseGroupAkashDeploymentV1beta2`
- Hook: `usePauseGroupAkashDeploymentV1beta2`
- Description: PauseGroup defines a method to close a group of a deployment given proper inputs.
- Request: MsgPauseGroup
- Response: MsgPauseGroupResponse

**StartGroup**
- Function: `startGroupAkashDeploymentV1beta2`
- Hook: `useStartGroupAkashDeploymentV1beta2`
- Description: StartGroup defines a method to close a group of a deployment given proper inputs.
- Request: MsgStartGroup
- Response: MsgStartGroupResponse


## akash.escrow.v1beta1

### Query Methods

**Accounts**
- Function: `getAccountsAkashEscrowV1beta1`
- Hook: `useGetAccountsAkashEscrowV1beta1`
- Description: buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 Accounts queries all accounts
- Request: QueryAccountsRequest
- Response: QueryAccountsResponse

**Payments**
- Function: `getPaymentsAkashEscrowV1beta1`
- Hook: `useGetPaymentsAkashEscrowV1beta1`
- Description: buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 Payments queries all payments
- Request: QueryPaymentsRequest
- Response: QueryPaymentsResponse


## akash.escrow.v1beta2

### Query Methods

**Accounts**
- Function: `getAccountsAkashEscrowV1beta2`
- Hook: `useGetAccountsAkashEscrowV1beta2`
- Description: buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 Accounts queries all accounts
- Request: QueryAccountsRequest
- Response: QueryAccountsResponse

**Payments**
- Function: `getPaymentsAkashEscrowV1beta2`
- Hook: `useGetPaymentsAkashEscrowV1beta2`
- Description: buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 Payments queries all payments
- Request: QueryPaymentsRequest
- Response: QueryPaymentsResponse


## akash.market.v1beta2

### Query Methods

**Orders**
- Function: `getOrders`
- Hook: `useGetOrders`
- Description: Orders queries orders with filters
- Request: QueryOrdersRequest
- Response: QueryOrdersResponse

**Order**
- Function: `getOrder`
- Hook: `useGetOrder`
- Description: Order queries order details
- Request: QueryOrderRequest
- Response: QueryOrderResponse

**Bids**
- Function: `getBids`
- Hook: `useGetBids`
- Description: Bids queries bids with filters
- Request: QueryBidsRequest
- Response: QueryBidsResponse

**Bid**
- Function: `getBid`
- Hook: `useGetBid`
- Description: Bid queries bid details
- Request: QueryBidRequest
- Response: QueryBidResponse

**Leases**
- Function: `getLeases`
- Hook: `useGetLeases`
- Description: Leases queries leases with filters
- Request: QueryLeasesRequest
- Response: QueryLeasesResponse

**Lease**
- Function: `getLease`
- Hook: `useGetLease`
- Description: Lease queries lease details
- Request: QueryLeaseRequest
- Response: QueryLeaseResponse

### Transaction Methods

**CreateBid**
- Function: `createBid`
- Hook: `useCreateBid`
- Description: CreateBid defines a method to create a bid given proper inputs.
- Request: MsgCreateBid
- Response: MsgCreateBidResponse

**CloseBid**
- Function: `closeBid`
- Hook: `useCloseBid`
- Description: CloseBid defines a method to close a bid given proper inputs.
- Request: MsgCloseBid
- Response: MsgCloseBidResponse

**WithdrawLease**
- Function: `withdrawLease`
- Hook: `useWithdrawLease`
- Description: WithdrawLease withdraws accrued funds from the lease payment
- Request: MsgWithdrawLease
- Response: MsgWithdrawLeaseResponse

**CreateLease**
- Function: `createLease`
- Hook: `useCreateLease`
- Description: CreateLease creates a new lease
- Request: MsgCreateLease
- Response: MsgCreateLeaseResponse

**CloseLease**
- Function: `closeLease`
- Hook: `useCloseLease`
- Description: CloseLease defines a method to close an order given proper inputs.
- Request: MsgCloseLease
- Response: MsgCloseLeaseResponse


## akash.provider.v1beta1

### Transaction Methods

**CreateProvider**
- Function: `createProviderAkashProviderV1beta1`
- Hook: `useCreateProviderAkashProviderV1beta1`
- Description: CreateProvider defines a method that creates a provider given the proper inputs
- Request: MsgCreateProvider
- Response: MsgCreateProviderResponse

**UpdateProvider**
- Function: `updateProviderAkashProviderV1beta1`
- Hook: `useUpdateProviderAkashProviderV1beta1`
- Description: UpdateProvider defines a method that updates a provider given the proper inputs
- Request: MsgUpdateProvider
- Response: MsgUpdateProviderResponse

**DeleteProvider**
- Function: `deleteProviderAkashProviderV1beta1`
- Hook: `useDeleteProviderAkashProviderV1beta1`
- Description: DeleteProvider defines a method that deletes a provider given the proper inputs
- Request: MsgDeleteProvider
- Response: MsgDeleteProviderResponse


## akash.provider.v1beta2

### Query Methods

**Providers**
- Function: `getProviders`
- Hook: `useGetProviders`
- Description: Providers queries providers
- Request: QueryProvidersRequest
- Response: QueryProvidersResponse

**Provider**
- Function: `getProvider`
- Hook: `useGetProvider`
- Description: Provider queries provider details
- Request: QueryProviderRequest
- Response: QueryProviderResponse

### Transaction Methods

**CreateProvider**
- Function: `createProviderAkashProviderV1beta2`
- Hook: `useCreateProviderAkashProviderV1beta2`
- Description: CreateProvider defines a method that creates a provider given the proper inputs
- Request: MsgCreateProvider
- Response: MsgCreateProviderResponse

**UpdateProvider**
- Function: `updateProviderAkashProviderV1beta2`
- Hook: `useUpdateProviderAkashProviderV1beta2`
- Description: UpdateProvider defines a method that updates a provider given the proper inputs
- Request: MsgUpdateProvider
- Response: MsgUpdateProviderResponse

**DeleteProvider**
- Function: `deleteProviderAkashProviderV1beta2`
- Hook: `useDeleteProviderAkashProviderV1beta2`
- Description: DeleteProvider defines a method that deletes a provider given the proper inputs
- Request: MsgDeleteProvider
- Response: MsgDeleteProviderResponse


## cosmos.app.v1alpha1

### Query Methods

**Config**
- Function: `getConfig`
- Hook: `useGetConfig`
- Description: Config returns the current app config.
- Request: QueryConfigRequest
- Response: QueryConfigResponse


## cosmos.auth.v1beta1

### Query Methods

**Accounts**
- Function: `getAccountsCosmosAuthV1beta1`
- Hook: `useGetAccountsCosmosAuthV1beta1`
- Description: Accounts returns all the existing accounts

 Since: cosmos-sdk 0.43
- Request: QueryAccountsRequest
- Response: QueryAccountsResponse

**Account**
- Function: `getAccount`
- Hook: `useGetAccount`
- Description: Account returns account details based on address.
- Request: QueryAccountRequest
- Response: QueryAccountResponse

**Params**
- Function: `getCosmosAuthV1beta1Params`
- Hook: `useGetCosmosAuthV1beta1Params`
- Description: Params queries all parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**ModuleAccounts**
- Function: `getModuleAccounts`
- Hook: `useGetModuleAccounts`
- Description: ModuleAccounts returns all the existing module accounts.
- Request: QueryModuleAccountsRequest
- Response: QueryModuleAccountsResponse

**Bech32Prefix**
- Function: `getBech32Prefix`
- Hook: `useGetBech32Prefix`
- Description: Bech32 queries bech32Prefix
- Request: Bech32PrefixRequest
- Response: Bech32PrefixResponse

**AddressBytesToString**
- Function: `getAddressBytesToString`
- Hook: `useGetAddressBytesToString`
- Description: AddressBytesToString converts Account Address bytes to string
- Request: AddressBytesToStringRequest
- Response: AddressBytesToStringResponse

**AddressStringToBytes**
- Function: `getAddressStringToBytes`
- Hook: `useGetAddressStringToBytes`
- Description: AddressStringToBytes converts Address string to bytes
- Request: AddressStringToBytesRequest
- Response: AddressStringToBytesResponse


## cosmos.authz.v1beta1

### Query Methods

**Grants**
- Function: `getGrants`
- Hook: `useGetGrants`
- Description: Returns list of `Authorization`, granted to the grantee by the granter.
- Request: QueryGrantsRequest
- Response: QueryGrantsResponse

**GranterGrants**
- Function: `getGranterGrants`
- Hook: `useGetGranterGrants`
- Description: GranterGrants returns list of `GrantAuthorization`, granted by granter.

 Since: cosmos-sdk 0.46
- Request: QueryGranterGrantsRequest
- Response: QueryGranterGrantsResponse

**GranteeGrants**
- Function: `getGranteeGrants`
- Hook: `useGetGranteeGrants`
- Description: GranteeGrants returns a list of `GrantAuthorization` by grantee.

 Since: cosmos-sdk 0.46
- Request: QueryGranteeGrantsRequest
- Response: QueryGranteeGrantsResponse

### Transaction Methods

**Grant**
- Function: `grant`
- Hook: `useGrant`
- Description: Grant grants the provided authorization to the grantee on the granter's
 account with the provided expiration time. If there is already a grant
 for the given (granter, grantee, Authorization) triple, then the grant
 will be overwritten.
- Request: MsgGrant
- Response: MsgGrantResponse

**Exec**
- Function: `execCosmosAuthzV1beta1`
- Hook: `useExecCosmosAuthzV1beta1`
- Description: Exec attempts to execute the provided messages using
 authorizations granted to the grantee. Each message should have only
 one signer corresponding to the granter of the authorization.
- Request: MsgExec
- Response: MsgExecResponse

**Revoke**
- Function: `revoke`
- Hook: `useRevoke`
- Description: Revoke revokes any authorization corresponding to the provided method name on the
 granter's account that has been granted to the grantee.
- Request: MsgRevoke
- Response: MsgRevokeResponse


## cosmos.bank.v1beta1

### Query Methods

**Balance**
- Function: `getBalanceCosmosBankV1beta1`
- Hook: `useGetBalanceCosmosBankV1beta1`
- Description: Balance queries the balance of a single coin for a single account.
- Request: QueryBalanceRequest
- Response: QueryBalanceResponse

**AllBalances**
- Function: `getAllBalances`
- Hook: `useGetAllBalances`
- Description: AllBalances queries the balance of all coins for a single account.
- Request: QueryAllBalancesRequest
- Response: QueryAllBalancesResponse

**SpendableBalances**
- Function: `getSpendableBalances`
- Hook: `useGetSpendableBalances`
- Description: SpendableBalances queries the spenable balance of all coins for a single
 account.
- Request: QuerySpendableBalancesRequest
- Response: QuerySpendableBalancesResponse

**TotalSupply**
- Function: `getTotalSupply`
- Hook: `useGetTotalSupply`
- Description: TotalSupply queries the total supply of all coins.
- Request: QueryTotalSupplyRequest
- Response: QueryTotalSupplyResponse

**SupplyOf**
- Function: `getSupplyOf`
- Hook: `useGetSupplyOf`
- Description: SupplyOf queries the supply of a single coin.
- Request: QuerySupplyOfRequest
- Response: QuerySupplyOfResponse

**Params**
- Function: `getCosmosBankV1beta1Params`
- Hook: `useGetCosmosBankV1beta1Params`
- Description: Params queries the parameters of x/bank module.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**DenomMetadata**
- Function: `getDenomMetadata`
- Hook: `useGetDenomMetadata`
- Description: DenomsMetadata queries the client metadata of a given coin denomination.
- Request: QueryDenomMetadataRequest
- Response: QueryDenomMetadataResponse

**DenomsMetadata**
- Function: `getDenomsMetadata`
- Hook: `useGetDenomsMetadata`
- Description: DenomsMetadata queries the client metadata for all registered coin
 denominations.
- Request: QueryDenomsMetadataRequest
- Response: QueryDenomsMetadataResponse

**DenomOwners**
- Function: `getDenomOwners`
- Hook: `useGetDenomOwners`
- Description: DenomOwners queries for all account addresses that own a particular token
 denomination.
- Request: QueryDenomOwnersRequest
- Response: QueryDenomOwnersResponse

### Transaction Methods

**Send**
- Function: `sendCosmosBankV1beta1`
- Hook: `useSendCosmosBankV1beta1`
- Description: Send defines a method for sending coins from one account to another account.
- Request: MsgSend
- Response: MsgSendResponse

**MultiSend**
- Function: `multiSend`
- Hook: `useMultiSend`
- Description: MultiSend defines a method for sending coins from some accounts to other accounts.
- Request: MsgMultiSend
- Response: MsgMultiSendResponse


## cosmos.base.reflection.v1beta1


## cosmos.base.reflection.v2alpha1


## cosmos.base.tendermint.v1beta1


## cosmos.crisis.v1beta1

### Transaction Methods

**VerifyInvariant**
- Function: `verifyInvariant`
- Hook: `useVerifyInvariant`
- Description: VerifyInvariant defines a method to verify a particular invariance.
- Request: MsgVerifyInvariant
- Response: MsgVerifyInvariantResponse


## cosmos.distribution.v1beta1

### Query Methods

**Params**
- Function: `getCosmosDistributionV1beta1Params`
- Hook: `useGetCosmosDistributionV1beta1Params`
- Description: Params queries params of the distribution module.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**ValidatorOutstandingRewards**
- Function: `getValidatorOutstandingRewards`
- Hook: `useGetValidatorOutstandingRewards`
- Description: ValidatorOutstandingRewards queries rewards of a validator address.
- Request: QueryValidatorOutstandingRewardsRequest
- Response: QueryValidatorOutstandingRewardsResponse

**ValidatorCommission**
- Function: `getValidatorCommission`
- Hook: `useGetValidatorCommission`
- Description: ValidatorCommission queries accumulated commission for a validator.
- Request: QueryValidatorCommissionRequest
- Response: QueryValidatorCommissionResponse

**ValidatorSlashes**
- Function: `getValidatorSlashes`
- Hook: `useGetValidatorSlashes`
- Description: ValidatorSlashes queries slash events of a validator.
- Request: QueryValidatorSlashesRequest
- Response: QueryValidatorSlashesResponse

**DelegationRewards**
- Function: `getDelegationRewards`
- Hook: `useGetDelegationRewards`
- Description: DelegationRewards queries the total rewards accrued by a delegation.
- Request: QueryDelegationRewardsRequest
- Response: QueryDelegationRewardsResponse

**DelegationTotalRewards**
- Function: `getDelegationTotalRewards`
- Hook: `useGetDelegationTotalRewards`
- Description: DelegationTotalRewards queries the total rewards accrued by a each
 validator.
- Request: QueryDelegationTotalRewardsRequest
- Response: QueryDelegationTotalRewardsResponse

**DelegatorValidators**
- Function: `getDelegatorValidatorsCosmosDistributionV1beta1`
- Hook: `useGetDelegatorValidatorsCosmosDistributionV1beta1`
- Description: DelegatorValidators queries the validators of a delegator.
- Request: QueryDelegatorValidatorsRequest
- Response: QueryDelegatorValidatorsResponse

**DelegatorWithdrawAddress**
- Function: `getDelegatorWithdrawAddress`
- Hook: `useGetDelegatorWithdrawAddress`
- Description: DelegatorWithdrawAddress queries withdraw address of a delegator.
- Request: QueryDelegatorWithdrawAddressRequest
- Response: QueryDelegatorWithdrawAddressResponse

**CommunityPool**
- Function: `getCommunityPool`
- Hook: `useGetCommunityPool`
- Description: CommunityPool queries the community pool coins.
- Request: QueryCommunityPoolRequest
- Response: QueryCommunityPoolResponse

### Transaction Methods

**SetWithdrawAddress**
- Function: `setWithdrawAddress`
- Hook: `useSetWithdrawAddress`
- Description: SetWithdrawAddress defines a method to change the withdraw address
 for a delegator (or validator self-delegation).
- Request: MsgSetWithdrawAddress
- Response: MsgSetWithdrawAddressResponse

**WithdrawDelegatorReward**
- Function: `withdrawDelegatorReward`
- Hook: `useWithdrawDelegatorReward`
- Description: WithdrawDelegatorReward defines a method to withdraw rewards of delegator
 from a single validator.
- Request: MsgWithdrawDelegatorReward
- Response: MsgWithdrawDelegatorRewardResponse

**WithdrawValidatorCommission**
- Function: `withdrawValidatorCommission`
- Hook: `useWithdrawValidatorCommission`
- Description: WithdrawValidatorCommission defines a method to withdraw the
 full commission to the validator address.
- Request: MsgWithdrawValidatorCommission
- Response: MsgWithdrawValidatorCommissionResponse

**FundCommunityPool**
- Function: `fundCommunityPool`
- Hook: `useFundCommunityPool`
- Description: FundCommunityPool defines a method to allow an account to directly
 fund the community pool.
- Request: MsgFundCommunityPool
- Response: MsgFundCommunityPoolResponse


## cosmos.evidence.v1beta1

### Query Methods

**Evidence**
- Function: `getEvidence`
- Hook: `useGetEvidence`
- Description: Evidence queries evidence based on evidence hash.
- Request: QueryEvidenceRequest
- Response: QueryEvidenceResponse

**AllEvidence**
- Function: `getAllEvidence`
- Hook: `useGetAllEvidence`
- Description: AllEvidence queries all evidence.
- Request: QueryAllEvidenceRequest
- Response: QueryAllEvidenceResponse

### Transaction Methods

**SubmitEvidence**
- Function: `submitEvidence`
- Hook: `useSubmitEvidence`
- Description: SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
 counterfactual signing.
- Request: MsgSubmitEvidence
- Response: MsgSubmitEvidenceResponse


## cosmos.feegrant.v1beta1

### Query Methods

**Allowance**
- Function: `getAllowance`
- Hook: `useGetAllowance`
- Description: Allowance returns fee granted to the grantee by the granter.
- Request: QueryAllowanceRequest
- Response: QueryAllowanceResponse

**Allowances**
- Function: `getAllowances`
- Hook: `useGetAllowances`
- Description: Allowances returns all the grants for address.
- Request: QueryAllowancesRequest
- Response: QueryAllowancesResponse

**AllowancesByGranter**
- Function: `getAllowancesByGranter`
- Hook: `useGetAllowancesByGranter`
- Description: AllowancesByGranter returns all the grants given by an address
 Since v0.46
- Request: QueryAllowancesByGranterRequest
- Response: QueryAllowancesByGranterResponse

### Transaction Methods

**GrantAllowance**
- Function: `grantAllowance`
- Hook: `useGrantAllowance`
- Description: GrantAllowance grants fee allowance to the grantee on the granter's
 account with the provided expiration time.
- Request: MsgGrantAllowance
- Response: MsgGrantAllowanceResponse

**RevokeAllowance**
- Function: `revokeAllowance`
- Hook: `useRevokeAllowance`
- Description: RevokeAllowance revokes any fee allowance of granter's account that
 has been granted to the grantee.
- Request: MsgRevokeAllowance
- Response: MsgRevokeAllowanceResponse


## cosmos.gov.v1

### Query Methods

**Proposal**
- Function: `getProposalCosmosGovV1`
- Hook: `useGetProposalCosmosGovV1`
- Description: Proposal queries proposal details based on ProposalID.
- Request: QueryProposalRequest
- Response: QueryProposalResponse

**Proposals**
- Function: `getProposalsCosmosGovV1`
- Hook: `useGetProposalsCosmosGovV1`
- Description: Proposals queries all proposals based on given status.
- Request: QueryProposalsRequest
- Response: QueryProposalsResponse

**Vote**
- Function: `getVoteCosmosGovV1`
- Hook: `useGetVoteCosmosGovV1`
- Description: Vote queries voted information based on proposalID, voterAddr.
- Request: QueryVoteRequest
- Response: QueryVoteResponse

**Votes**
- Function: `getVotesCosmosGovV1`
- Hook: `useGetVotesCosmosGovV1`
- Description: Votes queries votes of a given proposal.
- Request: QueryVotesRequest
- Response: QueryVotesResponse

**Params**
- Function: `getCosmosGovV1Params`
- Hook: `useGetCosmosGovV1Params`
- Description: Params queries all parameters of the gov module.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**Deposit**
- Function: `getDepositCosmosGovV1`
- Hook: `useGetDepositCosmosGovV1`
- Description: Deposit queries single deposit information based proposalID, depositAddr.
- Request: QueryDepositRequest
- Response: QueryDepositResponse

**Deposits**
- Function: `getDepositsCosmosGovV1`
- Hook: `useGetDepositsCosmosGovV1`
- Description: Deposits queries all deposits of a single proposal.
- Request: QueryDepositsRequest
- Response: QueryDepositsResponse

**TallyResult**
- Function: `getTallyResultCosmosGovV1`
- Hook: `useGetTallyResultCosmosGovV1`
- Description: TallyResult queries the tally of a proposal vote.
- Request: QueryTallyResultRequest
- Response: QueryTallyResultResponse

### Transaction Methods

**SubmitProposal**
- Function: `submitProposalCosmosGovV1`
- Hook: `useSubmitProposalCosmosGovV1`
- Description: SubmitProposal defines a method to create new proposal given a content.
- Request: MsgSubmitProposal
- Response: MsgSubmitProposalResponse

**ExecLegacyContent**
- Function: `execLegacyContent`
- Hook: `useExecLegacyContent`
- Description: ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
 to execute a legacy content-based proposal.
- Request: MsgExecLegacyContent
- Response: MsgExecLegacyContentResponse

**Vote**
- Function: `voteCosmosGovV1`
- Hook: `useVoteCosmosGovV1`
- Description: Vote defines a method to add a vote on a specific proposal.
- Request: MsgVote
- Response: MsgVoteResponse

**VoteWeighted**
- Function: `voteWeightedCosmosGovV1`
- Hook: `useVoteWeightedCosmosGovV1`
- Description: VoteWeighted defines a method to add a weighted vote on a specific proposal.
- Request: MsgVoteWeighted
- Response: MsgVoteWeightedResponse

**Deposit**
- Function: `depositCosmosGovV1`
- Hook: `useDepositCosmosGovV1`
- Description: Deposit defines a method to add deposit on a specific proposal.
- Request: MsgDeposit
- Response: MsgDepositResponse


## cosmos.gov.v1beta1

### Query Methods

**Proposal**
- Function: `getProposalCosmosGovV1beta1`
- Hook: `useGetProposalCosmosGovV1beta1`
- Description: Proposal queries proposal details based on ProposalID.
- Request: QueryProposalRequest
- Response: QueryProposalResponse

**Proposals**
- Function: `getProposalsCosmosGovV1beta1`
- Hook: `useGetProposalsCosmosGovV1beta1`
- Description: Proposals queries all proposals based on given status.
- Request: QueryProposalsRequest
- Response: QueryProposalsResponse

**Vote**
- Function: `getVoteCosmosGovV1beta1`
- Hook: `useGetVoteCosmosGovV1beta1`
- Description: Vote queries voted information based on proposalID, voterAddr.
- Request: QueryVoteRequest
- Response: QueryVoteResponse

**Votes**
- Function: `getVotesCosmosGovV1beta1`
- Hook: `useGetVotesCosmosGovV1beta1`
- Description: Votes queries votes of a given proposal.
- Request: QueryVotesRequest
- Response: QueryVotesResponse

**Params**
- Function: `getCosmosGovV1beta1Params`
- Hook: `useGetCosmosGovV1beta1Params`
- Description: Params queries all parameters of the gov module.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**Deposit**
- Function: `getDepositCosmosGovV1beta1`
- Hook: `useGetDepositCosmosGovV1beta1`
- Description: Deposit queries single deposit information based proposalID, depositAddr.
- Request: QueryDepositRequest
- Response: QueryDepositResponse

**Deposits**
- Function: `getDepositsCosmosGovV1beta1`
- Hook: `useGetDepositsCosmosGovV1beta1`
- Description: Deposits queries all deposits of a single proposal.
- Request: QueryDepositsRequest
- Response: QueryDepositsResponse

**TallyResult**
- Function: `getTallyResultCosmosGovV1beta1`
- Hook: `useGetTallyResultCosmosGovV1beta1`
- Description: TallyResult queries the tally of a proposal vote.
- Request: QueryTallyResultRequest
- Response: QueryTallyResultResponse

### Transaction Methods

**SubmitProposal**
- Function: `submitProposalCosmosGovV1beta1`
- Hook: `useSubmitProposalCosmosGovV1beta1`
- Description: SubmitProposal defines a method to create new proposal given a content.
- Request: MsgSubmitProposal
- Response: MsgSubmitProposalResponse

**Vote**
- Function: `voteCosmosGovV1beta1`
- Hook: `useVoteCosmosGovV1beta1`
- Description: Vote defines a method to add a vote on a specific proposal.
- Request: MsgVote
- Response: MsgVoteResponse

**VoteWeighted**
- Function: `voteWeightedCosmosGovV1beta1`
- Hook: `useVoteWeightedCosmosGovV1beta1`
- Description: VoteWeighted defines a method to add a weighted vote on a specific proposal.

 Since: cosmos-sdk 0.43
- Request: MsgVoteWeighted
- Response: MsgVoteWeightedResponse

**Deposit**
- Function: `depositCosmosGovV1beta1`
- Hook: `useDepositCosmosGovV1beta1`
- Description: Deposit defines a method to add deposit on a specific proposal.
- Request: MsgDeposit
- Response: MsgDepositResponse


## cosmos.group.v1

### Query Methods

**GroupInfo**
- Function: `getGroupInfo`
- Hook: `useGetGroupInfo`
- Description: GroupInfo queries group info based on group id.
- Request: QueryGroupInfoRequest
- Response: QueryGroupInfoResponse

**GroupPolicyInfo**
- Function: `getGroupPolicyInfo`
- Hook: `useGetGroupPolicyInfo`
- Description: GroupPolicyInfo queries group policy info based on account address of group policy.
- Request: QueryGroupPolicyInfoRequest
- Response: QueryGroupPolicyInfoResponse

**GroupMembers**
- Function: `getGroupMembers`
- Hook: `useGetGroupMembers`
- Description: GroupMembers queries members of a group
- Request: QueryGroupMembersRequest
- Response: QueryGroupMembersResponse

**GroupsByAdmin**
- Function: `getGroupsByAdmin`
- Hook: `useGetGroupsByAdmin`
- Description: GroupsByAdmin queries groups by admin address.
- Request: QueryGroupsByAdminRequest
- Response: QueryGroupsByAdminResponse

**GroupPoliciesByGroup**
- Function: `getGroupPoliciesByGroup`
- Hook: `useGetGroupPoliciesByGroup`
- Description: GroupPoliciesByGroup queries group policies by group id.
- Request: QueryGroupPoliciesByGroupRequest
- Response: QueryGroupPoliciesByGroupResponse

**GroupPoliciesByAdmin**
- Function: `getGroupPoliciesByAdmin`
- Hook: `useGetGroupPoliciesByAdmin`
- Description: GroupsByAdmin queries group policies by admin address.
- Request: QueryGroupPoliciesByAdminRequest
- Response: QueryGroupPoliciesByAdminResponse

**Proposal**
- Function: `getProposalCosmosGroupV1`
- Hook: `useGetProposalCosmosGroupV1`
- Description: Proposal queries a proposal based on proposal id.
- Request: QueryProposalRequest
- Response: QueryProposalResponse

**ProposalsByGroupPolicy**
- Function: `getProposalsByGroupPolicy`
- Hook: `useGetProposalsByGroupPolicy`
- Description: ProposalsByGroupPolicy queries proposals based on account address of group policy.
- Request: QueryProposalsByGroupPolicyRequest
- Response: QueryProposalsByGroupPolicyResponse

**VoteByProposalVoter**
- Function: `getVoteByProposalVoter`
- Hook: `useGetVoteByProposalVoter`
- Description: VoteByProposalVoter queries a vote by proposal id and voter.
- Request: QueryVoteByProposalVoterRequest
- Response: QueryVoteByProposalVoterResponse

**VotesByProposal**
- Function: `getVotesByProposal`
- Hook: `useGetVotesByProposal`
- Description: VotesByProposal queries a vote by proposal.
- Request: QueryVotesByProposalRequest
- Response: QueryVotesByProposalResponse

**VotesByVoter**
- Function: `getVotesByVoter`
- Hook: `useGetVotesByVoter`
- Description: VotesByVoter queries a vote by voter.
- Request: QueryVotesByVoterRequest
- Response: QueryVotesByVoterResponse

**GroupsByMember**
- Function: `getGroupsByMember`
- Hook: `useGetGroupsByMember`
- Description: GroupsByMember queries groups by member address.
- Request: QueryGroupsByMemberRequest
- Response: QueryGroupsByMemberResponse

**TallyResult**
- Function: `getTallyResultCosmosGroupV1`
- Hook: `useGetTallyResultCosmosGroupV1`
- Description: TallyResult queries the tally of a proposal votes.
- Request: QueryTallyResultRequest
- Response: QueryTallyResultResponse

### Transaction Methods

**CreateGroup**
- Function: `createGroup`
- Hook: `useCreateGroup`
- Description: CreateGroup creates a new group with an admin account address, a list of members and some optional metadata.
- Request: MsgCreateGroup
- Response: MsgCreateGroupResponse

**UpdateGroupMembers**
- Function: `updateGroupMembers`
- Hook: `useUpdateGroupMembers`
- Description: UpdateGroupMembers updates the group members with given group id and admin address.
- Request: MsgUpdateGroupMembers
- Response: MsgUpdateGroupMembersResponse

**UpdateGroupAdmin**
- Function: `updateGroupAdmin`
- Hook: `useUpdateGroupAdmin`
- Description: UpdateGroupAdmin updates the group admin with given group id and previous admin address.
- Request: MsgUpdateGroupAdmin
- Response: MsgUpdateGroupAdminResponse

**UpdateGroupMetadata**
- Function: `updateGroupMetadata`
- Hook: `useUpdateGroupMetadata`
- Description: UpdateGroupMetadata updates the group metadata with given group id and admin address.
- Request: MsgUpdateGroupMetadata
- Response: MsgUpdateGroupMetadataResponse

**CreateGroupPolicy**
- Function: `createGroupPolicy`
- Hook: `useCreateGroupPolicy`
- Description: CreateGroupPolicy creates a new group policy using given DecisionPolicy.
- Request: MsgCreateGroupPolicy
- Response: MsgCreateGroupPolicyResponse

**CreateGroupWithPolicy**
- Function: `createGroupWithPolicy`
- Hook: `useCreateGroupWithPolicy`
- Description: CreateGroupWithPolicy creates a new group with policy.
- Request: MsgCreateGroupWithPolicy
- Response: MsgCreateGroupWithPolicyResponse

**UpdateGroupPolicyAdmin**
- Function: `updateGroupPolicyAdmin`
- Hook: `useUpdateGroupPolicyAdmin`
- Description: UpdateGroupPolicyAdmin updates a group policy admin.
- Request: MsgUpdateGroupPolicyAdmin
- Response: MsgUpdateGroupPolicyAdminResponse

**UpdateGroupPolicyDecisionPolicy**
- Function: `updateGroupPolicyDecisionPolicy`
- Hook: `useUpdateGroupPolicyDecisionPolicy`
- Description: UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated.
- Request: MsgUpdateGroupPolicyDecisionPolicy
- Response: MsgUpdateGroupPolicyDecisionPolicyResponse

**UpdateGroupPolicyMetadata**
- Function: `updateGroupPolicyMetadata`
- Hook: `useUpdateGroupPolicyMetadata`
- Description: UpdateGroupPolicyMetadata updates a group policy metadata.
- Request: MsgUpdateGroupPolicyMetadata
- Response: MsgUpdateGroupPolicyMetadataResponse

**SubmitProposal**
- Function: `submitProposalCosmosGroupV1`
- Hook: `useSubmitProposalCosmosGroupV1`
- Description: SubmitProposal submits a new proposal.
- Request: MsgSubmitProposal
- Response: MsgSubmitProposalResponse

**WithdrawProposal**
- Function: `withdrawProposal`
- Hook: `useWithdrawProposal`
- Description: WithdrawProposal aborts a proposal.
- Request: MsgWithdrawProposal
- Response: MsgWithdrawProposalResponse

**Vote**
- Function: `voteCosmosGroupV1`
- Hook: `useVoteCosmosGroupV1`
- Description: Vote allows a voter to vote on a proposal.
- Request: MsgVote
- Response: MsgVoteResponse

**Exec**
- Function: `execCosmosGroupV1`
- Hook: `useExecCosmosGroupV1`
- Description: Exec executes a proposal.
- Request: MsgExec
- Response: MsgExecResponse

**LeaveGroup**
- Function: `leaveGroup`
- Hook: `useLeaveGroup`
- Description: LeaveGroup allows a group member to leave the group.
- Request: MsgLeaveGroup
- Response: MsgLeaveGroupResponse


## cosmos.mint.v1beta1

### Query Methods

**Params**
- Function: `getCosmosMintV1beta1Params`
- Hook: `useGetCosmosMintV1beta1Params`
- Description: Params returns the total set of minting parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**Inflation**
- Function: `getInflation`
- Hook: `useGetInflation`
- Description: Inflation returns the current minting inflation value.
- Request: QueryInflationRequest
- Response: QueryInflationResponse

**AnnualProvisions**
- Function: `getAnnualProvisions`
- Hook: `useGetAnnualProvisions`
- Description: AnnualProvisions current minting annual provisions value.
- Request: QueryAnnualProvisionsRequest
- Response: QueryAnnualProvisionsResponse


## cosmos.nft.v1beta1

### Query Methods

**Balance**
- Function: `getBalanceCosmosNftV1beta1`
- Hook: `useGetBalanceCosmosNftV1beta1`
- Description: Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
- Request: QueryBalanceRequest
- Response: QueryBalanceResponse

**Owner**
- Function: `getOwner`
- Hook: `useGetOwner`
- Description: Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
- Request: QueryOwnerRequest
- Response: QueryOwnerResponse

**Supply**
- Function: `getSupply`
- Hook: `useGetSupply`
- Description: Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.
- Request: QuerySupplyRequest
- Response: QuerySupplyResponse

**NFTs**
- Function: `getNFTs`
- Hook: `useGetNFTs`
- Description: NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
 ERC721Enumerable
- Request: QueryNFTsRequest
- Response: QueryNFTsResponse

**NFT**
- Function: `getNFT`
- Hook: `useGetNFT`
- Description: NFT queries an NFT based on its class and id.
- Request: QueryNFTRequest
- Response: QueryNFTResponse

**Class**
- Function: `getClass`
- Hook: `useGetClass`
- Description: Class queries an NFT class based on its id
- Request: QueryClassRequest
- Response: QueryClassResponse

**Classes**
- Function: `getClasses`
- Hook: `useGetClasses`
- Description: Classes queries all NFT classes
- Request: QueryClassesRequest
- Response: QueryClassesResponse

### Transaction Methods

**Send**
- Function: `sendCosmosNftV1beta1`
- Hook: `useSendCosmosNftV1beta1`
- Description: Send defines a method to send a nft from one account to another account.
- Request: MsgSend
- Response: MsgSendResponse


## cosmos.params.v1beta1

### Query Methods

**Params**
- Function: `getCosmosParamsV1beta1Params`
- Hook: `useGetCosmosParamsV1beta1Params`
- Description: Params queries a specific parameter of a module, given its subspace and
 key.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**Subspaces**
- Function: `getSubspaces`
- Hook: `useGetSubspaces`
- Description: Subspaces queries for all registered subspaces and all keys for a subspace.
- Request: QuerySubspacesRequest
- Response: QuerySubspacesResponse


## cosmos.slashing.v1beta1

### Query Methods

**Params**
- Function: `getCosmosSlashingV1beta1Params`
- Hook: `useGetCosmosSlashingV1beta1Params`
- Description: Params queries the parameters of slashing module
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**SigningInfo**
- Function: `getSigningInfo`
- Hook: `useGetSigningInfo`
- Description: SigningInfo queries the signing info of given cons address
- Request: QuerySigningInfoRequest
- Response: QuerySigningInfoResponse

**SigningInfos**
- Function: `getSigningInfos`
- Hook: `useGetSigningInfos`
- Description: SigningInfos queries signing info of all validators
- Request: QuerySigningInfosRequest
- Response: QuerySigningInfosResponse

### Transaction Methods

**Unjail**
- Function: `unjail`
- Hook: `useUnjail`
- Description: Unjail defines a method for unjailing a jailed validator, thus returning
 them into the bonded validator set, so they can begin receiving provisions
 and rewards again.
- Request: MsgUnjail
- Response: MsgUnjailResponse


## cosmos.staking.v1beta1

### Query Methods

**Validators**
- Function: `getValidators`
- Hook: `useGetValidators`
- Description: Validators queries all validators that match the given status.
- Request: QueryValidatorsRequest
- Response: QueryValidatorsResponse

**Validator**
- Function: `getValidator`
- Hook: `useGetValidator`
- Description: Validator queries validator info for given validator address.
- Request: QueryValidatorRequest
- Response: QueryValidatorResponse

**ValidatorDelegations**
- Function: `getValidatorDelegations`
- Hook: `useGetValidatorDelegations`
- Description: ValidatorDelegations queries delegate info for given validator.
- Request: QueryValidatorDelegationsRequest
- Response: QueryValidatorDelegationsResponse

**ValidatorUnbondingDelegations**
- Function: `getValidatorUnbondingDelegations`
- Hook: `useGetValidatorUnbondingDelegations`
- Description: ValidatorUnbondingDelegations queries unbonding delegations of a validator.
- Request: QueryValidatorUnbondingDelegationsRequest
- Response: QueryValidatorUnbondingDelegationsResponse

**Delegation**
- Function: `getDelegation`
- Hook: `useGetDelegation`
- Description: Delegation queries delegate info for given validator delegator pair.
- Request: QueryDelegationRequest
- Response: QueryDelegationResponse

**UnbondingDelegation**
- Function: `getUnbondingDelegation`
- Hook: `useGetUnbondingDelegation`
- Description: UnbondingDelegation queries unbonding info for given validator delegator
 pair.
- Request: QueryUnbondingDelegationRequest
- Response: QueryUnbondingDelegationResponse

**DelegatorDelegations**
- Function: `getDelegatorDelegations`
- Hook: `useGetDelegatorDelegations`
- Description: DelegatorDelegations queries all delegations of a given delegator address.
- Request: QueryDelegatorDelegationsRequest
- Response: QueryDelegatorDelegationsResponse

**DelegatorUnbondingDelegations**
- Function: `getDelegatorUnbondingDelegations`
- Hook: `useGetDelegatorUnbondingDelegations`
- Description: DelegatorUnbondingDelegations queries all unbonding delegations of a given
 delegator address.
- Request: QueryDelegatorUnbondingDelegationsRequest
- Response: QueryDelegatorUnbondingDelegationsResponse

**Redelegations**
- Function: `getRedelegations`
- Hook: `useGetRedelegations`
- Description: Redelegations queries redelegations of given address.
- Request: QueryRedelegationsRequest
- Response: QueryRedelegationsResponse

**DelegatorValidators**
- Function: `getDelegatorValidatorsCosmosStakingV1beta1`
- Hook: `useGetDelegatorValidatorsCosmosStakingV1beta1`
- Description: DelegatorValidators queries all validators info for given delegator
 address.
- Request: QueryDelegatorValidatorsRequest
- Response: QueryDelegatorValidatorsResponse

**DelegatorValidator**
- Function: `getDelegatorValidator`
- Hook: `useGetDelegatorValidator`
- Description: DelegatorValidator queries validator info for given delegator validator
 pair.
- Request: QueryDelegatorValidatorRequest
- Response: QueryDelegatorValidatorResponse

**HistoricalInfo**
- Function: `getHistoricalInfo`
- Hook: `useGetHistoricalInfo`
- Description: HistoricalInfo queries the historical info for given height.
- Request: QueryHistoricalInfoRequest
- Response: QueryHistoricalInfoResponse

**Pool**
- Function: `getPoolCosmosStakingV1beta1`
- Hook: `useGetPoolCosmosStakingV1beta1`
- Description: Pool queries the pool info.
- Request: QueryPoolRequest
- Response: QueryPoolResponse

**Params**
- Function: `getCosmosStakingV1beta1Params`
- Hook: `useGetCosmosStakingV1beta1Params`
- Description: Parameters queries the staking parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

### Transaction Methods

**CreateValidator**
- Function: `createValidator`
- Hook: `useCreateValidator`
- Description: CreateValidator defines a method for creating a new validator.
- Request: MsgCreateValidator
- Response: MsgCreateValidatorResponse

**EditValidator**
- Function: `editValidator`
- Hook: `useEditValidator`
- Description: EditValidator defines a method for editing an existing validator.
- Request: MsgEditValidator
- Response: MsgEditValidatorResponse

**Delegate**
- Function: `delegate`
- Hook: `useDelegate`
- Description: Delegate defines a method for performing a delegation of coins
 from a delegator to a validator.
- Request: MsgDelegate
- Response: MsgDelegateResponse

**BeginRedelegate**
- Function: `beginRedelegate`
- Hook: `useBeginRedelegate`
- Description: BeginRedelegate defines a method for performing a redelegation
 of coins from a delegator and source validator to a destination validator.
- Request: MsgBeginRedelegate
- Response: MsgBeginRedelegateResponse

**Undelegate**
- Function: `undelegate`
- Hook: `useUndelegate`
- Description: Undelegate defines a method for performing an undelegation from a
 delegate and a validator.
- Request: MsgUndelegate
- Response: MsgUndelegateResponse


## cosmos.tx.v1beta1


## cosmos.upgrade.v1beta1

### Query Methods

**CurrentPlan**
- Function: `getCurrentPlan`
- Hook: `useGetCurrentPlan`
- Description: CurrentPlan queries the current upgrade plan.
- Request: QueryCurrentPlanRequest
- Response: QueryCurrentPlanResponse

**AppliedPlan**
- Function: `getAppliedPlan`
- Hook: `useGetAppliedPlan`
- Description: AppliedPlan queries a previously applied upgrade plan by its name.
- Request: QueryAppliedPlanRequest
- Response: QueryAppliedPlanResponse

**UpgradedConsensusState**
- Function: `getUpgradedConsensusStateCosmosUpgradeV1beta1`
- Hook: `useGetUpgradedConsensusStateCosmosUpgradeV1beta1`
- Description: UpgradedConsensusState queries the consensus state that will serve
 as a trusted kernel for the next version of this chain. It will only be
 stored at the last height of this chain.
 UpgradedConsensusState RPC not supported with legacy querier
 This rpc is deprecated now that IBC has its own replacement
 (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
- Request: QueryUpgradedConsensusStateRequest
- Response: QueryUpgradedConsensusStateResponse

**ModuleVersions**
- Function: `getModuleVersions`
- Hook: `useGetModuleVersions`
- Description: ModuleVersions queries the list of module versions from state.

 Since: cosmos-sdk 0.43
- Request: QueryModuleVersionsRequest
- Response: QueryModuleVersionsResponse

**Authority**
- Function: `getAuthority`
- Hook: `useGetAuthority`
- Description: Returns the account with authority to conduct upgrades
- Request: QueryAuthorityRequest
- Response: QueryAuthorityResponse

### Transaction Methods

**SoftwareUpgrade**
- Function: `softwareUpgrade`
- Hook: `useSoftwareUpgrade`
- Description: SoftwareUpgrade is a governance operation for initiating a software upgrade.

 Since: cosmos-sdk 0.46
- Request: MsgSoftwareUpgrade
- Response: MsgSoftwareUpgradeResponse

**CancelUpgrade**
- Function: `cancelUpgrade`
- Hook: `useCancelUpgrade`
- Description: CancelUpgrade is a governance operation for cancelling a previously
 approvid software upgrade.

 Since: cosmos-sdk 0.46
- Request: MsgCancelUpgrade
- Response: MsgCancelUpgradeResponse


## cosmos.vesting.v1beta1

### Transaction Methods

**CreateVestingAccount**
- Function: `createVestingAccount`
- Hook: `useCreateVestingAccount`
- Description: CreateVestingAccount defines a method that enables creating a vesting
 account.
- Request: MsgCreateVestingAccount
- Response: MsgCreateVestingAccountResponse

**CreatePermanentLockedAccount**
- Function: `createPermanentLockedAccount`
- Hook: `useCreatePermanentLockedAccount`
- Description: CreatePermanentLockedAccount defines a method that enables creating a permanent
 locked account.
- Request: MsgCreatePermanentLockedAccount
- Response: MsgCreatePermanentLockedAccountResponse

**CreatePeriodicVestingAccount**
- Function: `createPeriodicVestingAccount`
- Hook: `useCreatePeriodicVestingAccount`
- Description: CreatePeriodicVestingAccount defines a method that enables creating a
 periodic vesting account.
- Request: MsgCreatePeriodicVestingAccount
- Response: MsgCreatePeriodicVestingAccountResponse


## cosmwasm.wasm.v1

### Query Methods

**ContractInfo**
- Function: `getContractInfo`
- Hook: `useGetContractInfo`
- Description: ContractInfo gets the contract meta data
- Request: QueryContractInfoRequest
- Response: QueryContractInfoResponse

**ContractHistory**
- Function: `getContractHistory`
- Hook: `useGetContractHistory`
- Description: ContractHistory gets the contract code history
- Request: QueryContractHistoryRequest
- Response: QueryContractHistoryResponse

**ContractsByCode**
- Function: `getContractsByCode`
- Hook: `useGetContractsByCode`
- Description: ContractsByCode lists all smart contracts for a code id
- Request: QueryContractsByCodeRequest
- Response: QueryContractsByCodeResponse

**AllContractState**
- Function: `getAllContractState`
- Hook: `useGetAllContractState`
- Description: AllContractState gets all raw store data for a single contract
- Request: QueryAllContractStateRequest
- Response: QueryAllContractStateResponse

**RawContractState**
- Function: `getRawContractState`
- Hook: `useGetRawContractState`
- Description: RawContractState gets single key from the raw store data of a contract
- Request: QueryRawContractStateRequest
- Response: QueryRawContractStateResponse

**SmartContractState**
- Function: `getSmartContractState`
- Hook: `useGetSmartContractState`
- Description: SmartContractState get smart query result from the contract
- Request: QuerySmartContractStateRequest
- Response: QuerySmartContractStateResponse

**Code**
- Function: `getCode`
- Hook: `useGetCode`
- Description: Code gets the binary code and metadata for a singe wasm code
- Request: QueryCodeRequest
- Response: QueryCodeResponse

**Codes**
- Function: `getCodes`
- Hook: `useGetCodes`
- Description: Codes gets the metadata for all stored wasm codes
- Request: QueryCodesRequest
- Response: QueryCodesResponse

**PinnedCodes**
- Function: `getPinnedCodes`
- Hook: `useGetPinnedCodes`
- Description: PinnedCodes gets the pinned code ids
- Request: QueryPinnedCodesRequest
- Response: QueryPinnedCodesResponse

### Transaction Methods

**StoreCode**
- Function: `storeCode`
- Hook: `useStoreCode`
- Description: StoreCode to submit Wasm code to the system
- Request: MsgStoreCode
- Response: MsgStoreCodeResponse

**InstantiateContract**
- Function: `instantiateContract`
- Hook: `useInstantiateContract`
- Description: Instantiate creates a new smart contract instance for the given code id.
- Request: MsgInstantiateContract
- Response: MsgInstantiateContractResponse

**ExecuteContract**
- Function: `executeContract`
- Hook: `useExecuteContract`
- Description: Execute submits the given message data to a smart contract
- Request: MsgExecuteContract
- Response: MsgExecuteContractResponse

**MigrateContract**
- Function: `migrateContract`
- Hook: `useMigrateContract`
- Description: Migrate runs a code upgrade/ downgrade for a smart contract
- Request: MsgMigrateContract
- Response: MsgMigrateContractResponse

**UpdateAdmin**
- Function: `updateAdmin`
- Hook: `useUpdateAdmin`
- Description: UpdateAdmin sets a new   admin for a smart contract
- Request: MsgUpdateAdmin
- Response: MsgUpdateAdminResponse

**ClearAdmin**
- Function: `clearAdmin`
- Hook: `useClearAdmin`
- Description: ClearAdmin removes any admin stored for a smart contract
- Request: MsgClearAdmin
- Response: MsgClearAdminResponse


## evmos.claims.v1

### Query Methods

**TotalUnclaimed**
- Function: `getTotalUnclaimed`
- Hook: `useGetTotalUnclaimed`
- Description: TotalUnclaimed queries the total unclaimed tokens from the airdrop
- Request: QueryTotalUnclaimedRequest
- Response: QueryTotalUnclaimedResponse

**Params**
- Function: `getEvmosClaimsV1Params`
- Hook: `useGetEvmosClaimsV1Params`
- Description: Params returns the claims module parameters
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**ClaimsRecords**
- Function: `getClaimsRecords`
- Hook: `useGetClaimsRecords`
- Description: ClaimsRecords returns all claims records
- Request: QueryClaimsRecordsRequest
- Response: QueryClaimsRecordsResponse

**ClaimsRecord**
- Function: `getClaimsRecord`
- Hook: `useGetClaimsRecord`
- Description: ClaimsRecord returns the claims record for a given address
- Request: QueryClaimsRecordRequest
- Response: QueryClaimsRecordResponse


## evmos.epochs.v1

### Query Methods

**EpochInfos**
- Function: `getEpochInfosEvmosEpochsV1`
- Hook: `useGetEpochInfosEvmosEpochsV1`
- Description: EpochInfos provide running epochInfos
- Request: QueryEpochsInfoRequest
- Response: QueryEpochsInfoResponse

**CurrentEpoch**
- Function: `getCurrentEpochEvmosEpochsV1`
- Hook: `useGetCurrentEpochEvmosEpochsV1`
- Description: CurrentEpoch provide current epoch of specified identifier
- Request: QueryCurrentEpochRequest
- Response: QueryCurrentEpochResponse


## evmos.erc20.v1

### Query Methods

**TokenPairs**
- Function: `getTokenPairs`
- Hook: `useGetTokenPairs`
- Description: TokenPairs retrieves registered token pairs
- Request: QueryTokenPairsRequest
- Response: QueryTokenPairsResponse

**TokenPair**
- Function: `getTokenPair`
- Hook: `useGetTokenPair`
- Description: TokenPair retrieves a registered token pair
- Request: QueryTokenPairRequest
- Response: QueryTokenPairResponse

**Params**
- Function: `getEvmosErc20V1Params`
- Hook: `useGetEvmosErc20V1Params`
- Description: Params retrieves the erc20 module params
- Request: QueryParamsRequest
- Response: QueryParamsResponse

### Transaction Methods

**ConvertCoin**
- Function: `convertCoin`
- Hook: `useConvertCoin`
- Description: ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
 that is registered on the token mapping.
- Request: MsgConvertCoin
- Response: MsgConvertCoinResponse

**ConvertERC20**
- Function: `convertERC20`
- Hook: `useConvertERC20`
- Description: ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
 contract that is registered on the token mapping.
- Request: MsgConvertERC20
- Response: MsgConvertERC20Response


## evmos.fees.v1

### Query Methods

**DevFeeInfos**
- Function: `getDevFeeInfos`
- Hook: `useGetDevFeeInfos`
- Description: DevFeeInfos retrieves all registered contracts for fee distribution
- Request: QueryDevFeeInfosRequest
- Response: QueryDevFeeInfosResponse

**DevFeeInfo**
- Function: `getDevFeeInfo`
- Hook: `useGetDevFeeInfo`
- Description: DevFeeInfo retrieves a registered contract for fee distribution
- Request: QueryDevFeeInfoRequest
- Response: QueryDevFeeInfoResponse

**Params**
- Function: `getEvmosFeesV1Params`
- Hook: `useGetEvmosFeesV1Params`
- Description: Params retrieves the fees module params
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**DevFeeInfosPerDeployer**
- Function: `getDevFeeInfosPerDeployer`
- Hook: `useGetDevFeeInfosPerDeployer`
- Description: DevFeeInfosPerDeployer retrieves all contracts that a deployer has
 registered for fee distribution
- Request: QueryDevFeeInfosPerDeployerRequest
- Response: QueryDevFeeInfosPerDeployerResponse

### Transaction Methods

**RegisterDevFeeInfo**
- Function: `registerDevFeeInfo`
- Hook: `useRegisterDevFeeInfo`
- Description: RegisterDevFeeInfo is used by a deployer to register a new contract for
 receiving transaction fees
- Request: MsgRegisterDevFeeInfo
- Response: MsgRegisterDevFeeInfoResponse

**CancelDevFeeInfo**
- Function: `cancelDevFeeInfo`
- Hook: `useCancelDevFeeInfo`
- Description: CancelDevFeeInfo is used by a deployer to cancel a registered contract
 and stop receiving transaction fees
- Request: MsgCancelDevFeeInfo
- Response: MsgCancelDevFeeInfoResponse

**UpdateDevFeeInfo**
- Function: `updateDevFeeInfo`
- Hook: `useUpdateDevFeeInfo`
- Description: UpdateDevFeeInfo is used by a deployer to update the withdraw address
- Request: MsgUpdateDevFeeInfo
- Response: MsgUpdateDevFeeInfoResponse


## evmos.incentives.v1

### Query Methods

**Incentives**
- Function: `getIncentives`
- Hook: `useGetIncentives`
- Description: Incentives retrieves registered incentives
- Request: QueryIncentivesRequest
- Response: QueryIncentivesResponse

**Incentive**
- Function: `getIncentive`
- Hook: `useGetIncentive`
- Description: Incentive retrieves a registered incentive
- Request: QueryIncentiveRequest
- Response: QueryIncentiveResponse

**GasMeters**
- Function: `getGasMeters`
- Hook: `useGetGasMeters`
- Description: GasMeters retrieves active gas meters for a given contract
- Request: QueryGasMetersRequest
- Response: QueryGasMetersResponse

**GasMeter**
- Function: `getGasMeter`
- Hook: `useGetGasMeter`
- Description: GasMeter Retrieves a active gas meter
- Request: QueryGasMeterRequest
- Response: QueryGasMeterResponse

**AllocationMeters**
- Function: `getAllocationMeters`
- Hook: `useGetAllocationMeters`
- Description: AllocationMeters retrieves active allocation meters for a given
 denomination
- Request: QueryAllocationMetersRequest
- Response: QueryAllocationMetersResponse

**AllocationMeter**
- Function: `getAllocationMeter`
- Hook: `useGetAllocationMeter`
- Description: AllocationMeter Retrieves a active gas meter
- Request: QueryAllocationMeterRequest
- Response: QueryAllocationMeterResponse

**Params**
- Function: `getEvmosIncentivesV1Params`
- Hook: `useGetEvmosIncentivesV1Params`
- Description: Params retrieves the incentives module params
- Request: QueryParamsRequest
- Response: QueryParamsResponse


## evmos.inflation.v1

### Query Methods

**Period**
- Function: `getPeriod`
- Hook: `useGetPeriod`
- Description: Period retrieves current period.
- Request: QueryPeriodRequest
- Response: QueryPeriodResponse

**EpochMintProvision**
- Function: `getEpochMintProvision`
- Hook: `useGetEpochMintProvision`
- Description: EpochMintProvision retrieves current minting epoch provision value.
- Request: QueryEpochMintProvisionRequest
- Response: QueryEpochMintProvisionResponse

**SkippedEpochs**
- Function: `getSkippedEpochs`
- Hook: `useGetSkippedEpochs`
- Description: SkippedEpochs retrieves the total number of skipped epochs.
- Request: QuerySkippedEpochsRequest
- Response: QuerySkippedEpochsResponse

**CirculatingSupply**
- Function: `getCirculatingSupply`
- Hook: `useGetCirculatingSupply`
- Description: CirculatingSupply retrieves the total number of tokens that are in
 circulation (i.e. excluding unvested tokens).
- Request: QueryCirculatingSupplyRequest
- Response: QueryCirculatingSupplyResponse

**InflationRate**
- Function: `getInflationRate`
- Hook: `useGetInflationRate`
- Description: InflationRate retrieves the inflation rate of the current period.
- Request: QueryInflationRateRequest
- Response: QueryInflationRateResponse

**Params**
- Function: `getEvmosInflationV1Params`
- Hook: `useGetEvmosInflationV1Params`
- Description: Params retrieves the total set of minting parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse


## evmos.recovery.v1

### Query Methods

**Params**
- Function: `getEvmosRecoveryV1Params`
- Hook: `useGetEvmosRecoveryV1Params`
- Description: Params retrieves the total set of recovery parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse


## evmos.vesting.v1

### Query Methods

**Balances**
- Function: `getBalances`
- Hook: `useGetBalances`
- Description: Retrieves the unvested, vested and locked tokens for a vesting account
- Request: QueryBalancesRequest
- Response: QueryBalancesResponse

### Transaction Methods

**CreateClawbackVestingAccount**
- Function: `createClawbackVestingAccount`
- Hook: `useCreateClawbackVestingAccount`
- Description: CreateClawbackVestingAccount creats a vesting account that is subject to
 clawback and the configuration of vesting and lockup schedules.
- Request: MsgCreateClawbackVestingAccount
- Response: MsgCreateClawbackVestingAccountResponse

**Clawback**
- Function: `clawback`
- Hook: `useClawback`
- Description: Clawback removes the unvested tokens from a ClawbackVestingAccount.
- Request: MsgClawback
- Response: MsgClawbackResponse


## ibc.applications.transfer.v1

### Query Methods

**DenomTrace**
- Function: `getDenomTrace`
- Hook: `useGetDenomTrace`
- Description: DenomTrace queries a denomination trace information.
- Request: QueryDenomTraceRequest
- Response: QueryDenomTraceResponse

**DenomTraces**
- Function: `getDenomTraces`
- Hook: `useGetDenomTraces`
- Description: DenomTraces queries all denomination traces.
- Request: QueryDenomTracesRequest
- Response: QueryDenomTracesResponse

**Params**
- Function: `getIbcApplicationsTransferV1Params`
- Hook: `useGetIbcApplicationsTransferV1Params`
- Description: Params queries all parameters of the ibc-transfer module.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

### Transaction Methods

**Transfer**
- Function: `transfer`
- Hook: `useTransfer`
- Description: Transfer defines a rpc handler method for MsgTransfer.
- Request: MsgTransfer
- Response: MsgTransferResponse


## ibc.core.channel.v1

### Query Methods

**Channel**
- Function: `getChannel`
- Hook: `useGetChannel`
- Description: Channel queries an IBC Channel.
- Request: QueryChannelRequest
- Response: QueryChannelResponse

**Channels**
- Function: `getChannels`
- Hook: `useGetChannels`
- Description: Channels queries all the IBC channels of a chain.
- Request: QueryChannelsRequest
- Response: QueryChannelsResponse

**ConnectionChannels**
- Function: `getConnectionChannels`
- Hook: `useGetConnectionChannels`
- Description: ConnectionChannels queries all the channels associated with a connection
 end.
- Request: QueryConnectionChannelsRequest
- Response: QueryConnectionChannelsResponse

**ChannelClientState**
- Function: `getChannelClientState`
- Hook: `useGetChannelClientState`
- Description: ChannelClientState queries for the client state for the channel associated
 with the provided channel identifiers.
- Request: QueryChannelClientStateRequest
- Response: QueryChannelClientStateResponse

**ChannelConsensusState**
- Function: `getChannelConsensusState`
- Hook: `useGetChannelConsensusState`
- Description: ChannelConsensusState queries for the consensus state for the channel
 associated with the provided channel identifiers.
- Request: QueryChannelConsensusStateRequest
- Response: QueryChannelConsensusStateResponse

**PacketCommitment**
- Function: `getPacketCommitment`
- Hook: `useGetPacketCommitment`
- Description: PacketCommitment queries a stored packet commitment hash.
- Request: QueryPacketCommitmentRequest
- Response: QueryPacketCommitmentResponse

**PacketCommitments**
- Function: `getPacketCommitments`
- Hook: `useGetPacketCommitments`
- Description: PacketCommitments returns all the packet commitments hashes associated
 with a channel.
- Request: QueryPacketCommitmentsRequest
- Response: QueryPacketCommitmentsResponse

**PacketReceipt**
- Function: `getPacketReceipt`
- Hook: `useGetPacketReceipt`
- Description: PacketReceipt queries if a given packet sequence has been received on the
 queried chain
- Request: QueryPacketReceiptRequest
- Response: QueryPacketReceiptResponse

**PacketAcknowledgement**
- Function: `getPacketAcknowledgement`
- Hook: `useGetPacketAcknowledgement`
- Description: PacketAcknowledgement queries a stored packet acknowledgement hash.
- Request: QueryPacketAcknowledgementRequest
- Response: QueryPacketAcknowledgementResponse

**PacketAcknowledgements**
- Function: `getPacketAcknowledgements`
- Hook: `useGetPacketAcknowledgements`
- Description: PacketAcknowledgements returns all the packet acknowledgements associated
 with a channel.
- Request: QueryPacketAcknowledgementsRequest
- Response: QueryPacketAcknowledgementsResponse

**UnreceivedPackets**
- Function: `getUnreceivedPackets`
- Hook: `useGetUnreceivedPackets`
- Description: UnreceivedPackets returns all the unreceived IBC packets associated with a
 channel and sequences.
- Request: QueryUnreceivedPacketsRequest
- Response: QueryUnreceivedPacketsResponse

**UnreceivedAcks**
- Function: `getUnreceivedAcks`
- Hook: `useGetUnreceivedAcks`
- Description: UnreceivedAcks returns all the unreceived IBC acknowledgements associated
 with a channel and sequences.
- Request: QueryUnreceivedAcksRequest
- Response: QueryUnreceivedAcksResponse

**NextSequenceReceive**
- Function: `getNextSequenceReceive`
- Hook: `useGetNextSequenceReceive`
- Description: NextSequenceReceive returns the next receive sequence for a given channel.
- Request: QueryNextSequenceReceiveRequest
- Response: QueryNextSequenceReceiveResponse

### Transaction Methods

**ChannelOpenInit**
- Function: `channelOpenInit`
- Hook: `useChannelOpenInit`
- Description: ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.
- Request: MsgChannelOpenInit
- Response: MsgChannelOpenInitResponse

**ChannelOpenTry**
- Function: `channelOpenTry`
- Hook: `useChannelOpenTry`
- Description: ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.
- Request: MsgChannelOpenTry
- Response: MsgChannelOpenTryResponse

**ChannelOpenAck**
- Function: `channelOpenAck`
- Hook: `useChannelOpenAck`
- Description: ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.
- Request: MsgChannelOpenAck
- Response: MsgChannelOpenAckResponse

**ChannelOpenConfirm**
- Function: `channelOpenConfirm`
- Hook: `useChannelOpenConfirm`
- Description: ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.
- Request: MsgChannelOpenConfirm
- Response: MsgChannelOpenConfirmResponse

**ChannelCloseInit**
- Function: `channelCloseInit`
- Hook: `useChannelCloseInit`
- Description: ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.
- Request: MsgChannelCloseInit
- Response: MsgChannelCloseInitResponse

**ChannelCloseConfirm**
- Function: `channelCloseConfirm`
- Hook: `useChannelCloseConfirm`
- Description: ChannelCloseConfirm defines a rpc handler method for
 MsgChannelCloseConfirm.
- Request: MsgChannelCloseConfirm
- Response: MsgChannelCloseConfirmResponse

**RecvPacket**
- Function: `recvPacket`
- Hook: `useRecvPacket`
- Description: RecvPacket defines a rpc handler method for MsgRecvPacket.
- Request: MsgRecvPacket
- Response: MsgRecvPacketResponse

**Timeout**
- Function: `timeout`
- Hook: `useTimeout`
- Description: Timeout defines a rpc handler method for MsgTimeout.
- Request: MsgTimeout
- Response: MsgTimeoutResponse

**TimeoutOnClose**
- Function: `timeoutOnClose`
- Hook: `useTimeoutOnClose`
- Description: TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.
- Request: MsgTimeoutOnClose
- Response: MsgTimeoutOnCloseResponse

**Acknowledgement**
- Function: `acknowledgement`
- Hook: `useAcknowledgement`
- Description: Acknowledgement defines a rpc handler method for MsgAcknowledgement.
- Request: MsgAcknowledgement
- Response: MsgAcknowledgementResponse


## ibc.core.client.v1

### Query Methods

**ClientState**
- Function: `getClientState`
- Hook: `useGetClientState`
- Description: ClientState queries an IBC light client.
- Request: QueryClientStateRequest
- Response: QueryClientStateResponse

**ClientStates**
- Function: `getClientStates`
- Hook: `useGetClientStates`
- Description: ClientStates queries all the IBC light clients of a chain.
- Request: QueryClientStatesRequest
- Response: QueryClientStatesResponse

**ConsensusState**
- Function: `getConsensusState`
- Hook: `useGetConsensusState`
- Description: ConsensusState queries a consensus state associated with a client state at
 a given height.
- Request: QueryConsensusStateRequest
- Response: QueryConsensusStateResponse

**ConsensusStates**
- Function: `getConsensusStates`
- Hook: `useGetConsensusStates`
- Description: ConsensusStates queries all the consensus state associated with a given
 client.
- Request: QueryConsensusStatesRequest
- Response: QueryConsensusStatesResponse

**ClientStatus**
- Function: `getClientStatus`
- Hook: `useGetClientStatus`
- Description: Status queries the status of an IBC client.
- Request: QueryClientStatusRequest
- Response: QueryClientStatusResponse

**ClientParams**
- Function: `getClientParams`
- Hook: `useGetClientParams`
- Description: ClientParams queries all parameters of the ibc client.
- Request: QueryClientParamsRequest
- Response: QueryClientParamsResponse

**UpgradedClientState**
- Function: `getUpgradedClientState`
- Hook: `useGetUpgradedClientState`
- Description: UpgradedClientState queries an Upgraded IBC light client.
- Request: QueryUpgradedClientStateRequest
- Response: QueryUpgradedClientStateResponse

**UpgradedConsensusState**
- Function: `getUpgradedConsensusStateIbcCoreClientV1`
- Hook: `useGetUpgradedConsensusStateIbcCoreClientV1`
- Description: UpgradedConsensusState queries an Upgraded IBC consensus state.
- Request: QueryUpgradedConsensusStateRequest
- Response: QueryUpgradedConsensusStateResponse

### Transaction Methods

**CreateClient**
- Function: `createClient`
- Hook: `useCreateClient`
- Description: CreateClient defines a rpc handler method for MsgCreateClient.
- Request: MsgCreateClient
- Response: MsgCreateClientResponse

**UpdateClient**
- Function: `updateClient`
- Hook: `useUpdateClient`
- Description: UpdateClient defines a rpc handler method for MsgUpdateClient.
- Request: MsgUpdateClient
- Response: MsgUpdateClientResponse

**UpgradeClient**
- Function: `upgradeClient`
- Hook: `useUpgradeClient`
- Description: UpgradeClient defines a rpc handler method for MsgUpgradeClient.
- Request: MsgUpgradeClient
- Response: MsgUpgradeClientResponse

**SubmitMisbehaviour**
- Function: `submitMisbehaviour`
- Hook: `useSubmitMisbehaviour`
- Description: SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.
- Request: MsgSubmitMisbehaviour
- Response: MsgSubmitMisbehaviourResponse


## ibc.core.connection.v1

### Query Methods

**Connection**
- Function: `getConnection`
- Hook: `useGetConnection`
- Description: Connection queries an IBC connection end.
- Request: QueryConnectionRequest
- Response: QueryConnectionResponse

**Connections**
- Function: `getConnections`
- Hook: `useGetConnections`
- Description: Connections queries all the IBC connections of a chain.
- Request: QueryConnectionsRequest
- Response: QueryConnectionsResponse

**ClientConnections**
- Function: `getClientConnections`
- Hook: `useGetClientConnections`
- Description: ClientConnections queries the connection paths associated with a client
 state.
- Request: QueryClientConnectionsRequest
- Response: QueryClientConnectionsResponse

**ConnectionClientState**
- Function: `getConnectionClientState`
- Hook: `useGetConnectionClientState`
- Description: ConnectionClientState queries the client state associated with the
 connection.
- Request: QueryConnectionClientStateRequest
- Response: QueryConnectionClientStateResponse

**ConnectionConsensusState**
- Function: `getConnectionConsensusState`
- Hook: `useGetConnectionConsensusState`
- Description: ConnectionConsensusState queries the consensus state associated with the
 connection.
- Request: QueryConnectionConsensusStateRequest
- Response: QueryConnectionConsensusStateResponse

### Transaction Methods

**ConnectionOpenInit**
- Function: `connectionOpenInit`
- Hook: `useConnectionOpenInit`
- Description: ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit.
- Request: MsgConnectionOpenInit
- Response: MsgConnectionOpenInitResponse

**ConnectionOpenTry**
- Function: `connectionOpenTry`
- Hook: `useConnectionOpenTry`
- Description: ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry.
- Request: MsgConnectionOpenTry
- Response: MsgConnectionOpenTryResponse

**ConnectionOpenAck**
- Function: `connectionOpenAck`
- Hook: `useConnectionOpenAck`
- Description: ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck.
- Request: MsgConnectionOpenAck
- Response: MsgConnectionOpenAckResponse

**ConnectionOpenConfirm**
- Function: `connectionOpenConfirm`
- Hook: `useConnectionOpenConfirm`
- Description: ConnectionOpenConfirm defines a rpc handler method for
 MsgConnectionOpenConfirm.
- Request: MsgConnectionOpenConfirm
- Response: MsgConnectionOpenConfirmResponse


## ibc.core.port.v1

### Query Methods

**AppVersion**
- Function: `getAppVersion`
- Hook: `useGetAppVersion`
- Description: AppVersion queries an IBC Port and determines the appropriate application version to be used
- Request: QueryAppVersionRequest
- Response: QueryAppVersionResponse


## osmosis.claim.v1beta1

### Query Methods

**ModuleAccountBalance**
- Function: `getModuleAccountBalance`
- Hook: `useGetModuleAccountBalance`
- Request: QueryModuleAccountBalanceRequest
- Response: QueryModuleAccountBalanceResponse

**Params**
- Function: `getOsmosisClaimV1beta1Params`
- Hook: `useGetOsmosisClaimV1beta1Params`
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**ClaimRecord**
- Function: `getClaimRecord`
- Hook: `useGetClaimRecord`
- Request: QueryClaimRecordRequest
- Response: QueryClaimRecordResponse

**ClaimableForAction**
- Function: `getClaimableForAction`
- Hook: `useGetClaimableForAction`
- Request: QueryClaimableForActionRequest
- Response: QueryClaimableForActionResponse

**TotalClaimable**
- Function: `getTotalClaimable`
- Hook: `useGetTotalClaimable`
- Request: QueryTotalClaimableRequest
- Response: QueryTotalClaimableResponse


## osmosis.epochs.v1beta1

### Query Methods

**EpochInfos**
- Function: `getEpochInfosOsmosisEpochsV1beta1`
- Hook: `useGetEpochInfosOsmosisEpochsV1beta1`
- Description: EpochInfos provide running epochInfos
- Request: QueryEpochsInfoRequest
- Response: QueryEpochsInfoResponse

**CurrentEpoch**
- Function: `getCurrentEpochOsmosisEpochsV1beta1`
- Hook: `useGetCurrentEpochOsmosisEpochsV1beta1`
- Description: CurrentEpoch provide current epoch of specified identifier
- Request: QueryCurrentEpochRequest
- Response: QueryCurrentEpochResponse


## osmosis.gamm.poolmodels.balancer.v1beta1

### Transaction Methods

**CreateBalancerPool**
- Function: `createBalancerPool`
- Hook: `useCreateBalancerPool`
- Request: MsgCreateBalancerPool
- Response: MsgCreateBalancerPoolResponse


## osmosis.gamm.poolmodels.stableswap.v1beta1

### Transaction Methods

**CreateStableswapPool**
- Function: `createStableswapPool`
- Hook: `useCreateStableswapPool`
- Request: MsgCreateStableswapPool
- Response: MsgCreateStableswapPoolResponse

**StableSwapAdjustScalingFactors**
- Function: `stableSwapAdjustScalingFactors`
- Hook: `useStableSwapAdjustScalingFactors`
- Request: MsgStableSwapAdjustScalingFactors
- Response: MsgStableSwapAdjustScalingFactorsResponse


## osmosis.gamm.v1beta1

### Query Methods

**Pools**
- Function: `getPools`
- Hook: `useGetPools`
- Request: QueryPoolsRequest
- Response: QueryPoolsResponse

**NumPools**
- Function: `getNumPools`
- Hook: `useGetNumPools`
- Request: QueryNumPoolsRequest
- Response: QueryNumPoolsResponse

**TotalLiquidity**
- Function: `getTotalLiquidity`
- Hook: `useGetTotalLiquidity`
- Request: QueryTotalLiquidityRequest
- Response: QueryTotalLiquidityResponse

**PoolsWithFilter**
- Function: `getPoolsWithFilter`
- Hook: `useGetPoolsWithFilter`
- Description: PoolsWithFilter allows you to query specific pools with requested
 parameters
- Request: QueryPoolsWithFilterRequest
- Response: QueryPoolsWithFilterResponse

**Pool**
- Function: `getPoolOsmosisGammV1beta1`
- Hook: `useGetPoolOsmosisGammV1beta1`
- Description: Per Pool gRPC Endpoints
- Request: QueryPoolRequest
- Response: QueryPoolResponse

**PoolType**
- Function: `getPoolType`
- Hook: `useGetPoolType`
- Description: PoolType returns the type of the pool.
 Returns "Balancer" as a string literal when the pool is a balancer pool.
 Errors if the pool is failed to be type caseted.
- Request: QueryPoolTypeRequest
- Response: QueryPoolTypeResponse

**CalcJoinPoolNoSwapShares**
- Function: `getCalcJoinPoolNoSwapShares`
- Hook: `useGetCalcJoinPoolNoSwapShares`
- Description: Simulates joining pool without a swap. Returns the amount of shares you'd
 get and tokens needed to provide
- Request: QueryCalcJoinPoolNoSwapSharesRequest
- Response: QueryCalcJoinPoolNoSwapSharesResponse

**CalcJoinPoolShares**
- Function: `getCalcJoinPoolShares`
- Hook: `useGetCalcJoinPoolShares`
- Request: QueryCalcJoinPoolSharesRequest
- Response: QueryCalcJoinPoolSharesResponse

**CalcExitPoolCoinsFromShares**
- Function: `getCalcExitPoolCoinsFromShares`
- Hook: `useGetCalcExitPoolCoinsFromShares`
- Request: QueryCalcExitPoolCoinsFromSharesRequest
- Response: QueryCalcExitPoolCoinsFromSharesResponse

**PoolParams**
- Function: `getPoolParams`
- Hook: `useGetPoolParams`
- Request: QueryPoolParamsRequest
- Response: QueryPoolParamsResponse

**TotalPoolLiquidity**
- Function: `getTotalPoolLiquidity`
- Hook: `useGetTotalPoolLiquidity`
- Request: QueryTotalPoolLiquidityRequest
- Response: QueryTotalPoolLiquidityResponse

**TotalShares**
- Function: `getTotalShares`
- Hook: `useGetTotalShares`
- Request: QueryTotalSharesRequest
- Response: QueryTotalSharesResponse

**SpotPrice**
- Function: `getSpotPriceOsmosisGammV1beta1`
- Hook: `useGetSpotPriceOsmosisGammV1beta1`
- Description: SpotPrice defines a gRPC query handler that returns the spot price given
 a base denomination and a quote denomination.
- Request: QuerySpotPriceRequest
- Response: QuerySpotPriceResponse

**EstimateSwapExactAmountIn**
- Function: `getEstimateSwapExactAmountIn`
- Hook: `useGetEstimateSwapExactAmountIn`
- Description: Estimate the swap.
- Request: QuerySwapExactAmountInRequest
- Response: QuerySwapExactAmountInResponse

**EstimateSwapExactAmountOut**
- Function: `getEstimateSwapExactAmountOut`
- Hook: `useGetEstimateSwapExactAmountOut`
- Request: QuerySwapExactAmountOutRequest
- Response: QuerySwapExactAmountOutResponse

### Transaction Methods

**JoinPool**
- Function: `joinPool`
- Hook: `useJoinPool`
- Request: MsgJoinPool
- Response: MsgJoinPoolResponse

**ExitPool**
- Function: `exitPool`
- Hook: `useExitPool`
- Request: MsgExitPool
- Response: MsgExitPoolResponse

**SwapExactAmountIn**
- Function: `swapExactAmountIn`
- Hook: `useSwapExactAmountIn`
- Request: MsgSwapExactAmountIn
- Response: MsgSwapExactAmountInResponse

**SwapExactAmountOut**
- Function: `swapExactAmountOut`
- Hook: `useSwapExactAmountOut`
- Request: MsgSwapExactAmountOut
- Response: MsgSwapExactAmountOutResponse

**JoinSwapExternAmountIn**
- Function: `joinSwapExternAmountIn`
- Hook: `useJoinSwapExternAmountIn`
- Request: MsgJoinSwapExternAmountIn
- Response: MsgJoinSwapExternAmountInResponse

**JoinSwapShareAmountOut**
- Function: `joinSwapShareAmountOut`
- Hook: `useJoinSwapShareAmountOut`
- Request: MsgJoinSwapShareAmountOut
- Response: MsgJoinSwapShareAmountOutResponse

**ExitSwapExternAmountOut**
- Function: `exitSwapExternAmountOut`
- Hook: `useExitSwapExternAmountOut`
- Request: MsgExitSwapExternAmountOut
- Response: MsgExitSwapExternAmountOutResponse

**ExitSwapShareAmountIn**
- Function: `exitSwapShareAmountIn`
- Hook: `useExitSwapShareAmountIn`
- Request: MsgExitSwapShareAmountIn
- Response: MsgExitSwapShareAmountInResponse


## osmosis.gamm.v2

### Query Methods

**SpotPrice**
- Function: `getSpotPriceOsmosisGammV2`
- Hook: `useGetSpotPriceOsmosisGammV2`
- Description: SpotPrice defines a gRPC query handler that returns the spot price given
 a base denomination and a quote denomination.
- Request: QuerySpotPriceRequest
- Response: QuerySpotPriceResponse


## osmosis.ibcratelimit.v1beta1

### Query Methods

**Params**
- Function: `getOsmosisIbcratelimitV1beta1Params`
- Hook: `useGetOsmosisIbcratelimitV1beta1Params`
- Description: Params defines a gRPC query method that returns the ibc-rate-limit module's
 parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse


## osmosis.incentives

### Query Methods

**ModuleToDistributeCoins**
- Function: `getModuleToDistributeCoins`
- Hook: `useGetModuleToDistributeCoins`
- Description: ModuleToDistributeCoins returns coins that are going to be distributed
- Request: ModuleToDistributeCoinsRequest
- Response: ModuleToDistributeCoinsResponse

**GaugeByID**
- Function: `getGaugeByID`
- Hook: `useGetGaugeByID`
- Description: GaugeByID returns gauges by their respective ID
- Request: GaugeByIDRequest
- Response: GaugeByIDResponse

**Gauges**
- Function: `getGauges`
- Hook: `useGetGauges`
- Description: Gauges returns both upcoming and active gauges
- Request: GaugesRequest
- Response: GaugesResponse

**ActiveGauges**
- Function: `getActiveGauges`
- Hook: `useGetActiveGauges`
- Description: ActiveGauges returns active gauges
- Request: ActiveGaugesRequest
- Response: ActiveGaugesResponse

**ActiveGaugesPerDenom**
- Function: `getActiveGaugesPerDenom`
- Hook: `useGetActiveGaugesPerDenom`
- Description: ActiveGaugesPerDenom returns active gauges by denom
- Request: ActiveGaugesPerDenomRequest
- Response: ActiveGaugesPerDenomResponse

**UpcomingGauges**
- Function: `getUpcomingGauges`
- Hook: `useGetUpcomingGauges`
- Description: Returns scheduled gauges that have not yet occured
- Request: UpcomingGaugesRequest
- Response: UpcomingGaugesResponse

**UpcomingGaugesPerDenom**
- Function: `getUpcomingGaugesPerDenom`
- Hook: `useGetUpcomingGaugesPerDenom`
- Description: UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
 by denom
- Request: UpcomingGaugesPerDenomRequest
- Response: UpcomingGaugesPerDenomResponse

**RewardsEst**
- Function: `getRewardsEst`
- Hook: `useGetRewardsEst`
- Description: RewardsEst returns an estimate of the rewards from now until a specified
 time in the future The querier either provides an address or a set of locks
 for which they want to find the associated rewards
- Request: RewardsEstRequest
- Response: RewardsEstResponse

**LockableDurations**
- Function: `getLockableDurationsOsmosisIncentives`
- Hook: `useGetLockableDurationsOsmosisIncentives`
- Description: LockableDurations returns lockable durations that are valid to distribute
 incentives for
- Request: QueryLockableDurationsRequest
- Response: QueryLockableDurationsResponse

### Transaction Methods

**CreateGauge**
- Function: `createGauge`
- Hook: `useCreateGauge`
- Request: MsgCreateGauge
- Response: MsgCreateGaugeResponse

**AddToGauge**
- Function: `addToGauge`
- Hook: `useAddToGauge`
- Request: MsgAddToGauge
- Response: MsgAddToGaugeResponse


## osmosis.lockup

### Query Methods

**ModuleBalance**
- Function: `getModuleBalance`
- Hook: `useGetModuleBalance`
- Description: Return full balance of the module
- Request: ModuleBalanceRequest
- Response: ModuleBalanceResponse

**ModuleLockedAmount**
- Function: `getModuleLockedAmount`
- Hook: `useGetModuleLockedAmount`
- Description: Return locked balance of the module
- Request: ModuleLockedAmountRequest
- Response: ModuleLockedAmountResponse

**AccountUnlockableCoins**
- Function: `getAccountUnlockableCoins`
- Hook: `useGetAccountUnlockableCoins`
- Description: Returns unlockable coins which are not withdrawn yet
- Request: AccountUnlockableCoinsRequest
- Response: AccountUnlockableCoinsResponse

**AccountUnlockingCoins**
- Function: `getAccountUnlockingCoins`
- Hook: `useGetAccountUnlockingCoins`
- Description: Returns unlocking coins
- Request: AccountUnlockingCoinsRequest
- Response: AccountUnlockingCoinsResponse

**AccountLockedCoins**
- Function: `getAccountLockedCoins`
- Hook: `useGetAccountLockedCoins`
- Description: Return a locked coins that can't be withdrawn
- Request: AccountLockedCoinsRequest
- Response: AccountLockedCoinsResponse

**AccountLockedPastTime**
- Function: `getAccountLockedPastTime`
- Hook: `useGetAccountLockedPastTime`
- Description: Returns locked records of an account with unlock time beyond timestamp
- Request: AccountLockedPastTimeRequest
- Response: AccountLockedPastTimeResponse

**AccountLockedPastTimeNotUnlockingOnly**
- Function: `getAccountLockedPastTimeNotUnlockingOnly`
- Hook: `useGetAccountLockedPastTimeNotUnlockingOnly`
- Description: Returns locked records of an account with unlock time beyond timestamp
 excluding tokens started unlocking
- Request: AccountLockedPastTimeNotUnlockingOnlyRequest
- Response: AccountLockedPastTimeNotUnlockingOnlyResponse

**AccountUnlockedBeforeTime**
- Function: `getAccountUnlockedBeforeTime`
- Hook: `useGetAccountUnlockedBeforeTime`
- Description: Returns unlocked records with unlock time before timestamp
- Request: AccountUnlockedBeforeTimeRequest
- Response: AccountUnlockedBeforeTimeResponse

**AccountLockedPastTimeDenom**
- Function: `getAccountLockedPastTimeDenom`
- Hook: `useGetAccountLockedPastTimeDenom`
- Description: Returns lock records by address, timestamp, denom
- Request: AccountLockedPastTimeDenomRequest
- Response: AccountLockedPastTimeDenomResponse

**LockedDenom**
- Function: `getLockedDenom`
- Hook: `useGetLockedDenom`
- Description: Returns total locked per denom with longer past given time
- Request: LockedDenomRequest
- Response: LockedDenomResponse

**LockedByID**
- Function: `getLockedByID`
- Hook: `useGetLockedByID`
- Description: Returns lock record by id
- Request: LockedRequest
- Response: LockedResponse

**SyntheticLockupsByLockupID**
- Function: `getSyntheticLockupsByLockupID`
- Hook: `useGetSyntheticLockupsByLockupID`
- Description: Returns synthetic lockups by native lockup id
- Request: SyntheticLockupsByLockupIDRequest
- Response: SyntheticLockupsByLockupIDResponse

**AccountLockedLongerDuration**
- Function: `getAccountLockedLongerDuration`
- Hook: `useGetAccountLockedLongerDuration`
- Description: Returns account locked records with longer duration
- Request: AccountLockedLongerDurationRequest
- Response: AccountLockedLongerDurationResponse

**AccountLockedDuration**
- Function: `getAccountLockedDuration`
- Hook: `useGetAccountLockedDuration`
- Description: Returns account locked records with a specific duration
- Request: AccountLockedDurationRequest
- Response: AccountLockedDurationResponse

**AccountLockedLongerDurationNotUnlockingOnly**
- Function: `getAccountLockedLongerDurationNotUnlockingOnly`
- Hook: `useGetAccountLockedLongerDurationNotUnlockingOnly`
- Description: Returns account locked records with longer duration excluding tokens
 started unlocking
- Request: AccountLockedLongerDurationNotUnlockingOnlyRequest
- Response: AccountLockedLongerDurationNotUnlockingOnlyResponse

**AccountLockedLongerDurationDenom**
- Function: `getAccountLockedLongerDurationDenom`
- Hook: `useGetAccountLockedLongerDurationDenom`
- Description: Returns account's locked records for a denom with longer duration
- Request: AccountLockedLongerDurationDenomRequest
- Response: AccountLockedLongerDurationDenomResponse

**Params**
- Function: `getOsmosisLockupParams`
- Hook: `useGetOsmosisLockupParams`
- Description: Params returns lockup params.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

### Transaction Methods

**LockTokens**
- Function: `lockTokens`
- Hook: `useLockTokens`
- Description: LockTokens lock tokens
- Request: MsgLockTokens
- Response: MsgLockTokensResponse

**BeginUnlockingAll**
- Function: `beginUnlockingAll`
- Hook: `useBeginUnlockingAll`
- Description: BeginUnlockingAll begin unlocking all tokens
- Request: MsgBeginUnlockingAll
- Response: MsgBeginUnlockingAllResponse

**BeginUnlocking**
- Function: `beginUnlocking`
- Hook: `useBeginUnlocking`
- Description: MsgBeginUnlocking begins unlocking tokens by lock ID
- Request: MsgBeginUnlocking
- Response: MsgBeginUnlockingResponse

**ExtendLockup**
- Function: `extendLockup`
- Hook: `useExtendLockup`
- Description: MsgEditLockup edits the existing lockups by lock ID
- Request: MsgExtendLockup
- Response: MsgExtendLockupResponse

**ForceUnlock**
- Function: `forceUnlock`
- Hook: `useForceUnlock`
- Request: MsgForceUnlock
- Response: MsgForceUnlockResponse


## osmosis.mint.v1beta1

### Query Methods

**Params**
- Function: `getOsmosisMintV1beta1Params`
- Hook: `useGetOsmosisMintV1beta1Params`
- Description: Params returns the total set of minting parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**EpochProvisions**
- Function: `getEpochProvisions`
- Hook: `useGetEpochProvisions`
- Description: EpochProvisions returns the current minting epoch provisions value.
- Request: QueryEpochProvisionsRequest
- Response: QueryEpochProvisionsResponse


## osmosis.poolincentives.v1beta1

### Query Methods

**GaugeIds**
- Function: `getGaugeIds`
- Hook: `useGetGaugeIds`
- Description: GaugeIds takes the pool id and returns the matching gauge ids and durations
- Request: QueryGaugeIdsRequest
- Response: QueryGaugeIdsResponse

**DistrInfo**
- Function: `getDistrInfo`
- Hook: `useGetDistrInfo`
- Description: DistrInfo returns the pool's matching gauge ids and weights.
- Request: QueryDistrInfoRequest
- Response: QueryDistrInfoResponse

**Params**
- Function: `getOsmosisPoolincentivesV1beta1Params`
- Hook: `useGetOsmosisPoolincentivesV1beta1Params`
- Description: Params returns pool incentives params.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**LockableDurations**
- Function: `getLockableDurationsOsmosisPoolincentivesV1beta1`
- Hook: `useGetLockableDurationsOsmosisPoolincentivesV1beta1`
- Description: LockableDurations returns lock durations for pools.
- Request: QueryLockableDurationsRequest
- Response: QueryLockableDurationsResponse

**IncentivizedPools**
- Function: `getIncentivizedPools`
- Hook: `useGetIncentivizedPools`
- Description: IncentivizedPools returns currently incentivized pools
- Request: QueryIncentivizedPoolsRequest
- Response: QueryIncentivizedPoolsResponse

**ExternalIncentiveGauges**
- Function: `getExternalIncentiveGauges`
- Hook: `useGetExternalIncentiveGauges`
- Description: ExternalIncentiveGauges returns external incentive gauges.
- Request: QueryExternalIncentiveGaugesRequest
- Response: QueryExternalIncentiveGaugesResponse


## osmosis.superfluid

### Query Methods

**Params**
- Function: `getOsmosisSuperfluidParams`
- Hook: `useGetOsmosisSuperfluidParams`
- Description: Params returns the total set of superfluid parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**AssetType**
- Function: `getAssetType`
- Hook: `useGetAssetType`
- Description: Returns superfluid asset type, whether if it's a native asset or an lp
 share.
- Request: AssetTypeRequest
- Response: AssetTypeResponse

**AllAssets**
- Function: `getAllAssets`
- Hook: `useGetAllAssets`
- Description: Returns all registered superfluid assets.
- Request: AllAssetsRequest
- Response: AllAssetsResponse

**AssetMultiplier**
- Function: `getAssetMultiplier`
- Hook: `useGetAssetMultiplier`
- Description: Returns the osmo equivalent multiplier used in the most recent epoch.
- Request: AssetMultiplierRequest
- Response: AssetMultiplierResponse

**AllIntermediaryAccounts**
- Function: `getAllIntermediaryAccounts`
- Hook: `useGetAllIntermediaryAccounts`
- Description: Returns all superfluid intermediary accounts.
- Request: AllIntermediaryAccountsRequest
- Response: AllIntermediaryAccountsResponse

**ConnectedIntermediaryAccount**
- Function: `getConnectedIntermediaryAccount`
- Hook: `useGetConnectedIntermediaryAccount`
- Description: Returns intermediary account connected to a superfluid staked lock by id
- Request: ConnectedIntermediaryAccountRequest
- Response: ConnectedIntermediaryAccountResponse

**TotalDelegationByValidatorForDenom**
- Function: `getTotalDelegationByValidatorForDenom`
- Hook: `useGetTotalDelegationByValidatorForDenom`
- Description: Returns the amount of delegations of specific denom for all validators
- Request: QueryTotalDelegationByValidatorForDenomRequest
- Response: QueryTotalDelegationByValidatorForDenomResponse

**TotalSuperfluidDelegations**
- Function: `getTotalSuperfluidDelegations`
- Hook: `useGetTotalSuperfluidDelegations`
- Description: Returns the total amount of osmo superfluidly staked.
 Response is denominated in uosmo.
- Request: TotalSuperfluidDelegationsRequest
- Response: TotalSuperfluidDelegationsResponse

**SuperfluidDelegationAmount**
- Function: `getSuperfluidDelegationAmount`
- Hook: `useGetSuperfluidDelegationAmount`
- Description: Returns the coins superfluid delegated for the delegator, validator, denom
 triplet
- Request: SuperfluidDelegationAmountRequest
- Response: SuperfluidDelegationAmountResponse

**SuperfluidDelegationsByDelegator**
- Function: `getSuperfluidDelegationsByDelegator`
- Hook: `useGetSuperfluidDelegationsByDelegator`
- Description: Returns all the delegated superfluid poistions for a specific delegator.
- Request: SuperfluidDelegationsByDelegatorRequest
- Response: SuperfluidDelegationsByDelegatorResponse

**SuperfluidUndelegationsByDelegator**
- Function: `getSuperfluidUndelegationsByDelegator`
- Hook: `useGetSuperfluidUndelegationsByDelegator`
- Description: Returns all the undelegating superfluid poistions for a specific delegator.
- Request: SuperfluidUndelegationsByDelegatorRequest
- Response: SuperfluidUndelegationsByDelegatorResponse

**SuperfluidDelegationsByValidatorDenom**
- Function: `getSuperfluidDelegationsByValidatorDenom`
- Hook: `useGetSuperfluidDelegationsByValidatorDenom`
- Description: Returns all the superfluid positions of a specific denom delegated to one
 validator
- Request: SuperfluidDelegationsByValidatorDenomRequest
- Response: SuperfluidDelegationsByValidatorDenomResponse

**EstimateSuperfluidDelegatedAmountByValidatorDenom**
- Function: `getEstimateSuperfluidDelegatedAmountByValidatorDenom`
- Hook: `useGetEstimateSuperfluidDelegatedAmountByValidatorDenom`
- Description: Returns the amount of a specific denom delegated to a specific validator
 This is labeled an estimate, because the way it calculates the amount can
 lead rounding errors from the true delegated amount
- Request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest
- Response: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse

**TotalDelegationByDelegator**
- Function: `getTotalDelegationByDelegator`
- Hook: `useGetTotalDelegationByDelegator`
- Description: Returns the specified delegations for a specific delegator
- Request: QueryTotalDelegationByDelegatorRequest
- Response: QueryTotalDelegationByDelegatorResponse

**UnpoolWhitelist**
- Function: `getUnpoolWhitelist`
- Hook: `useGetUnpoolWhitelist`
- Description: Returns a list of whitelisted pool ids to unpool.
- Request: QueryUnpoolWhitelistRequest
- Response: QueryUnpoolWhitelistResponse

### Transaction Methods

**SuperfluidDelegate**
- Function: `superfluidDelegate`
- Hook: `useSuperfluidDelegate`
- Description: Execute superfluid delegation for a lockup
- Request: MsgSuperfluidDelegate
- Response: MsgSuperfluidDelegateResponse

**SuperfluidUndelegate**
- Function: `superfluidUndelegate`
- Hook: `useSuperfluidUndelegate`
- Description: Execute superfluid undelegation for a lockup
- Request: MsgSuperfluidUndelegate
- Response: MsgSuperfluidUndelegateResponse

**SuperfluidUnbondLock**
- Function: `superfluidUnbondLock`
- Hook: `useSuperfluidUnbondLock`
- Description: For a given lock that is being superfluidly undelegated,
 also unbond the underlying lock.
- Request: MsgSuperfluidUnbondLock
- Response: MsgSuperfluidUnbondLockResponse

**LockAndSuperfluidDelegate**
- Function: `lockAndSuperfluidDelegate`
- Hook: `useLockAndSuperfluidDelegate`
- Description: Execute lockup lock and superfluid delegation in a single msg
- Request: MsgLockAndSuperfluidDelegate
- Response: MsgLockAndSuperfluidDelegateResponse

**UnPoolWhitelistedPool**
- Function: `unPoolWhitelistedPool`
- Hook: `useUnPoolWhitelistedPool`
- Request: MsgUnPoolWhitelistedPool
- Response: MsgUnPoolWhitelistedPoolResponse


## osmosis.tokenfactory.v1beta1

### Query Methods

**Params**
- Function: `getOsmosisTokenfactoryV1beta1Params`
- Hook: `useGetOsmosisTokenfactoryV1beta1Params`
- Description: Params defines a gRPC query method that returns the tokenfactory module's
 parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**DenomAuthorityMetadata**
- Function: `getDenomAuthorityMetadata`
- Hook: `useGetDenomAuthorityMetadata`
- Description: DenomAuthorityMetadata defines a gRPC query method for fetching
 DenomAuthorityMetadata for a particular denom.
- Request: QueryDenomAuthorityMetadataRequest
- Response: QueryDenomAuthorityMetadataResponse

**DenomsFromCreator**
- Function: `getDenomsFromCreator`
- Hook: `useGetDenomsFromCreator`
- Description: DenomsFromCreator defines a gRPC query method for fetching all
 denominations created by a specific admin/creator.
- Request: QueryDenomsFromCreatorRequest
- Response: QueryDenomsFromCreatorResponse

### Transaction Methods

**CreateDenom**
- Function: `createDenom`
- Hook: `useCreateDenom`
- Request: MsgCreateDenom
- Response: MsgCreateDenomResponse

**Mint**
- Function: `mint`
- Hook: `useMint`
- Request: MsgMint
- Response: MsgMintResponse

**Burn**
- Function: `burn`
- Hook: `useBurn`
- Request: MsgBurn
- Response: MsgBurnResponse

**ChangeAdmin**
- Function: `changeAdmin`
- Hook: `useChangeAdmin`
- Request: MsgChangeAdmin
- Response: MsgChangeAdminResponse

**SetDenomMetadata**
- Function: `setDenomMetadata`
- Hook: `useSetDenomMetadata`
- Request: MsgSetDenomMetadata
- Response: MsgSetDenomMetadataResponse


## osmosis.twap.v1beta1

### Query Methods

**Params**
- Function: `getOsmosisTwapV1beta1Params`
- Hook: `useGetOsmosisTwapV1beta1Params`
- Request: ParamsRequest
- Response: ParamsResponse

**ArithmeticTwap**
- Function: `getArithmeticTwap`
- Hook: `useGetArithmeticTwap`
- Request: ArithmeticTwapRequest
- Response: ArithmeticTwapResponse

**ArithmeticTwapToNow**
- Function: `getArithmeticTwapToNow`
- Hook: `useGetArithmeticTwapToNow`
- Request: ArithmeticTwapToNowRequest
- Response: ArithmeticTwapToNowResponse


## osmosis.txfees.v1beta1

### Query Methods

**FeeTokens**
- Function: `getFeeTokens`
- Hook: `useGetFeeTokens`
- Description: FeeTokens returns a list of all the whitelisted fee tokens and their
 corresponding pools. It does not include the BaseDenom, which has its own
 query endpoint
- Request: QueryFeeTokensRequest
- Response: QueryFeeTokensResponse

**DenomSpotPrice**
- Function: `getDenomSpotPrice`
- Hook: `useGetDenomSpotPrice`
- Description: DenomSpotPrice returns all spot prices by each registered token denom.
- Request: QueryDenomSpotPriceRequest
- Response: QueryDenomSpotPriceResponse

**DenomPoolId**
- Function: `getDenomPoolId`
- Hook: `useGetDenomPoolId`
- Description: Returns the poolID for a specified denom input.
- Request: QueryDenomPoolIdRequest
- Response: QueryDenomPoolIdResponse

**BaseDenom**
- Function: `getBaseDenom`
- Hook: `useGetBaseDenom`
- Description: Returns a list of all base denom tokens and their corresponding pools.
- Request: QueryBaseDenomRequest
- Response: QueryBaseDenomResponse


## tendermint.abci


