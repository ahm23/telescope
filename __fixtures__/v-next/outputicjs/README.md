# Generated Code

## File Structure

```
├── akash/
│   ├── audit/
│   │   ├── v1beta1/
│   │   │   ├── audit.registry.ts
│   │   │   ├── audit.rpc.func.ts
│   │   │   ├── audit.rpc.react.ts
│   │   │   └── audit.ts
│   │   └── v1beta2/
│   │       ├── audit.registry.ts
│   │       ├── audit.rpc.func.ts
│   │       ├── audit.rpc.react.ts
│   │       ├── audit.ts
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── base/
│   │   ├── v1beta1/
│   │   │   ├── attribute.ts
│   │   │   ├── endpoint.ts
│   │   │   ├── resource.ts
│   │   │   └── resourcevalue.ts
│   │   └── v1beta2/
│   │       ├── attribute.ts
│   │       ├── endpoint.ts
│   │       ├── resource.ts
│   │       ├── resourceunits.ts
│   │       └── resourcevalue.ts
│   ├── cert/
│   │   └── v1beta2/
│   │       ├── cert.registry.ts
│   │       ├── cert.rpc.func.ts
│   │       ├── cert.rpc.react.ts
│   │       ├── cert.ts
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── deployment/
│   │   ├── v1beta1/
│   │   │   ├── authz.ts
│   │   │   ├── deployment.registry.ts
│   │   │   ├── deployment.rpc.func.ts
│   │   │   ├── deployment.rpc.react.ts
│   │   │   ├── deployment.ts
│   │   │   ├── genesis.ts
│   │   │   ├── group.ts
│   │   │   ├── params.ts
│   │   │   ├── query.rpc.func.ts
│   │   │   ├── query.rpc.react.ts
│   │   │   └── query.ts
│   │   └── v1beta2/
│   │       ├── authz.ts
│   │       ├── deployment.ts
│   │       ├── deploymentmsg.ts
│   │       ├── genesis.ts
│   │       ├── group.ts
│   │       ├── groupid.ts
│   │       ├── groupmsg.ts
│   │       ├── groupspec.ts
│   │       ├── params.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── resource.ts
│   │       ├── service.registry.ts
│   │       ├── service.rpc.func.ts
│   │       ├── service.rpc.react.ts
│   │       └── service.ts
│   ├── escrow/
│   │   ├── v1beta1/
│   │   │   ├── genesis.ts
│   │   │   ├── query.rpc.func.ts
│   │   │   ├── query.rpc.react.ts
│   │   │   ├── query.ts
│   │   │   └── types.ts
│   │   └── v1beta2/
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       └── types.ts
│   ├── inflation/
│   │   └── v1beta2/
│   │       ├── genesis.ts
│   │       └── params.ts
│   ├── market/
│   │   └── v1beta2/
│   │       ├── bid.ts
│   │       ├── genesis.ts
│   │       ├── lease.ts
│   │       ├── order.ts
│   │       ├── params.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── service.registry.ts
│   │       ├── service.rpc.func.ts
│   │       ├── service.rpc.react.ts
│   │       └── service.ts
│   └── provider/
│       ├── v1beta1/
│       │   ├── provider.registry.ts
│       │   ├── provider.rpc.func.ts
│       │   ├── provider.rpc.react.ts
│       │   └── provider.ts
│       └── v1beta2/
│           ├── genesis.ts
│           ├── provider.registry.ts
│           ├── provider.rpc.func.ts
│           ├── provider.rpc.react.ts
│           ├── provider.ts
│           ├── query.rpc.func.ts
│           ├── query.rpc.react.ts
│           └── query.ts
├── binary.ts
├── confio/
│   └── proofs.ts
├── cosmos/
│   ├── app/
│   │   └── v1alpha1/
│   │       ├── config.ts
│   │       ├── module.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── auth/
│   │   └── v1beta1/
│   │       ├── auth.ts
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── authz/
│   │   └── v1beta1/
│   │       ├── authz.ts
│   │       ├── event.ts
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       └── tx.ts
│   ├── bank/
│   │   └── v1beta1/
│   │       ├── authz.ts
│   │       ├── bank.ts
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       └── tx.ts
│   ├── base/
│   │   ├── abci/
│   │   │   └── v1beta1/
│   │   │       └── abci.ts
│   │   ├── kv/
│   │   │   └── v1beta1/
│   │   │       └── kv.ts
│   │   ├── query/
│   │   │   └── v1beta1/
│   │   │       └── pagination.ts
│   │   ├── reflection/
│   │   │   ├── v1beta1/
│   │   │   │   ├── reflection.rpc.func.ts
│   │   │   │   ├── reflection.rpc.react.ts
│   │   │   │   └── reflection.ts
│   │   │   └── v2alpha1/
│   │   │       ├── reflection.rpc.func.ts
│   │   │       ├── reflection.rpc.react.ts
│   │   │       └── reflection.ts
│   │   ├── snapshots/
│   │   │   └── v1beta1/
│   │   │       └── snapshot.ts
│   │   ├── store/
│   │   │   └── v1beta1/
│   │   │       ├── commit_info.ts
│   │   │       └── listening.ts
│   │   ├── tendermint/
│   │   │   └── v1beta1/
│   │   │       ├── query.rpc.func.ts
│   │   │       ├── query.rpc.react.ts
│   │   │       └── query.ts
│   │   └── v1beta1/
│   │       └── coin.ts
│   ├── capability/
│   │   └── v1beta1/
│   │       ├── capability.ts
│   │       └── genesis.ts
│   ├── crisis/
│   │   └── v1beta1/
│   │       ├── genesis.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       └── tx.ts
│   ├── crypto/
│   │   ├── ed25519/
│   │   │   └── keys.ts
│   │   ├── hd/
│   │   │   └── v1/
│   │   │       └── hd.ts
│   │   ├── keyring/
│   │   │   └── v1/
│   │   │       └── record.ts
│   │   ├── multisig/
│   │   │   ├── keys.ts
│   │   │   └── v1beta1/
│   │   │       └── multisig.ts
│   │   ├── secp256k1/
│   │   │   └── keys.ts
│   │   └── secp256r1/
│   │       └── keys.ts
│   ├── distribution/
│   │   └── v1beta1/
│   │       ├── distribution.ts
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       └── tx.ts
│   ├── evidence/
│   │   └── v1beta1/
│   │       ├── evidence.ts
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       └── tx.ts
│   ├── feegrant/
│   │   └── v1beta1/
│   │       ├── feegrant.ts
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       └── tx.ts
│   ├── genutil/
│   │   └── v1beta1/
│   │       └── genesis.ts
│   ├── gov/
│   │   ├── v1/
│   │   │   ├── genesis.ts
│   │   │   ├── gov.ts
│   │   │   ├── query.rpc.func.ts
│   │   │   ├── query.rpc.react.ts
│   │   │   ├── query.ts
│   │   │   ├── tx.registry.ts
│   │   │   ├── tx.rpc.func.ts
│   │   │   ├── tx.rpc.react.ts
│   │   │   └── tx.ts
│   │   └── v1beta1/
│   │       ├── genesis.ts
│   │       ├── gov.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       └── tx.ts
│   ├── group/
│   │   └── v1/
│   │       ├── events.ts
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       ├── tx.ts
│   │       └── types.ts
│   ├── mint/
│   │   └── v1beta1/
│   │       ├── genesis.ts
│   │       ├── mint.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── msg/
│   │   └── v1/
│   │       └── msg.ts
│   ├── nft/
│   │   └── v1beta1/
│   │       ├── event.ts
│   │       ├── genesis.ts
│   │       ├── nft.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       └── tx.ts
│   ├── orm/
│   │   ├── module/
│   │   │   └── v1alpha1/
│   │   │       └── module.ts
│   │   ├── v1/
│   │   │   └── orm.ts
│   │   └── v1alpha1/
│   │       └── schema.ts
│   ├── params/
│   │   └── v1beta1/
│   │       ├── params.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── slashing/
│   │   └── v1beta1/
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── slashing.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       └── tx.ts
│   ├── staking/
│   │   └── v1beta1/
│   │       ├── authz.ts
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── staking.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       └── tx.ts
│   ├── tx/
│   │   ├── signing/
│   │   │   └── v1beta1/
│   │   │       └── signing.ts
│   │   └── v1beta1/
│   │       ├── service.rpc.func.ts
│   │       ├── service.rpc.react.ts
│   │       ├── service.ts
│   │       └── tx.ts
│   ├── upgrade/
│   │   └── v1beta1/
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       ├── tx.ts
│   │       └── upgrade.ts
│   └── vesting/
│       └── v1beta1/
│           ├── tx.registry.ts
│           ├── tx.rpc.func.ts
│           ├── tx.rpc.react.ts
│           ├── tx.ts
│           └── vesting.ts
├── cosmos_proto/
│   └── cosmos.ts
├── cosmwasm/
│   └── wasm/
│       └── v1/
│           ├── genesis.ts
│           ├── ibc.ts
│           ├── proposal.ts
│           ├── query.rpc.func.ts
│           ├── query.rpc.react.ts
│           ├── query.ts
│           ├── tx.registry.ts
│           ├── tx.rpc.func.ts
│           ├── tx.rpc.react.ts
│           ├── tx.ts
│           └── types.ts
├── evmos/
│   ├── claims/
│   │   └── v1/
│   │       ├── claims.ts
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── epochs/
│   │   └── v1/
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── erc20/
│   │   └── v1/
│   │       ├── erc20.ts
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       └── tx.ts
│   ├── fees/
│   │   └── v1/
│   │       ├── fees.ts
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       └── tx.ts
│   ├── incentives/
│   │   └── v1/
│   │       ├── genesis.ts
│   │       ├── incentives.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── inflation/
│   │   └── v1/
│   │       ├── genesis.ts
│   │       ├── inflation.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── recovery/
│   │   └── v1/
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   └── vesting/
│       └── v1/
│           ├── query.rpc.func.ts
│           ├── query.rpc.react.ts
│           ├── query.ts
│           ├── tx.registry.ts
│           ├── tx.rpc.func.ts
│           ├── tx.rpc.react.ts
│           ├── tx.ts
│           └── vesting.ts
├── extern.ts
├── gogoproto/
│   └── gogo.ts
├── google/
│   ├── api/
│   │   ├── annotations.ts
│   │   ├── auth.ts
│   │   ├── backend.ts
│   │   ├── billing.ts
│   │   ├── client.ts
│   │   ├── config_change.ts
│   │   ├── consumer.ts
│   │   ├── context.ts
│   │   ├── control.ts
│   │   ├── distribution.ts
│   │   ├── documentation.ts
│   │   ├── endpoint.ts
│   │   ├── error_reason.ts
│   │   ├── expr/
│   │   │   ├── conformance/
│   │   │   │   └── v1alpha1/
│   │   │   │       └── conformance_service.ts
│   │   │   ├── v1alpha1/
│   │   │   │   ├── checked.ts
│   │   │   │   ├── eval.ts
│   │   │   │   ├── explain.ts
│   │   │   │   ├── syntax.ts
│   │   │   │   └── value.ts
│   │   │   └── v1beta1/
│   │   │       ├── decl.ts
│   │   │       ├── eval.ts
│   │   │       ├── expr.ts
│   │   │       ├── source.ts
│   │   │       └── value.ts
│   │   ├── field_behavior.ts
│   │   ├── http.ts
│   │   ├── httpbody.ts
│   │   ├── label.ts
│   │   ├── launch_stage.ts
│   │   ├── log.ts
│   │   ├── logging.ts
│   │   ├── metric.ts
│   │   ├── monitored_resource.ts
│   │   ├── monitoring.ts
│   │   ├── quota.ts
│   │   ├── resource.ts
│   │   ├── routing.ts
│   │   ├── service.ts
│   │   ├── servicecontrol/
│   │   │   ├── v1/
│   │   │   │   ├── check_error.ts
│   │   │   │   ├── distribution.ts
│   │   │   │   ├── http_request.ts
│   │   │   │   ├── log_entry.ts
│   │   │   │   ├── metric_value.ts
│   │   │   │   ├── operation.ts
│   │   │   │   ├── quota_controller.ts
│   │   │   │   └── service_controller.ts
│   │   │   └── v2/
│   │   │       └── service_controller.ts
│   │   ├── servicemanagement/
│   │   │   └── v1/
│   │   │       ├── resources.ts
│   │   │       └── servicemanager.ts
│   │   ├── serviceusage/
│   │   │   ├── v1/
│   │   │   │   ├── resources.ts
│   │   │   │   └── serviceusage.ts
│   │   │   └── v1beta1/
│   │   │       ├── resources.ts
│   │   │       └── serviceusage.ts
│   │   ├── source_info.ts
│   │   ├── system_parameter.ts
│   │   ├── usage.ts
│   │   └── visibility.ts
│   ├── logging/
│   │   ├── type/
│   │   │   ├── http_request.ts
│   │   │   └── log_severity.ts
│   │   └── v2/
│   │       ├── logging.ts
│   │       ├── logging_config.ts
│   │       ├── logging_metrics.ts
│   │       └── log_entry.ts
│   ├── longrunning/
│   │   └── operations.ts
│   ├── protobuf/
│   │   ├── any.ts
│   │   ├── api.ts
│   │   ├── compiler/
│   │   │   └── plugin.ts
│   │   ├── descriptor.ts
│   │   ├── duration.ts
│   │   ├── empty.ts
│   │   ├── field_mask.ts
│   │   ├── source_context.ts
│   │   ├── struct.ts
│   │   ├── timestamp.ts
│   │   ├── type.ts
│   │   └── wrappers.ts
│   └── rpc/
│       ├── code.ts
│       ├── context/
│       │   └── attribute_context.ts
│       ├── error_details.ts
│       └── status.ts
├── helper-func-types.ts
├── helpers.ts
├── ibc/
│   ├── applications/
│   │   └── transfer/
│   │       ├── v1/
│   │       │   ├── genesis.ts
│   │       │   ├── query.rpc.func.ts
│   │       │   ├── query.rpc.react.ts
│   │       │   ├── query.ts
│   │       │   ├── transfer.ts
│   │       │   ├── tx.registry.ts
│   │       │   ├── tx.rpc.func.ts
│   │       │   ├── tx.rpc.react.ts
│   │       │   └── tx.ts
│   │       └── v2/
│   │           └── packet.ts
│   ├── core/
│   │   ├── channel/
│   │   │   └── v1/
│   │   │       ├── channel.ts
│   │   │       ├── genesis.ts
│   │   │       ├── query.rpc.func.ts
│   │   │       ├── query.rpc.react.ts
│   │   │       ├── query.ts
│   │   │       ├── tx.registry.ts
│   │   │       ├── tx.rpc.func.ts
│   │   │       ├── tx.rpc.react.ts
│   │   │       └── tx.ts
│   │   ├── client/
│   │   │   └── v1/
│   │   │       ├── client.ts
│   │   │       ├── genesis.ts
│   │   │       ├── query.rpc.func.ts
│   │   │       ├── query.rpc.react.ts
│   │   │       ├── query.ts
│   │   │       ├── tx.registry.ts
│   │   │       ├── tx.rpc.func.ts
│   │   │       ├── tx.rpc.react.ts
│   │   │       └── tx.ts
│   │   ├── commitment/
│   │   │   └── v1/
│   │   │       └── commitment.ts
│   │   ├── connection/
│   │   │   └── v1/
│   │   │       ├── connection.ts
│   │   │       ├── genesis.ts
│   │   │       ├── query.rpc.func.ts
│   │   │       ├── query.rpc.react.ts
│   │   │       ├── query.ts
│   │   │       ├── tx.registry.ts
│   │   │       ├── tx.rpc.func.ts
│   │   │       ├── tx.rpc.react.ts
│   │   │       └── tx.ts
│   │   ├── port/
│   │   │   └── v1/
│   │   │       ├── query.rpc.func.ts
│   │   │       ├── query.rpc.react.ts
│   │   │       └── query.ts
│   │   └── types/
│   │       └── v1/
│   │           └── genesis.ts
│   └── lightclients/
│       ├── localhost/
│       │   └── v1/
│       │       └── localhost.ts
│       ├── solomachine/
│       │   ├── v1/
│       │   │   └── solomachine.ts
│       │   └── v2/
│       │       └── solomachine.ts
│       └── tendermint/
│           └── v1/
│               └── tendermint.ts
├── osmosis/
│   ├── claim/
│   │   └── v1beta1/
│   │       ├── claim.ts
│   │       ├── genesis.ts
│   │       ├── params.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── epochs/
│   │   ├── genesis.ts
│   │   ├── query.rpc.func.ts
│   │   ├── query.rpc.react.ts
│   │   └── query.ts
│   ├── gamm/
│   │   ├── pool-models/
│   │   │   ├── balancer/
│   │   │   │   ├── balancerPool.ts
│   │   │   │   └── tx/
│   │   │   │       ├── tx.registry.ts
│   │   │   │       ├── tx.rpc.func.ts
│   │   │   │       ├── tx.rpc.react.ts
│   │   │   │       └── tx.ts
│   │   │   └── stableswap/
│   │   │       ├── stableswap_pool.ts
│   │   │       ├── tx.registry.ts
│   │   │       ├── tx.rpc.func.ts
│   │   │       ├── tx.rpc.react.ts
│   │   │       └── tx.ts
│   │   ├── v1beta1/
│   │   │   ├── genesis.ts
│   │   │   ├── query.rpc.func.ts
│   │   │   ├── query.rpc.react.ts
│   │   │   ├── query.ts
│   │   │   ├── tx.registry.ts
│   │   │   ├── tx.rpc.func.ts
│   │   │   ├── tx.rpc.react.ts
│   │   │   └── tx.ts
│   │   └── v2/
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── ibc-rate-limit/
│   │   └── v1beta1/
│   │       ├── params.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── incentives/
│   │   ├── gauge.ts
│   │   ├── genesis.ts
│   │   ├── params.ts
│   │   ├── query.rpc.func.ts
│   │   ├── query.rpc.react.ts
│   │   ├── query.ts
│   │   ├── tx.registry.ts
│   │   ├── tx.rpc.func.ts
│   │   ├── tx.rpc.react.ts
│   │   └── tx.ts
│   ├── lockup/
│   │   ├── genesis.ts
│   │   ├── lock.ts
│   │   ├── params.ts
│   │   ├── query.rpc.func.ts
│   │   ├── query.rpc.react.ts
│   │   ├── query.ts
│   │   ├── tx.registry.ts
│   │   ├── tx.rpc.func.ts
│   │   ├── tx.rpc.react.ts
│   │   └── tx.ts
│   ├── mint/
│   │   └── v1beta1/
│   │       ├── genesis.ts
│   │       ├── mint.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── pool-incentives/
│   │   └── v1beta1/
│   │       ├── genesis.ts
│   │       ├── gov.ts
│   │       ├── incentives.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       └── query.ts
│   ├── sumtree/
│   │   └── v1beta1/
│   │       └── tree.ts
│   ├── superfluid/
│   │   ├── genesis.ts
│   │   ├── params.ts
│   │   ├── query.rpc.func.ts
│   │   ├── query.rpc.react.ts
│   │   ├── query.ts
│   │   ├── superfluid.ts
│   │   ├── tx.registry.ts
│   │   ├── tx.rpc.func.ts
│   │   ├── tx.rpc.react.ts
│   │   ├── tx.ts
│   │   └── v1beta1/
│   │       └── gov.ts
│   ├── tokenfactory/
│   │   └── v1beta1/
│   │       ├── authorityMetadata.ts
│   │       ├── genesis.ts
│   │       ├── params.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       ├── tx.registry.ts
│   │       ├── tx.rpc.func.ts
│   │       ├── tx.rpc.react.ts
│   │       └── tx.ts
│   ├── twap/
│   │   └── v1beta1/
│   │       ├── genesis.ts
│   │       ├── query.rpc.func.ts
│   │       ├── query.rpc.react.ts
│   │       ├── query.ts
│   │       └── twap_record.ts
│   └── txfees/
│       └── v1beta1/
│           ├── feetoken.ts
│           ├── genesis.ts
│           ├── gov.ts
│           ├── query.rpc.func.ts
│           ├── query.rpc.react.ts
│           └── query.ts
├── react-query.ts
├── tendermint/
│   ├── abci/
│   │   ├── types.rpc.func.ts
│   │   ├── types.rpc.react.ts
│   │   └── types.ts
│   ├── crypto/
│   │   ├── keys.ts
│   │   └── proof.ts
│   ├── libs/
│   │   └── bits/
│   │       └── types.ts
│   ├── p2p/
│   │   └── types.ts
│   ├── types/
│   │   ├── block.ts
│   │   ├── evidence.ts
│   │   ├── params.ts
│   │   ├── types.ts
│   │   └── validator.ts
│   └── version/
│       └── types.ts
├── types.ts
├── utf8.ts
└── varint.ts

```

# Package Documentation


## akash.audit.v1beta1

### Transaction Methods

**SignProviderAttributes**
- Function: `signProviderAttributes`
- Description: SignProviderAttributes defines a method that signs provider attributes
- Request: MsgSignProviderAttributes
- Response: MsgSignProviderAttributesResponse

**DeleteProviderAttributes**
- Function: `deleteProviderAttributes`
- Description: DeleteProviderAttributes defines a method that deletes provider attributes
- Request: MsgDeleteProviderAttributes
- Response: MsgDeleteProviderAttributesResponse


## akash.audit.v1beta2

### Query Methods

**AllProvidersAttributes**
- Function: `getAllProvidersAttributes`
- Description: AllProvidersAttributes queries all providers
 buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
- Request: QueryAllProvidersAttributesRequest
- Response: QueryProvidersResponse

**ProviderAttributes**
- Function: `getProviderAttributes`
- Description: ProviderAttributes queries all provider signed attributes
 buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
- Request: QueryProviderAttributesRequest
- Response: QueryProvidersResponse

**ProviderAuditorAttributes**
- Function: `getProviderAuditorAttributes`
- Description: ProviderAuditorAttributes queries provider signed attributes by specific auditor
 buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
- Request: QueryProviderAuditorRequest
- Response: QueryProvidersResponse

**AuditorAttributes**
- Function: `getAuditorAttributes`
- Description: AuditorAttributes queries all providers signed by this auditor
 buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
- Request: QueryAuditorAttributesRequest
- Response: QueryProvidersResponse

### Transaction Methods

**SignProviderAttributes**
- Function: `signProviderAttributes`
- Description: SignProviderAttributes defines a method that signs provider attributes
- Request: MsgSignProviderAttributes
- Response: MsgSignProviderAttributesResponse

**DeleteProviderAttributes**
- Function: `deleteProviderAttributes`
- Description: DeleteProviderAttributes defines a method that deletes provider attributes
- Request: MsgDeleteProviderAttributes
- Response: MsgDeleteProviderAttributesResponse


## akash.cert.v1beta2

### Query Methods

**Certificates**
- Function: `getCertificates`
- Description: Certificates queries certificates
- Request: QueryCertificatesRequest
- Response: QueryCertificatesResponse

### Transaction Methods

**CreateCertificate**
- Function: `createCertificate`
- Description: CreateCertificate defines a method to create new certificate given proper inputs.
- Request: MsgCreateCertificate
- Response: MsgCreateCertificateResponse

**RevokeCertificate**
- Function: `revokeCertificate`
- Description: RevokeCertificate defines a method to revoke the certificate
- Request: MsgRevokeCertificate
- Response: MsgRevokeCertificateResponse


## akash.deployment.v1beta1

### Query Methods

**Deployments**
- Function: `getDeployments`
- Description: Deployments queries deployments
- Request: QueryDeploymentsRequest
- Response: QueryDeploymentsResponse

**Deployment**
- Function: `getDeployment`
- Description: Deployment queries deployment details
- Request: QueryDeploymentRequest
- Response: QueryDeploymentResponse

**Group**
- Function: `getGroup`
- Description: Group queries group details
- Request: QueryGroupRequest
- Response: QueryGroupResponse

### Transaction Methods

**CreateDeployment**
- Function: `createDeployment`
- Description: CreateDeployment defines a method to create new deployment given proper inputs.
- Request: MsgCreateDeployment
- Response: MsgCreateDeploymentResponse

**DepositDeployment**
- Function: `depositDeployment`
- Description: DepositDeployment deposits more funds into the deployment account
- Request: MsgDepositDeployment
- Response: MsgDepositDeploymentResponse

**UpdateDeployment**
- Function: `updateDeployment`
- Description: UpdateDeployment defines a method to update a deployment given proper inputs.
- Request: MsgUpdateDeployment
- Response: MsgUpdateDeploymentResponse

**CloseDeployment**
- Function: `closeDeployment`
- Description: CloseDeployment defines a method to close a deployment given proper inputs.
- Request: MsgCloseDeployment
- Response: MsgCloseDeploymentResponse

**CloseGroup**
- Function: `closeGroup`
- Description: CloseGroup defines a method to close a group of a deployment given proper inputs.
- Request: MsgCloseGroup
- Response: MsgCloseGroupResponse

**PauseGroup**
- Function: `pauseGroup`
- Description: PauseGroup defines a method to close a group of a deployment given proper inputs.
- Request: MsgPauseGroup
- Response: MsgPauseGroupResponse

**StartGroup**
- Function: `startGroup`
- Description: StartGroup defines a method to close a group of a deployment given proper inputs.
- Request: MsgStartGroup
- Response: MsgStartGroupResponse


## akash.deployment.v1beta2

### Query Methods

**Deployments**
- Function: `getDeployments`
- Description: Deployments queries deployments
- Request: QueryDeploymentsRequest
- Response: QueryDeploymentsResponse

**Deployment**
- Function: `getDeployment`
- Description: Deployment queries deployment details
- Request: QueryDeploymentRequest
- Response: QueryDeploymentResponse

**Group**
- Function: `getGroup`
- Description: Group queries group details
- Request: QueryGroupRequest
- Response: QueryGroupResponse

### Transaction Methods

**CreateDeployment**
- Function: `createDeployment`
- Description: CreateDeployment defines a method to create new deployment given proper inputs.
- Request: MsgCreateDeployment
- Response: MsgCreateDeploymentResponse

**DepositDeployment**
- Function: `depositDeployment`
- Description: DepositDeployment deposits more funds into the deployment account
- Request: MsgDepositDeployment
- Response: MsgDepositDeploymentResponse

**UpdateDeployment**
- Function: `updateDeployment`
- Description: UpdateDeployment defines a method to update a deployment given proper inputs.
- Request: MsgUpdateDeployment
- Response: MsgUpdateDeploymentResponse

**CloseDeployment**
- Function: `closeDeployment`
- Description: CloseDeployment defines a method to close a deployment given proper inputs.
- Request: MsgCloseDeployment
- Response: MsgCloseDeploymentResponse

**CloseGroup**
- Function: `closeGroup`
- Description: CloseGroup defines a method to close a group of a deployment given proper inputs.
- Request: MsgCloseGroup
- Response: MsgCloseGroupResponse

**PauseGroup**
- Function: `pauseGroup`
- Description: PauseGroup defines a method to close a group of a deployment given proper inputs.
- Request: MsgPauseGroup
- Response: MsgPauseGroupResponse

**StartGroup**
- Function: `startGroup`
- Description: StartGroup defines a method to close a group of a deployment given proper inputs.
- Request: MsgStartGroup
- Response: MsgStartGroupResponse


## akash.escrow.v1beta1

### Query Methods

**Accounts**
- Function: `getAccounts`
- Description: buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 Accounts queries all accounts
- Request: QueryAccountsRequest
- Response: QueryAccountsResponse

**Payments**
- Function: `getPayments`
- Description: buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 Payments queries all payments
- Request: QueryPaymentsRequest
- Response: QueryPaymentsResponse


## akash.escrow.v1beta2

### Query Methods

**Accounts**
- Function: `getAccounts`
- Description: buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 Accounts queries all accounts
- Request: QueryAccountsRequest
- Response: QueryAccountsResponse

**Payments**
- Function: `getPayments`
- Description: buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
 buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
 Payments queries all payments
- Request: QueryPaymentsRequest
- Response: QueryPaymentsResponse


## akash.market.v1beta2

### Query Methods

**Orders**
- Function: `getOrders`
- Description: Orders queries orders with filters
- Request: QueryOrdersRequest
- Response: QueryOrdersResponse

**Order**
- Function: `getOrder`
- Description: Order queries order details
- Request: QueryOrderRequest
- Response: QueryOrderResponse

**Bids**
- Function: `getBids`
- Description: Bids queries bids with filters
- Request: QueryBidsRequest
- Response: QueryBidsResponse

**Bid**
- Function: `getBid`
- Description: Bid queries bid details
- Request: QueryBidRequest
- Response: QueryBidResponse

**Leases**
- Function: `getLeases`
- Description: Leases queries leases with filters
- Request: QueryLeasesRequest
- Response: QueryLeasesResponse

**Lease**
- Function: `getLease`
- Description: Lease queries lease details
- Request: QueryLeaseRequest
- Response: QueryLeaseResponse

### Transaction Methods

**CreateBid**
- Function: `createBid`
- Description: CreateBid defines a method to create a bid given proper inputs.
- Request: MsgCreateBid
- Response: MsgCreateBidResponse

**CloseBid**
- Function: `closeBid`
- Description: CloseBid defines a method to close a bid given proper inputs.
- Request: MsgCloseBid
- Response: MsgCloseBidResponse

**WithdrawLease**
- Function: `withdrawLease`
- Description: WithdrawLease withdraws accrued funds from the lease payment
- Request: MsgWithdrawLease
- Response: MsgWithdrawLeaseResponse

**CreateLease**
- Function: `createLease`
- Description: CreateLease creates a new lease
- Request: MsgCreateLease
- Response: MsgCreateLeaseResponse

**CloseLease**
- Function: `closeLease`
- Description: CloseLease defines a method to close an order given proper inputs.
- Request: MsgCloseLease
- Response: MsgCloseLeaseResponse


## akash.provider.v1beta1

### Transaction Methods

**CreateProvider**
- Function: `createProvider`
- Description: CreateProvider defines a method that creates a provider given the proper inputs
- Request: MsgCreateProvider
- Response: MsgCreateProviderResponse

**UpdateProvider**
- Function: `updateProvider`
- Description: UpdateProvider defines a method that updates a provider given the proper inputs
- Request: MsgUpdateProvider
- Response: MsgUpdateProviderResponse

**DeleteProvider**
- Function: `deleteProvider`
- Description: DeleteProvider defines a method that deletes a provider given the proper inputs
- Request: MsgDeleteProvider
- Response: MsgDeleteProviderResponse


## akash.provider.v1beta2

### Query Methods

**Providers**
- Function: `getProviders`
- Description: Providers queries providers
- Request: QueryProvidersRequest
- Response: QueryProvidersResponse

**Provider**
- Function: `getProvider`
- Description: Provider queries provider details
- Request: QueryProviderRequest
- Response: QueryProviderResponse

### Transaction Methods

**CreateProvider**
- Function: `createProvider`
- Description: CreateProvider defines a method that creates a provider given the proper inputs
- Request: MsgCreateProvider
- Response: MsgCreateProviderResponse

**UpdateProvider**
- Function: `updateProvider`
- Description: UpdateProvider defines a method that updates a provider given the proper inputs
- Request: MsgUpdateProvider
- Response: MsgUpdateProviderResponse

**DeleteProvider**
- Function: `deleteProvider`
- Description: DeleteProvider defines a method that deletes a provider given the proper inputs
- Request: MsgDeleteProvider
- Response: MsgDeleteProviderResponse


## cosmos.app.v1alpha1

### Query Methods

**Config**
- Function: `getConfig`
- Description: Config returns the current app config.
- Request: QueryConfigRequest
- Response: QueryConfigResponse


## cosmos.auth.v1beta1

### Query Methods

**Accounts**
- Function: `getAccounts`
- Description: Accounts returns all the existing accounts

 Since: cosmos-sdk 0.43
- Request: QueryAccountsRequest
- Response: QueryAccountsResponse

**Account**
- Function: `getAccount`
- Description: Account returns account details based on address.
- Request: QueryAccountRequest
- Response: QueryAccountResponse

**Params**
- Function: `getParams`
- Description: Params queries all parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**ModuleAccounts**
- Function: `getModuleAccounts`
- Description: ModuleAccounts returns all the existing module accounts.
- Request: QueryModuleAccountsRequest
- Response: QueryModuleAccountsResponse

**Bech32Prefix**
- Function: `getBech32Prefix`
- Description: Bech32 queries bech32Prefix
- Request: Bech32PrefixRequest
- Response: Bech32PrefixResponse

**AddressBytesToString**
- Function: `getAddressBytesToString`
- Description: AddressBytesToString converts Account Address bytes to string
- Request: AddressBytesToStringRequest
- Response: AddressBytesToStringResponse

**AddressStringToBytes**
- Function: `getAddressStringToBytes`
- Description: AddressStringToBytes converts Address string to bytes
- Request: AddressStringToBytesRequest
- Response: AddressStringToBytesResponse


## cosmos.authz.v1beta1

### Query Methods

**Grants**
- Function: `getGrants`
- Description: Returns list of `Authorization`, granted to the grantee by the granter.
- Request: QueryGrantsRequest
- Response: QueryGrantsResponse

**GranterGrants**
- Function: `getGranterGrants`
- Description: GranterGrants returns list of `GrantAuthorization`, granted by granter.

 Since: cosmos-sdk 0.46
- Request: QueryGranterGrantsRequest
- Response: QueryGranterGrantsResponse

**GranteeGrants**
- Function: `getGranteeGrants`
- Description: GranteeGrants returns a list of `GrantAuthorization` by grantee.

 Since: cosmos-sdk 0.46
- Request: QueryGranteeGrantsRequest
- Response: QueryGranteeGrantsResponse

### Transaction Methods

**Grant**
- Function: `grant`
- Description: Grant grants the provided authorization to the grantee on the granter's
 account with the provided expiration time. If there is already a grant
 for the given (granter, grantee, Authorization) triple, then the grant
 will be overwritten.
- Request: MsgGrant
- Response: MsgGrantResponse

**Exec**
- Function: `exec`
- Description: Exec attempts to execute the provided messages using
 authorizations granted to the grantee. Each message should have only
 one signer corresponding to the granter of the authorization.
- Request: MsgExec
- Response: MsgExecResponse

**Revoke**
- Function: `revoke`
- Description: Revoke revokes any authorization corresponding to the provided method name on the
 granter's account that has been granted to the grantee.
- Request: MsgRevoke
- Response: MsgRevokeResponse


## cosmos.bank.v1beta1

### Query Methods

**Balance**
- Function: `getBalance`
- Description: Balance queries the balance of a single coin for a single account.
- Request: QueryBalanceRequest
- Response: QueryBalanceResponse

**AllBalances**
- Function: `getAllBalances`
- Description: AllBalances queries the balance of all coins for a single account.
- Request: QueryAllBalancesRequest
- Response: QueryAllBalancesResponse

**SpendableBalances**
- Function: `getSpendableBalances`
- Description: SpendableBalances queries the spenable balance of all coins for a single
 account.
- Request: QuerySpendableBalancesRequest
- Response: QuerySpendableBalancesResponse

**TotalSupply**
- Function: `getTotalSupply`
- Description: TotalSupply queries the total supply of all coins.
- Request: QueryTotalSupplyRequest
- Response: QueryTotalSupplyResponse

**SupplyOf**
- Function: `getSupplyOf`
- Description: SupplyOf queries the supply of a single coin.
- Request: QuerySupplyOfRequest
- Response: QuerySupplyOfResponse

**Params**
- Function: `getParams`
- Description: Params queries the parameters of x/bank module.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**DenomMetadata**
- Function: `getDenomMetadata`
- Description: DenomsMetadata queries the client metadata of a given coin denomination.
- Request: QueryDenomMetadataRequest
- Response: QueryDenomMetadataResponse

**DenomsMetadata**
- Function: `getDenomsMetadata`
- Description: DenomsMetadata queries the client metadata for all registered coin
 denominations.
- Request: QueryDenomsMetadataRequest
- Response: QueryDenomsMetadataResponse

**DenomOwners**
- Function: `getDenomOwners`
- Description: DenomOwners queries for all account addresses that own a particular token
 denomination.
- Request: QueryDenomOwnersRequest
- Response: QueryDenomOwnersResponse

### Transaction Methods

**Send**
- Function: `send`
- Description: Send defines a method for sending coins from one account to another account.
- Request: MsgSend
- Response: MsgSendResponse

**MultiSend**
- Function: `multiSend`
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
- Description: VerifyInvariant defines a method to verify a particular invariance.
- Request: MsgVerifyInvariant
- Response: MsgVerifyInvariantResponse


## cosmos.distribution.v1beta1

### Query Methods

**Params**
- Function: `getParams`
- Description: Params queries params of the distribution module.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**ValidatorOutstandingRewards**
- Function: `getValidatorOutstandingRewards`
- Description: ValidatorOutstandingRewards queries rewards of a validator address.
- Request: QueryValidatorOutstandingRewardsRequest
- Response: QueryValidatorOutstandingRewardsResponse

**ValidatorCommission**
- Function: `getValidatorCommission`
- Description: ValidatorCommission queries accumulated commission for a validator.
- Request: QueryValidatorCommissionRequest
- Response: QueryValidatorCommissionResponse

**ValidatorSlashes**
- Function: `getValidatorSlashes`
- Description: ValidatorSlashes queries slash events of a validator.
- Request: QueryValidatorSlashesRequest
- Response: QueryValidatorSlashesResponse

**DelegationRewards**
- Function: `getDelegationRewards`
- Description: DelegationRewards queries the total rewards accrued by a delegation.
- Request: QueryDelegationRewardsRequest
- Response: QueryDelegationRewardsResponse

**DelegationTotalRewards**
- Function: `getDelegationTotalRewards`
- Description: DelegationTotalRewards queries the total rewards accrued by a each
 validator.
- Request: QueryDelegationTotalRewardsRequest
- Response: QueryDelegationTotalRewardsResponse

**DelegatorValidators**
- Function: `getDelegatorValidators`
- Description: DelegatorValidators queries the validators of a delegator.
- Request: QueryDelegatorValidatorsRequest
- Response: QueryDelegatorValidatorsResponse

**DelegatorWithdrawAddress**
- Function: `getDelegatorWithdrawAddress`
- Description: DelegatorWithdrawAddress queries withdraw address of a delegator.
- Request: QueryDelegatorWithdrawAddressRequest
- Response: QueryDelegatorWithdrawAddressResponse

**CommunityPool**
- Function: `getCommunityPool`
- Description: CommunityPool queries the community pool coins.
- Request: QueryCommunityPoolRequest
- Response: QueryCommunityPoolResponse

### Transaction Methods

**SetWithdrawAddress**
- Function: `setWithdrawAddress`
- Description: SetWithdrawAddress defines a method to change the withdraw address
 for a delegator (or validator self-delegation).
- Request: MsgSetWithdrawAddress
- Response: MsgSetWithdrawAddressResponse

**WithdrawDelegatorReward**
- Function: `withdrawDelegatorReward`
- Description: WithdrawDelegatorReward defines a method to withdraw rewards of delegator
 from a single validator.
- Request: MsgWithdrawDelegatorReward
- Response: MsgWithdrawDelegatorRewardResponse

**WithdrawValidatorCommission**
- Function: `withdrawValidatorCommission`
- Description: WithdrawValidatorCommission defines a method to withdraw the
 full commission to the validator address.
- Request: MsgWithdrawValidatorCommission
- Response: MsgWithdrawValidatorCommissionResponse

**FundCommunityPool**
- Function: `fundCommunityPool`
- Description: FundCommunityPool defines a method to allow an account to directly
 fund the community pool.
- Request: MsgFundCommunityPool
- Response: MsgFundCommunityPoolResponse


## cosmos.evidence.v1beta1

### Query Methods

**Evidence**
- Function: `getEvidence`
- Description: Evidence queries evidence based on evidence hash.
- Request: QueryEvidenceRequest
- Response: QueryEvidenceResponse

**AllEvidence**
- Function: `getAllEvidence`
- Description: AllEvidence queries all evidence.
- Request: QueryAllEvidenceRequest
- Response: QueryAllEvidenceResponse

### Transaction Methods

**SubmitEvidence**
- Function: `submitEvidence`
- Description: SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
 counterfactual signing.
- Request: MsgSubmitEvidence
- Response: MsgSubmitEvidenceResponse


## cosmos.feegrant.v1beta1

### Query Methods

**Allowance**
- Function: `getAllowance`
- Description: Allowance returns fee granted to the grantee by the granter.
- Request: QueryAllowanceRequest
- Response: QueryAllowanceResponse

**Allowances**
- Function: `getAllowances`
- Description: Allowances returns all the grants for address.
- Request: QueryAllowancesRequest
- Response: QueryAllowancesResponse

**AllowancesByGranter**
- Function: `getAllowancesByGranter`
- Description: AllowancesByGranter returns all the grants given by an address
 Since v0.46
- Request: QueryAllowancesByGranterRequest
- Response: QueryAllowancesByGranterResponse

### Transaction Methods

**GrantAllowance**
- Function: `grantAllowance`
- Description: GrantAllowance grants fee allowance to the grantee on the granter's
 account with the provided expiration time.
- Request: MsgGrantAllowance
- Response: MsgGrantAllowanceResponse

**RevokeAllowance**
- Function: `revokeAllowance`
- Description: RevokeAllowance revokes any fee allowance of granter's account that
 has been granted to the grantee.
- Request: MsgRevokeAllowance
- Response: MsgRevokeAllowanceResponse


## cosmos.gov.v1

### Query Methods

**Proposal**
- Function: `getProposal`
- Description: Proposal queries proposal details based on ProposalID.
- Request: QueryProposalRequest
- Response: QueryProposalResponse

**Proposals**
- Function: `getProposals`
- Description: Proposals queries all proposals based on given status.
- Request: QueryProposalsRequest
- Response: QueryProposalsResponse

**Vote**
- Function: `getVote`
- Description: Vote queries voted information based on proposalID, voterAddr.
- Request: QueryVoteRequest
- Response: QueryVoteResponse

**Votes**
- Function: `getVotes`
- Description: Votes queries votes of a given proposal.
- Request: QueryVotesRequest
- Response: QueryVotesResponse

**Params**
- Function: `getParams`
- Description: Params queries all parameters of the gov module.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**Deposit**
- Function: `getDeposit`
- Description: Deposit queries single deposit information based proposalID, depositAddr.
- Request: QueryDepositRequest
- Response: QueryDepositResponse

**Deposits**
- Function: `getDeposits`
- Description: Deposits queries all deposits of a single proposal.
- Request: QueryDepositsRequest
- Response: QueryDepositsResponse

**TallyResult**
- Function: `getTallyResult`
- Description: TallyResult queries the tally of a proposal vote.
- Request: QueryTallyResultRequest
- Response: QueryTallyResultResponse

### Transaction Methods

**SubmitProposal**
- Function: `submitProposal`
- Description: SubmitProposal defines a method to create new proposal given a content.
- Request: MsgSubmitProposal
- Response: MsgSubmitProposalResponse

**ExecLegacyContent**
- Function: `execLegacyContent`
- Description: ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
 to execute a legacy content-based proposal.
- Request: MsgExecLegacyContent
- Response: MsgExecLegacyContentResponse

**Vote**
- Function: `vote`
- Description: Vote defines a method to add a vote on a specific proposal.
- Request: MsgVote
- Response: MsgVoteResponse

**VoteWeighted**
- Function: `voteWeighted`
- Description: VoteWeighted defines a method to add a weighted vote on a specific proposal.
- Request: MsgVoteWeighted
- Response: MsgVoteWeightedResponse

**Deposit**
- Function: `deposit`
- Description: Deposit defines a method to add deposit on a specific proposal.
- Request: MsgDeposit
- Response: MsgDepositResponse


## cosmos.gov.v1beta1

### Query Methods

**Proposal**
- Function: `getProposal`
- Description: Proposal queries proposal details based on ProposalID.
- Request: QueryProposalRequest
- Response: QueryProposalResponse

**Proposals**
- Function: `getProposals`
- Description: Proposals queries all proposals based on given status.
- Request: QueryProposalsRequest
- Response: QueryProposalsResponse

**Vote**
- Function: `getVote`
- Description: Vote queries voted information based on proposalID, voterAddr.
- Request: QueryVoteRequest
- Response: QueryVoteResponse

**Votes**
- Function: `getVotes`
- Description: Votes queries votes of a given proposal.
- Request: QueryVotesRequest
- Response: QueryVotesResponse

**Params**
- Function: `getParams`
- Description: Params queries all parameters of the gov module.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**Deposit**
- Function: `getDeposit`
- Description: Deposit queries single deposit information based proposalID, depositAddr.
- Request: QueryDepositRequest
- Response: QueryDepositResponse

**Deposits**
- Function: `getDeposits`
- Description: Deposits queries all deposits of a single proposal.
- Request: QueryDepositsRequest
- Response: QueryDepositsResponse

**TallyResult**
- Function: `getTallyResult`
- Description: TallyResult queries the tally of a proposal vote.
- Request: QueryTallyResultRequest
- Response: QueryTallyResultResponse

### Transaction Methods

**SubmitProposal**
- Function: `submitProposal`
- Description: SubmitProposal defines a method to create new proposal given a content.
- Request: MsgSubmitProposal
- Response: MsgSubmitProposalResponse

**Vote**
- Function: `vote`
- Description: Vote defines a method to add a vote on a specific proposal.
- Request: MsgVote
- Response: MsgVoteResponse

**VoteWeighted**
- Function: `voteWeighted`
- Description: VoteWeighted defines a method to add a weighted vote on a specific proposal.

 Since: cosmos-sdk 0.43
- Request: MsgVoteWeighted
- Response: MsgVoteWeightedResponse

**Deposit**
- Function: `deposit`
- Description: Deposit defines a method to add deposit on a specific proposal.
- Request: MsgDeposit
- Response: MsgDepositResponse


## cosmos.group.v1

### Query Methods

**GroupInfo**
- Function: `getGroupInfo`
- Description: GroupInfo queries group info based on group id.
- Request: QueryGroupInfoRequest
- Response: QueryGroupInfoResponse

**GroupPolicyInfo**
- Function: `getGroupPolicyInfo`
- Description: GroupPolicyInfo queries group policy info based on account address of group policy.
- Request: QueryGroupPolicyInfoRequest
- Response: QueryGroupPolicyInfoResponse

**GroupMembers**
- Function: `getGroupMembers`
- Description: GroupMembers queries members of a group
- Request: QueryGroupMembersRequest
- Response: QueryGroupMembersResponse

**GroupsByAdmin**
- Function: `getGroupsByAdmin`
- Description: GroupsByAdmin queries groups by admin address.
- Request: QueryGroupsByAdminRequest
- Response: QueryGroupsByAdminResponse

**GroupPoliciesByGroup**
- Function: `getGroupPoliciesByGroup`
- Description: GroupPoliciesByGroup queries group policies by group id.
- Request: QueryGroupPoliciesByGroupRequest
- Response: QueryGroupPoliciesByGroupResponse

**GroupPoliciesByAdmin**
- Function: `getGroupPoliciesByAdmin`
- Description: GroupsByAdmin queries group policies by admin address.
- Request: QueryGroupPoliciesByAdminRequest
- Response: QueryGroupPoliciesByAdminResponse

**Proposal**
- Function: `getProposal`
- Description: Proposal queries a proposal based on proposal id.
- Request: QueryProposalRequest
- Response: QueryProposalResponse

**ProposalsByGroupPolicy**
- Function: `getProposalsByGroupPolicy`
- Description: ProposalsByGroupPolicy queries proposals based on account address of group policy.
- Request: QueryProposalsByGroupPolicyRequest
- Response: QueryProposalsByGroupPolicyResponse

**VoteByProposalVoter**
- Function: `getVoteByProposalVoter`
- Description: VoteByProposalVoter queries a vote by proposal id and voter.
- Request: QueryVoteByProposalVoterRequest
- Response: QueryVoteByProposalVoterResponse

**VotesByProposal**
- Function: `getVotesByProposal`
- Description: VotesByProposal queries a vote by proposal.
- Request: QueryVotesByProposalRequest
- Response: QueryVotesByProposalResponse

**VotesByVoter**
- Function: `getVotesByVoter`
- Description: VotesByVoter queries a vote by voter.
- Request: QueryVotesByVoterRequest
- Response: QueryVotesByVoterResponse

**GroupsByMember**
- Function: `getGroupsByMember`
- Description: GroupsByMember queries groups by member address.
- Request: QueryGroupsByMemberRequest
- Response: QueryGroupsByMemberResponse

**TallyResult**
- Function: `getTallyResult`
- Description: TallyResult queries the tally of a proposal votes.
- Request: QueryTallyResultRequest
- Response: QueryTallyResultResponse

### Transaction Methods

**CreateGroup**
- Function: `createGroup`
- Description: CreateGroup creates a new group with an admin account address, a list of members and some optional metadata.
- Request: MsgCreateGroup
- Response: MsgCreateGroupResponse

**UpdateGroupMembers**
- Function: `updateGroupMembers`
- Description: UpdateGroupMembers updates the group members with given group id and admin address.
- Request: MsgUpdateGroupMembers
- Response: MsgUpdateGroupMembersResponse

**UpdateGroupAdmin**
- Function: `updateGroupAdmin`
- Description: UpdateGroupAdmin updates the group admin with given group id and previous admin address.
- Request: MsgUpdateGroupAdmin
- Response: MsgUpdateGroupAdminResponse

**UpdateGroupMetadata**
- Function: `updateGroupMetadata`
- Description: UpdateGroupMetadata updates the group metadata with given group id and admin address.
- Request: MsgUpdateGroupMetadata
- Response: MsgUpdateGroupMetadataResponse

**CreateGroupPolicy**
- Function: `createGroupPolicy`
- Description: CreateGroupPolicy creates a new group policy using given DecisionPolicy.
- Request: MsgCreateGroupPolicy
- Response: MsgCreateGroupPolicyResponse

**CreateGroupWithPolicy**
- Function: `createGroupWithPolicy`
- Description: CreateGroupWithPolicy creates a new group with policy.
- Request: MsgCreateGroupWithPolicy
- Response: MsgCreateGroupWithPolicyResponse

**UpdateGroupPolicyAdmin**
- Function: `updateGroupPolicyAdmin`
- Description: UpdateGroupPolicyAdmin updates a group policy admin.
- Request: MsgUpdateGroupPolicyAdmin
- Response: MsgUpdateGroupPolicyAdminResponse

**UpdateGroupPolicyDecisionPolicy**
- Function: `updateGroupPolicyDecisionPolicy`
- Description: UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated.
- Request: MsgUpdateGroupPolicyDecisionPolicy
- Response: MsgUpdateGroupPolicyDecisionPolicyResponse

**UpdateGroupPolicyMetadata**
- Function: `updateGroupPolicyMetadata`
- Description: UpdateGroupPolicyMetadata updates a group policy metadata.
- Request: MsgUpdateGroupPolicyMetadata
- Response: MsgUpdateGroupPolicyMetadataResponse

**SubmitProposal**
- Function: `submitProposal`
- Description: SubmitProposal submits a new proposal.
- Request: MsgSubmitProposal
- Response: MsgSubmitProposalResponse

**WithdrawProposal**
- Function: `withdrawProposal`
- Description: WithdrawProposal aborts a proposal.
- Request: MsgWithdrawProposal
- Response: MsgWithdrawProposalResponse

**Vote**
- Function: `vote`
- Description: Vote allows a voter to vote on a proposal.
- Request: MsgVote
- Response: MsgVoteResponse

**Exec**
- Function: `exec`
- Description: Exec executes a proposal.
- Request: MsgExec
- Response: MsgExecResponse

**LeaveGroup**
- Function: `leaveGroup`
- Description: LeaveGroup allows a group member to leave the group.
- Request: MsgLeaveGroup
- Response: MsgLeaveGroupResponse


## cosmos.mint.v1beta1

### Query Methods

**Params**
- Function: `getParams`
- Description: Params returns the total set of minting parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**Inflation**
- Function: `getInflation`
- Description: Inflation returns the current minting inflation value.
- Request: QueryInflationRequest
- Response: QueryInflationResponse

**AnnualProvisions**
- Function: `getAnnualProvisions`
- Description: AnnualProvisions current minting annual provisions value.
- Request: QueryAnnualProvisionsRequest
- Response: QueryAnnualProvisionsResponse


## cosmos.nft.v1beta1

### Query Methods

**Balance**
- Function: `getBalance`
- Description: Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
- Request: QueryBalanceRequest
- Response: QueryBalanceResponse

**Owner**
- Function: `getOwner`
- Description: Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
- Request: QueryOwnerRequest
- Response: QueryOwnerResponse

**Supply**
- Function: `getSupply`
- Description: Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.
- Request: QuerySupplyRequest
- Response: QuerySupplyResponse

**NFTs**
- Function: `getNFTs`
- Description: NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
 ERC721Enumerable
- Request: QueryNFTsRequest
- Response: QueryNFTsResponse

**NFT**
- Function: `getNFT`
- Description: NFT queries an NFT based on its class and id.
- Request: QueryNFTRequest
- Response: QueryNFTResponse

**Class**
- Function: `getClass`
- Description: Class queries an NFT class based on its id
- Request: QueryClassRequest
- Response: QueryClassResponse

**Classes**
- Function: `getClasses`
- Description: Classes queries all NFT classes
- Request: QueryClassesRequest
- Response: QueryClassesResponse

### Transaction Methods

**Send**
- Function: `send`
- Description: Send defines a method to send a nft from one account to another account.
- Request: MsgSend
- Response: MsgSendResponse


## cosmos.params.v1beta1

### Query Methods

**Params**
- Function: `getParams`
- Description: Params queries a specific parameter of a module, given its subspace and
 key.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**Subspaces**
- Function: `getSubspaces`
- Description: Subspaces queries for all registered subspaces and all keys for a subspace.
- Request: QuerySubspacesRequest
- Response: QuerySubspacesResponse


## cosmos.slashing.v1beta1

### Query Methods

**Params**
- Function: `getParams`
- Description: Params queries the parameters of slashing module
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**SigningInfo**
- Function: `getSigningInfo`
- Description: SigningInfo queries the signing info of given cons address
- Request: QuerySigningInfoRequest
- Response: QuerySigningInfoResponse

**SigningInfos**
- Function: `getSigningInfos`
- Description: SigningInfos queries signing info of all validators
- Request: QuerySigningInfosRequest
- Response: QuerySigningInfosResponse

### Transaction Methods

**Unjail**
- Function: `unjail`
- Description: Unjail defines a method for unjailing a jailed validator, thus returning
 them into the bonded validator set, so they can begin receiving provisions
 and rewards again.
- Request: MsgUnjail
- Response: MsgUnjailResponse


## cosmos.staking.v1beta1

### Query Methods

**Validators**
- Function: `getValidators`
- Description: Validators queries all validators that match the given status.
- Request: QueryValidatorsRequest
- Response: QueryValidatorsResponse

**Validator**
- Function: `getValidator`
- Description: Validator queries validator info for given validator address.
- Request: QueryValidatorRequest
- Response: QueryValidatorResponse

**ValidatorDelegations**
- Function: `getValidatorDelegations`
- Description: ValidatorDelegations queries delegate info for given validator.
- Request: QueryValidatorDelegationsRequest
- Response: QueryValidatorDelegationsResponse

**ValidatorUnbondingDelegations**
- Function: `getValidatorUnbondingDelegations`
- Description: ValidatorUnbondingDelegations queries unbonding delegations of a validator.
- Request: QueryValidatorUnbondingDelegationsRequest
- Response: QueryValidatorUnbondingDelegationsResponse

**Delegation**
- Function: `getDelegation`
- Description: Delegation queries delegate info for given validator delegator pair.
- Request: QueryDelegationRequest
- Response: QueryDelegationResponse

**UnbondingDelegation**
- Function: `getUnbondingDelegation`
- Description: UnbondingDelegation queries unbonding info for given validator delegator
 pair.
- Request: QueryUnbondingDelegationRequest
- Response: QueryUnbondingDelegationResponse

**DelegatorDelegations**
- Function: `getDelegatorDelegations`
- Description: DelegatorDelegations queries all delegations of a given delegator address.
- Request: QueryDelegatorDelegationsRequest
- Response: QueryDelegatorDelegationsResponse

**DelegatorUnbondingDelegations**
- Function: `getDelegatorUnbondingDelegations`
- Description: DelegatorUnbondingDelegations queries all unbonding delegations of a given
 delegator address.
- Request: QueryDelegatorUnbondingDelegationsRequest
- Response: QueryDelegatorUnbondingDelegationsResponse

**Redelegations**
- Function: `getRedelegations`
- Description: Redelegations queries redelegations of given address.
- Request: QueryRedelegationsRequest
- Response: QueryRedelegationsResponse

**DelegatorValidators**
- Function: `getDelegatorValidators`
- Description: DelegatorValidators queries all validators info for given delegator
 address.
- Request: QueryDelegatorValidatorsRequest
- Response: QueryDelegatorValidatorsResponse

**DelegatorValidator**
- Function: `getDelegatorValidator`
- Description: DelegatorValidator queries validator info for given delegator validator
 pair.
- Request: QueryDelegatorValidatorRequest
- Response: QueryDelegatorValidatorResponse

**HistoricalInfo**
- Function: `getHistoricalInfo`
- Description: HistoricalInfo queries the historical info for given height.
- Request: QueryHistoricalInfoRequest
- Response: QueryHistoricalInfoResponse

**Pool**
- Function: `getPool`
- Description: Pool queries the pool info.
- Request: QueryPoolRequest
- Response: QueryPoolResponse

**Params**
- Function: `getParams`
- Description: Parameters queries the staking parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

### Transaction Methods

**CreateValidator**
- Function: `createValidator`
- Description: CreateValidator defines a method for creating a new validator.
- Request: MsgCreateValidator
- Response: MsgCreateValidatorResponse

**EditValidator**
- Function: `editValidator`
- Description: EditValidator defines a method for editing an existing validator.
- Request: MsgEditValidator
- Response: MsgEditValidatorResponse

**Delegate**
- Function: `delegate`
- Description: Delegate defines a method for performing a delegation of coins
 from a delegator to a validator.
- Request: MsgDelegate
- Response: MsgDelegateResponse

**BeginRedelegate**
- Function: `beginRedelegate`
- Description: BeginRedelegate defines a method for performing a redelegation
 of coins from a delegator and source validator to a destination validator.
- Request: MsgBeginRedelegate
- Response: MsgBeginRedelegateResponse

**Undelegate**
- Function: `undelegate`
- Description: Undelegate defines a method for performing an undelegation from a
 delegate and a validator.
- Request: MsgUndelegate
- Response: MsgUndelegateResponse


## cosmos.tx.v1beta1


## cosmos.upgrade.v1beta1

### Query Methods

**CurrentPlan**
- Function: `getCurrentPlan`
- Description: CurrentPlan queries the current upgrade plan.
- Request: QueryCurrentPlanRequest
- Response: QueryCurrentPlanResponse

**AppliedPlan**
- Function: `getAppliedPlan`
- Description: AppliedPlan queries a previously applied upgrade plan by its name.
- Request: QueryAppliedPlanRequest
- Response: QueryAppliedPlanResponse

**UpgradedConsensusState**
- Function: `getUpgradedConsensusState`
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
- Description: ModuleVersions queries the list of module versions from state.

 Since: cosmos-sdk 0.43
- Request: QueryModuleVersionsRequest
- Response: QueryModuleVersionsResponse

**Authority**
- Function: `getAuthority`
- Description: Returns the account with authority to conduct upgrades
- Request: QueryAuthorityRequest
- Response: QueryAuthorityResponse

### Transaction Methods

**SoftwareUpgrade**
- Function: `softwareUpgrade`
- Description: SoftwareUpgrade is a governance operation for initiating a software upgrade.

 Since: cosmos-sdk 0.46
- Request: MsgSoftwareUpgrade
- Response: MsgSoftwareUpgradeResponse

**CancelUpgrade**
- Function: `cancelUpgrade`
- Description: CancelUpgrade is a governance operation for cancelling a previously
 approvid software upgrade.

 Since: cosmos-sdk 0.46
- Request: MsgCancelUpgrade
- Response: MsgCancelUpgradeResponse


## cosmos.vesting.v1beta1

### Transaction Methods

**CreateVestingAccount**
- Function: `createVestingAccount`
- Description: CreateVestingAccount defines a method that enables creating a vesting
 account.
- Request: MsgCreateVestingAccount
- Response: MsgCreateVestingAccountResponse

**CreatePermanentLockedAccount**
- Function: `createPermanentLockedAccount`
- Description: CreatePermanentLockedAccount defines a method that enables creating a permanent
 locked account.
- Request: MsgCreatePermanentLockedAccount
- Response: MsgCreatePermanentLockedAccountResponse

**CreatePeriodicVestingAccount**
- Function: `createPeriodicVestingAccount`
- Description: CreatePeriodicVestingAccount defines a method that enables creating a
 periodic vesting account.
- Request: MsgCreatePeriodicVestingAccount
- Response: MsgCreatePeriodicVestingAccountResponse


## cosmwasm.wasm.v1

### Query Methods

**ContractInfo**
- Function: `getContractInfo`
- Description: ContractInfo gets the contract meta data
- Request: QueryContractInfoRequest
- Response: QueryContractInfoResponse

**ContractHistory**
- Function: `getContractHistory`
- Description: ContractHistory gets the contract code history
- Request: QueryContractHistoryRequest
- Response: QueryContractHistoryResponse

**ContractsByCode**
- Function: `getContractsByCode`
- Description: ContractsByCode lists all smart contracts for a code id
- Request: QueryContractsByCodeRequest
- Response: QueryContractsByCodeResponse

**AllContractState**
- Function: `getAllContractState`
- Description: AllContractState gets all raw store data for a single contract
- Request: QueryAllContractStateRequest
- Response: QueryAllContractStateResponse

**RawContractState**
- Function: `getRawContractState`
- Description: RawContractState gets single key from the raw store data of a contract
- Request: QueryRawContractStateRequest
- Response: QueryRawContractStateResponse

**SmartContractState**
- Function: `getSmartContractState`
- Description: SmartContractState get smart query result from the contract
- Request: QuerySmartContractStateRequest
- Response: QuerySmartContractStateResponse

**Code**
- Function: `getCode`
- Description: Code gets the binary code and metadata for a singe wasm code
- Request: QueryCodeRequest
- Response: QueryCodeResponse

**Codes**
- Function: `getCodes`
- Description: Codes gets the metadata for all stored wasm codes
- Request: QueryCodesRequest
- Response: QueryCodesResponse

**PinnedCodes**
- Function: `getPinnedCodes`
- Description: PinnedCodes gets the pinned code ids
- Request: QueryPinnedCodesRequest
- Response: QueryPinnedCodesResponse

### Transaction Methods

**StoreCode**
- Function: `storeCode`
- Description: StoreCode to submit Wasm code to the system
- Request: MsgStoreCode
- Response: MsgStoreCodeResponse

**InstantiateContract**
- Function: `instantiateContract`
- Description: Instantiate creates a new smart contract instance for the given code id.
- Request: MsgInstantiateContract
- Response: MsgInstantiateContractResponse

**ExecuteContract**
- Function: `executeContract`
- Description: Execute submits the given message data to a smart contract
- Request: MsgExecuteContract
- Response: MsgExecuteContractResponse

**MigrateContract**
- Function: `migrateContract`
- Description: Migrate runs a code upgrade/ downgrade for a smart contract
- Request: MsgMigrateContract
- Response: MsgMigrateContractResponse

**UpdateAdmin**
- Function: `updateAdmin`
- Description: UpdateAdmin sets a new   admin for a smart contract
- Request: MsgUpdateAdmin
- Response: MsgUpdateAdminResponse

**ClearAdmin**
- Function: `clearAdmin`
- Description: ClearAdmin removes any admin stored for a smart contract
- Request: MsgClearAdmin
- Response: MsgClearAdminResponse


## evmos.claims.v1

### Query Methods

**TotalUnclaimed**
- Function: `getTotalUnclaimed`
- Description: TotalUnclaimed queries the total unclaimed tokens from the airdrop
- Request: QueryTotalUnclaimedRequest
- Response: QueryTotalUnclaimedResponse

**Params**
- Function: `getParams`
- Description: Params returns the claims module parameters
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**ClaimsRecords**
- Function: `getClaimsRecords`
- Description: ClaimsRecords returns all claims records
- Request: QueryClaimsRecordsRequest
- Response: QueryClaimsRecordsResponse

**ClaimsRecord**
- Function: `getClaimsRecord`
- Description: ClaimsRecord returns the claims record for a given address
- Request: QueryClaimsRecordRequest
- Response: QueryClaimsRecordResponse


## evmos.epochs.v1

### Query Methods

**EpochInfos**
- Function: `getEpochInfos`
- Description: EpochInfos provide running epochInfos
- Request: QueryEpochsInfoRequest
- Response: QueryEpochsInfoResponse

**CurrentEpoch**
- Function: `getCurrentEpoch`
- Description: CurrentEpoch provide current epoch of specified identifier
- Request: QueryCurrentEpochRequest
- Response: QueryCurrentEpochResponse


## evmos.erc20.v1

### Query Methods

**TokenPairs**
- Function: `getTokenPairs`
- Description: TokenPairs retrieves registered token pairs
- Request: QueryTokenPairsRequest
- Response: QueryTokenPairsResponse

**TokenPair**
- Function: `getTokenPair`
- Description: TokenPair retrieves a registered token pair
- Request: QueryTokenPairRequest
- Response: QueryTokenPairResponse

**Params**
- Function: `getParams`
- Description: Params retrieves the erc20 module params
- Request: QueryParamsRequest
- Response: QueryParamsResponse

### Transaction Methods

**ConvertCoin**
- Function: `convertCoin`
- Description: ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
 that is registered on the token mapping.
- Request: MsgConvertCoin
- Response: MsgConvertCoinResponse

**ConvertERC20**
- Function: `convertERC20`
- Description: ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
 contract that is registered on the token mapping.
- Request: MsgConvertERC20
- Response: MsgConvertERC20Response


## evmos.fees.v1

### Query Methods

**DevFeeInfos**
- Function: `getDevFeeInfos`
- Description: DevFeeInfos retrieves all registered contracts for fee distribution
- Request: QueryDevFeeInfosRequest
- Response: QueryDevFeeInfosResponse

**DevFeeInfo**
- Function: `getDevFeeInfo`
- Description: DevFeeInfo retrieves a registered contract for fee distribution
- Request: QueryDevFeeInfoRequest
- Response: QueryDevFeeInfoResponse

**Params**
- Function: `getParams`
- Description: Params retrieves the fees module params
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**DevFeeInfosPerDeployer**
- Function: `getDevFeeInfosPerDeployer`
- Description: DevFeeInfosPerDeployer retrieves all contracts that a deployer has
 registered for fee distribution
- Request: QueryDevFeeInfosPerDeployerRequest
- Response: QueryDevFeeInfosPerDeployerResponse

### Transaction Methods

**RegisterDevFeeInfo**
- Function: `registerDevFeeInfo`
- Description: RegisterDevFeeInfo is used by a deployer to register a new contract for
 receiving transaction fees
- Request: MsgRegisterDevFeeInfo
- Response: MsgRegisterDevFeeInfoResponse

**CancelDevFeeInfo**
- Function: `cancelDevFeeInfo`
- Description: CancelDevFeeInfo is used by a deployer to cancel a registered contract
 and stop receiving transaction fees
- Request: MsgCancelDevFeeInfo
- Response: MsgCancelDevFeeInfoResponse

**UpdateDevFeeInfo**
- Function: `updateDevFeeInfo`
- Description: UpdateDevFeeInfo is used by a deployer to update the withdraw address
- Request: MsgUpdateDevFeeInfo
- Response: MsgUpdateDevFeeInfoResponse


## evmos.incentives.v1

### Query Methods

**Incentives**
- Function: `getIncentives`
- Description: Incentives retrieves registered incentives
- Request: QueryIncentivesRequest
- Response: QueryIncentivesResponse

**Incentive**
- Function: `getIncentive`
- Description: Incentive retrieves a registered incentive
- Request: QueryIncentiveRequest
- Response: QueryIncentiveResponse

**GasMeters**
- Function: `getGasMeters`
- Description: GasMeters retrieves active gas meters for a given contract
- Request: QueryGasMetersRequest
- Response: QueryGasMetersResponse

**GasMeter**
- Function: `getGasMeter`
- Description: GasMeter Retrieves a active gas meter
- Request: QueryGasMeterRequest
- Response: QueryGasMeterResponse

**AllocationMeters**
- Function: `getAllocationMeters`
- Description: AllocationMeters retrieves active allocation meters for a given
 denomination
- Request: QueryAllocationMetersRequest
- Response: QueryAllocationMetersResponse

**AllocationMeter**
- Function: `getAllocationMeter`
- Description: AllocationMeter Retrieves a active gas meter
- Request: QueryAllocationMeterRequest
- Response: QueryAllocationMeterResponse

**Params**
- Function: `getParams`
- Description: Params retrieves the incentives module params
- Request: QueryParamsRequest
- Response: QueryParamsResponse


## evmos.inflation.v1

### Query Methods

**Period**
- Function: `getPeriod`
- Description: Period retrieves current period.
- Request: QueryPeriodRequest
- Response: QueryPeriodResponse

**EpochMintProvision**
- Function: `getEpochMintProvision`
- Description: EpochMintProvision retrieves current minting epoch provision value.
- Request: QueryEpochMintProvisionRequest
- Response: QueryEpochMintProvisionResponse

**SkippedEpochs**
- Function: `getSkippedEpochs`
- Description: SkippedEpochs retrieves the total number of skipped epochs.
- Request: QuerySkippedEpochsRequest
- Response: QuerySkippedEpochsResponse

**CirculatingSupply**
- Function: `getCirculatingSupply`
- Description: CirculatingSupply retrieves the total number of tokens that are in
 circulation (i.e. excluding unvested tokens).
- Request: QueryCirculatingSupplyRequest
- Response: QueryCirculatingSupplyResponse

**InflationRate**
- Function: `getInflationRate`
- Description: InflationRate retrieves the inflation rate of the current period.
- Request: QueryInflationRateRequest
- Response: QueryInflationRateResponse

**Params**
- Function: `getParams`
- Description: Params retrieves the total set of minting parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse


## evmos.recovery.v1

### Query Methods

**Params**
- Function: `getParams`
- Description: Params retrieves the total set of recovery parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse


## evmos.vesting.v1

### Query Methods

**Balances**
- Function: `getBalances`
- Description: Retrieves the unvested, vested and locked tokens for a vesting account
- Request: QueryBalancesRequest
- Response: QueryBalancesResponse

### Transaction Methods

**CreateClawbackVestingAccount**
- Function: `createClawbackVestingAccount`
- Description: CreateClawbackVestingAccount creats a vesting account that is subject to
 clawback and the configuration of vesting and lockup schedules.
- Request: MsgCreateClawbackVestingAccount
- Response: MsgCreateClawbackVestingAccountResponse

**Clawback**
- Function: `clawback`
- Description: Clawback removes the unvested tokens from a ClawbackVestingAccount.
- Request: MsgClawback
- Response: MsgClawbackResponse


## ibc.applications.transfer.v1

### Query Methods

**DenomTrace**
- Function: `getDenomTrace`
- Description: DenomTrace queries a denomination trace information.
- Request: QueryDenomTraceRequest
- Response: QueryDenomTraceResponse

**DenomTraces**
- Function: `getDenomTraces`
- Description: DenomTraces queries all denomination traces.
- Request: QueryDenomTracesRequest
- Response: QueryDenomTracesResponse

**Params**
- Function: `getParams`
- Description: Params queries all parameters of the ibc-transfer module.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

### Transaction Methods

**Transfer**
- Function: `transfer`
- Description: Transfer defines a rpc handler method for MsgTransfer.
- Request: MsgTransfer
- Response: MsgTransferResponse


## ibc.core.channel.v1

### Query Methods

**Channel**
- Function: `getChannel`
- Description: Channel queries an IBC Channel.
- Request: QueryChannelRequest
- Response: QueryChannelResponse

**Channels**
- Function: `getChannels`
- Description: Channels queries all the IBC channels of a chain.
- Request: QueryChannelsRequest
- Response: QueryChannelsResponse

**ConnectionChannels**
- Function: `getConnectionChannels`
- Description: ConnectionChannels queries all the channels associated with a connection
 end.
- Request: QueryConnectionChannelsRequest
- Response: QueryConnectionChannelsResponse

**ChannelClientState**
- Function: `getChannelClientState`
- Description: ChannelClientState queries for the client state for the channel associated
 with the provided channel identifiers.
- Request: QueryChannelClientStateRequest
- Response: QueryChannelClientStateResponse

**ChannelConsensusState**
- Function: `getChannelConsensusState`
- Description: ChannelConsensusState queries for the consensus state for the channel
 associated with the provided channel identifiers.
- Request: QueryChannelConsensusStateRequest
- Response: QueryChannelConsensusStateResponse

**PacketCommitment**
- Function: `getPacketCommitment`
- Description: PacketCommitment queries a stored packet commitment hash.
- Request: QueryPacketCommitmentRequest
- Response: QueryPacketCommitmentResponse

**PacketCommitments**
- Function: `getPacketCommitments`
- Description: PacketCommitments returns all the packet commitments hashes associated
 with a channel.
- Request: QueryPacketCommitmentsRequest
- Response: QueryPacketCommitmentsResponse

**PacketReceipt**
- Function: `getPacketReceipt`
- Description: PacketReceipt queries if a given packet sequence has been received on the
 queried chain
- Request: QueryPacketReceiptRequest
- Response: QueryPacketReceiptResponse

**PacketAcknowledgement**
- Function: `getPacketAcknowledgement`
- Description: PacketAcknowledgement queries a stored packet acknowledgement hash.
- Request: QueryPacketAcknowledgementRequest
- Response: QueryPacketAcknowledgementResponse

**PacketAcknowledgements**
- Function: `getPacketAcknowledgements`
- Description: PacketAcknowledgements returns all the packet acknowledgements associated
 with a channel.
- Request: QueryPacketAcknowledgementsRequest
- Response: QueryPacketAcknowledgementsResponse

**UnreceivedPackets**
- Function: `getUnreceivedPackets`
- Description: UnreceivedPackets returns all the unreceived IBC packets associated with a
 channel and sequences.
- Request: QueryUnreceivedPacketsRequest
- Response: QueryUnreceivedPacketsResponse

**UnreceivedAcks**
- Function: `getUnreceivedAcks`
- Description: UnreceivedAcks returns all the unreceived IBC acknowledgements associated
 with a channel and sequences.
- Request: QueryUnreceivedAcksRequest
- Response: QueryUnreceivedAcksResponse

**NextSequenceReceive**
- Function: `getNextSequenceReceive`
- Description: NextSequenceReceive returns the next receive sequence for a given channel.
- Request: QueryNextSequenceReceiveRequest
- Response: QueryNextSequenceReceiveResponse

### Transaction Methods

**ChannelOpenInit**
- Function: `channelOpenInit`
- Description: ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.
- Request: MsgChannelOpenInit
- Response: MsgChannelOpenInitResponse

**ChannelOpenTry**
- Function: `channelOpenTry`
- Description: ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.
- Request: MsgChannelOpenTry
- Response: MsgChannelOpenTryResponse

**ChannelOpenAck**
- Function: `channelOpenAck`
- Description: ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.
- Request: MsgChannelOpenAck
- Response: MsgChannelOpenAckResponse

**ChannelOpenConfirm**
- Function: `channelOpenConfirm`
- Description: ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.
- Request: MsgChannelOpenConfirm
- Response: MsgChannelOpenConfirmResponse

**ChannelCloseInit**
- Function: `channelCloseInit`
- Description: ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.
- Request: MsgChannelCloseInit
- Response: MsgChannelCloseInitResponse

**ChannelCloseConfirm**
- Function: `channelCloseConfirm`
- Description: ChannelCloseConfirm defines a rpc handler method for
 MsgChannelCloseConfirm.
- Request: MsgChannelCloseConfirm
- Response: MsgChannelCloseConfirmResponse

**RecvPacket**
- Function: `recvPacket`
- Description: RecvPacket defines a rpc handler method for MsgRecvPacket.
- Request: MsgRecvPacket
- Response: MsgRecvPacketResponse

**Timeout**
- Function: `timeout`
- Description: Timeout defines a rpc handler method for MsgTimeout.
- Request: MsgTimeout
- Response: MsgTimeoutResponse

**TimeoutOnClose**
- Function: `timeoutOnClose`
- Description: TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.
- Request: MsgTimeoutOnClose
- Response: MsgTimeoutOnCloseResponse

**Acknowledgement**
- Function: `acknowledgement`
- Description: Acknowledgement defines a rpc handler method for MsgAcknowledgement.
- Request: MsgAcknowledgement
- Response: MsgAcknowledgementResponse


## ibc.core.client.v1

### Query Methods

**ClientState**
- Function: `getClientState`
- Description: ClientState queries an IBC light client.
- Request: QueryClientStateRequest
- Response: QueryClientStateResponse

**ClientStates**
- Function: `getClientStates`
- Description: ClientStates queries all the IBC light clients of a chain.
- Request: QueryClientStatesRequest
- Response: QueryClientStatesResponse

**ConsensusState**
- Function: `getConsensusState`
- Description: ConsensusState queries a consensus state associated with a client state at
 a given height.
- Request: QueryConsensusStateRequest
- Response: QueryConsensusStateResponse

**ConsensusStates**
- Function: `getConsensusStates`
- Description: ConsensusStates queries all the consensus state associated with a given
 client.
- Request: QueryConsensusStatesRequest
- Response: QueryConsensusStatesResponse

**ClientStatus**
- Function: `getClientStatus`
- Description: Status queries the status of an IBC client.
- Request: QueryClientStatusRequest
- Response: QueryClientStatusResponse

**ClientParams**
- Function: `getClientParams`
- Description: ClientParams queries all parameters of the ibc client.
- Request: QueryClientParamsRequest
- Response: QueryClientParamsResponse

**UpgradedClientState**
- Function: `getUpgradedClientState`
- Description: UpgradedClientState queries an Upgraded IBC light client.
- Request: QueryUpgradedClientStateRequest
- Response: QueryUpgradedClientStateResponse

**UpgradedConsensusState**
- Function: `getUpgradedConsensusState`
- Description: UpgradedConsensusState queries an Upgraded IBC consensus state.
- Request: QueryUpgradedConsensusStateRequest
- Response: QueryUpgradedConsensusStateResponse

### Transaction Methods

**CreateClient**
- Function: `createClient`
- Description: CreateClient defines a rpc handler method for MsgCreateClient.
- Request: MsgCreateClient
- Response: MsgCreateClientResponse

**UpdateClient**
- Function: `updateClient`
- Description: UpdateClient defines a rpc handler method for MsgUpdateClient.
- Request: MsgUpdateClient
- Response: MsgUpdateClientResponse

**UpgradeClient**
- Function: `upgradeClient`
- Description: UpgradeClient defines a rpc handler method for MsgUpgradeClient.
- Request: MsgUpgradeClient
- Response: MsgUpgradeClientResponse

**SubmitMisbehaviour**
- Function: `submitMisbehaviour`
- Description: SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.
- Request: MsgSubmitMisbehaviour
- Response: MsgSubmitMisbehaviourResponse


## ibc.core.connection.v1

### Query Methods

**Connection**
- Function: `getConnection`
- Description: Connection queries an IBC connection end.
- Request: QueryConnectionRequest
- Response: QueryConnectionResponse

**Connections**
- Function: `getConnections`
- Description: Connections queries all the IBC connections of a chain.
- Request: QueryConnectionsRequest
- Response: QueryConnectionsResponse

**ClientConnections**
- Function: `getClientConnections`
- Description: ClientConnections queries the connection paths associated with a client
 state.
- Request: QueryClientConnectionsRequest
- Response: QueryClientConnectionsResponse

**ConnectionClientState**
- Function: `getConnectionClientState`
- Description: ConnectionClientState queries the client state associated with the
 connection.
- Request: QueryConnectionClientStateRequest
- Response: QueryConnectionClientStateResponse

**ConnectionConsensusState**
- Function: `getConnectionConsensusState`
- Description: ConnectionConsensusState queries the consensus state associated with the
 connection.
- Request: QueryConnectionConsensusStateRequest
- Response: QueryConnectionConsensusStateResponse

### Transaction Methods

**ConnectionOpenInit**
- Function: `connectionOpenInit`
- Description: ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit.
- Request: MsgConnectionOpenInit
- Response: MsgConnectionOpenInitResponse

**ConnectionOpenTry**
- Function: `connectionOpenTry`
- Description: ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry.
- Request: MsgConnectionOpenTry
- Response: MsgConnectionOpenTryResponse

**ConnectionOpenAck**
- Function: `connectionOpenAck`
- Description: ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck.
- Request: MsgConnectionOpenAck
- Response: MsgConnectionOpenAckResponse

**ConnectionOpenConfirm**
- Function: `connectionOpenConfirm`
- Description: ConnectionOpenConfirm defines a rpc handler method for
 MsgConnectionOpenConfirm.
- Request: MsgConnectionOpenConfirm
- Response: MsgConnectionOpenConfirmResponse


## ibc.core.port.v1

### Query Methods

**AppVersion**
- Function: `getAppVersion`
- Description: AppVersion queries an IBC Port and determines the appropriate application version to be used
- Request: QueryAppVersionRequest
- Response: QueryAppVersionResponse


## osmosis.claim.v1beta1

### Query Methods

**ModuleAccountBalance**
- Function: `getModuleAccountBalance`
- Request: QueryModuleAccountBalanceRequest
- Response: QueryModuleAccountBalanceResponse

**Params**
- Function: `getParams`
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**ClaimRecord**
- Function: `getClaimRecord`
- Request: QueryClaimRecordRequest
- Response: QueryClaimRecordResponse

**ClaimableForAction**
- Function: `getClaimableForAction`
- Request: QueryClaimableForActionRequest
- Response: QueryClaimableForActionResponse

**TotalClaimable**
- Function: `getTotalClaimable`
- Request: QueryTotalClaimableRequest
- Response: QueryTotalClaimableResponse


## osmosis.epochs.v1beta1

### Query Methods

**EpochInfos**
- Function: `getEpochInfos`
- Description: EpochInfos provide running epochInfos
- Request: QueryEpochsInfoRequest
- Response: QueryEpochsInfoResponse

**CurrentEpoch**
- Function: `getCurrentEpoch`
- Description: CurrentEpoch provide current epoch of specified identifier
- Request: QueryCurrentEpochRequest
- Response: QueryCurrentEpochResponse


## osmosis.gamm.poolmodels.balancer.v1beta1

### Transaction Methods

**CreateBalancerPool**
- Function: `createBalancerPool`
- Request: MsgCreateBalancerPool
- Response: MsgCreateBalancerPoolResponse


## osmosis.gamm.poolmodels.stableswap.v1beta1

### Transaction Methods

**CreateStableswapPool**
- Function: `createStableswapPool`
- Request: MsgCreateStableswapPool
- Response: MsgCreateStableswapPoolResponse

**StableSwapAdjustScalingFactors**
- Function: `stableSwapAdjustScalingFactors`
- Request: MsgStableSwapAdjustScalingFactors
- Response: MsgStableSwapAdjustScalingFactorsResponse


## osmosis.gamm.v1beta1

### Query Methods

**Pools**
- Function: `getPools`
- Request: QueryPoolsRequest
- Response: QueryPoolsResponse

**NumPools**
- Function: `getNumPools`
- Request: QueryNumPoolsRequest
- Response: QueryNumPoolsResponse

**TotalLiquidity**
- Function: `getTotalLiquidity`
- Request: QueryTotalLiquidityRequest
- Response: QueryTotalLiquidityResponse

**PoolsWithFilter**
- Function: `getPoolsWithFilter`
- Description: PoolsWithFilter allows you to query specific pools with requested
 parameters
- Request: QueryPoolsWithFilterRequest
- Response: QueryPoolsWithFilterResponse

**Pool**
- Function: `getPool`
- Description: Per Pool gRPC Endpoints
- Request: QueryPoolRequest
- Response: QueryPoolResponse

**PoolType**
- Function: `getPoolType`
- Description: PoolType returns the type of the pool.
 Returns "Balancer" as a string literal when the pool is a balancer pool.
 Errors if the pool is failed to be type caseted.
- Request: QueryPoolTypeRequest
- Response: QueryPoolTypeResponse

**CalcJoinPoolNoSwapShares**
- Function: `getCalcJoinPoolNoSwapShares`
- Description: Simulates joining pool without a swap. Returns the amount of shares you'd
 get and tokens needed to provide
- Request: QueryCalcJoinPoolNoSwapSharesRequest
- Response: QueryCalcJoinPoolNoSwapSharesResponse

**CalcJoinPoolShares**
- Function: `getCalcJoinPoolShares`
- Request: QueryCalcJoinPoolSharesRequest
- Response: QueryCalcJoinPoolSharesResponse

**CalcExitPoolCoinsFromShares**
- Function: `getCalcExitPoolCoinsFromShares`
- Request: QueryCalcExitPoolCoinsFromSharesRequest
- Response: QueryCalcExitPoolCoinsFromSharesResponse

**PoolParams**
- Function: `getPoolParams`
- Request: QueryPoolParamsRequest
- Response: QueryPoolParamsResponse

**TotalPoolLiquidity**
- Function: `getTotalPoolLiquidity`
- Request: QueryTotalPoolLiquidityRequest
- Response: QueryTotalPoolLiquidityResponse

**TotalShares**
- Function: `getTotalShares`
- Request: QueryTotalSharesRequest
- Response: QueryTotalSharesResponse

**SpotPrice**
- Function: `getSpotPrice`
- Description: SpotPrice defines a gRPC query handler that returns the spot price given
 a base denomination and a quote denomination.
- Request: QuerySpotPriceRequest
- Response: QuerySpotPriceResponse

**EstimateSwapExactAmountIn**
- Function: `getEstimateSwapExactAmountIn`
- Description: Estimate the swap.
- Request: QuerySwapExactAmountInRequest
- Response: QuerySwapExactAmountInResponse

**EstimateSwapExactAmountOut**
- Function: `getEstimateSwapExactAmountOut`
- Request: QuerySwapExactAmountOutRequest
- Response: QuerySwapExactAmountOutResponse

### Transaction Methods

**JoinPool**
- Function: `joinPool`
- Request: MsgJoinPool
- Response: MsgJoinPoolResponse

**ExitPool**
- Function: `exitPool`
- Request: MsgExitPool
- Response: MsgExitPoolResponse

**SwapExactAmountIn**
- Function: `swapExactAmountIn`
- Request: MsgSwapExactAmountIn
- Response: MsgSwapExactAmountInResponse

**SwapExactAmountOut**
- Function: `swapExactAmountOut`
- Request: MsgSwapExactAmountOut
- Response: MsgSwapExactAmountOutResponse

**JoinSwapExternAmountIn**
- Function: `joinSwapExternAmountIn`
- Request: MsgJoinSwapExternAmountIn
- Response: MsgJoinSwapExternAmountInResponse

**JoinSwapShareAmountOut**
- Function: `joinSwapShareAmountOut`
- Request: MsgJoinSwapShareAmountOut
- Response: MsgJoinSwapShareAmountOutResponse

**ExitSwapExternAmountOut**
- Function: `exitSwapExternAmountOut`
- Request: MsgExitSwapExternAmountOut
- Response: MsgExitSwapExternAmountOutResponse

**ExitSwapShareAmountIn**
- Function: `exitSwapShareAmountIn`
- Request: MsgExitSwapShareAmountIn
- Response: MsgExitSwapShareAmountInResponse


## osmosis.gamm.v2

### Query Methods

**SpotPrice**
- Function: `getSpotPrice`
- Description: SpotPrice defines a gRPC query handler that returns the spot price given
 a base denomination and a quote denomination.
- Request: QuerySpotPriceRequest
- Response: QuerySpotPriceResponse


## osmosis.ibcratelimit.v1beta1

### Query Methods

**Params**
- Function: `getParams`
- Description: Params defines a gRPC query method that returns the ibc-rate-limit module's
 parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse


## osmosis.incentives

### Query Methods

**ModuleToDistributeCoins**
- Function: `getModuleToDistributeCoins`
- Description: ModuleToDistributeCoins returns coins that are going to be distributed
- Request: ModuleToDistributeCoinsRequest
- Response: ModuleToDistributeCoinsResponse

**GaugeByID**
- Function: `getGaugeByID`
- Description: GaugeByID returns gauges by their respective ID
- Request: GaugeByIDRequest
- Response: GaugeByIDResponse

**Gauges**
- Function: `getGauges`
- Description: Gauges returns both upcoming and active gauges
- Request: GaugesRequest
- Response: GaugesResponse

**ActiveGauges**
- Function: `getActiveGauges`
- Description: ActiveGauges returns active gauges
- Request: ActiveGaugesRequest
- Response: ActiveGaugesResponse

**ActiveGaugesPerDenom**
- Function: `getActiveGaugesPerDenom`
- Description: ActiveGaugesPerDenom returns active gauges by denom
- Request: ActiveGaugesPerDenomRequest
- Response: ActiveGaugesPerDenomResponse

**UpcomingGauges**
- Function: `getUpcomingGauges`
- Description: Returns scheduled gauges that have not yet occured
- Request: UpcomingGaugesRequest
- Response: UpcomingGaugesResponse

**UpcomingGaugesPerDenom**
- Function: `getUpcomingGaugesPerDenom`
- Description: UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
 by denom
- Request: UpcomingGaugesPerDenomRequest
- Response: UpcomingGaugesPerDenomResponse

**RewardsEst**
- Function: `getRewardsEst`
- Description: RewardsEst returns an estimate of the rewards from now until a specified
 time in the future The querier either provides an address or a set of locks
 for which they want to find the associated rewards
- Request: RewardsEstRequest
- Response: RewardsEstResponse

**LockableDurations**
- Function: `getLockableDurations`
- Description: LockableDurations returns lockable durations that are valid to distribute
 incentives for
- Request: QueryLockableDurationsRequest
- Response: QueryLockableDurationsResponse

### Transaction Methods

**CreateGauge**
- Function: `createGauge`
- Request: MsgCreateGauge
- Response: MsgCreateGaugeResponse

**AddToGauge**
- Function: `addToGauge`
- Request: MsgAddToGauge
- Response: MsgAddToGaugeResponse


## osmosis.lockup

### Query Methods

**ModuleBalance**
- Function: `getModuleBalance`
- Description: Return full balance of the module
- Request: ModuleBalanceRequest
- Response: ModuleBalanceResponse

**ModuleLockedAmount**
- Function: `getModuleLockedAmount`
- Description: Return locked balance of the module
- Request: ModuleLockedAmountRequest
- Response: ModuleLockedAmountResponse

**AccountUnlockableCoins**
- Function: `getAccountUnlockableCoins`
- Description: Returns unlockable coins which are not withdrawn yet
- Request: AccountUnlockableCoinsRequest
- Response: AccountUnlockableCoinsResponse

**AccountUnlockingCoins**
- Function: `getAccountUnlockingCoins`
- Description: Returns unlocking coins
- Request: AccountUnlockingCoinsRequest
- Response: AccountUnlockingCoinsResponse

**AccountLockedCoins**
- Function: `getAccountLockedCoins`
- Description: Return a locked coins that can't be withdrawn
- Request: AccountLockedCoinsRequest
- Response: AccountLockedCoinsResponse

**AccountLockedPastTime**
- Function: `getAccountLockedPastTime`
- Description: Returns locked records of an account with unlock time beyond timestamp
- Request: AccountLockedPastTimeRequest
- Response: AccountLockedPastTimeResponse

**AccountLockedPastTimeNotUnlockingOnly**
- Function: `getAccountLockedPastTimeNotUnlockingOnly`
- Description: Returns locked records of an account with unlock time beyond timestamp
 excluding tokens started unlocking
- Request: AccountLockedPastTimeNotUnlockingOnlyRequest
- Response: AccountLockedPastTimeNotUnlockingOnlyResponse

**AccountUnlockedBeforeTime**
- Function: `getAccountUnlockedBeforeTime`
- Description: Returns unlocked records with unlock time before timestamp
- Request: AccountUnlockedBeforeTimeRequest
- Response: AccountUnlockedBeforeTimeResponse

**AccountLockedPastTimeDenom**
- Function: `getAccountLockedPastTimeDenom`
- Description: Returns lock records by address, timestamp, denom
- Request: AccountLockedPastTimeDenomRequest
- Response: AccountLockedPastTimeDenomResponse

**LockedDenom**
- Function: `getLockedDenom`
- Description: Returns total locked per denom with longer past given time
- Request: LockedDenomRequest
- Response: LockedDenomResponse

**LockedByID**
- Function: `getLockedByID`
- Description: Returns lock record by id
- Request: LockedRequest
- Response: LockedResponse

**SyntheticLockupsByLockupID**
- Function: `getSyntheticLockupsByLockupID`
- Description: Returns synthetic lockups by native lockup id
- Request: SyntheticLockupsByLockupIDRequest
- Response: SyntheticLockupsByLockupIDResponse

**AccountLockedLongerDuration**
- Function: `getAccountLockedLongerDuration`
- Description: Returns account locked records with longer duration
- Request: AccountLockedLongerDurationRequest
- Response: AccountLockedLongerDurationResponse

**AccountLockedDuration**
- Function: `getAccountLockedDuration`
- Description: Returns account locked records with a specific duration
- Request: AccountLockedDurationRequest
- Response: AccountLockedDurationResponse

**AccountLockedLongerDurationNotUnlockingOnly**
- Function: `getAccountLockedLongerDurationNotUnlockingOnly`
- Description: Returns account locked records with longer duration excluding tokens
 started unlocking
- Request: AccountLockedLongerDurationNotUnlockingOnlyRequest
- Response: AccountLockedLongerDurationNotUnlockingOnlyResponse

**AccountLockedLongerDurationDenom**
- Function: `getAccountLockedLongerDurationDenom`
- Description: Returns account's locked records for a denom with longer duration
- Request: AccountLockedLongerDurationDenomRequest
- Response: AccountLockedLongerDurationDenomResponse

**Params**
- Function: `getParams`
- Description: Params returns lockup params.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

### Transaction Methods

**LockTokens**
- Function: `lockTokens`
- Description: LockTokens lock tokens
- Request: MsgLockTokens
- Response: MsgLockTokensResponse

**BeginUnlockingAll**
- Function: `beginUnlockingAll`
- Description: BeginUnlockingAll begin unlocking all tokens
- Request: MsgBeginUnlockingAll
- Response: MsgBeginUnlockingAllResponse

**BeginUnlocking**
- Function: `beginUnlocking`
- Description: MsgBeginUnlocking begins unlocking tokens by lock ID
- Request: MsgBeginUnlocking
- Response: MsgBeginUnlockingResponse

**ExtendLockup**
- Function: `extendLockup`
- Description: MsgEditLockup edits the existing lockups by lock ID
- Request: MsgExtendLockup
- Response: MsgExtendLockupResponse

**ForceUnlock**
- Function: `forceUnlock`
- Request: MsgForceUnlock
- Response: MsgForceUnlockResponse


## osmosis.mint.v1beta1

### Query Methods

**Params**
- Function: `getParams`
- Description: Params returns the total set of minting parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**EpochProvisions**
- Function: `getEpochProvisions`
- Description: EpochProvisions returns the current minting epoch provisions value.
- Request: QueryEpochProvisionsRequest
- Response: QueryEpochProvisionsResponse


## osmosis.poolincentives.v1beta1

### Query Methods

**GaugeIds**
- Function: `getGaugeIds`
- Description: GaugeIds takes the pool id and returns the matching gauge ids and durations
- Request: QueryGaugeIdsRequest
- Response: QueryGaugeIdsResponse

**DistrInfo**
- Function: `getDistrInfo`
- Description: DistrInfo returns the pool's matching gauge ids and weights.
- Request: QueryDistrInfoRequest
- Response: QueryDistrInfoResponse

**Params**
- Function: `getParams`
- Description: Params returns pool incentives params.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**LockableDurations**
- Function: `getLockableDurations`
- Description: LockableDurations returns lock durations for pools.
- Request: QueryLockableDurationsRequest
- Response: QueryLockableDurationsResponse

**IncentivizedPools**
- Function: `getIncentivizedPools`
- Description: IncentivizedPools returns currently incentivized pools
- Request: QueryIncentivizedPoolsRequest
- Response: QueryIncentivizedPoolsResponse

**ExternalIncentiveGauges**
- Function: `getExternalIncentiveGauges`
- Description: ExternalIncentiveGauges returns external incentive gauges.
- Request: QueryExternalIncentiveGaugesRequest
- Response: QueryExternalIncentiveGaugesResponse


## osmosis.superfluid

### Query Methods

**Params**
- Function: `getParams`
- Description: Params returns the total set of superfluid parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**AssetType**
- Function: `getAssetType`
- Description: Returns superfluid asset type, whether if it's a native asset or an lp
 share.
- Request: AssetTypeRequest
- Response: AssetTypeResponse

**AllAssets**
- Function: `getAllAssets`
- Description: Returns all registered superfluid assets.
- Request: AllAssetsRequest
- Response: AllAssetsResponse

**AssetMultiplier**
- Function: `getAssetMultiplier`
- Description: Returns the osmo equivalent multiplier used in the most recent epoch.
- Request: AssetMultiplierRequest
- Response: AssetMultiplierResponse

**AllIntermediaryAccounts**
- Function: `getAllIntermediaryAccounts`
- Description: Returns all superfluid intermediary accounts.
- Request: AllIntermediaryAccountsRequest
- Response: AllIntermediaryAccountsResponse

**ConnectedIntermediaryAccount**
- Function: `getConnectedIntermediaryAccount`
- Description: Returns intermediary account connected to a superfluid staked lock by id
- Request: ConnectedIntermediaryAccountRequest
- Response: ConnectedIntermediaryAccountResponse

**TotalDelegationByValidatorForDenom**
- Function: `getTotalDelegationByValidatorForDenom`
- Description: Returns the amount of delegations of specific denom for all validators
- Request: QueryTotalDelegationByValidatorForDenomRequest
- Response: QueryTotalDelegationByValidatorForDenomResponse

**TotalSuperfluidDelegations**
- Function: `getTotalSuperfluidDelegations`
- Description: Returns the total amount of osmo superfluidly staked.
 Response is denominated in uosmo.
- Request: TotalSuperfluidDelegationsRequest
- Response: TotalSuperfluidDelegationsResponse

**SuperfluidDelegationAmount**
- Function: `getSuperfluidDelegationAmount`
- Description: Returns the coins superfluid delegated for the delegator, validator, denom
 triplet
- Request: SuperfluidDelegationAmountRequest
- Response: SuperfluidDelegationAmountResponse

**SuperfluidDelegationsByDelegator**
- Function: `getSuperfluidDelegationsByDelegator`
- Description: Returns all the delegated superfluid poistions for a specific delegator.
- Request: SuperfluidDelegationsByDelegatorRequest
- Response: SuperfluidDelegationsByDelegatorResponse

**SuperfluidUndelegationsByDelegator**
- Function: `getSuperfluidUndelegationsByDelegator`
- Description: Returns all the undelegating superfluid poistions for a specific delegator.
- Request: SuperfluidUndelegationsByDelegatorRequest
- Response: SuperfluidUndelegationsByDelegatorResponse

**SuperfluidDelegationsByValidatorDenom**
- Function: `getSuperfluidDelegationsByValidatorDenom`
- Description: Returns all the superfluid positions of a specific denom delegated to one
 validator
- Request: SuperfluidDelegationsByValidatorDenomRequest
- Response: SuperfluidDelegationsByValidatorDenomResponse

**EstimateSuperfluidDelegatedAmountByValidatorDenom**
- Function: `getEstimateSuperfluidDelegatedAmountByValidatorDenom`
- Description: Returns the amount of a specific denom delegated to a specific validator
 This is labeled an estimate, because the way it calculates the amount can
 lead rounding errors from the true delegated amount
- Request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest
- Response: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse

**TotalDelegationByDelegator**
- Function: `getTotalDelegationByDelegator`
- Description: Returns the specified delegations for a specific delegator
- Request: QueryTotalDelegationByDelegatorRequest
- Response: QueryTotalDelegationByDelegatorResponse

**UnpoolWhitelist**
- Function: `getUnpoolWhitelist`
- Description: Returns a list of whitelisted pool ids to unpool.
- Request: QueryUnpoolWhitelistRequest
- Response: QueryUnpoolWhitelistResponse

### Transaction Methods

**SuperfluidDelegate**
- Function: `superfluidDelegate`
- Description: Execute superfluid delegation for a lockup
- Request: MsgSuperfluidDelegate
- Response: MsgSuperfluidDelegateResponse

**SuperfluidUndelegate**
- Function: `superfluidUndelegate`
- Description: Execute superfluid undelegation for a lockup
- Request: MsgSuperfluidUndelegate
- Response: MsgSuperfluidUndelegateResponse

**SuperfluidUnbondLock**
- Function: `superfluidUnbondLock`
- Description: For a given lock that is being superfluidly undelegated,
 also unbond the underlying lock.
- Request: MsgSuperfluidUnbondLock
- Response: MsgSuperfluidUnbondLockResponse

**LockAndSuperfluidDelegate**
- Function: `lockAndSuperfluidDelegate`
- Description: Execute lockup lock and superfluid delegation in a single msg
- Request: MsgLockAndSuperfluidDelegate
- Response: MsgLockAndSuperfluidDelegateResponse

**UnPoolWhitelistedPool**
- Function: `unPoolWhitelistedPool`
- Request: MsgUnPoolWhitelistedPool
- Response: MsgUnPoolWhitelistedPoolResponse


## osmosis.tokenfactory.v1beta1

### Query Methods

**Params**
- Function: `getParams`
- Description: Params defines a gRPC query method that returns the tokenfactory module's
 parameters.
- Request: QueryParamsRequest
- Response: QueryParamsResponse

**DenomAuthorityMetadata**
- Function: `getDenomAuthorityMetadata`
- Description: DenomAuthorityMetadata defines a gRPC query method for fetching
 DenomAuthorityMetadata for a particular denom.
- Request: QueryDenomAuthorityMetadataRequest
- Response: QueryDenomAuthorityMetadataResponse

**DenomsFromCreator**
- Function: `getDenomsFromCreator`
- Description: DenomsFromCreator defines a gRPC query method for fetching all
 denominations created by a specific admin/creator.
- Request: QueryDenomsFromCreatorRequest
- Response: QueryDenomsFromCreatorResponse

### Transaction Methods

**CreateDenom**
- Function: `createDenom`
- Request: MsgCreateDenom
- Response: MsgCreateDenomResponse

**Mint**
- Function: `mint`
- Request: MsgMint
- Response: MsgMintResponse

**Burn**
- Function: `burn`
- Request: MsgBurn
- Response: MsgBurnResponse

**ChangeAdmin**
- Function: `changeAdmin`
- Request: MsgChangeAdmin
- Response: MsgChangeAdminResponse

**SetDenomMetadata**
- Function: `setDenomMetadata`
- Request: MsgSetDenomMetadata
- Response: MsgSetDenomMetadataResponse


## osmosis.twap.v1beta1

### Query Methods

**Params**
- Function: `getParams`
- Request: ParamsRequest
- Response: ParamsResponse

**ArithmeticTwap**
- Function: `getArithmeticTwap`
- Request: ArithmeticTwapRequest
- Response: ArithmeticTwapResponse

**ArithmeticTwapToNow**
- Function: `getArithmeticTwapToNow`
- Request: ArithmeticTwapToNowRequest
- Response: ArithmeticTwapToNowResponse


## osmosis.txfees.v1beta1

### Query Methods

**FeeTokens**
- Function: `getFeeTokens`
- Description: FeeTokens returns a list of all the whitelisted fee tokens and their
 corresponding pools. It does not include the BaseDenom, which has its own
 query endpoint
- Request: QueryFeeTokensRequest
- Response: QueryFeeTokensResponse

**DenomSpotPrice**
- Function: `getDenomSpotPrice`
- Description: DenomSpotPrice returns all spot prices by each registered token denom.
- Request: QueryDenomSpotPriceRequest
- Response: QueryDenomSpotPriceResponse

**DenomPoolId**
- Function: `getDenomPoolId`
- Description: Returns the poolID for a specified denom input.
- Request: QueryDenomPoolIdRequest
- Response: QueryDenomPoolIdResponse

**BaseDenom**
- Function: `getBaseDenom`
- Description: Returns a list of all base denom tokens and their corresponding pools.
- Request: QueryBaseDenomRequest
- Response: QueryBaseDenomResponse


## tendermint.abci


