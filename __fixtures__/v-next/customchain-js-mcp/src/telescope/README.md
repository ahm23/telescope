# Package Documentation
## akash.audit.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `AttributesFilters` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `AttributesResponse` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `AuditedAttributes` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `MsgDeleteProviderAttributes` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `MsgDeleteProviderAttributesResponse` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `MsgSignProviderAttributes` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `MsgSignProviderAttributesResponse` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `Provider` | [View source ↗](akash/audit/v1beta1/audit.ts) |

### Transaction Methods

**SignProviderAttributes**

SignProviderAttributes defines a method that signs provider attributes

```ts
import { signProviderAttributesAkashAuditV1beta1 } from 'customchain-js/akash/bundle'
import { useSignProviderAttributesAkashAuditV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `signProviderAttributesAkashAuditV1beta1` | [View source ↗](akash/audit/v1beta1/audit.rpc.func.ts) |
| Hook | `useSignProviderAttributesAkashAuditV1beta1` | [View source ↗](akash/audit/v1beta1/audit.rpc.react.ts) |
| Request | `MsgSignProviderAttributes` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Response | `MsgSignProviderAttributesResponse` | [View source ↗](akash/audit/v1beta1/audit.ts) |

---

**DeleteProviderAttributes**

DeleteProviderAttributes defines a method that deletes provider attributes

```ts
import { deleteProviderAttributesAkashAuditV1beta1 } from 'customchain-js/akash/bundle'
import { useDeleteProviderAttributesAkashAuditV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `deleteProviderAttributesAkashAuditV1beta1` | [View source ↗](akash/audit/v1beta1/audit.rpc.func.ts) |
| Hook | `useDeleteProviderAttributesAkashAuditV1beta1` | [View source ↗](akash/audit/v1beta1/audit.rpc.react.ts) |
| Request | `MsgDeleteProviderAttributes` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Response | `MsgDeleteProviderAttributesResponse` | [View source ↗](akash/audit/v1beta1/audit.ts) |


## akash.audit.v1beta2

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `AttributesFilters` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `AttributesResponse` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `AuditedAttributes` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MsgDeleteProviderAttributes` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `MsgDeleteProviderAttributesResponse` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `MsgSignProviderAttributes` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `MsgSignProviderAttributesResponse` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `Provider` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `QueryAllProvidersAttributesRequest` | [View source ↗](akash/audit/v1beta2/query.ts) |
| Type | `QueryAuditorAttributesRequest` | [View source ↗](akash/audit/v1beta2/query.ts) |
| Type | `QueryProviderAttributesRequest` | [View source ↗](akash/audit/v1beta2/query.ts) |
| Type | `QueryProviderAuditorRequest` | [View source ↗](akash/audit/v1beta2/query.ts) |
| Type | `QueryProviderRequest` | [View source ↗](akash/audit/v1beta2/query.ts) |
| Type | `QueryProvidersResponse` | [View source ↗](akash/audit/v1beta2/query.ts) |

### Query Methods

**AllProvidersAttributes**

AllProvidersAttributes queries all providers

```ts
import { getAllProvidersAttributes } from 'customchain-js/akash/audit/v1beta2/query.rpc.func'
import { useGetAllProvidersAttributes } from 'customchain-js/akash/audit/v1beta2/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAllProvidersAttributes` | [View source ↗](akash/audit/v1beta2/query.rpc.func.ts) |
| Hook | `useGetAllProvidersAttributes` | [View source ↗](akash/audit/v1beta2/query.rpc.react.ts) |
| Request | `QueryAllProvidersAttributesRequest` | [View source ↗](akash/audit/v1beta2/query.ts) |
| Response | `QueryProvidersResponse` | [View source ↗](akash/audit/v1beta2/query.ts) |

---

**ProviderAttributes**

ProviderAttributes queries all provider signed attributes

```ts
import { getProviderAttributes } from 'customchain-js/akash/audit/v1beta2/query.rpc.func'
import { useGetProviderAttributes } from 'customchain-js/akash/audit/v1beta2/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getProviderAttributes` | [View source ↗](akash/audit/v1beta2/query.rpc.func.ts) |
| Hook | `useGetProviderAttributes` | [View source ↗](akash/audit/v1beta2/query.rpc.react.ts) |
| Request | `QueryProviderAttributesRequest` | [View source ↗](akash/audit/v1beta2/query.ts) |
| Response | `QueryProvidersResponse` | [View source ↗](akash/audit/v1beta2/query.ts) |

---

**ProviderAuditorAttributes**

ProviderAuditorAttributes queries provider signed attributes by specific auditor

```ts
import { getProviderAuditorAttributes } from 'customchain-js/akash/audit/v1beta2/query.rpc.func'
import { useGetProviderAuditorAttributes } from 'customchain-js/akash/audit/v1beta2/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getProviderAuditorAttributes` | [View source ↗](akash/audit/v1beta2/query.rpc.func.ts) |
| Hook | `useGetProviderAuditorAttributes` | [View source ↗](akash/audit/v1beta2/query.rpc.react.ts) |
| Request | `QueryProviderAuditorRequest` | [View source ↗](akash/audit/v1beta2/query.ts) |
| Response | `QueryProvidersResponse` | [View source ↗](akash/audit/v1beta2/query.ts) |

---

**AuditorAttributes**

AuditorAttributes queries all providers signed by this auditor

```ts
import { getAuditorAttributes } from 'customchain-js/akash/audit/v1beta2/query.rpc.func'
import { useGetAuditorAttributes } from 'customchain-js/akash/audit/v1beta2/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAuditorAttributes` | [View source ↗](akash/audit/v1beta2/query.rpc.func.ts) |
| Hook | `useGetAuditorAttributes` | [View source ↗](akash/audit/v1beta2/query.rpc.react.ts) |
| Request | `QueryAuditorAttributesRequest` | [View source ↗](akash/audit/v1beta2/query.ts) |
| Response | `QueryProvidersResponse` | [View source ↗](akash/audit/v1beta2/query.ts) |

### Transaction Methods

**SignProviderAttributes**

SignProviderAttributes defines a method that signs provider attributes

```ts
import { signProviderAttributesAkashAuditV1beta2 } from 'customchain-js/akash/bundle'
import { useSignProviderAttributesAkashAuditV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `signProviderAttributesAkashAuditV1beta2` | [View source ↗](akash/audit/v1beta2/audit.rpc.func.ts) |
| Hook | `useSignProviderAttributesAkashAuditV1beta2` | [View source ↗](akash/audit/v1beta2/audit.rpc.react.ts) |
| Request | `MsgSignProviderAttributes` | [View source ↗](akash/audit/v1beta2/audit.ts) |
| Response | `MsgSignProviderAttributesResponse` | [View source ↗](akash/audit/v1beta2/audit.ts) |

---

**DeleteProviderAttributes**

DeleteProviderAttributes defines a method that deletes provider attributes

```ts
import { deleteProviderAttributesAkashAuditV1beta2 } from 'customchain-js/akash/bundle'
import { useDeleteProviderAttributesAkashAuditV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `deleteProviderAttributesAkashAuditV1beta2` | [View source ↗](akash/audit/v1beta2/audit.rpc.func.ts) |
| Hook | `useDeleteProviderAttributesAkashAuditV1beta2` | [View source ↗](akash/audit/v1beta2/audit.rpc.react.ts) |
| Request | `MsgDeleteProviderAttributes` | [View source ↗](akash/audit/v1beta2/audit.ts) |
| Response | `MsgDeleteProviderAttributesResponse` | [View source ↗](akash/audit/v1beta2/audit.ts) |


## akash.cert.v1beta2

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `Certificate` | [View source ↗](akash/cert/v1beta2/cert.ts) |
| Type | `CertificateFilter` | [View source ↗](akash/cert/v1beta2/cert.ts) |
| Type | `CertificateID` | [View source ↗](akash/cert/v1beta2/cert.ts) |
| Type | `CertificateResponse` | [View source ↗](akash/cert/v1beta2/query.ts) |
| Type | `GenesisCertificate` | [View source ↗](akash/cert/v1beta2/genesis.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MsgCreateCertificate` | [View source ↗](akash/cert/v1beta2/cert.ts) |
| Type | `MsgCreateCertificateResponse` | [View source ↗](akash/cert/v1beta2/cert.ts) |
| Type | `MsgRevokeCertificate` | [View source ↗](akash/cert/v1beta2/cert.ts) |
| Type | `MsgRevokeCertificateResponse` | [View source ↗](akash/cert/v1beta2/cert.ts) |
| Type | `QueryCertificatesRequest` | [View source ↗](akash/cert/v1beta2/query.ts) |
| Type | `QueryCertificatesResponse` | [View source ↗](akash/cert/v1beta2/query.ts) |

### Query Methods

**Certificates**

Certificates queries certificates

```ts
import { getCertificates } from 'customchain-js/akash/cert/v1beta2/query.rpc.func'
import { useGetCertificates } from 'customchain-js/akash/cert/v1beta2/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCertificates` | [View source ↗](akash/cert/v1beta2/query.rpc.func.ts) |
| Hook | `useGetCertificates` | [View source ↗](akash/cert/v1beta2/query.rpc.react.ts) |
| Request | `QueryCertificatesRequest` | [View source ↗](akash/cert/v1beta2/query.ts) |
| Response | `QueryCertificatesResponse` | [View source ↗](akash/cert/v1beta2/query.ts) |

### Transaction Methods

**CreateCertificate**

CreateCertificate defines a method to create new certificate given proper inputs.

```ts
import { createCertificate } from 'customchain-js/akash/cert/v1beta2/cert.rpc.func'
import { useCreateCertificate } from 'customchain-js/akash/cert/v1beta2/cert.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createCertificate` | [View source ↗](akash/cert/v1beta2/cert.rpc.func.ts) |
| Hook | `useCreateCertificate` | [View source ↗](akash/cert/v1beta2/cert.rpc.react.ts) |
| Request | `MsgCreateCertificate` | [View source ↗](akash/cert/v1beta2/cert.ts) |
| Response | `MsgCreateCertificateResponse` | [View source ↗](akash/cert/v1beta2/cert.ts) |

---

**RevokeCertificate**

RevokeCertificate defines a method to revoke the certificate

```ts
import { revokeCertificate } from 'customchain-js/akash/cert/v1beta2/cert.rpc.func'
import { useRevokeCertificate } from 'customchain-js/akash/cert/v1beta2/cert.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `revokeCertificate` | [View source ↗](akash/cert/v1beta2/cert.rpc.func.ts) |
| Hook | `useRevokeCertificate` | [View source ↗](akash/cert/v1beta2/cert.rpc.react.ts) |
| Request | `MsgRevokeCertificate` | [View source ↗](akash/cert/v1beta2/cert.ts) |
| Response | `MsgRevokeCertificateResponse` | [View source ↗](akash/cert/v1beta2/cert.ts) |


## akash.deployment.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `AkashDeploymentV1beta1Params` | [View source ↗](akash/deployment/v1beta1/params.ts) |
| Type | `Deployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `DeploymentFilters` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `DeploymentID` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `DepositDeploymentAuthorization` | [View source ↗](akash/deployment/v1beta1/authz.ts) |
| Type | `GenesisDeployment` | [View source ↗](akash/deployment/v1beta1/genesis.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `Group` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `GroupID` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `GroupSpec` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgCloseDeployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgCloseDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgCloseGroup` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgCloseGroupResponse` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgCreateDeployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgCreateDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgDepositDeployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgDepositDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgPauseGroup` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgPauseGroupResponse` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgStartGroup` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgStartGroupResponse` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgUpdateDeployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgUpdateDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `QueryDeploymentRequest` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Type | `QueryDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Type | `QueryDeploymentsRequest` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Type | `QueryDeploymentsResponse` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Type | `QueryGroupRequest` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Type | `QueryGroupResponse` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Type | `Resource` | [View source ↗](akash/deployment/v1beta1/group.ts) |

### Query Methods

**Deployments**

Deployments queries deployments

```ts
import { getDeploymentsAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
import { useGetDeploymentsAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDeploymentsAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDeploymentsAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/query.rpc.react.ts) |
| Request | `QueryDeploymentsRequest` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Response | `QueryDeploymentsResponse` | [View source ↗](akash/deployment/v1beta1/query.ts) |

---

**Deployment**

Deployment queries deployment details

```ts
import { getDeploymentAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
import { useGetDeploymentAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDeploymentAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDeploymentAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/query.rpc.react.ts) |
| Request | `QueryDeploymentRequest` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Response | `QueryDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/query.ts) |

---

**Group**

Group queries group details

```ts
import { getGroupAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
import { useGetGroupAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGroupAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/query.rpc.func.ts) |
| Hook | `useGetGroupAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/query.rpc.react.ts) |
| Request | `QueryGroupRequest` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Response | `QueryGroupResponse` | [View source ↗](akash/deployment/v1beta1/query.ts) |

### Transaction Methods

**CreateDeployment**

CreateDeployment defines a method to create new deployment given proper inputs.

```ts
import { createDeploymentAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
import { useCreateDeploymentAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createDeploymentAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.func.ts) |
| Hook | `useCreateDeploymentAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.react.ts) |
| Request | `MsgCreateDeployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Response | `MsgCreateDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |

---

**DepositDeployment**

DepositDeployment deposits more funds into the deployment account

```ts
import { depositDeploymentAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
import { useDepositDeploymentAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `depositDeploymentAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.func.ts) |
| Hook | `useDepositDeploymentAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.react.ts) |
| Request | `MsgDepositDeployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Response | `MsgDepositDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |

---

**UpdateDeployment**

UpdateDeployment defines a method to update a deployment given proper inputs.

```ts
import { updateDeploymentAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
import { useUpdateDeploymentAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `updateDeploymentAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.func.ts) |
| Hook | `useUpdateDeploymentAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.react.ts) |
| Request | `MsgUpdateDeployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Response | `MsgUpdateDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |

---

**CloseDeployment**

CloseDeployment defines a method to close a deployment given proper inputs.

```ts
import { closeDeploymentAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
import { useCloseDeploymentAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `closeDeploymentAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.func.ts) |
| Hook | `useCloseDeploymentAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.react.ts) |
| Request | `MsgCloseDeployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Response | `MsgCloseDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |

---

**CloseGroup**

CloseGroup defines a method to close a group of a deployment given proper inputs.

```ts
import { closeGroupAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
import { useCloseGroupAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `closeGroupAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.func.ts) |
| Hook | `useCloseGroupAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.react.ts) |
| Request | `MsgCloseGroup` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Response | `MsgCloseGroupResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |

---

**PauseGroup**

PauseGroup defines a method to close a group of a deployment given proper inputs.

```ts
import { pauseGroupAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
import { usePauseGroupAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `pauseGroupAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.func.ts) |
| Hook | `usePauseGroupAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.react.ts) |
| Request | `MsgPauseGroup` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Response | `MsgPauseGroupResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |

---

**StartGroup**

StartGroup defines a method to close a group of a deployment given proper inputs.

```ts
import { startGroupAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
import { useStartGroupAkashDeploymentV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `startGroupAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.func.ts) |
| Hook | `useStartGroupAkashDeploymentV1beta1` | [View source ↗](akash/deployment/v1beta1/deployment.rpc.react.ts) |
| Request | `MsgStartGroup` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Response | `MsgStartGroupResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |


## akash.deployment.v1beta2

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `AkashDeploymentV1beta2Params` | [View source ↗](akash/deployment/v1beta2/params.ts) |
| Type | `Deployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `DeploymentFilters` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `DeploymentID` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `DepositDeploymentAuthorization` | [View source ↗](akash/deployment/v1beta1/authz.ts) |
| Type | `GenesisDeployment` | [View source ↗](akash/deployment/v1beta1/genesis.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `Group` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `GroupID` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `GroupSpec` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgCloseDeployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgCloseDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgCloseGroup` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgCloseGroupResponse` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgCreateDeployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgCreateDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgDepositDeployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgDepositDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgPauseGroup` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgPauseGroupResponse` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgStartGroup` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgStartGroupResponse` | [View source ↗](akash/deployment/v1beta1/group.ts) |
| Type | `MsgUpdateDeployment` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `MsgUpdateDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/deployment.ts) |
| Type | `QueryDeploymentRequest` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Type | `QueryDeploymentResponse` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Type | `QueryDeploymentsRequest` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Type | `QueryDeploymentsResponse` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Type | `QueryGroupRequest` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Type | `QueryGroupResponse` | [View source ↗](akash/deployment/v1beta1/query.ts) |
| Type | `Resource` | [View source ↗](akash/deployment/v1beta1/group.ts) |

### Query Methods

**Deployments**

Deployments queries deployments

```ts
import { getDeploymentsAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
import { useGetDeploymentsAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDeploymentsAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/query.rpc.func.ts) |
| Hook | `useGetDeploymentsAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/query.rpc.react.ts) |
| Request | `QueryDeploymentsRequest` | [View source ↗](akash/deployment/v1beta2/query.ts) |
| Response | `QueryDeploymentsResponse` | [View source ↗](akash/deployment/v1beta2/query.ts) |

---

**Deployment**

Deployment queries deployment details

```ts
import { getDeploymentAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
import { useGetDeploymentAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDeploymentAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/query.rpc.func.ts) |
| Hook | `useGetDeploymentAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/query.rpc.react.ts) |
| Request | `QueryDeploymentRequest` | [View source ↗](akash/deployment/v1beta2/query.ts) |
| Response | `QueryDeploymentResponse` | [View source ↗](akash/deployment/v1beta2/query.ts) |

---

**Group**

Group queries group details

```ts
import { getGroupAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
import { useGetGroupAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGroupAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/query.rpc.func.ts) |
| Hook | `useGetGroupAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/query.rpc.react.ts) |
| Request | `QueryGroupRequest` | [View source ↗](akash/deployment/v1beta2/query.ts) |
| Response | `QueryGroupResponse` | [View source ↗](akash/deployment/v1beta2/query.ts) |

### Transaction Methods

**CreateDeployment**

CreateDeployment defines a method to create new deployment given proper inputs.

```ts
import { createDeploymentAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
import { useCreateDeploymentAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createDeploymentAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.func.ts) |
| Hook | `useCreateDeploymentAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.react.ts) |
| Request | `MsgCreateDeployment` | [View source ↗](akash/deployment/v1beta2/service.ts) |
| Response | `MsgCreateDeploymentResponse` | [View source ↗](akash/deployment/v1beta2/service.ts) |

---

**DepositDeployment**

DepositDeployment deposits more funds into the deployment account

```ts
import { depositDeploymentAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
import { useDepositDeploymentAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `depositDeploymentAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.func.ts) |
| Hook | `useDepositDeploymentAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.react.ts) |
| Request | `MsgDepositDeployment` | [View source ↗](akash/deployment/v1beta2/service.ts) |
| Response | `MsgDepositDeploymentResponse` | [View source ↗](akash/deployment/v1beta2/service.ts) |

---

**UpdateDeployment**

UpdateDeployment defines a method to update a deployment given proper inputs.

```ts
import { updateDeploymentAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
import { useUpdateDeploymentAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `updateDeploymentAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.func.ts) |
| Hook | `useUpdateDeploymentAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.react.ts) |
| Request | `MsgUpdateDeployment` | [View source ↗](akash/deployment/v1beta2/service.ts) |
| Response | `MsgUpdateDeploymentResponse` | [View source ↗](akash/deployment/v1beta2/service.ts) |

---

**CloseDeployment**

CloseDeployment defines a method to close a deployment given proper inputs.

```ts
import { closeDeploymentAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
import { useCloseDeploymentAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `closeDeploymentAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.func.ts) |
| Hook | `useCloseDeploymentAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.react.ts) |
| Request | `MsgCloseDeployment` | [View source ↗](akash/deployment/v1beta2/service.ts) |
| Response | `MsgCloseDeploymentResponse` | [View source ↗](akash/deployment/v1beta2/service.ts) |

---

**CloseGroup**

CloseGroup defines a method to close a group of a deployment given proper inputs.

```ts
import { closeGroupAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
import { useCloseGroupAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `closeGroupAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.func.ts) |
| Hook | `useCloseGroupAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.react.ts) |
| Request | `MsgCloseGroup` | [View source ↗](akash/deployment/v1beta2/service.ts) |
| Response | `MsgCloseGroupResponse` | [View source ↗](akash/deployment/v1beta2/service.ts) |

---

**PauseGroup**

PauseGroup defines a method to close a group of a deployment given proper inputs.

```ts
import { pauseGroupAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
import { usePauseGroupAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `pauseGroupAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.func.ts) |
| Hook | `usePauseGroupAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.react.ts) |
| Request | `MsgPauseGroup` | [View source ↗](akash/deployment/v1beta2/service.ts) |
| Response | `MsgPauseGroupResponse` | [View source ↗](akash/deployment/v1beta2/service.ts) |

---

**StartGroup**

StartGroup defines a method to close a group of a deployment given proper inputs.

```ts
import { startGroupAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
import { useStartGroupAkashDeploymentV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `startGroupAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.func.ts) |
| Hook | `useStartGroupAkashDeploymentV1beta2` | [View source ↗](akash/deployment/v1beta2/service.rpc.react.ts) |
| Request | `MsgStartGroup` | [View source ↗](akash/deployment/v1beta2/service.ts) |
| Response | `MsgStartGroupResponse` | [View source ↗](akash/deployment/v1beta2/service.ts) |


## akash.escrow.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `Account` | [View source ↗](akash/escrow/v1beta1/types.ts) |
| Type | `AccountID` | [View source ↗](akash/escrow/v1beta1/types.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `Payment` | [View source ↗](akash/escrow/v1beta1/types.ts) |
| Type | `QueryAccountsRequest` | [View source ↗](akash/escrow/v1beta1/query.ts) |
| Type | `QueryAccountsResponse` | [View source ↗](akash/escrow/v1beta1/query.ts) |
| Type | `QueryPaymentsRequest` | [View source ↗](akash/escrow/v1beta1/query.ts) |
| Type | `QueryPaymentsResponse` | [View source ↗](akash/escrow/v1beta1/query.ts) |

### Query Methods

**Accounts**

Accounts queries all accounts

```ts
import { getAccountsAkashEscrowV1beta1 } from 'customchain-js/akash/bundle'
import { useGetAccountsAkashEscrowV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountsAkashEscrowV1beta1` | [View source ↗](akash/escrow/v1beta1/query.rpc.func.ts) |
| Hook | `useGetAccountsAkashEscrowV1beta1` | [View source ↗](akash/escrow/v1beta1/query.rpc.react.ts) |
| Request | `QueryAccountsRequest` | [View source ↗](akash/escrow/v1beta1/query.ts) |
| Response | `QueryAccountsResponse` | [View source ↗](akash/escrow/v1beta1/query.ts) |

---

**Payments**

Payments queries all payments

```ts
import { getPaymentsAkashEscrowV1beta1 } from 'customchain-js/akash/bundle'
import { useGetPaymentsAkashEscrowV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPaymentsAkashEscrowV1beta1` | [View source ↗](akash/escrow/v1beta1/query.rpc.func.ts) |
| Hook | `useGetPaymentsAkashEscrowV1beta1` | [View source ↗](akash/escrow/v1beta1/query.rpc.react.ts) |
| Request | `QueryPaymentsRequest` | [View source ↗](akash/escrow/v1beta1/query.ts) |
| Response | `QueryPaymentsResponse` | [View source ↗](akash/escrow/v1beta1/query.ts) |


## akash.escrow.v1beta2

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `Account` | [View source ↗](akash/escrow/v1beta1/types.ts) |
| Type | `AccountID` | [View source ↗](akash/escrow/v1beta1/types.ts) |
| Type | `FractionalPayment` | [View source ↗](akash/escrow/v1beta2/types.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `QueryAccountsRequest` | [View source ↗](akash/escrow/v1beta1/query.ts) |
| Type | `QueryAccountsResponse` | [View source ↗](akash/escrow/v1beta1/query.ts) |
| Type | `QueryPaymentsRequest` | [View source ↗](akash/escrow/v1beta1/query.ts) |
| Type | `QueryPaymentsResponse` | [View source ↗](akash/escrow/v1beta1/query.ts) |

### Query Methods

**Accounts**

Accounts queries all accounts

```ts
import { getAccountsAkashEscrowV1beta2 } from 'customchain-js/akash/bundle'
import { useGetAccountsAkashEscrowV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountsAkashEscrowV1beta2` | [View source ↗](akash/escrow/v1beta2/query.rpc.func.ts) |
| Hook | `useGetAccountsAkashEscrowV1beta2` | [View source ↗](akash/escrow/v1beta2/query.rpc.react.ts) |
| Request | `QueryAccountsRequest` | [View source ↗](akash/escrow/v1beta2/query.ts) |
| Response | `QueryAccountsResponse` | [View source ↗](akash/escrow/v1beta2/query.ts) |

---

**Payments**

Payments queries all payments

```ts
import { getPaymentsAkashEscrowV1beta2 } from 'customchain-js/akash/bundle'
import { useGetPaymentsAkashEscrowV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPaymentsAkashEscrowV1beta2` | [View source ↗](akash/escrow/v1beta2/query.rpc.func.ts) |
| Hook | `useGetPaymentsAkashEscrowV1beta2` | [View source ↗](akash/escrow/v1beta2/query.rpc.react.ts) |
| Request | `QueryPaymentsRequest` | [View source ↗](akash/escrow/v1beta2/query.ts) |
| Response | `QueryPaymentsResponse` | [View source ↗](akash/escrow/v1beta2/query.ts) |


## akash.market.v1beta2

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `AkashMarketV1beta2Params` | [View source ↗](akash/market/v1beta2/params.ts) |
| Type | `Bid` | [View source ↗](akash/market/v1beta2/bid.ts) |
| Type | `BidFilters` | [View source ↗](akash/market/v1beta2/bid.ts) |
| Type | `BidID` | [View source ↗](akash/market/v1beta2/bid.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `Lease` | [View source ↗](akash/market/v1beta2/lease.ts) |
| Type | `LeaseFilters` | [View source ↗](akash/market/v1beta2/lease.ts) |
| Type | `LeaseID` | [View source ↗](akash/market/v1beta2/lease.ts) |
| Type | `MsgCloseBid` | [View source ↗](akash/market/v1beta2/bid.ts) |
| Type | `MsgCloseBidResponse` | [View source ↗](akash/market/v1beta2/bid.ts) |
| Type | `MsgCloseLease` | [View source ↗](akash/market/v1beta2/lease.ts) |
| Type | `MsgCloseLeaseResponse` | [View source ↗](akash/market/v1beta2/lease.ts) |
| Type | `MsgCreateBid` | [View source ↗](akash/market/v1beta2/bid.ts) |
| Type | `MsgCreateBidResponse` | [View source ↗](akash/market/v1beta2/bid.ts) |
| Type | `MsgCreateLease` | [View source ↗](akash/market/v1beta2/lease.ts) |
| Type | `MsgCreateLeaseResponse` | [View source ↗](akash/market/v1beta2/lease.ts) |
| Type | `MsgWithdrawLease` | [View source ↗](akash/market/v1beta2/lease.ts) |
| Type | `MsgWithdrawLeaseResponse` | [View source ↗](akash/market/v1beta2/lease.ts) |
| Type | `Order` | [View source ↗](akash/market/v1beta2/order.ts) |
| Type | `OrderFilters` | [View source ↗](akash/market/v1beta2/order.ts) |
| Type | `OrderID` | [View source ↗](akash/market/v1beta2/order.ts) |
| Type | `QueryBidRequest` | [View source ↗](akash/market/v1beta2/query.ts) |
| Type | `QueryBidResponse` | [View source ↗](akash/market/v1beta2/query.ts) |
| Type | `QueryBidsRequest` | [View source ↗](akash/market/v1beta2/query.ts) |
| Type | `QueryBidsResponse` | [View source ↗](akash/market/v1beta2/query.ts) |
| Type | `QueryLeaseRequest` | [View source ↗](akash/market/v1beta2/query.ts) |
| Type | `QueryLeaseResponse` | [View source ↗](akash/market/v1beta2/query.ts) |
| Type | `QueryLeasesRequest` | [View source ↗](akash/market/v1beta2/query.ts) |
| Type | `QueryLeasesResponse` | [View source ↗](akash/market/v1beta2/query.ts) |
| Type | `QueryOrderRequest` | [View source ↗](akash/market/v1beta2/query.ts) |
| Type | `QueryOrderResponse` | [View source ↗](akash/market/v1beta2/query.ts) |
| Type | `QueryOrdersRequest` | [View source ↗](akash/market/v1beta2/query.ts) |
| Type | `QueryOrdersResponse` | [View source ↗](akash/market/v1beta2/query.ts) |

### Query Methods

**Orders**

Orders queries orders with filters

```ts
import { getOrders } from 'customchain-js/akash/market/v1beta2/query.rpc.func'
import { useGetOrders } from 'customchain-js/akash/market/v1beta2/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getOrders` | [View source ↗](akash/market/v1beta2/query.rpc.func.ts) |
| Hook | `useGetOrders` | [View source ↗](akash/market/v1beta2/query.rpc.react.ts) |
| Request | `QueryOrdersRequest` | [View source ↗](akash/market/v1beta2/query.ts) |
| Response | `QueryOrdersResponse` | [View source ↗](akash/market/v1beta2/query.ts) |

---

**Order**

Order queries order details

```ts
import { getOrder } from 'customchain-js/akash/market/v1beta2/query.rpc.func'
import { useGetOrder } from 'customchain-js/akash/market/v1beta2/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getOrder` | [View source ↗](akash/market/v1beta2/query.rpc.func.ts) |
| Hook | `useGetOrder` | [View source ↗](akash/market/v1beta2/query.rpc.react.ts) |
| Request | `QueryOrderRequest` | [View source ↗](akash/market/v1beta2/query.ts) |
| Response | `QueryOrderResponse` | [View source ↗](akash/market/v1beta2/query.ts) |

---

**Bids**

Bids queries bids with filters

```ts
import { getBids } from 'customchain-js/akash/market/v1beta2/query.rpc.func'
import { useGetBids } from 'customchain-js/akash/market/v1beta2/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getBids` | [View source ↗](akash/market/v1beta2/query.rpc.func.ts) |
| Hook | `useGetBids` | [View source ↗](akash/market/v1beta2/query.rpc.react.ts) |
| Request | `QueryBidsRequest` | [View source ↗](akash/market/v1beta2/query.ts) |
| Response | `QueryBidsResponse` | [View source ↗](akash/market/v1beta2/query.ts) |

---

**Bid**

Bid queries bid details

```ts
import { getBid } from 'customchain-js/akash/market/v1beta2/query.rpc.func'
import { useGetBid } from 'customchain-js/akash/market/v1beta2/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getBid` | [View source ↗](akash/market/v1beta2/query.rpc.func.ts) |
| Hook | `useGetBid` | [View source ↗](akash/market/v1beta2/query.rpc.react.ts) |
| Request | `QueryBidRequest` | [View source ↗](akash/market/v1beta2/query.ts) |
| Response | `QueryBidResponse` | [View source ↗](akash/market/v1beta2/query.ts) |

---

**Leases**

Leases queries leases with filters

```ts
import { getLeases } from 'customchain-js/akash/market/v1beta2/query.rpc.func'
import { useGetLeases } from 'customchain-js/akash/market/v1beta2/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getLeases` | [View source ↗](akash/market/v1beta2/query.rpc.func.ts) |
| Hook | `useGetLeases` | [View source ↗](akash/market/v1beta2/query.rpc.react.ts) |
| Request | `QueryLeasesRequest` | [View source ↗](akash/market/v1beta2/query.ts) |
| Response | `QueryLeasesResponse` | [View source ↗](akash/market/v1beta2/query.ts) |

---

**Lease**

Lease queries lease details

```ts
import { getLease } from 'customchain-js/akash/market/v1beta2/query.rpc.func'
import { useGetLease } from 'customchain-js/akash/market/v1beta2/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getLease` | [View source ↗](akash/market/v1beta2/query.rpc.func.ts) |
| Hook | `useGetLease` | [View source ↗](akash/market/v1beta2/query.rpc.react.ts) |
| Request | `QueryLeaseRequest` | [View source ↗](akash/market/v1beta2/query.ts) |
| Response | `QueryLeaseResponse` | [View source ↗](akash/market/v1beta2/query.ts) |

### Transaction Methods

**CreateBid**

CreateBid defines a method to create a bid given proper inputs.

```ts
import { createBid } from 'customchain-js/akash/market/v1beta2/service.rpc.func'
import { useCreateBid } from 'customchain-js/akash/market/v1beta2/service.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createBid` | [View source ↗](akash/market/v1beta2/service.rpc.func.ts) |
| Hook | `useCreateBid` | [View source ↗](akash/market/v1beta2/service.rpc.react.ts) |
| Request | `MsgCreateBid` | [View source ↗](akash/market/v1beta2/service.ts) |
| Response | `MsgCreateBidResponse` | [View source ↗](akash/market/v1beta2/service.ts) |

---

**CloseBid**

CloseBid defines a method to close a bid given proper inputs.

```ts
import { closeBid } from 'customchain-js/akash/market/v1beta2/service.rpc.func'
import { useCloseBid } from 'customchain-js/akash/market/v1beta2/service.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `closeBid` | [View source ↗](akash/market/v1beta2/service.rpc.func.ts) |
| Hook | `useCloseBid` | [View source ↗](akash/market/v1beta2/service.rpc.react.ts) |
| Request | `MsgCloseBid` | [View source ↗](akash/market/v1beta2/service.ts) |
| Response | `MsgCloseBidResponse` | [View source ↗](akash/market/v1beta2/service.ts) |

---

**WithdrawLease**

WithdrawLease withdraws accrued funds from the lease payment

```ts
import { withdrawLease } from 'customchain-js/akash/market/v1beta2/service.rpc.func'
import { useWithdrawLease } from 'customchain-js/akash/market/v1beta2/service.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `withdrawLease` | [View source ↗](akash/market/v1beta2/service.rpc.func.ts) |
| Hook | `useWithdrawLease` | [View source ↗](akash/market/v1beta2/service.rpc.react.ts) |
| Request | `MsgWithdrawLease` | [View source ↗](akash/market/v1beta2/service.ts) |
| Response | `MsgWithdrawLeaseResponse` | [View source ↗](akash/market/v1beta2/service.ts) |

---

**CreateLease**

CreateLease creates a new lease

```ts
import { createLease } from 'customchain-js/akash/market/v1beta2/service.rpc.func'
import { useCreateLease } from 'customchain-js/akash/market/v1beta2/service.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createLease` | [View source ↗](akash/market/v1beta2/service.rpc.func.ts) |
| Hook | `useCreateLease` | [View source ↗](akash/market/v1beta2/service.rpc.react.ts) |
| Request | `MsgCreateLease` | [View source ↗](akash/market/v1beta2/service.ts) |
| Response | `MsgCreateLeaseResponse` | [View source ↗](akash/market/v1beta2/service.ts) |

---

**CloseLease**

CloseLease defines a method to close an order given proper inputs.

```ts
import { closeLease } from 'customchain-js/akash/market/v1beta2/service.rpc.func'
import { useCloseLease } from 'customchain-js/akash/market/v1beta2/service.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `closeLease` | [View source ↗](akash/market/v1beta2/service.rpc.func.ts) |
| Hook | `useCloseLease` | [View source ↗](akash/market/v1beta2/service.rpc.react.ts) |
| Request | `MsgCloseLease` | [View source ↗](akash/market/v1beta2/service.ts) |
| Response | `MsgCloseLeaseResponse` | [View source ↗](akash/market/v1beta2/service.ts) |


## akash.provider.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `MsgCreateProvider` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Type | `MsgCreateProviderResponse` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Type | `MsgDeleteProvider` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Type | `MsgDeleteProviderResponse` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Type | `MsgUpdateProvider` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Type | `MsgUpdateProviderResponse` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Type | `Provider` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `ProviderInfo` | [View source ↗](akash/provider/v1beta1/provider.ts) |

### Transaction Methods

**CreateProvider**

CreateProvider defines a method that creates a provider given the proper inputs

```ts
import { createProviderAkashProviderV1beta1 } from 'customchain-js/akash/bundle'
import { useCreateProviderAkashProviderV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createProviderAkashProviderV1beta1` | [View source ↗](akash/provider/v1beta1/provider.rpc.func.ts) |
| Hook | `useCreateProviderAkashProviderV1beta1` | [View source ↗](akash/provider/v1beta1/provider.rpc.react.ts) |
| Request | `MsgCreateProvider` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Response | `MsgCreateProviderResponse` | [View source ↗](akash/provider/v1beta1/provider.ts) |

---

**UpdateProvider**

UpdateProvider defines a method that updates a provider given the proper inputs

```ts
import { updateProviderAkashProviderV1beta1 } from 'customchain-js/akash/bundle'
import { useUpdateProviderAkashProviderV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `updateProviderAkashProviderV1beta1` | [View source ↗](akash/provider/v1beta1/provider.rpc.func.ts) |
| Hook | `useUpdateProviderAkashProviderV1beta1` | [View source ↗](akash/provider/v1beta1/provider.rpc.react.ts) |
| Request | `MsgUpdateProvider` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Response | `MsgUpdateProviderResponse` | [View source ↗](akash/provider/v1beta1/provider.ts) |

---

**DeleteProvider**

DeleteProvider defines a method that deletes a provider given the proper inputs

```ts
import { deleteProviderAkashProviderV1beta1 } from 'customchain-js/akash/bundle'
import { useDeleteProviderAkashProviderV1beta1 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `deleteProviderAkashProviderV1beta1` | [View source ↗](akash/provider/v1beta1/provider.rpc.func.ts) |
| Hook | `useDeleteProviderAkashProviderV1beta1` | [View source ↗](akash/provider/v1beta1/provider.rpc.react.ts) |
| Request | `MsgDeleteProvider` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Response | `MsgDeleteProviderResponse` | [View source ↗](akash/provider/v1beta1/provider.ts) |


## akash.provider.v1beta2

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MsgCreateProvider` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Type | `MsgCreateProviderResponse` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Type | `MsgDeleteProvider` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Type | `MsgDeleteProviderResponse` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Type | `MsgUpdateProvider` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Type | `MsgUpdateProviderResponse` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Type | `Provider` | [View source ↗](akash/audit/v1beta1/audit.ts) |
| Type | `ProviderInfo` | [View source ↗](akash/provider/v1beta1/provider.ts) |
| Type | `QueryProviderRequest` | [View source ↗](akash/audit/v1beta2/query.ts) |
| Type | `QueryProviderResponse` | [View source ↗](akash/provider/v1beta2/query.ts) |
| Type | `QueryProvidersRequest` | [View source ↗](akash/provider/v1beta2/query.ts) |
| Type | `QueryProvidersResponse` | [View source ↗](akash/audit/v1beta2/query.ts) |

### Query Methods

**Providers**

Providers queries providers

```ts
import { getProviders } from 'customchain-js/akash/provider/v1beta2/query.rpc.func'
import { useGetProviders } from 'customchain-js/akash/provider/v1beta2/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getProviders` | [View source ↗](akash/provider/v1beta2/query.rpc.func.ts) |
| Hook | `useGetProviders` | [View source ↗](akash/provider/v1beta2/query.rpc.react.ts) |
| Request | `QueryProvidersRequest` | [View source ↗](akash/provider/v1beta2/query.ts) |
| Response | `QueryProvidersResponse` | [View source ↗](akash/provider/v1beta2/query.ts) |

---

**Provider**

Provider queries provider details

```ts
import { getProvider } from 'customchain-js/akash/provider/v1beta2/query.rpc.func'
import { useGetProvider } from 'customchain-js/akash/provider/v1beta2/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getProvider` | [View source ↗](akash/provider/v1beta2/query.rpc.func.ts) |
| Hook | `useGetProvider` | [View source ↗](akash/provider/v1beta2/query.rpc.react.ts) |
| Request | `QueryProviderRequest` | [View source ↗](akash/provider/v1beta2/query.ts) |
| Response | `QueryProviderResponse` | [View source ↗](akash/provider/v1beta2/query.ts) |

### Transaction Methods

**CreateProvider**

CreateProvider defines a method that creates a provider given the proper inputs

```ts
import { createProviderAkashProviderV1beta2 } from 'customchain-js/akash/bundle'
import { useCreateProviderAkashProviderV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createProviderAkashProviderV1beta2` | [View source ↗](akash/provider/v1beta2/provider.rpc.func.ts) |
| Hook | `useCreateProviderAkashProviderV1beta2` | [View source ↗](akash/provider/v1beta2/provider.rpc.react.ts) |
| Request | `MsgCreateProvider` | [View source ↗](akash/provider/v1beta2/provider.ts) |
| Response | `MsgCreateProviderResponse` | [View source ↗](akash/provider/v1beta2/provider.ts) |

---

**UpdateProvider**

UpdateProvider defines a method that updates a provider given the proper inputs

```ts
import { updateProviderAkashProviderV1beta2 } from 'customchain-js/akash/bundle'
import { useUpdateProviderAkashProviderV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `updateProviderAkashProviderV1beta2` | [View source ↗](akash/provider/v1beta2/provider.rpc.func.ts) |
| Hook | `useUpdateProviderAkashProviderV1beta2` | [View source ↗](akash/provider/v1beta2/provider.rpc.react.ts) |
| Request | `MsgUpdateProvider` | [View source ↗](akash/provider/v1beta2/provider.ts) |
| Response | `MsgUpdateProviderResponse` | [View source ↗](akash/provider/v1beta2/provider.ts) |

---

**DeleteProvider**

DeleteProvider defines a method that deletes a provider given the proper inputs

```ts
import { deleteProviderAkashProviderV1beta2 } from 'customchain-js/akash/bundle'
import { useDeleteProviderAkashProviderV1beta2 } from 'customchain-js/akash/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `deleteProviderAkashProviderV1beta2` | [View source ↗](akash/provider/v1beta2/provider.rpc.func.ts) |
| Hook | `useDeleteProviderAkashProviderV1beta2` | [View source ↗](akash/provider/v1beta2/provider.rpc.react.ts) |
| Request | `MsgDeleteProvider` | [View source ↗](akash/provider/v1beta2/provider.ts) |
| Response | `MsgDeleteProviderResponse` | [View source ↗](akash/provider/v1beta2/provider.ts) |


## cosmos.app.v1alpha1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `Config` | [View source ↗](cosmos/app/v1alpha1/config.ts) |
| Type | `MigrateFromInfo` | [View source ↗](cosmos/app/v1alpha1/module.ts) |
| Type | `ModuleConfig` | [View source ↗](cosmos/app/v1alpha1/config.ts) |
| Type | `ModuleDescriptor` | [View source ↗](cosmos/app/v1alpha1/module.ts) |
| Type | `PackageReference` | [View source ↗](cosmos/app/v1alpha1/module.ts) |
| Type | `QueryConfigRequest` | [View source ↗](cosmos/app/v1alpha1/query.ts) |
| Type | `QueryConfigResponse` | [View source ↗](cosmos/app/v1alpha1/query.ts) |

### Query Methods

**Config**

Config returns the current app config.

```ts
import { getConfig } from 'customchain-js/cosmos/app/v1alpha1/query.rpc.func'
import { useGetConfig } from 'customchain-js/cosmos/app/v1alpha1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getConfig` | [View source ↗](cosmos/app/v1alpha1/query.rpc.func.ts) |
| Hook | `useGetConfig` | [View source ↗](cosmos/app/v1alpha1/query.rpc.react.ts) |
| Request | `QueryConfigRequest` | [View source ↗](cosmos/app/v1alpha1/query.ts) |
| Response | `QueryConfigResponse` | [View source ↗](cosmos/app/v1alpha1/query.ts) |


## cosmos.auth.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `AddressBytesToStringRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `AddressBytesToStringResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `AddressStringToBytesRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `AddressStringToBytesResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `BaseAccount` | [View source ↗](cosmos/auth/v1beta1/auth.ts) |
| Type | `Bech32PrefixRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `Bech32PrefixResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `CosmosAuthV1beta1Params` | [View source ↗](cosmos/auth/v1beta1/auth.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `ModuleAccount` | [View source ↗](cosmos/auth/v1beta1/auth.ts) |
| Type | `QueryAccountRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryAccountResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryAccountsRequest` | [View source ↗](akash/escrow/v1beta1/query.ts) |
| Type | `QueryAccountsResponse` | [View source ↗](akash/escrow/v1beta1/query.ts) |
| Type | `QueryModuleAccountsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryModuleAccountsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |

### Query Methods

**Accounts**

Accounts returns all the existing accounts Since: cosmos-sdk 0.43

```ts
import { getAccountsCosmosAuthV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetAccountsCosmosAuthV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountsCosmosAuthV1beta1` | [View source ↗](cosmos/auth/v1beta1/query.rpc.func.ts) |
| Hook | `useGetAccountsCosmosAuthV1beta1` | [View source ↗](cosmos/auth/v1beta1/query.rpc.react.ts) |
| Request | `QueryAccountsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Response | `QueryAccountsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |

---

**Account**

Account returns account details based on address.

```ts
import { getAccount } from 'customchain-js/cosmos/auth/v1beta1/query.rpc.func'
import { useGetAccount } from 'customchain-js/cosmos/auth/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccount` | [View source ↗](cosmos/auth/v1beta1/query.rpc.func.ts) |
| Hook | `useGetAccount` | [View source ↗](cosmos/auth/v1beta1/query.rpc.react.ts) |
| Request | `QueryAccountRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Response | `QueryAccountResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |

---

**Params**

Params queries all parameters.

```ts
import { getCosmosAuthV1beta1Params } from 'customchain-js/cosmos/auth/v1beta1/query.rpc.func'
import { useGetCosmosAuthV1beta1Params } from 'customchain-js/cosmos/auth/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCosmosAuthV1beta1Params` | [View source ↗](cosmos/auth/v1beta1/query.rpc.func.ts) |
| Hook | `useGetCosmosAuthV1beta1Params` | [View source ↗](cosmos/auth/v1beta1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |

---

**ModuleAccounts**

ModuleAccounts returns all the existing module accounts.

```ts
import { getModuleAccounts } from 'customchain-js/cosmos/auth/v1beta1/query.rpc.func'
import { useGetModuleAccounts } from 'customchain-js/cosmos/auth/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getModuleAccounts` | [View source ↗](cosmos/auth/v1beta1/query.rpc.func.ts) |
| Hook | `useGetModuleAccounts` | [View source ↗](cosmos/auth/v1beta1/query.rpc.react.ts) |
| Request | `QueryModuleAccountsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Response | `QueryModuleAccountsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |

---

**Bech32Prefix**

Bech32 queries bech32Prefix

```ts
import { getBech32Prefix } from 'customchain-js/cosmos/auth/v1beta1/query.rpc.func'
import { useGetBech32Prefix } from 'customchain-js/cosmos/auth/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getBech32Prefix` | [View source ↗](cosmos/auth/v1beta1/query.rpc.func.ts) |
| Hook | `useGetBech32Prefix` | [View source ↗](cosmos/auth/v1beta1/query.rpc.react.ts) |
| Request | `Bech32PrefixRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Response | `Bech32PrefixResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |

---

**AddressBytesToString**

AddressBytesToString converts Account Address bytes to string

```ts
import { getAddressBytesToString } from 'customchain-js/cosmos/auth/v1beta1/query.rpc.func'
import { useGetAddressBytesToString } from 'customchain-js/cosmos/auth/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAddressBytesToString` | [View source ↗](cosmos/auth/v1beta1/query.rpc.func.ts) |
| Hook | `useGetAddressBytesToString` | [View source ↗](cosmos/auth/v1beta1/query.rpc.react.ts) |
| Request | `AddressBytesToStringRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Response | `AddressBytesToStringResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |

---

**AddressStringToBytes**

AddressStringToBytes converts Address string to bytes

```ts
import { getAddressStringToBytes } from 'customchain-js/cosmos/auth/v1beta1/query.rpc.func'
import { useGetAddressStringToBytes } from 'customchain-js/cosmos/auth/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAddressStringToBytes` | [View source ↗](cosmos/auth/v1beta1/query.rpc.func.ts) |
| Hook | `useGetAddressStringToBytes` | [View source ↗](cosmos/auth/v1beta1/query.rpc.react.ts) |
| Request | `AddressStringToBytesRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Response | `AddressStringToBytesResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |


## cosmos.authz.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `EventGrant` | [View source ↗](cosmos/authz/v1beta1/event.ts) |
| Type | `EventRevoke` | [View source ↗](cosmos/authz/v1beta1/event.ts) |
| Type | `GenericAuthorization` | [View source ↗](cosmos/authz/v1beta1/authz.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `Grant` | [View source ↗](cosmos/authz/v1beta1/authz.ts) |
| Type | `GrantAuthorization` | [View source ↗](cosmos/authz/v1beta1/authz.ts) |
| Type | `GrantQueueItem` | [View source ↗](cosmos/authz/v1beta1/authz.ts) |
| Type | `MsgExec` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |
| Type | `MsgExecResponse` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |
| Type | `MsgGrant` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |
| Type | `MsgGrantResponse` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |
| Type | `MsgRevoke` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |
| Type | `MsgRevokeResponse` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |
| Type | `QueryGranteeGrantsRequest` | [View source ↗](cosmos/authz/v1beta1/query.ts) |
| Type | `QueryGranteeGrantsResponse` | [View source ↗](cosmos/authz/v1beta1/query.ts) |
| Type | `QueryGranterGrantsRequest` | [View source ↗](cosmos/authz/v1beta1/query.ts) |
| Type | `QueryGranterGrantsResponse` | [View source ↗](cosmos/authz/v1beta1/query.ts) |
| Type | `QueryGrantsRequest` | [View source ↗](cosmos/authz/v1beta1/query.ts) |
| Type | `QueryGrantsResponse` | [View source ↗](cosmos/authz/v1beta1/query.ts) |

### Query Methods

**Grants**

Returns list of `Authorization`, granted to the grantee by the granter.

```ts
import { getGrants } from 'customchain-js/cosmos/authz/v1beta1/query.rpc.func'
import { useGetGrants } from 'customchain-js/cosmos/authz/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGrants` | [View source ↗](cosmos/authz/v1beta1/query.rpc.func.ts) |
| Hook | `useGetGrants` | [View source ↗](cosmos/authz/v1beta1/query.rpc.react.ts) |
| Request | `QueryGrantsRequest` | [View source ↗](cosmos/authz/v1beta1/query.ts) |
| Response | `QueryGrantsResponse` | [View source ↗](cosmos/authz/v1beta1/query.ts) |

---

**GranterGrants**

GranterGrants returns list of `GrantAuthorization`, granted by granter. Since: cosmos-sdk 0.46

```ts
import { getGranterGrants } from 'customchain-js/cosmos/authz/v1beta1/query.rpc.func'
import { useGetGranterGrants } from 'customchain-js/cosmos/authz/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGranterGrants` | [View source ↗](cosmos/authz/v1beta1/query.rpc.func.ts) |
| Hook | `useGetGranterGrants` | [View source ↗](cosmos/authz/v1beta1/query.rpc.react.ts) |
| Request | `QueryGranterGrantsRequest` | [View source ↗](cosmos/authz/v1beta1/query.ts) |
| Response | `QueryGranterGrantsResponse` | [View source ↗](cosmos/authz/v1beta1/query.ts) |

---

**GranteeGrants**

GranteeGrants returns a list of `GrantAuthorization` by grantee. Since: cosmos-sdk 0.46

```ts
import { getGranteeGrants } from 'customchain-js/cosmos/authz/v1beta1/query.rpc.func'
import { useGetGranteeGrants } from 'customchain-js/cosmos/authz/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGranteeGrants` | [View source ↗](cosmos/authz/v1beta1/query.rpc.func.ts) |
| Hook | `useGetGranteeGrants` | [View source ↗](cosmos/authz/v1beta1/query.rpc.react.ts) |
| Request | `QueryGranteeGrantsRequest` | [View source ↗](cosmos/authz/v1beta1/query.ts) |
| Response | `QueryGranteeGrantsResponse` | [View source ↗](cosmos/authz/v1beta1/query.ts) |

### Transaction Methods

**Grant**

Grant grants the provided authorization to the grantee on the granter's account with the provided expiration time. If there is already a grant for the given (granter, grantee, Authorization) triple, then the grant will be overwritten.

```ts
import { grant } from 'customchain-js/cosmos/authz/v1beta1/tx.rpc.func'
import { useGrant } from 'customchain-js/cosmos/authz/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `grant` | [View source ↗](cosmos/authz/v1beta1/tx.rpc.func.ts) |
| Hook | `useGrant` | [View source ↗](cosmos/authz/v1beta1/tx.rpc.react.ts) |
| Request | `MsgGrant` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |
| Response | `MsgGrantResponse` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |

---

**Exec**

Exec attempts to execute the provided messages using authorizations granted to the grantee. Each message should have only one signer corresponding to the granter of the authorization.

```ts
import { execCosmosAuthzV1beta1 } from 'customchain-js/cosmos/bundle'
import { useExecCosmosAuthzV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `execCosmosAuthzV1beta1` | [View source ↗](cosmos/authz/v1beta1/tx.rpc.func.ts) |
| Hook | `useExecCosmosAuthzV1beta1` | [View source ↗](cosmos/authz/v1beta1/tx.rpc.react.ts) |
| Request | `MsgExec` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |
| Response | `MsgExecResponse` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |

---

**Revoke**

Revoke revokes any authorization corresponding to the provided method name on the granter's account that has been granted to the grantee.

```ts
import { revoke } from 'customchain-js/cosmos/authz/v1beta1/tx.rpc.func'
import { useRevoke } from 'customchain-js/cosmos/authz/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `revoke` | [View source ↗](cosmos/authz/v1beta1/tx.rpc.func.ts) |
| Hook | `useRevoke` | [View source ↗](cosmos/authz/v1beta1/tx.rpc.react.ts) |
| Request | `MsgRevoke` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |
| Response | `MsgRevokeResponse` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |


## cosmos.bank.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `Balance` | [View source ↗](cosmos/bank/v1beta1/genesis.ts) |
| Type | `CosmosBankV1beta1Params` | [View source ↗](cosmos/bank/v1beta1/bank.ts) |
| Type | `DenomOwner` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `DenomUnit` | [View source ↗](cosmos/bank/v1beta1/bank.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `Input` | [View source ↗](cosmos/bank/v1beta1/bank.ts) |
| Type | `Metadata` | [View source ↗](cosmos/bank/v1beta1/bank.ts) |
| Type | `MsgMultiSend` | [View source ↗](cosmos/bank/v1beta1/tx.ts) |
| Type | `MsgMultiSendResponse` | [View source ↗](cosmos/bank/v1beta1/tx.ts) |
| Type | `MsgSend` | [View source ↗](cosmos/bank/v1beta1/tx.ts) |
| Type | `MsgSendResponse` | [View source ↗](cosmos/bank/v1beta1/tx.ts) |
| Type | `Output` | [View source ↗](cosmos/bank/v1beta1/bank.ts) |
| Type | `QueryAllBalancesRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryAllBalancesResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryBalanceRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryBalanceResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryDenomMetadataRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryDenomMetadataResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryDenomOwnersRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryDenomOwnersResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryDenomsMetadataRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryDenomsMetadataResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QuerySpendableBalancesRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QuerySpendableBalancesResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QuerySupplyOfRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QuerySupplyOfResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryTotalSupplyRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryTotalSupplyResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `SendAuthorization` | [View source ↗](cosmos/bank/v1beta1/authz.ts) |
| Type | `SendEnabled` | [View source ↗](cosmos/bank/v1beta1/bank.ts) |
| Type | `Supply` | [View source ↗](cosmos/bank/v1beta1/bank.ts) |

### Query Methods

**Balance**

Balance queries the balance of a single coin for a single account.

```ts
import { getBalanceCosmosBankV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetBalanceCosmosBankV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getBalanceCosmosBankV1beta1` | [View source ↗](cosmos/bank/v1beta1/query.rpc.func.ts) |
| Hook | `useGetBalanceCosmosBankV1beta1` | [View source ↗](cosmos/bank/v1beta1/query.rpc.react.ts) |
| Request | `QueryBalanceRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Response | `QueryBalanceResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |

---

**AllBalances**

AllBalances queries the balance of all coins for a single account.

```ts
import { getAllBalances } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.func'
import { useGetAllBalances } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAllBalances` | [View source ↗](cosmos/bank/v1beta1/query.rpc.func.ts) |
| Hook | `useGetAllBalances` | [View source ↗](cosmos/bank/v1beta1/query.rpc.react.ts) |
| Request | `QueryAllBalancesRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Response | `QueryAllBalancesResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |

---

**SpendableBalances**

SpendableBalances queries the spenable balance of all coins for a single account.

```ts
import { getSpendableBalances } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.func'
import { useGetSpendableBalances } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSpendableBalances` | [View source ↗](cosmos/bank/v1beta1/query.rpc.func.ts) |
| Hook | `useGetSpendableBalances` | [View source ↗](cosmos/bank/v1beta1/query.rpc.react.ts) |
| Request | `QuerySpendableBalancesRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Response | `QuerySpendableBalancesResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |

---

**TotalSupply**

TotalSupply queries the total supply of all coins.

```ts
import { getTotalSupply } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.func'
import { useGetTotalSupply } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTotalSupply` | [View source ↗](cosmos/bank/v1beta1/query.rpc.func.ts) |
| Hook | `useGetTotalSupply` | [View source ↗](cosmos/bank/v1beta1/query.rpc.react.ts) |
| Request | `QueryTotalSupplyRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Response | `QueryTotalSupplyResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |

---

**SupplyOf**

SupplyOf queries the supply of a single coin.

```ts
import { getSupplyOf } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.func'
import { useGetSupplyOf } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSupplyOf` | [View source ↗](cosmos/bank/v1beta1/query.rpc.func.ts) |
| Hook | `useGetSupplyOf` | [View source ↗](cosmos/bank/v1beta1/query.rpc.react.ts) |
| Request | `QuerySupplyOfRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Response | `QuerySupplyOfResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |

---

**Params**

Params queries the parameters of x/bank module.

```ts
import { getCosmosBankV1beta1Params } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.func'
import { useGetCosmosBankV1beta1Params } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCosmosBankV1beta1Params` | [View source ↗](cosmos/bank/v1beta1/query.rpc.func.ts) |
| Hook | `useGetCosmosBankV1beta1Params` | [View source ↗](cosmos/bank/v1beta1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |

---

**DenomMetadata**

DenomsMetadata queries the client metadata of a given coin denomination.

```ts
import { getDenomMetadata } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.func'
import { useGetDenomMetadata } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDenomMetadata` | [View source ↗](cosmos/bank/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDenomMetadata` | [View source ↗](cosmos/bank/v1beta1/query.rpc.react.ts) |
| Request | `QueryDenomMetadataRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Response | `QueryDenomMetadataResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |

---

**DenomsMetadata**

DenomsMetadata queries the client metadata for all registered coin denominations.

```ts
import { getDenomsMetadata } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.func'
import { useGetDenomsMetadata } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDenomsMetadata` | [View source ↗](cosmos/bank/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDenomsMetadata` | [View source ↗](cosmos/bank/v1beta1/query.rpc.react.ts) |
| Request | `QueryDenomsMetadataRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Response | `QueryDenomsMetadataResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |

---

**DenomOwners**

DenomOwners queries for all account addresses that own a particular token denomination.

```ts
import { getDenomOwners } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.func'
import { useGetDenomOwners } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDenomOwners` | [View source ↗](cosmos/bank/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDenomOwners` | [View source ↗](cosmos/bank/v1beta1/query.rpc.react.ts) |
| Request | `QueryDenomOwnersRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Response | `QueryDenomOwnersResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |

### Transaction Methods

**Send**

Send defines a method for sending coins from one account to another account.

```ts
import { sendCosmosBankV1beta1 } from 'customchain-js/cosmos/bundle'
import { useSendCosmosBankV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `sendCosmosBankV1beta1` | [View source ↗](cosmos/bank/v1beta1/tx.rpc.func.ts) |
| Hook | `useSendCosmosBankV1beta1` | [View source ↗](cosmos/bank/v1beta1/tx.rpc.react.ts) |
| Request | `MsgSend` | [View source ↗](cosmos/bank/v1beta1/tx.ts) |
| Response | `MsgSendResponse` | [View source ↗](cosmos/bank/v1beta1/tx.ts) |

---

**MultiSend**

MultiSend defines a method for sending coins from some accounts to other accounts.

```ts
import { multiSend } from 'customchain-js/cosmos/bank/v1beta1/tx.rpc.func'
import { useMultiSend } from 'customchain-js/cosmos/bank/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `multiSend` | [View source ↗](cosmos/bank/v1beta1/tx.rpc.func.ts) |
| Hook | `useMultiSend` | [View source ↗](cosmos/bank/v1beta1/tx.rpc.react.ts) |
| Request | `MsgMultiSend` | [View source ↗](cosmos/bank/v1beta1/tx.ts) |
| Response | `MsgMultiSendResponse` | [View source ↗](cosmos/bank/v1beta1/tx.ts) |


## cosmos.crisis.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MsgVerifyInvariant` | [View source ↗](cosmos/crisis/v1beta1/tx.ts) |
| Type | `MsgVerifyInvariantResponse` | [View source ↗](cosmos/crisis/v1beta1/tx.ts) |

### Transaction Methods

**VerifyInvariant**

VerifyInvariant defines a method to verify a particular invariance.

```ts
import { verifyInvariant } from 'customchain-js/cosmos/crisis/v1beta1/tx.rpc.func'
import { useVerifyInvariant } from 'customchain-js/cosmos/crisis/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `verifyInvariant` | [View source ↗](cosmos/crisis/v1beta1/tx.rpc.func.ts) |
| Hook | `useVerifyInvariant` | [View source ↗](cosmos/crisis/v1beta1/tx.rpc.react.ts) |
| Request | `MsgVerifyInvariant` | [View source ↗](cosmos/crisis/v1beta1/tx.ts) |
| Response | `MsgVerifyInvariantResponse` | [View source ↗](cosmos/crisis/v1beta1/tx.ts) |


## cosmos.distribution.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `CommunityPoolSpendProposal` | [View source ↗](cosmos/distribution/v1beta1/distribution.ts) |
| Type | `CommunityPoolSpendProposalWithDeposit` | [View source ↗](cosmos/distribution/v1beta1/distribution.ts) |
| Type | `CosmosDistributionV1beta1Params` | [View source ↗](cosmos/distribution/v1beta1/distribution.ts) |
| Type | `DelegationDelegatorReward` | [View source ↗](cosmos/distribution/v1beta1/distribution.ts) |
| Type | `DelegatorStartingInfo` | [View source ↗](cosmos/distribution/v1beta1/distribution.ts) |
| Type | `DelegatorStartingInfoRecord` | [View source ↗](cosmos/distribution/v1beta1/genesis.ts) |
| Type | `DelegatorWithdrawInfo` | [View source ↗](cosmos/distribution/v1beta1/genesis.ts) |
| Type | `FeePool` | [View source ↗](cosmos/distribution/v1beta1/distribution.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MsgFundCommunityPool` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |
| Type | `MsgFundCommunityPoolResponse` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |
| Type | `MsgSetWithdrawAddress` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |
| Type | `MsgSetWithdrawAddressResponse` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |
| Type | `MsgWithdrawDelegatorReward` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |
| Type | `MsgWithdrawDelegatorRewardResponse` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |
| Type | `MsgWithdrawValidatorCommission` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |
| Type | `MsgWithdrawValidatorCommissionResponse` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |
| Type | `QueryCommunityPoolRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryCommunityPoolResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryDelegationRewardsRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryDelegationRewardsResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryDelegationTotalRewardsRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryDelegationTotalRewardsResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryDelegatorValidatorsRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryDelegatorValidatorsResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryDelegatorWithdrawAddressRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryDelegatorWithdrawAddressResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryValidatorCommissionRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryValidatorCommissionResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryValidatorOutstandingRewardsRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryValidatorOutstandingRewardsResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryValidatorSlashesRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryValidatorSlashesResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `ValidatorAccumulatedCommission` | [View source ↗](cosmos/distribution/v1beta1/distribution.ts) |
| Type | `ValidatorAccumulatedCommissionRecord` | [View source ↗](cosmos/distribution/v1beta1/genesis.ts) |
| Type | `ValidatorCurrentRewards` | [View source ↗](cosmos/distribution/v1beta1/distribution.ts) |
| Type | `ValidatorCurrentRewardsRecord` | [View source ↗](cosmos/distribution/v1beta1/genesis.ts) |
| Type | `ValidatorHistoricalRewards` | [View source ↗](cosmos/distribution/v1beta1/distribution.ts) |
| Type | `ValidatorHistoricalRewardsRecord` | [View source ↗](cosmos/distribution/v1beta1/genesis.ts) |
| Type | `ValidatorOutstandingRewards` | [View source ↗](cosmos/distribution/v1beta1/distribution.ts) |
| Type | `ValidatorOutstandingRewardsRecord` | [View source ↗](cosmos/distribution/v1beta1/genesis.ts) |
| Type | `ValidatorSlashEvent` | [View source ↗](cosmos/distribution/v1beta1/distribution.ts) |
| Type | `ValidatorSlashEventRecord` | [View source ↗](cosmos/distribution/v1beta1/genesis.ts) |
| Type | `ValidatorSlashEvents` | [View source ↗](cosmos/distribution/v1beta1/distribution.ts) |

### Query Methods

**Params**

Params queries params of the distribution module.

```ts
import { getCosmosDistributionV1beta1Params } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.func'
import { useGetCosmosDistributionV1beta1Params } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCosmosDistributionV1beta1Params` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.func.ts) |
| Hook | `useGetCosmosDistributionV1beta1Params` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |

---

**ValidatorOutstandingRewards**

ValidatorOutstandingRewards queries rewards of a validator address.

```ts
import { getValidatorOutstandingRewards } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.func'
import { useGetValidatorOutstandingRewards } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getValidatorOutstandingRewards` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.func.ts) |
| Hook | `useGetValidatorOutstandingRewards` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.react.ts) |
| Request | `QueryValidatorOutstandingRewardsRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Response | `QueryValidatorOutstandingRewardsResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |

---

**ValidatorCommission**

ValidatorCommission queries accumulated commission for a validator.

```ts
import { getValidatorCommission } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.func'
import { useGetValidatorCommission } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getValidatorCommission` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.func.ts) |
| Hook | `useGetValidatorCommission` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.react.ts) |
| Request | `QueryValidatorCommissionRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Response | `QueryValidatorCommissionResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |

---

**ValidatorSlashes**

ValidatorSlashes queries slash events of a validator.

```ts
import { getValidatorSlashes } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.func'
import { useGetValidatorSlashes } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getValidatorSlashes` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.func.ts) |
| Hook | `useGetValidatorSlashes` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.react.ts) |
| Request | `QueryValidatorSlashesRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Response | `QueryValidatorSlashesResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |

---

**DelegationRewards**

DelegationRewards queries the total rewards accrued by a delegation.

```ts
import { getDelegationRewards } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.func'
import { useGetDelegationRewards } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDelegationRewards` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDelegationRewards` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.react.ts) |
| Request | `QueryDelegationRewardsRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Response | `QueryDelegationRewardsResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |

---

**DelegationTotalRewards**

DelegationTotalRewards queries the total rewards accrued by a each validator.

```ts
import { getDelegationTotalRewards } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.func'
import { useGetDelegationTotalRewards } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDelegationTotalRewards` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDelegationTotalRewards` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.react.ts) |
| Request | `QueryDelegationTotalRewardsRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Response | `QueryDelegationTotalRewardsResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |

---

**DelegatorValidators**

DelegatorValidators queries the validators of a delegator.

```ts
import { getDelegatorValidatorsCosmosDistributionV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetDelegatorValidatorsCosmosDistributionV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDelegatorValidatorsCosmosDistributionV1beta1` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDelegatorValidatorsCosmosDistributionV1beta1` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.react.ts) |
| Request | `QueryDelegatorValidatorsRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Response | `QueryDelegatorValidatorsResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |

---

**DelegatorWithdrawAddress**

DelegatorWithdrawAddress queries withdraw address of a delegator.

```ts
import { getDelegatorWithdrawAddress } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.func'
import { useGetDelegatorWithdrawAddress } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDelegatorWithdrawAddress` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDelegatorWithdrawAddress` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.react.ts) |
| Request | `QueryDelegatorWithdrawAddressRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Response | `QueryDelegatorWithdrawAddressResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |

---

**CommunityPool**

CommunityPool queries the community pool coins.

```ts
import { getCommunityPool } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.func'
import { useGetCommunityPool } from 'customchain-js/cosmos/distribution/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCommunityPool` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.func.ts) |
| Hook | `useGetCommunityPool` | [View source ↗](cosmos/distribution/v1beta1/query.rpc.react.ts) |
| Request | `QueryCommunityPoolRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Response | `QueryCommunityPoolResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |

### Transaction Methods

**SetWithdrawAddress**

SetWithdrawAddress defines a method to change the withdraw address for a delegator (or validator self-delegation).

```ts
import { setWithdrawAddress } from 'customchain-js/cosmos/distribution/v1beta1/tx.rpc.func'
import { useSetWithdrawAddress } from 'customchain-js/cosmos/distribution/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `setWithdrawAddress` | [View source ↗](cosmos/distribution/v1beta1/tx.rpc.func.ts) |
| Hook | `useSetWithdrawAddress` | [View source ↗](cosmos/distribution/v1beta1/tx.rpc.react.ts) |
| Request | `MsgSetWithdrawAddress` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |
| Response | `MsgSetWithdrawAddressResponse` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |

---

**WithdrawDelegatorReward**

WithdrawDelegatorReward defines a method to withdraw rewards of delegator from a single validator.

```ts
import { withdrawDelegatorReward } from 'customchain-js/cosmos/distribution/v1beta1/tx.rpc.func'
import { useWithdrawDelegatorReward } from 'customchain-js/cosmos/distribution/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `withdrawDelegatorReward` | [View source ↗](cosmos/distribution/v1beta1/tx.rpc.func.ts) |
| Hook | `useWithdrawDelegatorReward` | [View source ↗](cosmos/distribution/v1beta1/tx.rpc.react.ts) |
| Request | `MsgWithdrawDelegatorReward` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |
| Response | `MsgWithdrawDelegatorRewardResponse` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |

---

**WithdrawValidatorCommission**

WithdrawValidatorCommission defines a method to withdraw the full commission to the validator address.

```ts
import { withdrawValidatorCommission } from 'customchain-js/cosmos/distribution/v1beta1/tx.rpc.func'
import { useWithdrawValidatorCommission } from 'customchain-js/cosmos/distribution/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `withdrawValidatorCommission` | [View source ↗](cosmos/distribution/v1beta1/tx.rpc.func.ts) |
| Hook | `useWithdrawValidatorCommission` | [View source ↗](cosmos/distribution/v1beta1/tx.rpc.react.ts) |
| Request | `MsgWithdrawValidatorCommission` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |
| Response | `MsgWithdrawValidatorCommissionResponse` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |

---

**FundCommunityPool**

FundCommunityPool defines a method to allow an account to directly fund the community pool.

```ts
import { fundCommunityPool } from 'customchain-js/cosmos/distribution/v1beta1/tx.rpc.func'
import { useFundCommunityPool } from 'customchain-js/cosmos/distribution/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `fundCommunityPool` | [View source ↗](cosmos/distribution/v1beta1/tx.rpc.func.ts) |
| Hook | `useFundCommunityPool` | [View source ↗](cosmos/distribution/v1beta1/tx.rpc.react.ts) |
| Request | `MsgFundCommunityPool` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |
| Response | `MsgFundCommunityPoolResponse` | [View source ↗](cosmos/distribution/v1beta1/tx.ts) |


## cosmos.evidence.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `Equivocation` | [View source ↗](cosmos/evidence/v1beta1/evidence.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MsgSubmitEvidence` | [View source ↗](cosmos/evidence/v1beta1/tx.ts) |
| Type | `MsgSubmitEvidenceResponse` | [View source ↗](cosmos/evidence/v1beta1/tx.ts) |
| Type | `QueryAllEvidenceRequest` | [View source ↗](cosmos/evidence/v1beta1/query.ts) |
| Type | `QueryAllEvidenceResponse` | [View source ↗](cosmos/evidence/v1beta1/query.ts) |
| Type | `QueryEvidenceRequest` | [View source ↗](cosmos/evidence/v1beta1/query.ts) |
| Type | `QueryEvidenceResponse` | [View source ↗](cosmos/evidence/v1beta1/query.ts) |

### Query Methods

**Evidence**

Evidence queries evidence based on evidence hash.

```ts
import { getEvidence } from 'customchain-js/cosmos/evidence/v1beta1/query.rpc.func'
import { useGetEvidence } from 'customchain-js/cosmos/evidence/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEvidence` | [View source ↗](cosmos/evidence/v1beta1/query.rpc.func.ts) |
| Hook | `useGetEvidence` | [View source ↗](cosmos/evidence/v1beta1/query.rpc.react.ts) |
| Request | `QueryEvidenceRequest` | [View source ↗](cosmos/evidence/v1beta1/query.ts) |
| Response | `QueryEvidenceResponse` | [View source ↗](cosmos/evidence/v1beta1/query.ts) |

---

**AllEvidence**

AllEvidence queries all evidence.

```ts
import { getAllEvidence } from 'customchain-js/cosmos/evidence/v1beta1/query.rpc.func'
import { useGetAllEvidence } from 'customchain-js/cosmos/evidence/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAllEvidence` | [View source ↗](cosmos/evidence/v1beta1/query.rpc.func.ts) |
| Hook | `useGetAllEvidence` | [View source ↗](cosmos/evidence/v1beta1/query.rpc.react.ts) |
| Request | `QueryAllEvidenceRequest` | [View source ↗](cosmos/evidence/v1beta1/query.ts) |
| Response | `QueryAllEvidenceResponse` | [View source ↗](cosmos/evidence/v1beta1/query.ts) |

### Transaction Methods

**SubmitEvidence**

SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or counterfactual signing.

```ts
import { submitEvidence } from 'customchain-js/cosmos/evidence/v1beta1/tx.rpc.func'
import { useSubmitEvidence } from 'customchain-js/cosmos/evidence/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `submitEvidence` | [View source ↗](cosmos/evidence/v1beta1/tx.rpc.func.ts) |
| Hook | `useSubmitEvidence` | [View source ↗](cosmos/evidence/v1beta1/tx.rpc.react.ts) |
| Request | `MsgSubmitEvidence` | [View source ↗](cosmos/evidence/v1beta1/tx.ts) |
| Response | `MsgSubmitEvidenceResponse` | [View source ↗](cosmos/evidence/v1beta1/tx.ts) |


## cosmos.feegrant.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `AllowedMsgAllowance` | [View source ↗](cosmos/feegrant/v1beta1/feegrant.ts) |
| Type | `BasicAllowance` | [View source ↗](cosmos/feegrant/v1beta1/feegrant.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `Grant` | [View source ↗](cosmos/authz/v1beta1/authz.ts) |
| Type | `MsgGrantAllowance` | [View source ↗](cosmos/feegrant/v1beta1/tx.ts) |
| Type | `MsgGrantAllowanceResponse` | [View source ↗](cosmos/feegrant/v1beta1/tx.ts) |
| Type | `MsgRevokeAllowance` | [View source ↗](cosmos/feegrant/v1beta1/tx.ts) |
| Type | `MsgRevokeAllowanceResponse` | [View source ↗](cosmos/feegrant/v1beta1/tx.ts) |
| Type | `PeriodicAllowance` | [View source ↗](cosmos/feegrant/v1beta1/feegrant.ts) |
| Type | `QueryAllowanceRequest` | [View source ↗](cosmos/feegrant/v1beta1/query.ts) |
| Type | `QueryAllowanceResponse` | [View source ↗](cosmos/feegrant/v1beta1/query.ts) |
| Type | `QueryAllowancesByGranterRequest` | [View source ↗](cosmos/feegrant/v1beta1/query.ts) |
| Type | `QueryAllowancesByGranterResponse` | [View source ↗](cosmos/feegrant/v1beta1/query.ts) |
| Type | `QueryAllowancesRequest` | [View source ↗](cosmos/feegrant/v1beta1/query.ts) |
| Type | `QueryAllowancesResponse` | [View source ↗](cosmos/feegrant/v1beta1/query.ts) |

### Query Methods

**Allowance**

Allowance returns fee granted to the grantee by the granter.

```ts
import { getAllowance } from 'customchain-js/cosmos/feegrant/v1beta1/query.rpc.func'
import { useGetAllowance } from 'customchain-js/cosmos/feegrant/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAllowance` | [View source ↗](cosmos/feegrant/v1beta1/query.rpc.func.ts) |
| Hook | `useGetAllowance` | [View source ↗](cosmos/feegrant/v1beta1/query.rpc.react.ts) |
| Request | `QueryAllowanceRequest` | [View source ↗](cosmos/feegrant/v1beta1/query.ts) |
| Response | `QueryAllowanceResponse` | [View source ↗](cosmos/feegrant/v1beta1/query.ts) |

---

**Allowances**

Allowances returns all the grants for address.

```ts
import { getAllowances } from 'customchain-js/cosmos/feegrant/v1beta1/query.rpc.func'
import { useGetAllowances } from 'customchain-js/cosmos/feegrant/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAllowances` | [View source ↗](cosmos/feegrant/v1beta1/query.rpc.func.ts) |
| Hook | `useGetAllowances` | [View source ↗](cosmos/feegrant/v1beta1/query.rpc.react.ts) |
| Request | `QueryAllowancesRequest` | [View source ↗](cosmos/feegrant/v1beta1/query.ts) |
| Response | `QueryAllowancesResponse` | [View source ↗](cosmos/feegrant/v1beta1/query.ts) |

---

**AllowancesByGranter**

AllowancesByGranter returns all the grants given by an address Since v0.46

```ts
import { getAllowancesByGranter } from 'customchain-js/cosmos/feegrant/v1beta1/query.rpc.func'
import { useGetAllowancesByGranter } from 'customchain-js/cosmos/feegrant/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAllowancesByGranter` | [View source ↗](cosmos/feegrant/v1beta1/query.rpc.func.ts) |
| Hook | `useGetAllowancesByGranter` | [View source ↗](cosmos/feegrant/v1beta1/query.rpc.react.ts) |
| Request | `QueryAllowancesByGranterRequest` | [View source ↗](cosmos/feegrant/v1beta1/query.ts) |
| Response | `QueryAllowancesByGranterResponse` | [View source ↗](cosmos/feegrant/v1beta1/query.ts) |

### Transaction Methods

**GrantAllowance**

GrantAllowance grants fee allowance to the grantee on the granter's account with the provided expiration time.

```ts
import { grantAllowance } from 'customchain-js/cosmos/feegrant/v1beta1/tx.rpc.func'
import { useGrantAllowance } from 'customchain-js/cosmos/feegrant/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `grantAllowance` | [View source ↗](cosmos/feegrant/v1beta1/tx.rpc.func.ts) |
| Hook | `useGrantAllowance` | [View source ↗](cosmos/feegrant/v1beta1/tx.rpc.react.ts) |
| Request | `MsgGrantAllowance` | [View source ↗](cosmos/feegrant/v1beta1/tx.ts) |
| Response | `MsgGrantAllowanceResponse` | [View source ↗](cosmos/feegrant/v1beta1/tx.ts) |

---

**RevokeAllowance**

RevokeAllowance revokes any fee allowance of granter's account that has been granted to the grantee.

```ts
import { revokeAllowance } from 'customchain-js/cosmos/feegrant/v1beta1/tx.rpc.func'
import { useRevokeAllowance } from 'customchain-js/cosmos/feegrant/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `revokeAllowance` | [View source ↗](cosmos/feegrant/v1beta1/tx.rpc.func.ts) |
| Hook | `useRevokeAllowance` | [View source ↗](cosmos/feegrant/v1beta1/tx.rpc.react.ts) |
| Request | `MsgRevokeAllowance` | [View source ↗](cosmos/feegrant/v1beta1/tx.ts) |
| Response | `MsgRevokeAllowanceResponse` | [View source ↗](cosmos/feegrant/v1beta1/tx.ts) |


## cosmos.gov.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `Deposit` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `DepositParams` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MsgDeposit` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgDepositResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgExecLegacyContent` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgExecLegacyContentResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgSubmitProposal` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgSubmitProposalResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgVote` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgVoteResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgVoteWeighted` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgVoteWeightedResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `Proposal` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `ProposalStatus` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `QueryDepositRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryDepositResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryDepositsRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryDepositsResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryProposalRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryProposalResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryProposalsRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryProposalsResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryTallyResultRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryTallyResultResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryVoteRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryVoteResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryVotesRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryVotesResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `TallyParams` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `TallyResult` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `Vote` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `VoteOption` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `VotingParams` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `WeightedVoteOption` | [View source ↗](cosmos/gov/v1/gov.ts) |

### Query Methods

**Proposal**

Proposal queries proposal details based on ProposalID.

```ts
import { getProposalCosmosGovV1 } from 'customchain-js/cosmos/bundle'
import { useGetProposalCosmosGovV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getProposalCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.func.ts) |
| Hook | `useGetProposalCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.react.ts) |
| Request | `QueryProposalRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Response | `QueryProposalResponse` | [View source ↗](cosmos/gov/v1/query.ts) |

---

**Proposals**

Proposals queries all proposals based on given status.

```ts
import { getProposalsCosmosGovV1 } from 'customchain-js/cosmos/bundle'
import { useGetProposalsCosmosGovV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getProposalsCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.func.ts) |
| Hook | `useGetProposalsCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.react.ts) |
| Request | `QueryProposalsRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Response | `QueryProposalsResponse` | [View source ↗](cosmos/gov/v1/query.ts) |

---

**Vote**

Vote queries voted information based on proposalID, voterAddr.

```ts
import { getVoteCosmosGovV1 } from 'customchain-js/cosmos/bundle'
import { useGetVoteCosmosGovV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getVoteCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.func.ts) |
| Hook | `useGetVoteCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.react.ts) |
| Request | `QueryVoteRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Response | `QueryVoteResponse` | [View source ↗](cosmos/gov/v1/query.ts) |

---

**Votes**

Votes queries votes of a given proposal.

```ts
import { getVotesCosmosGovV1 } from 'customchain-js/cosmos/bundle'
import { useGetVotesCosmosGovV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getVotesCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.func.ts) |
| Hook | `useGetVotesCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.react.ts) |
| Request | `QueryVotesRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Response | `QueryVotesResponse` | [View source ↗](cosmos/gov/v1/query.ts) |

---

**Params**

Params queries all parameters of the gov module.

```ts
import { getCosmosGovV1Params } from 'customchain-js/cosmos/gov/v1/query.rpc.func'
import { useGetCosmosGovV1Params } from 'customchain-js/cosmos/gov/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCosmosGovV1Params` | [View source ↗](cosmos/gov/v1/query.rpc.func.ts) |
| Hook | `useGetCosmosGovV1Params` | [View source ↗](cosmos/gov/v1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](cosmos/gov/v1/query.ts) |

---

**Deposit**

Deposit queries single deposit information based proposalID, depositAddr.

```ts
import { getDepositCosmosGovV1 } from 'customchain-js/cosmos/bundle'
import { useGetDepositCosmosGovV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDepositCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.func.ts) |
| Hook | `useGetDepositCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.react.ts) |
| Request | `QueryDepositRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Response | `QueryDepositResponse` | [View source ↗](cosmos/gov/v1/query.ts) |

---

**Deposits**

Deposits queries all deposits of a single proposal.

```ts
import { getDepositsCosmosGovV1 } from 'customchain-js/cosmos/bundle'
import { useGetDepositsCosmosGovV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDepositsCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.func.ts) |
| Hook | `useGetDepositsCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.react.ts) |
| Request | `QueryDepositsRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Response | `QueryDepositsResponse` | [View source ↗](cosmos/gov/v1/query.ts) |

---

**TallyResult**

TallyResult queries the tally of a proposal vote.

```ts
import { getTallyResultCosmosGovV1 } from 'customchain-js/cosmos/bundle'
import { useGetTallyResultCosmosGovV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTallyResultCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.func.ts) |
| Hook | `useGetTallyResultCosmosGovV1` | [View source ↗](cosmos/gov/v1/query.rpc.react.ts) |
| Request | `QueryTallyResultRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Response | `QueryTallyResultResponse` | [View source ↗](cosmos/gov/v1/query.ts) |

### Transaction Methods

**SubmitProposal**

SubmitProposal defines a method to create new proposal given a content.

```ts
import { submitProposalCosmosGovV1 } from 'customchain-js/cosmos/bundle'
import { useSubmitProposalCosmosGovV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `submitProposalCosmosGovV1` | [View source ↗](cosmos/gov/v1/tx.rpc.func.ts) |
| Hook | `useSubmitProposalCosmosGovV1` | [View source ↗](cosmos/gov/v1/tx.rpc.react.ts) |
| Request | `MsgSubmitProposal` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Response | `MsgSubmitProposalResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |

---

**ExecLegacyContent**

ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal to execute a legacy content-based proposal.

```ts
import { execLegacyContent } from 'customchain-js/cosmos/gov/v1/tx.rpc.func'
import { useExecLegacyContent } from 'customchain-js/cosmos/gov/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `execLegacyContent` | [View source ↗](cosmos/gov/v1/tx.rpc.func.ts) |
| Hook | `useExecLegacyContent` | [View source ↗](cosmos/gov/v1/tx.rpc.react.ts) |
| Request | `MsgExecLegacyContent` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Response | `MsgExecLegacyContentResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |

---

**Vote**

Vote defines a method to add a vote on a specific proposal.

```ts
import { voteCosmosGovV1 } from 'customchain-js/cosmos/bundle'
import { useVoteCosmosGovV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `voteCosmosGovV1` | [View source ↗](cosmos/gov/v1/tx.rpc.func.ts) |
| Hook | `useVoteCosmosGovV1` | [View source ↗](cosmos/gov/v1/tx.rpc.react.ts) |
| Request | `MsgVote` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Response | `MsgVoteResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |

---

**VoteWeighted**

VoteWeighted defines a method to add a weighted vote on a specific proposal.

```ts
import { voteWeightedCosmosGovV1 } from 'customchain-js/cosmos/bundle'
import { useVoteWeightedCosmosGovV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `voteWeightedCosmosGovV1` | [View source ↗](cosmos/gov/v1/tx.rpc.func.ts) |
| Hook | `useVoteWeightedCosmosGovV1` | [View source ↗](cosmos/gov/v1/tx.rpc.react.ts) |
| Request | `MsgVoteWeighted` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Response | `MsgVoteWeightedResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |

---

**Deposit**

Deposit defines a method to add deposit on a specific proposal.

```ts
import { depositCosmosGovV1 } from 'customchain-js/cosmos/bundle'
import { useDepositCosmosGovV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `depositCosmosGovV1` | [View source ↗](cosmos/gov/v1/tx.rpc.func.ts) |
| Hook | `useDepositCosmosGovV1` | [View source ↗](cosmos/gov/v1/tx.rpc.react.ts) |
| Request | `MsgDeposit` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Response | `MsgDepositResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |


## cosmos.gov.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `Deposit` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `DepositParams` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MsgDeposit` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgDepositResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgSubmitProposal` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgSubmitProposalResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgVote` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgVoteResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgVoteWeighted` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgVoteWeightedResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `Proposal` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `ProposalStatus` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `QueryDepositRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryDepositResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryDepositsRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryDepositsResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryProposalRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryProposalResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryProposalsRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryProposalsResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryTallyResultRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryTallyResultResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryVoteRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryVoteResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryVotesRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryVotesResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `TallyParams` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `TallyResult` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `TextProposal` | [View source ↗](cosmos/gov/v1beta1/gov.ts) |
| Type | `Vote` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `VoteOption` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `VotingParams` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `WeightedVoteOption` | [View source ↗](cosmos/gov/v1/gov.ts) |

### Query Methods

**Proposal**

Proposal queries proposal details based on ProposalID.

```ts
import { getProposalCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetProposalCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getProposalCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.func.ts) |
| Hook | `useGetProposalCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.react.ts) |
| Request | `QueryProposalRequest` | [View source ↗](cosmos/gov/v1beta1/query.ts) |
| Response | `QueryProposalResponse` | [View source ↗](cosmos/gov/v1beta1/query.ts) |

---

**Proposals**

Proposals queries all proposals based on given status.

```ts
import { getProposalsCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetProposalsCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getProposalsCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.func.ts) |
| Hook | `useGetProposalsCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.react.ts) |
| Request | `QueryProposalsRequest` | [View source ↗](cosmos/gov/v1beta1/query.ts) |
| Response | `QueryProposalsResponse` | [View source ↗](cosmos/gov/v1beta1/query.ts) |

---

**Vote**

Vote queries voted information based on proposalID, voterAddr.

```ts
import { getVoteCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetVoteCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getVoteCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.func.ts) |
| Hook | `useGetVoteCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.react.ts) |
| Request | `QueryVoteRequest` | [View source ↗](cosmos/gov/v1beta1/query.ts) |
| Response | `QueryVoteResponse` | [View source ↗](cosmos/gov/v1beta1/query.ts) |

---

**Votes**

Votes queries votes of a given proposal.

```ts
import { getVotesCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetVotesCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getVotesCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.func.ts) |
| Hook | `useGetVotesCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.react.ts) |
| Request | `QueryVotesRequest` | [View source ↗](cosmos/gov/v1beta1/query.ts) |
| Response | `QueryVotesResponse` | [View source ↗](cosmos/gov/v1beta1/query.ts) |

---

**Params**

Params queries all parameters of the gov module.

```ts
import { getCosmosGovV1beta1Params } from 'customchain-js/cosmos/gov/v1beta1/query.rpc.func'
import { useGetCosmosGovV1beta1Params } from 'customchain-js/cosmos/gov/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCosmosGovV1beta1Params` | [View source ↗](cosmos/gov/v1beta1/query.rpc.func.ts) |
| Hook | `useGetCosmosGovV1beta1Params` | [View source ↗](cosmos/gov/v1beta1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](cosmos/gov/v1beta1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](cosmos/gov/v1beta1/query.ts) |

---

**Deposit**

Deposit queries single deposit information based proposalID, depositAddr.

```ts
import { getDepositCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetDepositCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDepositCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDepositCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.react.ts) |
| Request | `QueryDepositRequest` | [View source ↗](cosmos/gov/v1beta1/query.ts) |
| Response | `QueryDepositResponse` | [View source ↗](cosmos/gov/v1beta1/query.ts) |

---

**Deposits**

Deposits queries all deposits of a single proposal.

```ts
import { getDepositsCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetDepositsCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDepositsCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDepositsCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.react.ts) |
| Request | `QueryDepositsRequest` | [View source ↗](cosmos/gov/v1beta1/query.ts) |
| Response | `QueryDepositsResponse` | [View source ↗](cosmos/gov/v1beta1/query.ts) |

---

**TallyResult**

TallyResult queries the tally of a proposal vote.

```ts
import { getTallyResultCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetTallyResultCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTallyResultCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.func.ts) |
| Hook | `useGetTallyResultCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/query.rpc.react.ts) |
| Request | `QueryTallyResultRequest` | [View source ↗](cosmos/gov/v1beta1/query.ts) |
| Response | `QueryTallyResultResponse` | [View source ↗](cosmos/gov/v1beta1/query.ts) |

### Transaction Methods

**SubmitProposal**

SubmitProposal defines a method to create new proposal given a content.

```ts
import { submitProposalCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
import { useSubmitProposalCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `submitProposalCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/tx.rpc.func.ts) |
| Hook | `useSubmitProposalCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/tx.rpc.react.ts) |
| Request | `MsgSubmitProposal` | [View source ↗](cosmos/gov/v1beta1/tx.ts) |
| Response | `MsgSubmitProposalResponse` | [View source ↗](cosmos/gov/v1beta1/tx.ts) |

---

**Vote**

Vote defines a method to add a vote on a specific proposal.

```ts
import { voteCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
import { useVoteCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `voteCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/tx.rpc.func.ts) |
| Hook | `useVoteCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/tx.rpc.react.ts) |
| Request | `MsgVote` | [View source ↗](cosmos/gov/v1beta1/tx.ts) |
| Response | `MsgVoteResponse` | [View source ↗](cosmos/gov/v1beta1/tx.ts) |

---

**VoteWeighted**

VoteWeighted defines a method to add a weighted vote on a specific proposal. Since: cosmos-sdk 0.43

```ts
import { voteWeightedCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
import { useVoteWeightedCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `voteWeightedCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/tx.rpc.func.ts) |
| Hook | `useVoteWeightedCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/tx.rpc.react.ts) |
| Request | `MsgVoteWeighted` | [View source ↗](cosmos/gov/v1beta1/tx.ts) |
| Response | `MsgVoteWeightedResponse` | [View source ↗](cosmos/gov/v1beta1/tx.ts) |

---

**Deposit**

Deposit defines a method to add deposit on a specific proposal.

```ts
import { depositCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
import { useDepositCosmosGovV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `depositCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/tx.rpc.func.ts) |
| Hook | `useDepositCosmosGovV1beta1` | [View source ↗](cosmos/gov/v1beta1/tx.rpc.react.ts) |
| Request | `MsgDeposit` | [View source ↗](cosmos/gov/v1beta1/tx.ts) |
| Response | `MsgDepositResponse` | [View source ↗](cosmos/gov/v1beta1/tx.ts) |


## cosmos.group.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `DecisionPolicyWindows` | [View source ↗](cosmos/group/v1/types.ts) |
| Type | `EventCreateGroup` | [View source ↗](cosmos/group/v1/events.ts) |
| Type | `EventCreateGroupPolicy` | [View source ↗](cosmos/group/v1/events.ts) |
| Type | `EventExec` | [View source ↗](cosmos/group/v1/events.ts) |
| Type | `EventLeaveGroup` | [View source ↗](cosmos/group/v1/events.ts) |
| Type | `EventSubmitProposal` | [View source ↗](cosmos/group/v1/events.ts) |
| Type | `EventUpdateGroup` | [View source ↗](cosmos/group/v1/events.ts) |
| Type | `EventUpdateGroupPolicy` | [View source ↗](cosmos/group/v1/events.ts) |
| Type | `EventVote` | [View source ↗](cosmos/group/v1/events.ts) |
| Type | `EventWithdrawProposal` | [View source ↗](cosmos/group/v1/events.ts) |
| Type | `Exec` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `GroupInfo` | [View source ↗](cosmos/group/v1/types.ts) |
| Type | `GroupMember` | [View source ↗](cosmos/group/v1/types.ts) |
| Type | `GroupPolicyInfo` | [View source ↗](cosmos/group/v1/types.ts) |
| Type | `Member` | [View source ↗](cosmos/group/v1/types.ts) |
| Type | `Members` | [View source ↗](cosmos/group/v1/types.ts) |
| Type | `MsgCreateGroup` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgCreateGroupPolicy` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgCreateGroupPolicyResponse` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgCreateGroupResponse` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgCreateGroupWithPolicy` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgCreateGroupWithPolicyResponse` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgExec` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |
| Type | `MsgExecResponse` | [View source ↗](cosmos/authz/v1beta1/tx.ts) |
| Type | `MsgLeaveGroup` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgLeaveGroupResponse` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgSubmitProposal` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgSubmitProposalResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgUpdateGroupAdmin` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgUpdateGroupAdminResponse` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgUpdateGroupMembers` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgUpdateGroupMembersResponse` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgUpdateGroupMetadata` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgUpdateGroupMetadataResponse` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgUpdateGroupPolicyAdmin` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgUpdateGroupPolicyAdminResponse` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgUpdateGroupPolicyDecisionPolicy` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgUpdateGroupPolicyDecisionPolicyResponse` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgUpdateGroupPolicyMetadata` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgUpdateGroupPolicyMetadataResponse` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgVote` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgVoteResponse` | [View source ↗](cosmos/gov/v1/tx.ts) |
| Type | `MsgWithdrawProposal` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `MsgWithdrawProposalResponse` | [View source ↗](cosmos/group/v1/tx.ts) |
| Type | `PercentageDecisionPolicy` | [View source ↗](cosmos/group/v1/types.ts) |
| Type | `Proposal` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `ProposalExecutorResult` | [View source ↗](cosmos/group/v1/types.ts) |
| Type | `ProposalResult` | [View source ↗](cosmos/group/v1/types.ts) |
| Type | `ProposalStatus` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `QueryGroupInfoRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryGroupInfoResponse` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryGroupMembersRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryGroupMembersResponse` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryGroupPoliciesByAdminRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryGroupPoliciesByAdminResponse` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryGroupPoliciesByGroupRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryGroupPoliciesByGroupResponse` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryGroupPolicyInfoRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryGroupPolicyInfoResponse` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryGroupsByAdminRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryGroupsByAdminResponse` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryGroupsByMemberRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryGroupsByMemberResponse` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryProposalRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryProposalResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryProposalsByGroupPolicyRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryProposalsByGroupPolicyResponse` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryTallyResultRequest` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryTallyResultResponse` | [View source ↗](cosmos/gov/v1/query.ts) |
| Type | `QueryVoteByProposalVoterRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryVoteByProposalVoterResponse` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryVotesByProposalRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryVotesByProposalResponse` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryVotesByVoterRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `QueryVotesByVoterResponse` | [View source ↗](cosmos/group/v1/query.ts) |
| Type | `TallyResult` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `ThresholdDecisionPolicy` | [View source ↗](cosmos/group/v1/types.ts) |
| Type | `Vote` | [View source ↗](cosmos/gov/v1/gov.ts) |
| Type | `VoteOption` | [View source ↗](cosmos/gov/v1/gov.ts) |

### Query Methods

**GroupInfo**

GroupInfo queries group info based on group id.

```ts
import { getGroupInfo } from 'customchain-js/cosmos/group/v1/query.rpc.func'
import { useGetGroupInfo } from 'customchain-js/cosmos/group/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGroupInfo` | [View source ↗](cosmos/group/v1/query.rpc.func.ts) |
| Hook | `useGetGroupInfo` | [View source ↗](cosmos/group/v1/query.rpc.react.ts) |
| Request | `QueryGroupInfoRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Response | `QueryGroupInfoResponse` | [View source ↗](cosmos/group/v1/query.ts) |

---

**GroupPolicyInfo**

GroupPolicyInfo queries group policy info based on account address of group policy.

```ts
import { getGroupPolicyInfo } from 'customchain-js/cosmos/group/v1/query.rpc.func'
import { useGetGroupPolicyInfo } from 'customchain-js/cosmos/group/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGroupPolicyInfo` | [View source ↗](cosmos/group/v1/query.rpc.func.ts) |
| Hook | `useGetGroupPolicyInfo` | [View source ↗](cosmos/group/v1/query.rpc.react.ts) |
| Request | `QueryGroupPolicyInfoRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Response | `QueryGroupPolicyInfoResponse` | [View source ↗](cosmos/group/v1/query.ts) |

---

**GroupMembers**

GroupMembers queries members of a group

```ts
import { getGroupMembers } from 'customchain-js/cosmos/group/v1/query.rpc.func'
import { useGetGroupMembers } from 'customchain-js/cosmos/group/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGroupMembers` | [View source ↗](cosmos/group/v1/query.rpc.func.ts) |
| Hook | `useGetGroupMembers` | [View source ↗](cosmos/group/v1/query.rpc.react.ts) |
| Request | `QueryGroupMembersRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Response | `QueryGroupMembersResponse` | [View source ↗](cosmos/group/v1/query.ts) |

---

**GroupsByAdmin**

GroupsByAdmin queries groups by admin address.

```ts
import { getGroupsByAdmin } from 'customchain-js/cosmos/group/v1/query.rpc.func'
import { useGetGroupsByAdmin } from 'customchain-js/cosmos/group/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGroupsByAdmin` | [View source ↗](cosmos/group/v1/query.rpc.func.ts) |
| Hook | `useGetGroupsByAdmin` | [View source ↗](cosmos/group/v1/query.rpc.react.ts) |
| Request | `QueryGroupsByAdminRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Response | `QueryGroupsByAdminResponse` | [View source ↗](cosmos/group/v1/query.ts) |

---

**GroupPoliciesByGroup**

GroupPoliciesByGroup queries group policies by group id.

```ts
import { getGroupPoliciesByGroup } from 'customchain-js/cosmos/group/v1/query.rpc.func'
import { useGetGroupPoliciesByGroup } from 'customchain-js/cosmos/group/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGroupPoliciesByGroup` | [View source ↗](cosmos/group/v1/query.rpc.func.ts) |
| Hook | `useGetGroupPoliciesByGroup` | [View source ↗](cosmos/group/v1/query.rpc.react.ts) |
| Request | `QueryGroupPoliciesByGroupRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Response | `QueryGroupPoliciesByGroupResponse` | [View source ↗](cosmos/group/v1/query.ts) |

---

**GroupPoliciesByAdmin**

GroupsByAdmin queries group policies by admin address.

```ts
import { getGroupPoliciesByAdmin } from 'customchain-js/cosmos/group/v1/query.rpc.func'
import { useGetGroupPoliciesByAdmin } from 'customchain-js/cosmos/group/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGroupPoliciesByAdmin` | [View source ↗](cosmos/group/v1/query.rpc.func.ts) |
| Hook | `useGetGroupPoliciesByAdmin` | [View source ↗](cosmos/group/v1/query.rpc.react.ts) |
| Request | `QueryGroupPoliciesByAdminRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Response | `QueryGroupPoliciesByAdminResponse` | [View source ↗](cosmos/group/v1/query.ts) |

---

**Proposal**

Proposal queries a proposal based on proposal id.

```ts
import { getProposalCosmosGroupV1 } from 'customchain-js/cosmos/bundle'
import { useGetProposalCosmosGroupV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getProposalCosmosGroupV1` | [View source ↗](cosmos/group/v1/query.rpc.func.ts) |
| Hook | `useGetProposalCosmosGroupV1` | [View source ↗](cosmos/group/v1/query.rpc.react.ts) |
| Request | `QueryProposalRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Response | `QueryProposalResponse` | [View source ↗](cosmos/group/v1/query.ts) |

---

**ProposalsByGroupPolicy**

ProposalsByGroupPolicy queries proposals based on account address of group policy.

```ts
import { getProposalsByGroupPolicy } from 'customchain-js/cosmos/group/v1/query.rpc.func'
import { useGetProposalsByGroupPolicy } from 'customchain-js/cosmos/group/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getProposalsByGroupPolicy` | [View source ↗](cosmos/group/v1/query.rpc.func.ts) |
| Hook | `useGetProposalsByGroupPolicy` | [View source ↗](cosmos/group/v1/query.rpc.react.ts) |
| Request | `QueryProposalsByGroupPolicyRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Response | `QueryProposalsByGroupPolicyResponse` | [View source ↗](cosmos/group/v1/query.ts) |

---

**VoteByProposalVoter**

VoteByProposalVoter queries a vote by proposal id and voter.

```ts
import { getVoteByProposalVoter } from 'customchain-js/cosmos/group/v1/query.rpc.func'
import { useGetVoteByProposalVoter } from 'customchain-js/cosmos/group/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getVoteByProposalVoter` | [View source ↗](cosmos/group/v1/query.rpc.func.ts) |
| Hook | `useGetVoteByProposalVoter` | [View source ↗](cosmos/group/v1/query.rpc.react.ts) |
| Request | `QueryVoteByProposalVoterRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Response | `QueryVoteByProposalVoterResponse` | [View source ↗](cosmos/group/v1/query.ts) |

---

**VotesByProposal**

VotesByProposal queries a vote by proposal.

```ts
import { getVotesByProposal } from 'customchain-js/cosmos/group/v1/query.rpc.func'
import { useGetVotesByProposal } from 'customchain-js/cosmos/group/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getVotesByProposal` | [View source ↗](cosmos/group/v1/query.rpc.func.ts) |
| Hook | `useGetVotesByProposal` | [View source ↗](cosmos/group/v1/query.rpc.react.ts) |
| Request | `QueryVotesByProposalRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Response | `QueryVotesByProposalResponse` | [View source ↗](cosmos/group/v1/query.ts) |

---

**VotesByVoter**

VotesByVoter queries a vote by voter.

```ts
import { getVotesByVoter } from 'customchain-js/cosmos/group/v1/query.rpc.func'
import { useGetVotesByVoter } from 'customchain-js/cosmos/group/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getVotesByVoter` | [View source ↗](cosmos/group/v1/query.rpc.func.ts) |
| Hook | `useGetVotesByVoter` | [View source ↗](cosmos/group/v1/query.rpc.react.ts) |
| Request | `QueryVotesByVoterRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Response | `QueryVotesByVoterResponse` | [View source ↗](cosmos/group/v1/query.ts) |

---

**GroupsByMember**

GroupsByMember queries groups by member address.

```ts
import { getGroupsByMember } from 'customchain-js/cosmos/group/v1/query.rpc.func'
import { useGetGroupsByMember } from 'customchain-js/cosmos/group/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGroupsByMember` | [View source ↗](cosmos/group/v1/query.rpc.func.ts) |
| Hook | `useGetGroupsByMember` | [View source ↗](cosmos/group/v1/query.rpc.react.ts) |
| Request | `QueryGroupsByMemberRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Response | `QueryGroupsByMemberResponse` | [View source ↗](cosmos/group/v1/query.ts) |

---

**TallyResult**

TallyResult queries the tally of a proposal votes.

```ts
import { getTallyResultCosmosGroupV1 } from 'customchain-js/cosmos/bundle'
import { useGetTallyResultCosmosGroupV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTallyResultCosmosGroupV1` | [View source ↗](cosmos/group/v1/query.rpc.func.ts) |
| Hook | `useGetTallyResultCosmosGroupV1` | [View source ↗](cosmos/group/v1/query.rpc.react.ts) |
| Request | `QueryTallyResultRequest` | [View source ↗](cosmos/group/v1/query.ts) |
| Response | `QueryTallyResultResponse` | [View source ↗](cosmos/group/v1/query.ts) |

### Transaction Methods

**CreateGroup**

CreateGroup creates a new group with an admin account address, a list of members and some optional metadata.

```ts
import { createGroup } from 'customchain-js/cosmos/group/v1/tx.rpc.func'
import { useCreateGroup } from 'customchain-js/cosmos/group/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createGroup` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useCreateGroup` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgCreateGroup` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgCreateGroupResponse` | [View source ↗](cosmos/group/v1/tx.ts) |

---

**UpdateGroupMembers**

UpdateGroupMembers updates the group members with given group id and admin address.

```ts
import { updateGroupMembers } from 'customchain-js/cosmos/group/v1/tx.rpc.func'
import { useUpdateGroupMembers } from 'customchain-js/cosmos/group/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `updateGroupMembers` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useUpdateGroupMembers` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgUpdateGroupMembers` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgUpdateGroupMembersResponse` | [View source ↗](cosmos/group/v1/tx.ts) |

---

**UpdateGroupAdmin**

UpdateGroupAdmin updates the group admin with given group id and previous admin address.

```ts
import { updateGroupAdmin } from 'customchain-js/cosmos/group/v1/tx.rpc.func'
import { useUpdateGroupAdmin } from 'customchain-js/cosmos/group/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `updateGroupAdmin` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useUpdateGroupAdmin` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgUpdateGroupAdmin` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgUpdateGroupAdminResponse` | [View source ↗](cosmos/group/v1/tx.ts) |

---

**UpdateGroupMetadata**

UpdateGroupMetadata updates the group metadata with given group id and admin address.

```ts
import { updateGroupMetadata } from 'customchain-js/cosmos/group/v1/tx.rpc.func'
import { useUpdateGroupMetadata } from 'customchain-js/cosmos/group/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `updateGroupMetadata` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useUpdateGroupMetadata` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgUpdateGroupMetadata` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgUpdateGroupMetadataResponse` | [View source ↗](cosmos/group/v1/tx.ts) |

---

**CreateGroupPolicy**

CreateGroupPolicy creates a new group policy using given DecisionPolicy.

```ts
import { createGroupPolicy } from 'customchain-js/cosmos/group/v1/tx.rpc.func'
import { useCreateGroupPolicy } from 'customchain-js/cosmos/group/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createGroupPolicy` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useCreateGroupPolicy` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgCreateGroupPolicy` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgCreateGroupPolicyResponse` | [View source ↗](cosmos/group/v1/tx.ts) |

---

**CreateGroupWithPolicy**

CreateGroupWithPolicy creates a new group with policy.

```ts
import { createGroupWithPolicy } from 'customchain-js/cosmos/group/v1/tx.rpc.func'
import { useCreateGroupWithPolicy } from 'customchain-js/cosmos/group/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createGroupWithPolicy` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useCreateGroupWithPolicy` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgCreateGroupWithPolicy` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgCreateGroupWithPolicyResponse` | [View source ↗](cosmos/group/v1/tx.ts) |

---

**UpdateGroupPolicyAdmin**

UpdateGroupPolicyAdmin updates a group policy admin.

```ts
import { updateGroupPolicyAdmin } from 'customchain-js/cosmos/group/v1/tx.rpc.func'
import { useUpdateGroupPolicyAdmin } from 'customchain-js/cosmos/group/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `updateGroupPolicyAdmin` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useUpdateGroupPolicyAdmin` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgUpdateGroupPolicyAdmin` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgUpdateGroupPolicyAdminResponse` | [View source ↗](cosmos/group/v1/tx.ts) |

---

**UpdateGroupPolicyDecisionPolicy**

UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated.

```ts
import { updateGroupPolicyDecisionPolicy } from 'customchain-js/cosmos/group/v1/tx.rpc.func'
import { useUpdateGroupPolicyDecisionPolicy } from 'customchain-js/cosmos/group/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `updateGroupPolicyDecisionPolicy` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useUpdateGroupPolicyDecisionPolicy` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgUpdateGroupPolicyDecisionPolicy` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgUpdateGroupPolicyDecisionPolicyResponse` | [View source ↗](cosmos/group/v1/tx.ts) |

---

**UpdateGroupPolicyMetadata**

UpdateGroupPolicyMetadata updates a group policy metadata.

```ts
import { updateGroupPolicyMetadata } from 'customchain-js/cosmos/group/v1/tx.rpc.func'
import { useUpdateGroupPolicyMetadata } from 'customchain-js/cosmos/group/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `updateGroupPolicyMetadata` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useUpdateGroupPolicyMetadata` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgUpdateGroupPolicyMetadata` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgUpdateGroupPolicyMetadataResponse` | [View source ↗](cosmos/group/v1/tx.ts) |

---

**SubmitProposal**

SubmitProposal submits a new proposal.

```ts
import { submitProposalCosmosGroupV1 } from 'customchain-js/cosmos/bundle'
import { useSubmitProposalCosmosGroupV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `submitProposalCosmosGroupV1` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useSubmitProposalCosmosGroupV1` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgSubmitProposal` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgSubmitProposalResponse` | [View source ↗](cosmos/group/v1/tx.ts) |

---

**WithdrawProposal**

WithdrawProposal aborts a proposal.

```ts
import { withdrawProposal } from 'customchain-js/cosmos/group/v1/tx.rpc.func'
import { useWithdrawProposal } from 'customchain-js/cosmos/group/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `withdrawProposal` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useWithdrawProposal` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgWithdrawProposal` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgWithdrawProposalResponse` | [View source ↗](cosmos/group/v1/tx.ts) |

---

**Vote**

Vote allows a voter to vote on a proposal.

```ts
import { voteCosmosGroupV1 } from 'customchain-js/cosmos/bundle'
import { useVoteCosmosGroupV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `voteCosmosGroupV1` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useVoteCosmosGroupV1` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgVote` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgVoteResponse` | [View source ↗](cosmos/group/v1/tx.ts) |

---

**Exec**

Exec executes a proposal.

```ts
import { execCosmosGroupV1 } from 'customchain-js/cosmos/bundle'
import { useExecCosmosGroupV1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `execCosmosGroupV1` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useExecCosmosGroupV1` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgExec` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgExecResponse` | [View source ↗](cosmos/group/v1/tx.ts) |

---

**LeaveGroup**

LeaveGroup allows a group member to leave the group.

```ts
import { leaveGroup } from 'customchain-js/cosmos/group/v1/tx.rpc.func'
import { useLeaveGroup } from 'customchain-js/cosmos/group/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `leaveGroup` | [View source ↗](cosmos/group/v1/tx.rpc.func.ts) |
| Hook | `useLeaveGroup` | [View source ↗](cosmos/group/v1/tx.rpc.react.ts) |
| Request | `MsgLeaveGroup` | [View source ↗](cosmos/group/v1/tx.ts) |
| Response | `MsgLeaveGroupResponse` | [View source ↗](cosmos/group/v1/tx.ts) |


## cosmos.mint.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `CosmosMintV1beta1Params` | [View source ↗](cosmos/mint/v1beta1/mint.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `Minter` | [View source ↗](cosmos/mint/v1beta1/mint.ts) |
| Type | `QueryAnnualProvisionsRequest` | [View source ↗](cosmos/mint/v1beta1/query.ts) |
| Type | `QueryAnnualProvisionsResponse` | [View source ↗](cosmos/mint/v1beta1/query.ts) |
| Type | `QueryInflationRequest` | [View source ↗](cosmos/mint/v1beta1/query.ts) |
| Type | `QueryInflationResponse` | [View source ↗](cosmos/mint/v1beta1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |

### Query Methods

**Params**

Params returns the total set of minting parameters.

```ts
import { getCosmosMintV1beta1Params } from 'customchain-js/cosmos/mint/v1beta1/query.rpc.func'
import { useGetCosmosMintV1beta1Params } from 'customchain-js/cosmos/mint/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCosmosMintV1beta1Params` | [View source ↗](cosmos/mint/v1beta1/query.rpc.func.ts) |
| Hook | `useGetCosmosMintV1beta1Params` | [View source ↗](cosmos/mint/v1beta1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](cosmos/mint/v1beta1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](cosmos/mint/v1beta1/query.ts) |

---

**Inflation**

Inflation returns the current minting inflation value.

```ts
import { getInflation } from 'customchain-js/cosmos/mint/v1beta1/query.rpc.func'
import { useGetInflation } from 'customchain-js/cosmos/mint/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getInflation` | [View source ↗](cosmos/mint/v1beta1/query.rpc.func.ts) |
| Hook | `useGetInflation` | [View source ↗](cosmos/mint/v1beta1/query.rpc.react.ts) |
| Request | `QueryInflationRequest` | [View source ↗](cosmos/mint/v1beta1/query.ts) |
| Response | `QueryInflationResponse` | [View source ↗](cosmos/mint/v1beta1/query.ts) |

---

**AnnualProvisions**

AnnualProvisions current minting annual provisions value.

```ts
import { getAnnualProvisions } from 'customchain-js/cosmos/mint/v1beta1/query.rpc.func'
import { useGetAnnualProvisions } from 'customchain-js/cosmos/mint/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAnnualProvisions` | [View source ↗](cosmos/mint/v1beta1/query.rpc.func.ts) |
| Hook | `useGetAnnualProvisions` | [View source ↗](cosmos/mint/v1beta1/query.rpc.react.ts) |
| Request | `QueryAnnualProvisionsRequest` | [View source ↗](cosmos/mint/v1beta1/query.ts) |
| Response | `QueryAnnualProvisionsResponse` | [View source ↗](cosmos/mint/v1beta1/query.ts) |


## cosmos.nft.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `Class` | [View source ↗](cosmos/nft/v1beta1/nft.ts) |
| Type | `Entry` | [View source ↗](cosmos/nft/v1beta1/genesis.ts) |
| Type | `EventBurn` | [View source ↗](cosmos/nft/v1beta1/event.ts) |
| Type | `EventMint` | [View source ↗](cosmos/nft/v1beta1/event.ts) |
| Type | `EventSend` | [View source ↗](cosmos/nft/v1beta1/event.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MsgSend` | [View source ↗](cosmos/bank/v1beta1/tx.ts) |
| Type | `MsgSendResponse` | [View source ↗](cosmos/bank/v1beta1/tx.ts) |
| Type | `NFT` | [View source ↗](cosmos/nft/v1beta1/nft.ts) |
| Type | `QueryBalanceRequest` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryBalanceResponse` | [View source ↗](cosmos/bank/v1beta1/query.ts) |
| Type | `QueryClassesRequest` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Type | `QueryClassesResponse` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Type | `QueryClassRequest` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Type | `QueryClassResponse` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Type | `QueryNFTRequest` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Type | `QueryNFTResponse` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Type | `QueryNFTsRequest` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Type | `QueryNFTsResponse` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Type | `QueryOwnerRequest` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Type | `QueryOwnerResponse` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Type | `QuerySupplyRequest` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Type | `QuerySupplyResponse` | [View source ↗](cosmos/nft/v1beta1/query.ts) |

### Query Methods

**Balance**

Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721

```ts
import { getBalanceCosmosNftV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetBalanceCosmosNftV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getBalanceCosmosNftV1beta1` | [View source ↗](cosmos/nft/v1beta1/query.rpc.func.ts) |
| Hook | `useGetBalanceCosmosNftV1beta1` | [View source ↗](cosmos/nft/v1beta1/query.rpc.react.ts) |
| Request | `QueryBalanceRequest` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Response | `QueryBalanceResponse` | [View source ↗](cosmos/nft/v1beta1/query.ts) |

---

**Owner**

Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721

```ts
import { getOwner } from 'customchain-js/cosmos/nft/v1beta1/query.rpc.func'
import { useGetOwner } from 'customchain-js/cosmos/nft/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getOwner` | [View source ↗](cosmos/nft/v1beta1/query.rpc.func.ts) |
| Hook | `useGetOwner` | [View source ↗](cosmos/nft/v1beta1/query.rpc.react.ts) |
| Request | `QueryOwnerRequest` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Response | `QueryOwnerResponse` | [View source ↗](cosmos/nft/v1beta1/query.ts) |

---

**Supply**

Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.

```ts
import { getSupply } from 'customchain-js/cosmos/nft/v1beta1/query.rpc.func'
import { useGetSupply } from 'customchain-js/cosmos/nft/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSupply` | [View source ↗](cosmos/nft/v1beta1/query.rpc.func.ts) |
| Hook | `useGetSupply` | [View source ↗](cosmos/nft/v1beta1/query.rpc.react.ts) |
| Request | `QuerySupplyRequest` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Response | `QuerySupplyResponse` | [View source ↗](cosmos/nft/v1beta1/query.ts) |

---

**NFTs**

NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in ERC721Enumerable

```ts
import { getNFTs } from 'customchain-js/cosmos/nft/v1beta1/query.rpc.func'
import { useGetNFTs } from 'customchain-js/cosmos/nft/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getNFTs` | [View source ↗](cosmos/nft/v1beta1/query.rpc.func.ts) |
| Hook | `useGetNFTs` | [View source ↗](cosmos/nft/v1beta1/query.rpc.react.ts) |
| Request | `QueryNFTsRequest` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Response | `QueryNFTsResponse` | [View source ↗](cosmos/nft/v1beta1/query.ts) |

---

**NFT**

NFT queries an NFT based on its class and id.

```ts
import { getNFT } from 'customchain-js/cosmos/nft/v1beta1/query.rpc.func'
import { useGetNFT } from 'customchain-js/cosmos/nft/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getNFT` | [View source ↗](cosmos/nft/v1beta1/query.rpc.func.ts) |
| Hook | `useGetNFT` | [View source ↗](cosmos/nft/v1beta1/query.rpc.react.ts) |
| Request | `QueryNFTRequest` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Response | `QueryNFTResponse` | [View source ↗](cosmos/nft/v1beta1/query.ts) |

---

**Class**

Class queries an NFT class based on its id

```ts
import { getClass } from 'customchain-js/cosmos/nft/v1beta1/query.rpc.func'
import { useGetClass } from 'customchain-js/cosmos/nft/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getClass` | [View source ↗](cosmos/nft/v1beta1/query.rpc.func.ts) |
| Hook | `useGetClass` | [View source ↗](cosmos/nft/v1beta1/query.rpc.react.ts) |
| Request | `QueryClassRequest` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Response | `QueryClassResponse` | [View source ↗](cosmos/nft/v1beta1/query.ts) |

---

**Classes**

Classes queries all NFT classes

```ts
import { getClasses } from 'customchain-js/cosmos/nft/v1beta1/query.rpc.func'
import { useGetClasses } from 'customchain-js/cosmos/nft/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getClasses` | [View source ↗](cosmos/nft/v1beta1/query.rpc.func.ts) |
| Hook | `useGetClasses` | [View source ↗](cosmos/nft/v1beta1/query.rpc.react.ts) |
| Request | `QueryClassesRequest` | [View source ↗](cosmos/nft/v1beta1/query.ts) |
| Response | `QueryClassesResponse` | [View source ↗](cosmos/nft/v1beta1/query.ts) |

### Transaction Methods

**Send**

Send defines a method to send a nft from one account to another account.

```ts
import { sendCosmosNftV1beta1 } from 'customchain-js/cosmos/bundle'
import { useSendCosmosNftV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `sendCosmosNftV1beta1` | [View source ↗](cosmos/nft/v1beta1/tx.rpc.func.ts) |
| Hook | `useSendCosmosNftV1beta1` | [View source ↗](cosmos/nft/v1beta1/tx.rpc.react.ts) |
| Request | `MsgSend` | [View source ↗](cosmos/nft/v1beta1/tx.ts) |
| Response | `MsgSendResponse` | [View source ↗](cosmos/nft/v1beta1/tx.ts) |


## cosmos.params.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `ParamChange` | [View source ↗](cosmos/params/v1beta1/params.ts) |
| Type | `ParameterChangeProposal` | [View source ↗](cosmos/params/v1beta1/params.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QuerySubspacesRequest` | [View source ↗](cosmos/params/v1beta1/query.ts) |
| Type | `QuerySubspacesResponse` | [View source ↗](cosmos/params/v1beta1/query.ts) |
| Type | `Subspace` | [View source ↗](cosmos/params/v1beta1/query.ts) |

### Query Methods

**Params**

Params queries a specific parameter of a module, given its subspace and key.

```ts
import { getCosmosParamsV1beta1Params } from 'customchain-js/cosmos/params/v1beta1/query.rpc.func'
import { useGetCosmosParamsV1beta1Params } from 'customchain-js/cosmos/params/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCosmosParamsV1beta1Params` | [View source ↗](cosmos/params/v1beta1/query.rpc.func.ts) |
| Hook | `useGetCosmosParamsV1beta1Params` | [View source ↗](cosmos/params/v1beta1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](cosmos/params/v1beta1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](cosmos/params/v1beta1/query.ts) |

---

**Subspaces**

Subspaces queries for all registered subspaces and all keys for a subspace.

```ts
import { getSubspaces } from 'customchain-js/cosmos/params/v1beta1/query.rpc.func'
import { useGetSubspaces } from 'customchain-js/cosmos/params/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSubspaces` | [View source ↗](cosmos/params/v1beta1/query.rpc.func.ts) |
| Hook | `useGetSubspaces` | [View source ↗](cosmos/params/v1beta1/query.rpc.react.ts) |
| Request | `QuerySubspacesRequest` | [View source ↗](cosmos/params/v1beta1/query.ts) |
| Response | `QuerySubspacesResponse` | [View source ↗](cosmos/params/v1beta1/query.ts) |


## cosmos.slashing.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `CosmosSlashingV1beta1Params` | [View source ↗](cosmos/slashing/v1beta1/slashing.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MissedBlock` | [View source ↗](cosmos/slashing/v1beta1/genesis.ts) |
| Type | `MsgUnjail` | [View source ↗](cosmos/slashing/v1beta1/tx.ts) |
| Type | `MsgUnjailResponse` | [View source ↗](cosmos/slashing/v1beta1/tx.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QuerySigningInfoRequest` | [View source ↗](cosmos/slashing/v1beta1/query.ts) |
| Type | `QuerySigningInfoResponse` | [View source ↗](cosmos/slashing/v1beta1/query.ts) |
| Type | `QuerySigningInfosRequest` | [View source ↗](cosmos/slashing/v1beta1/query.ts) |
| Type | `QuerySigningInfosResponse` | [View source ↗](cosmos/slashing/v1beta1/query.ts) |
| Type | `SigningInfo` | [View source ↗](cosmos/slashing/v1beta1/genesis.ts) |
| Type | `ValidatorMissedBlocks` | [View source ↗](cosmos/slashing/v1beta1/genesis.ts) |
| Type | `ValidatorSigningInfo` | [View source ↗](cosmos/slashing/v1beta1/slashing.ts) |

### Query Methods

**Params**

Params queries the parameters of slashing module

```ts
import { getCosmosSlashingV1beta1Params } from 'customchain-js/cosmos/slashing/v1beta1/query.rpc.func'
import { useGetCosmosSlashingV1beta1Params } from 'customchain-js/cosmos/slashing/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCosmosSlashingV1beta1Params` | [View source ↗](cosmos/slashing/v1beta1/query.rpc.func.ts) |
| Hook | `useGetCosmosSlashingV1beta1Params` | [View source ↗](cosmos/slashing/v1beta1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](cosmos/slashing/v1beta1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](cosmos/slashing/v1beta1/query.ts) |

---

**SigningInfo**

SigningInfo queries the signing info of given cons address

```ts
import { getSigningInfo } from 'customchain-js/cosmos/slashing/v1beta1/query.rpc.func'
import { useGetSigningInfo } from 'customchain-js/cosmos/slashing/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSigningInfo` | [View source ↗](cosmos/slashing/v1beta1/query.rpc.func.ts) |
| Hook | `useGetSigningInfo` | [View source ↗](cosmos/slashing/v1beta1/query.rpc.react.ts) |
| Request | `QuerySigningInfoRequest` | [View source ↗](cosmos/slashing/v1beta1/query.ts) |
| Response | `QuerySigningInfoResponse` | [View source ↗](cosmos/slashing/v1beta1/query.ts) |

---

**SigningInfos**

SigningInfos queries signing info of all validators

```ts
import { getSigningInfos } from 'customchain-js/cosmos/slashing/v1beta1/query.rpc.func'
import { useGetSigningInfos } from 'customchain-js/cosmos/slashing/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSigningInfos` | [View source ↗](cosmos/slashing/v1beta1/query.rpc.func.ts) |
| Hook | `useGetSigningInfos` | [View source ↗](cosmos/slashing/v1beta1/query.rpc.react.ts) |
| Request | `QuerySigningInfosRequest` | [View source ↗](cosmos/slashing/v1beta1/query.ts) |
| Response | `QuerySigningInfosResponse` | [View source ↗](cosmos/slashing/v1beta1/query.ts) |

### Transaction Methods

**Unjail**

Unjail defines a method for unjailing a jailed validator, thus returning them into the bonded validator set, so they can begin receiving provisions and rewards again.

```ts
import { unjail } from 'customchain-js/cosmos/slashing/v1beta1/tx.rpc.func'
import { useUnjail } from 'customchain-js/cosmos/slashing/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `unjail` | [View source ↗](cosmos/slashing/v1beta1/tx.rpc.func.ts) |
| Hook | `useUnjail` | [View source ↗](cosmos/slashing/v1beta1/tx.rpc.react.ts) |
| Request | `MsgUnjail` | [View source ↗](cosmos/slashing/v1beta1/tx.ts) |
| Response | `MsgUnjailResponse` | [View source ↗](cosmos/slashing/v1beta1/tx.ts) |


## cosmos.staking.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `AuthorizationType` | [View source ↗](cosmos/staking/v1beta1/authz.ts) |
| Type | `BondStatus` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `Commission` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `CommissionRates` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `CosmosStakingV1beta1Params` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `Delegation` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `DelegationResponse` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `Description` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `DVPair` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `DVPairs` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `DVVTriplet` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `DVVTriplets` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `HistoricalInfo` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `LastValidatorPower` | [View source ↗](cosmos/staking/v1beta1/genesis.ts) |
| Type | `MsgBeginRedelegate` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Type | `MsgBeginRedelegateResponse` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Type | `MsgCreateValidator` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Type | `MsgCreateValidatorResponse` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Type | `MsgDelegate` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Type | `MsgDelegateResponse` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Type | `MsgEditValidator` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Type | `MsgEditValidatorResponse` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Type | `MsgUndelegate` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Type | `MsgUndelegateResponse` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Type | `Pool` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `QueryDelegationRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryDelegationResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryDelegatorDelegationsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryDelegatorDelegationsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryDelegatorUnbondingDelegationsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryDelegatorUnbondingDelegationsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryDelegatorValidatorRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryDelegatorValidatorResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryDelegatorValidatorsRequest` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryDelegatorValidatorsResponse` | [View source ↗](cosmos/distribution/v1beta1/query.ts) |
| Type | `QueryHistoricalInfoRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryHistoricalInfoResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryPoolRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryPoolResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryRedelegationsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryRedelegationsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryUnbondingDelegationRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryUnbondingDelegationResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryValidatorDelegationsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryValidatorDelegationsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryValidatorRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryValidatorResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryValidatorsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryValidatorsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryValidatorUnbondingDelegationsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryValidatorUnbondingDelegationsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `Redelegation` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `RedelegationEntry` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `RedelegationEntryResponse` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `RedelegationResponse` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `StakeAuthorization` | [View source ↗](cosmos/staking/v1beta1/authz.ts) |
| Type | `UnbondingDelegation` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `UnbondingDelegationEntry` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `ValAddresses` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `Validator` | [View source ↗](cosmos/base/tendermint/v1beta1/query.ts) |

### Query Methods

**Validators**

Validators queries all validators that match the given status.

```ts
import { getValidators } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.func'
import { useGetValidators } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getValidators` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetValidators` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryValidatorsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryValidatorsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

---

**Validator**

Validator queries validator info for given validator address.

```ts
import { getValidator } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.func'
import { useGetValidator } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getValidator` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetValidator` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryValidatorRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryValidatorResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

---

**ValidatorDelegations**

ValidatorDelegations queries delegate info for given validator.

```ts
import { getValidatorDelegations } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.func'
import { useGetValidatorDelegations } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getValidatorDelegations` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetValidatorDelegations` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryValidatorDelegationsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryValidatorDelegationsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

---

**ValidatorUnbondingDelegations**

ValidatorUnbondingDelegations queries unbonding delegations of a validator.

```ts
import { getValidatorUnbondingDelegations } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.func'
import { useGetValidatorUnbondingDelegations } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getValidatorUnbondingDelegations` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetValidatorUnbondingDelegations` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryValidatorUnbondingDelegationsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryValidatorUnbondingDelegationsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

---

**Delegation**

Delegation queries delegate info for given validator delegator pair.

```ts
import { getDelegation } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.func'
import { useGetDelegation } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDelegation` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDelegation` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryDelegationRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryDelegationResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

---

**UnbondingDelegation**

UnbondingDelegation queries unbonding info for given validator delegator pair.

```ts
import { getUnbondingDelegation } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.func'
import { useGetUnbondingDelegation } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getUnbondingDelegation` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetUnbondingDelegation` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryUnbondingDelegationRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryUnbondingDelegationResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

---

**DelegatorDelegations**

DelegatorDelegations queries all delegations of a given delegator address.

```ts
import { getDelegatorDelegations } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.func'
import { useGetDelegatorDelegations } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDelegatorDelegations` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDelegatorDelegations` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryDelegatorDelegationsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryDelegatorDelegationsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

---

**DelegatorUnbondingDelegations**

DelegatorUnbondingDelegations queries all unbonding delegations of a given delegator address.

```ts
import { getDelegatorUnbondingDelegations } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.func'
import { useGetDelegatorUnbondingDelegations } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDelegatorUnbondingDelegations` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDelegatorUnbondingDelegations` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryDelegatorUnbondingDelegationsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryDelegatorUnbondingDelegationsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

---

**Redelegations**

Redelegations queries redelegations of given address.

```ts
import { getRedelegations } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.func'
import { useGetRedelegations } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getRedelegations` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetRedelegations` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryRedelegationsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryRedelegationsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

---

**DelegatorValidators**

DelegatorValidators queries all validators info for given delegator address.

```ts
import { getDelegatorValidatorsCosmosStakingV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetDelegatorValidatorsCosmosStakingV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDelegatorValidatorsCosmosStakingV1beta1` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDelegatorValidatorsCosmosStakingV1beta1` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryDelegatorValidatorsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryDelegatorValidatorsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

---

**DelegatorValidator**

DelegatorValidator queries validator info for given delegator validator pair.

```ts
import { getDelegatorValidator } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.func'
import { useGetDelegatorValidator } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDelegatorValidator` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDelegatorValidator` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryDelegatorValidatorRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryDelegatorValidatorResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

---

**HistoricalInfo**

HistoricalInfo queries the historical info for given height.

```ts
import { getHistoricalInfo } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.func'
import { useGetHistoricalInfo } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getHistoricalInfo` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetHistoricalInfo` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryHistoricalInfoRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryHistoricalInfoResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

---

**Pool**

Pool queries the pool info.

```ts
import { getPoolCosmosStakingV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetPoolCosmosStakingV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPoolCosmosStakingV1beta1` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetPoolCosmosStakingV1beta1` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryPoolRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryPoolResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

---

**Params**

Parameters queries the staking parameters.

```ts
import { getCosmosStakingV1beta1Params } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.func'
import { useGetCosmosStakingV1beta1Params } from 'customchain-js/cosmos/staking/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCosmosStakingV1beta1Params` | [View source ↗](cosmos/staking/v1beta1/query.rpc.func.ts) |
| Hook | `useGetCosmosStakingV1beta1Params` | [View source ↗](cosmos/staking/v1beta1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |

### Transaction Methods

**CreateValidator**

CreateValidator defines a method for creating a new validator.

```ts
import { createValidator } from 'customchain-js/cosmos/staking/v1beta1/tx.rpc.func'
import { useCreateValidator } from 'customchain-js/cosmos/staking/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createValidator` | [View source ↗](cosmos/staking/v1beta1/tx.rpc.func.ts) |
| Hook | `useCreateValidator` | [View source ↗](cosmos/staking/v1beta1/tx.rpc.react.ts) |
| Request | `MsgCreateValidator` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Response | `MsgCreateValidatorResponse` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |

---

**EditValidator**

EditValidator defines a method for editing an existing validator.

```ts
import { editValidator } from 'customchain-js/cosmos/staking/v1beta1/tx.rpc.func'
import { useEditValidator } from 'customchain-js/cosmos/staking/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `editValidator` | [View source ↗](cosmos/staking/v1beta1/tx.rpc.func.ts) |
| Hook | `useEditValidator` | [View source ↗](cosmos/staking/v1beta1/tx.rpc.react.ts) |
| Request | `MsgEditValidator` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Response | `MsgEditValidatorResponse` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |

---

**Delegate**

Delegate defines a method for performing a delegation of coins from a delegator to a validator.

```ts
import { delegate } from 'customchain-js/cosmos/staking/v1beta1/tx.rpc.func'
import { useDelegate } from 'customchain-js/cosmos/staking/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `delegate` | [View source ↗](cosmos/staking/v1beta1/tx.rpc.func.ts) |
| Hook | `useDelegate` | [View source ↗](cosmos/staking/v1beta1/tx.rpc.react.ts) |
| Request | `MsgDelegate` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Response | `MsgDelegateResponse` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |

---

**BeginRedelegate**

BeginRedelegate defines a method for performing a redelegation of coins from a delegator and source validator to a destination validator.

```ts
import { beginRedelegate } from 'customchain-js/cosmos/staking/v1beta1/tx.rpc.func'
import { useBeginRedelegate } from 'customchain-js/cosmos/staking/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `beginRedelegate` | [View source ↗](cosmos/staking/v1beta1/tx.rpc.func.ts) |
| Hook | `useBeginRedelegate` | [View source ↗](cosmos/staking/v1beta1/tx.rpc.react.ts) |
| Request | `MsgBeginRedelegate` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Response | `MsgBeginRedelegateResponse` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |

---

**Undelegate**

Undelegate defines a method for performing an undelegation from a delegate and a validator.

```ts
import { undelegate } from 'customchain-js/cosmos/staking/v1beta1/tx.rpc.func'
import { useUndelegate } from 'customchain-js/cosmos/staking/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `undelegate` | [View source ↗](cosmos/staking/v1beta1/tx.rpc.func.ts) |
| Hook | `useUndelegate` | [View source ↗](cosmos/staking/v1beta1/tx.rpc.react.ts) |
| Request | `MsgUndelegate` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |
| Response | `MsgUndelegateResponse` | [View source ↗](cosmos/staking/v1beta1/tx.ts) |


## cosmos.upgrade.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `CancelSoftwareUpgradeProposal` | [View source ↗](cosmos/upgrade/v1beta1/upgrade.ts) |
| Type | `ModuleVersion` | [View source ↗](cosmos/upgrade/v1beta1/upgrade.ts) |
| Type | `MsgCancelUpgrade` | [View source ↗](cosmos/upgrade/v1beta1/tx.ts) |
| Type | `MsgCancelUpgradeResponse` | [View source ↗](cosmos/upgrade/v1beta1/tx.ts) |
| Type | `MsgSoftwareUpgrade` | [View source ↗](cosmos/upgrade/v1beta1/tx.ts) |
| Type | `MsgSoftwareUpgradeResponse` | [View source ↗](cosmos/upgrade/v1beta1/tx.ts) |
| Type | `Plan` | [View source ↗](cosmos/upgrade/v1beta1/upgrade.ts) |
| Type | `QueryAppliedPlanRequest` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Type | `QueryAppliedPlanResponse` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Type | `QueryAuthorityRequest` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Type | `QueryAuthorityResponse` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Type | `QueryCurrentPlanRequest` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Type | `QueryCurrentPlanResponse` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Type | `QueryModuleVersionsRequest` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Type | `QueryModuleVersionsResponse` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Type | `QueryUpgradedConsensusStateRequest` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Type | `QueryUpgradedConsensusStateResponse` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Type | `SoftwareUpgradeProposal` | [View source ↗](cosmos/upgrade/v1beta1/upgrade.ts) |

### Query Methods

**CurrentPlan**

CurrentPlan queries the current upgrade plan.

```ts
import { getCurrentPlan } from 'customchain-js/cosmos/upgrade/v1beta1/query.rpc.func'
import { useGetCurrentPlan } from 'customchain-js/cosmos/upgrade/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCurrentPlan` | [View source ↗](cosmos/upgrade/v1beta1/query.rpc.func.ts) |
| Hook | `useGetCurrentPlan` | [View source ↗](cosmos/upgrade/v1beta1/query.rpc.react.ts) |
| Request | `QueryCurrentPlanRequest` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Response | `QueryCurrentPlanResponse` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |

---

**AppliedPlan**

AppliedPlan queries a previously applied upgrade plan by its name.

```ts
import { getAppliedPlan } from 'customchain-js/cosmos/upgrade/v1beta1/query.rpc.func'
import { useGetAppliedPlan } from 'customchain-js/cosmos/upgrade/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAppliedPlan` | [View source ↗](cosmos/upgrade/v1beta1/query.rpc.func.ts) |
| Hook | `useGetAppliedPlan` | [View source ↗](cosmos/upgrade/v1beta1/query.rpc.react.ts) |
| Request | `QueryAppliedPlanRequest` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Response | `QueryAppliedPlanResponse` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |

---

**UpgradedConsensusState**

UpgradedConsensusState queries the consensus state that will serve as a trusted kernel for the next version of this chain. It will only be stored at the last height of this chain. UpgradedConsensusState RPC not supported with legacy querier This rpc is deprecated now that IBC has its own replacement (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)

```ts
import { getUpgradedConsensusStateCosmosUpgradeV1beta1 } from 'customchain-js/cosmos/bundle'
import { useGetUpgradedConsensusStateCosmosUpgradeV1beta1 } from 'customchain-js/cosmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getUpgradedConsensusStateCosmosUpgradeV1beta1` | [View source ↗](cosmos/upgrade/v1beta1/query.rpc.func.ts) |
| Hook | `useGetUpgradedConsensusStateCosmosUpgradeV1beta1` | [View source ↗](cosmos/upgrade/v1beta1/query.rpc.react.ts) |
| Request | `QueryUpgradedConsensusStateRequest` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Response | `QueryUpgradedConsensusStateResponse` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |

---

**ModuleVersions**

ModuleVersions queries the list of module versions from state. Since: cosmos-sdk 0.43

```ts
import { getModuleVersions } from 'customchain-js/cosmos/upgrade/v1beta1/query.rpc.func'
import { useGetModuleVersions } from 'customchain-js/cosmos/upgrade/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getModuleVersions` | [View source ↗](cosmos/upgrade/v1beta1/query.rpc.func.ts) |
| Hook | `useGetModuleVersions` | [View source ↗](cosmos/upgrade/v1beta1/query.rpc.react.ts) |
| Request | `QueryModuleVersionsRequest` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Response | `QueryModuleVersionsResponse` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |

---

**Authority**

Returns the account with authority to conduct upgrades

```ts
import { getAuthority } from 'customchain-js/cosmos/upgrade/v1beta1/query.rpc.func'
import { useGetAuthority } from 'customchain-js/cosmos/upgrade/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAuthority` | [View source ↗](cosmos/upgrade/v1beta1/query.rpc.func.ts) |
| Hook | `useGetAuthority` | [View source ↗](cosmos/upgrade/v1beta1/query.rpc.react.ts) |
| Request | `QueryAuthorityRequest` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Response | `QueryAuthorityResponse` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |

### Transaction Methods

**SoftwareUpgrade**

SoftwareUpgrade is a governance operation for initiating a software upgrade. Since: cosmos-sdk 0.46

```ts
import { softwareUpgrade } from 'customchain-js/cosmos/upgrade/v1beta1/tx.rpc.func'
import { useSoftwareUpgrade } from 'customchain-js/cosmos/upgrade/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `softwareUpgrade` | [View source ↗](cosmos/upgrade/v1beta1/tx.rpc.func.ts) |
| Hook | `useSoftwareUpgrade` | [View source ↗](cosmos/upgrade/v1beta1/tx.rpc.react.ts) |
| Request | `MsgSoftwareUpgrade` | [View source ↗](cosmos/upgrade/v1beta1/tx.ts) |
| Response | `MsgSoftwareUpgradeResponse` | [View source ↗](cosmos/upgrade/v1beta1/tx.ts) |

---

**CancelUpgrade**

CancelUpgrade is a governance operation for cancelling a previously approvid software upgrade. Since: cosmos-sdk 0.46

```ts
import { cancelUpgrade } from 'customchain-js/cosmos/upgrade/v1beta1/tx.rpc.func'
import { useCancelUpgrade } from 'customchain-js/cosmos/upgrade/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `cancelUpgrade` | [View source ↗](cosmos/upgrade/v1beta1/tx.rpc.func.ts) |
| Hook | `useCancelUpgrade` | [View source ↗](cosmos/upgrade/v1beta1/tx.rpc.react.ts) |
| Request | `MsgCancelUpgrade` | [View source ↗](cosmos/upgrade/v1beta1/tx.ts) |
| Response | `MsgCancelUpgradeResponse` | [View source ↗](cosmos/upgrade/v1beta1/tx.ts) |


## cosmos.vesting.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `BaseVestingAccount` | [View source ↗](cosmos/vesting/v1beta1/vesting.ts) |
| Type | `ContinuousVestingAccount` | [View source ↗](cosmos/vesting/v1beta1/vesting.ts) |
| Type | `DelayedVestingAccount` | [View source ↗](cosmos/vesting/v1beta1/vesting.ts) |
| Type | `MsgCreatePeriodicVestingAccount` | [View source ↗](cosmos/vesting/v1beta1/tx.ts) |
| Type | `MsgCreatePeriodicVestingAccountResponse` | [View source ↗](cosmos/vesting/v1beta1/tx.ts) |
| Type | `MsgCreatePermanentLockedAccount` | [View source ↗](cosmos/vesting/v1beta1/tx.ts) |
| Type | `MsgCreatePermanentLockedAccountResponse` | [View source ↗](cosmos/vesting/v1beta1/tx.ts) |
| Type | `MsgCreateVestingAccount` | [View source ↗](cosmos/vesting/v1beta1/tx.ts) |
| Type | `MsgCreateVestingAccountResponse` | [View source ↗](cosmos/vesting/v1beta1/tx.ts) |
| Type | `Period` | [View source ↗](cosmos/vesting/v1beta1/vesting.ts) |
| Type | `PeriodicVestingAccount` | [View source ↗](cosmos/vesting/v1beta1/vesting.ts) |
| Type | `PermanentLockedAccount` | [View source ↗](cosmos/vesting/v1beta1/vesting.ts) |

### Transaction Methods

**CreateVestingAccount**

CreateVestingAccount defines a method that enables creating a vesting account.

```ts
import { createVestingAccount } from 'customchain-js/cosmos/vesting/v1beta1/tx.rpc.func'
import { useCreateVestingAccount } from 'customchain-js/cosmos/vesting/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createVestingAccount` | [View source ↗](cosmos/vesting/v1beta1/tx.rpc.func.ts) |
| Hook | `useCreateVestingAccount` | [View source ↗](cosmos/vesting/v1beta1/tx.rpc.react.ts) |
| Request | `MsgCreateVestingAccount` | [View source ↗](cosmos/vesting/v1beta1/tx.ts) |
| Response | `MsgCreateVestingAccountResponse` | [View source ↗](cosmos/vesting/v1beta1/tx.ts) |

---

**CreatePermanentLockedAccount**

CreatePermanentLockedAccount defines a method that enables creating a permanent locked account.

```ts
import { createPermanentLockedAccount } from 'customchain-js/cosmos/vesting/v1beta1/tx.rpc.func'
import { useCreatePermanentLockedAccount } from 'customchain-js/cosmos/vesting/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createPermanentLockedAccount` | [View source ↗](cosmos/vesting/v1beta1/tx.rpc.func.ts) |
| Hook | `useCreatePermanentLockedAccount` | [View source ↗](cosmos/vesting/v1beta1/tx.rpc.react.ts) |
| Request | `MsgCreatePermanentLockedAccount` | [View source ↗](cosmos/vesting/v1beta1/tx.ts) |
| Response | `MsgCreatePermanentLockedAccountResponse` | [View source ↗](cosmos/vesting/v1beta1/tx.ts) |

---

**CreatePeriodicVestingAccount**

CreatePeriodicVestingAccount defines a method that enables creating a periodic vesting account.

```ts
import { createPeriodicVestingAccount } from 'customchain-js/cosmos/vesting/v1beta1/tx.rpc.func'
import { useCreatePeriodicVestingAccount } from 'customchain-js/cosmos/vesting/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createPeriodicVestingAccount` | [View source ↗](cosmos/vesting/v1beta1/tx.rpc.func.ts) |
| Hook | `useCreatePeriodicVestingAccount` | [View source ↗](cosmos/vesting/v1beta1/tx.rpc.react.ts) |
| Request | `MsgCreatePeriodicVestingAccount` | [View source ↗](cosmos/vesting/v1beta1/tx.ts) |
| Response | `MsgCreatePeriodicVestingAccountResponse` | [View source ↗](cosmos/vesting/v1beta1/tx.ts) |


## cosmwasm.wasm.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `AbsoluteTxPosition` | [View source ↗](cosmwasm/wasm/v1/types.ts) |
| Type | `AccessConfig` | [View source ↗](cosmwasm/wasm/v1/types.ts) |
| Type | `AccessType` | [View source ↗](cosmwasm/wasm/v1/types.ts) |
| Type | `AccessTypeParam` | [View source ↗](cosmwasm/wasm/v1/types.ts) |
| Type | `ClearAdminProposal` | [View source ↗](cosmwasm/wasm/v1/proposal.ts) |
| Type | `Code` | [View source ↗](cosmwasm/wasm/v1/genesis.ts) |
| Type | `CodeInfo` | [View source ↗](cosmwasm/wasm/v1/types.ts) |
| Type | `CodeInfoResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `Contract` | [View source ↗](cosmwasm/wasm/v1/genesis.ts) |
| Type | `ContractCodeHistoryEntry` | [View source ↗](cosmwasm/wasm/v1/types.ts) |
| Type | `ContractCodeHistoryOperationType` | [View source ↗](cosmwasm/wasm/v1/types.ts) |
| Type | `ContractInfo` | [View source ↗](cosmwasm/wasm/v1/types.ts) |
| Type | `CosmwasmWasmV1Params` | [View source ↗](cosmwasm/wasm/v1/types.ts) |
| Type | `ExecuteContractProposal` | [View source ↗](cosmwasm/wasm/v1/proposal.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `InstantiateContractProposal` | [View source ↗](cosmwasm/wasm/v1/proposal.ts) |
| Type | `MigrateContractProposal` | [View source ↗](cosmwasm/wasm/v1/proposal.ts) |
| Type | `Model` | [View source ↗](cosmwasm/wasm/v1/types.ts) |
| Type | `MsgClearAdmin` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Type | `MsgClearAdminResponse` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Type | `MsgExecuteContract` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Type | `MsgExecuteContractResponse` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Type | `MsgIBCCloseChannel` | [View source ↗](cosmwasm/wasm/v1/ibc.ts) |
| Type | `MsgIBCSend` | [View source ↗](cosmwasm/wasm/v1/ibc.ts) |
| Type | `MsgInstantiateContract` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Type | `MsgInstantiateContractResponse` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Type | `MsgMigrateContract` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Type | `MsgMigrateContractResponse` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Type | `MsgStoreCode` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Type | `MsgStoreCodeResponse` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Type | `MsgUpdateAdmin` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Type | `MsgUpdateAdminResponse` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Type | `PinCodesProposal` | [View source ↗](cosmwasm/wasm/v1/proposal.ts) |
| Type | `QueryAllContractStateRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryAllContractStateResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryCodeRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryCodeResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryCodesRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryCodesResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryContractHistoryRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryContractHistoryResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryContractInfoRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryContractInfoResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryContractsByCodeRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryContractsByCodeResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryPinnedCodesRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryPinnedCodesResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryRawContractStateRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QueryRawContractStateResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QuerySmartContractStateRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `QuerySmartContractStateResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Type | `Sequence` | [View source ↗](cosmwasm/wasm/v1/genesis.ts) |
| Type | `StoreCodeProposal` | [View source ↗](cosmwasm/wasm/v1/proposal.ts) |
| Type | `SudoContractProposal` | [View source ↗](cosmwasm/wasm/v1/proposal.ts) |
| Type | `UnpinCodesProposal` | [View source ↗](cosmwasm/wasm/v1/proposal.ts) |
| Type | `UpdateAdminProposal` | [View source ↗](cosmwasm/wasm/v1/proposal.ts) |

### Query Methods

**ContractInfo**

ContractInfo gets the contract meta data

```ts
import { getContractInfo } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.func'
import { useGetContractInfo } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getContractInfo` | [View source ↗](cosmwasm/wasm/v1/query.rpc.func.ts) |
| Hook | `useGetContractInfo` | [View source ↗](cosmwasm/wasm/v1/query.rpc.react.ts) |
| Request | `QueryContractInfoRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Response | `QueryContractInfoResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |

---

**ContractHistory**

ContractHistory gets the contract code history

```ts
import { getContractHistory } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.func'
import { useGetContractHistory } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getContractHistory` | [View source ↗](cosmwasm/wasm/v1/query.rpc.func.ts) |
| Hook | `useGetContractHistory` | [View source ↗](cosmwasm/wasm/v1/query.rpc.react.ts) |
| Request | `QueryContractHistoryRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Response | `QueryContractHistoryResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |

---

**ContractsByCode**

ContractsByCode lists all smart contracts for a code id

```ts
import { getContractsByCode } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.func'
import { useGetContractsByCode } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getContractsByCode` | [View source ↗](cosmwasm/wasm/v1/query.rpc.func.ts) |
| Hook | `useGetContractsByCode` | [View source ↗](cosmwasm/wasm/v1/query.rpc.react.ts) |
| Request | `QueryContractsByCodeRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Response | `QueryContractsByCodeResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |

---

**AllContractState**

AllContractState gets all raw store data for a single contract

```ts
import { getAllContractState } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.func'
import { useGetAllContractState } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAllContractState` | [View source ↗](cosmwasm/wasm/v1/query.rpc.func.ts) |
| Hook | `useGetAllContractState` | [View source ↗](cosmwasm/wasm/v1/query.rpc.react.ts) |
| Request | `QueryAllContractStateRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Response | `QueryAllContractStateResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |

---

**RawContractState**

RawContractState gets single key from the raw store data of a contract

```ts
import { getRawContractState } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.func'
import { useGetRawContractState } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getRawContractState` | [View source ↗](cosmwasm/wasm/v1/query.rpc.func.ts) |
| Hook | `useGetRawContractState` | [View source ↗](cosmwasm/wasm/v1/query.rpc.react.ts) |
| Request | `QueryRawContractStateRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Response | `QueryRawContractStateResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |

---

**SmartContractState**

SmartContractState get smart query result from the contract

```ts
import { getSmartContractState } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.func'
import { useGetSmartContractState } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSmartContractState` | [View source ↗](cosmwasm/wasm/v1/query.rpc.func.ts) |
| Hook | `useGetSmartContractState` | [View source ↗](cosmwasm/wasm/v1/query.rpc.react.ts) |
| Request | `QuerySmartContractStateRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Response | `QuerySmartContractStateResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |

---

**Code**

Code gets the binary code and metadata for a singe wasm code

```ts
import { getCode } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.func'
import { useGetCode } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCode` | [View source ↗](cosmwasm/wasm/v1/query.rpc.func.ts) |
| Hook | `useGetCode` | [View source ↗](cosmwasm/wasm/v1/query.rpc.react.ts) |
| Request | `QueryCodeRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Response | `QueryCodeResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |

---

**Codes**

Codes gets the metadata for all stored wasm codes

```ts
import { getCodes } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.func'
import { useGetCodes } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCodes` | [View source ↗](cosmwasm/wasm/v1/query.rpc.func.ts) |
| Hook | `useGetCodes` | [View source ↗](cosmwasm/wasm/v1/query.rpc.react.ts) |
| Request | `QueryCodesRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Response | `QueryCodesResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |

---

**PinnedCodes**

PinnedCodes gets the pinned code ids

```ts
import { getPinnedCodes } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.func'
import { useGetPinnedCodes } from 'customchain-js/cosmwasm/wasm/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPinnedCodes` | [View source ↗](cosmwasm/wasm/v1/query.rpc.func.ts) |
| Hook | `useGetPinnedCodes` | [View source ↗](cosmwasm/wasm/v1/query.rpc.react.ts) |
| Request | `QueryPinnedCodesRequest` | [View source ↗](cosmwasm/wasm/v1/query.ts) |
| Response | `QueryPinnedCodesResponse` | [View source ↗](cosmwasm/wasm/v1/query.ts) |

### Transaction Methods

**StoreCode**

StoreCode to submit Wasm code to the system

```ts
import { storeCode } from 'customchain-js/cosmwasm/wasm/v1/tx.rpc.func'
import { useStoreCode } from 'customchain-js/cosmwasm/wasm/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `storeCode` | [View source ↗](cosmwasm/wasm/v1/tx.rpc.func.ts) |
| Hook | `useStoreCode` | [View source ↗](cosmwasm/wasm/v1/tx.rpc.react.ts) |
| Request | `MsgStoreCode` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Response | `MsgStoreCodeResponse` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |

---

**InstantiateContract**

Instantiate creates a new smart contract instance for the given code id.

```ts
import { instantiateContract } from 'customchain-js/cosmwasm/wasm/v1/tx.rpc.func'
import { useInstantiateContract } from 'customchain-js/cosmwasm/wasm/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `instantiateContract` | [View source ↗](cosmwasm/wasm/v1/tx.rpc.func.ts) |
| Hook | `useInstantiateContract` | [View source ↗](cosmwasm/wasm/v1/tx.rpc.react.ts) |
| Request | `MsgInstantiateContract` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Response | `MsgInstantiateContractResponse` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |

---

**ExecuteContract**

Execute submits the given message data to a smart contract

```ts
import { executeContract } from 'customchain-js/cosmwasm/wasm/v1/tx.rpc.func'
import { useExecuteContract } from 'customchain-js/cosmwasm/wasm/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `executeContract` | [View source ↗](cosmwasm/wasm/v1/tx.rpc.func.ts) |
| Hook | `useExecuteContract` | [View source ↗](cosmwasm/wasm/v1/tx.rpc.react.ts) |
| Request | `MsgExecuteContract` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Response | `MsgExecuteContractResponse` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |

---

**MigrateContract**

Migrate runs a code upgrade/ downgrade for a smart contract

```ts
import { migrateContract } from 'customchain-js/cosmwasm/wasm/v1/tx.rpc.func'
import { useMigrateContract } from 'customchain-js/cosmwasm/wasm/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `migrateContract` | [View source ↗](cosmwasm/wasm/v1/tx.rpc.func.ts) |
| Hook | `useMigrateContract` | [View source ↗](cosmwasm/wasm/v1/tx.rpc.react.ts) |
| Request | `MsgMigrateContract` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Response | `MsgMigrateContractResponse` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |

---

**UpdateAdmin**

UpdateAdmin sets a new admin for a smart contract

```ts
import { updateAdmin } from 'customchain-js/cosmwasm/wasm/v1/tx.rpc.func'
import { useUpdateAdmin } from 'customchain-js/cosmwasm/wasm/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `updateAdmin` | [View source ↗](cosmwasm/wasm/v1/tx.rpc.func.ts) |
| Hook | `useUpdateAdmin` | [View source ↗](cosmwasm/wasm/v1/tx.rpc.react.ts) |
| Request | `MsgUpdateAdmin` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Response | `MsgUpdateAdminResponse` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |

---

**ClearAdmin**

ClearAdmin removes any admin stored for a smart contract

```ts
import { clearAdmin } from 'customchain-js/cosmwasm/wasm/v1/tx.rpc.func'
import { useClearAdmin } from 'customchain-js/cosmwasm/wasm/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `clearAdmin` | [View source ↗](cosmwasm/wasm/v1/tx.rpc.func.ts) |
| Hook | `useClearAdmin` | [View source ↗](cosmwasm/wasm/v1/tx.rpc.react.ts) |
| Request | `MsgClearAdmin` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |
| Response | `MsgClearAdminResponse` | [View source ↗](cosmwasm/wasm/v1/tx.ts) |


## evmos.claims.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `Action` | [View source ↗](evmos/claims/v1/claims.ts) |
| Type | `Claim` | [View source ↗](evmos/claims/v1/claims.ts) |
| Type | `ClaimsRecord` | [View source ↗](evmos/claims/v1/claims.ts) |
| Type | `ClaimsRecordAddress` | [View source ↗](evmos/claims/v1/claims.ts) |
| Type | `EvmosClaimsV1Params` | [View source ↗](evmos/claims/v1/genesis.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `QueryClaimsRecordRequest` | [View source ↗](evmos/claims/v1/query.ts) |
| Type | `QueryClaimsRecordResponse` | [View source ↗](evmos/claims/v1/query.ts) |
| Type | `QueryClaimsRecordsRequest` | [View source ↗](evmos/claims/v1/query.ts) |
| Type | `QueryClaimsRecordsResponse` | [View source ↗](evmos/claims/v1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryTotalUnclaimedRequest` | [View source ↗](evmos/claims/v1/query.ts) |
| Type | `QueryTotalUnclaimedResponse` | [View source ↗](evmos/claims/v1/query.ts) |

### Query Methods

**TotalUnclaimed**

TotalUnclaimed queries the total unclaimed tokens from the airdrop

```ts
import { getTotalUnclaimed } from 'customchain-js/evmos/claims/v1/query.rpc.func'
import { useGetTotalUnclaimed } from 'customchain-js/evmos/claims/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTotalUnclaimed` | [View source ↗](evmos/claims/v1/query.rpc.func.ts) |
| Hook | `useGetTotalUnclaimed` | [View source ↗](evmos/claims/v1/query.rpc.react.ts) |
| Request | `QueryTotalUnclaimedRequest` | [View source ↗](evmos/claims/v1/query.ts) |
| Response | `QueryTotalUnclaimedResponse` | [View source ↗](evmos/claims/v1/query.ts) |

---

**Params**

Params returns the claims module parameters

```ts
import { getEvmosClaimsV1Params } from 'customchain-js/evmos/claims/v1/query.rpc.func'
import { useGetEvmosClaimsV1Params } from 'customchain-js/evmos/claims/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEvmosClaimsV1Params` | [View source ↗](evmos/claims/v1/query.rpc.func.ts) |
| Hook | `useGetEvmosClaimsV1Params` | [View source ↗](evmos/claims/v1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](evmos/claims/v1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](evmos/claims/v1/query.ts) |

---

**ClaimsRecords**

ClaimsRecords returns all claims records

```ts
import { getClaimsRecords } from 'customchain-js/evmos/claims/v1/query.rpc.func'
import { useGetClaimsRecords } from 'customchain-js/evmos/claims/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getClaimsRecords` | [View source ↗](evmos/claims/v1/query.rpc.func.ts) |
| Hook | `useGetClaimsRecords` | [View source ↗](evmos/claims/v1/query.rpc.react.ts) |
| Request | `QueryClaimsRecordsRequest` | [View source ↗](evmos/claims/v1/query.ts) |
| Response | `QueryClaimsRecordsResponse` | [View source ↗](evmos/claims/v1/query.ts) |

---

**ClaimsRecord**

ClaimsRecord returns the claims record for a given address

```ts
import { getClaimsRecord } from 'customchain-js/evmos/claims/v1/query.rpc.func'
import { useGetClaimsRecord } from 'customchain-js/evmos/claims/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getClaimsRecord` | [View source ↗](evmos/claims/v1/query.rpc.func.ts) |
| Hook | `useGetClaimsRecord` | [View source ↗](evmos/claims/v1/query.rpc.react.ts) |
| Request | `QueryClaimsRecordRequest` | [View source ↗](evmos/claims/v1/query.ts) |
| Response | `QueryClaimsRecordResponse` | [View source ↗](evmos/claims/v1/query.ts) |


## evmos.epochs.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `EpochInfo` | [View source ↗](evmos/epochs/v1/genesis.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `QueryCurrentEpochRequest` | [View source ↗](evmos/epochs/v1/query.ts) |
| Type | `QueryCurrentEpochResponse` | [View source ↗](evmos/epochs/v1/query.ts) |
| Type | `QueryEpochsInfoRequest` | [View source ↗](evmos/epochs/v1/query.ts) |
| Type | `QueryEpochsInfoResponse` | [View source ↗](evmos/epochs/v1/query.ts) |

### Query Methods

**EpochInfos**

EpochInfos provide running epochInfos

```ts
import { getEpochInfosEvmosEpochsV1 } from 'customchain-js/evmos/bundle'
import { useGetEpochInfosEvmosEpochsV1 } from 'customchain-js/evmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEpochInfosEvmosEpochsV1` | [View source ↗](evmos/epochs/v1/query.rpc.func.ts) |
| Hook | `useGetEpochInfosEvmosEpochsV1` | [View source ↗](evmos/epochs/v1/query.rpc.react.ts) |
| Request | `QueryEpochsInfoRequest` | [View source ↗](evmos/epochs/v1/query.ts) |
| Response | `QueryEpochsInfoResponse` | [View source ↗](evmos/epochs/v1/query.ts) |

---

**CurrentEpoch**

CurrentEpoch provide current epoch of specified identifier

```ts
import { getCurrentEpochEvmosEpochsV1 } from 'customchain-js/evmos/bundle'
import { useGetCurrentEpochEvmosEpochsV1 } from 'customchain-js/evmos/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCurrentEpochEvmosEpochsV1` | [View source ↗](evmos/epochs/v1/query.rpc.func.ts) |
| Hook | `useGetCurrentEpochEvmosEpochsV1` | [View source ↗](evmos/epochs/v1/query.rpc.react.ts) |
| Request | `QueryCurrentEpochRequest` | [View source ↗](evmos/epochs/v1/query.ts) |
| Response | `QueryCurrentEpochResponse` | [View source ↗](evmos/epochs/v1/query.ts) |


## evmos.erc20.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `EvmosErc20V1Params` | [View source ↗](evmos/erc20/v1/genesis.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MsgConvertCoin` | [View source ↗](evmos/erc20/v1/tx.ts) |
| Type | `MsgConvertCoinResponse` | [View source ↗](evmos/erc20/v1/tx.ts) |
| Type | `MsgConvertERC20` | [View source ↗](evmos/erc20/v1/tx.ts) |
| Type | `MsgConvertERC20Response` | [View source ↗](evmos/erc20/v1/tx.ts) |
| Type | `Owner` | [View source ↗](cosmos/capability/v1beta1/capability.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryTokenPairRequest` | [View source ↗](evmos/erc20/v1/query.ts) |
| Type | `QueryTokenPairResponse` | [View source ↗](evmos/erc20/v1/query.ts) |
| Type | `QueryTokenPairsRequest` | [View source ↗](evmos/erc20/v1/query.ts) |
| Type | `QueryTokenPairsResponse` | [View source ↗](evmos/erc20/v1/query.ts) |
| Type | `RegisterCoinProposal` | [View source ↗](evmos/erc20/v1/erc20.ts) |
| Type | `RegisterERC20Proposal` | [View source ↗](evmos/erc20/v1/erc20.ts) |
| Type | `ToggleTokenConversionProposal` | [View source ↗](evmos/erc20/v1/erc20.ts) |
| Type | `TokenPair` | [View source ↗](evmos/erc20/v1/erc20.ts) |

### Query Methods

**TokenPairs**

TokenPairs retrieves registered token pairs

```ts
import { getTokenPairs } from 'customchain-js/evmos/erc20/v1/query.rpc.func'
import { useGetTokenPairs } from 'customchain-js/evmos/erc20/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTokenPairs` | [View source ↗](evmos/erc20/v1/query.rpc.func.ts) |
| Hook | `useGetTokenPairs` | [View source ↗](evmos/erc20/v1/query.rpc.react.ts) |
| Request | `QueryTokenPairsRequest` | [View source ↗](evmos/erc20/v1/query.ts) |
| Response | `QueryTokenPairsResponse` | [View source ↗](evmos/erc20/v1/query.ts) |

---

**TokenPair**

TokenPair retrieves a registered token pair

```ts
import { getTokenPair } from 'customchain-js/evmos/erc20/v1/query.rpc.func'
import { useGetTokenPair } from 'customchain-js/evmos/erc20/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTokenPair` | [View source ↗](evmos/erc20/v1/query.rpc.func.ts) |
| Hook | `useGetTokenPair` | [View source ↗](evmos/erc20/v1/query.rpc.react.ts) |
| Request | `QueryTokenPairRequest` | [View source ↗](evmos/erc20/v1/query.ts) |
| Response | `QueryTokenPairResponse` | [View source ↗](evmos/erc20/v1/query.ts) |

---

**Params**

Params retrieves the erc20 module params

```ts
import { getEvmosErc20V1Params } from 'customchain-js/evmos/erc20/v1/query.rpc.func'
import { useGetEvmosErc20V1Params } from 'customchain-js/evmos/erc20/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEvmosErc20V1Params` | [View source ↗](evmos/erc20/v1/query.rpc.func.ts) |
| Hook | `useGetEvmosErc20V1Params` | [View source ↗](evmos/erc20/v1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](evmos/erc20/v1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](evmos/erc20/v1/query.ts) |

### Transaction Methods

**ConvertCoin**

ConvertCoin mints a ERC20 representation of the native Cosmos coin denom that is registered on the token mapping.

```ts
import { convertCoin } from 'customchain-js/evmos/erc20/v1/tx.rpc.func'
import { useConvertCoin } from 'customchain-js/evmos/erc20/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `convertCoin` | [View source ↗](evmos/erc20/v1/tx.rpc.func.ts) |
| Hook | `useConvertCoin` | [View source ↗](evmos/erc20/v1/tx.rpc.react.ts) |
| Request | `MsgConvertCoin` | [View source ↗](evmos/erc20/v1/tx.ts) |
| Response | `MsgConvertCoinResponse` | [View source ↗](evmos/erc20/v1/tx.ts) |

---

**ConvertERC20**

ConvertERC20 mints a native Cosmos coin representation of the ERC20 token contract that is registered on the token mapping.

```ts
import { convertERC20 } from 'customchain-js/evmos/erc20/v1/tx.rpc.func'
import { useConvertERC20 } from 'customchain-js/evmos/erc20/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `convertERC20` | [View source ↗](evmos/erc20/v1/tx.rpc.func.ts) |
| Hook | `useConvertERC20` | [View source ↗](evmos/erc20/v1/tx.rpc.react.ts) |
| Request | `MsgConvertERC20` | [View source ↗](evmos/erc20/v1/tx.ts) |
| Response | `MsgConvertERC20Response` | [View source ↗](evmos/erc20/v1/tx.ts) |


## evmos.fees.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `DevFeeInfo` | [View source ↗](evmos/fees/v1/fees.ts) |
| Type | `EvmosFeesV1Params` | [View source ↗](evmos/fees/v1/genesis.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MsgCancelDevFeeInfo` | [View source ↗](evmos/fees/v1/tx.ts) |
| Type | `MsgCancelDevFeeInfoResponse` | [View source ↗](evmos/fees/v1/tx.ts) |
| Type | `MsgRegisterDevFeeInfo` | [View source ↗](evmos/fees/v1/tx.ts) |
| Type | `MsgRegisterDevFeeInfoResponse` | [View source ↗](evmos/fees/v1/tx.ts) |
| Type | `MsgUpdateDevFeeInfo` | [View source ↗](evmos/fees/v1/tx.ts) |
| Type | `MsgUpdateDevFeeInfoResponse` | [View source ↗](evmos/fees/v1/tx.ts) |
| Type | `QueryDevFeeInfoRequest` | [View source ↗](evmos/fees/v1/query.ts) |
| Type | `QueryDevFeeInfoResponse` | [View source ↗](evmos/fees/v1/query.ts) |
| Type | `QueryDevFeeInfosPerDeployerRequest` | [View source ↗](evmos/fees/v1/query.ts) |
| Type | `QueryDevFeeInfosPerDeployerResponse` | [View source ↗](evmos/fees/v1/query.ts) |
| Type | `QueryDevFeeInfosRequest` | [View source ↗](evmos/fees/v1/query.ts) |
| Type | `QueryDevFeeInfosResponse` | [View source ↗](evmos/fees/v1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |

### Query Methods

**DevFeeInfos**

DevFeeInfos retrieves all registered contracts for fee distribution

```ts
import { getDevFeeInfos } from 'customchain-js/evmos/fees/v1/query.rpc.func'
import { useGetDevFeeInfos } from 'customchain-js/evmos/fees/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDevFeeInfos` | [View source ↗](evmos/fees/v1/query.rpc.func.ts) |
| Hook | `useGetDevFeeInfos` | [View source ↗](evmos/fees/v1/query.rpc.react.ts) |
| Request | `QueryDevFeeInfosRequest` | [View source ↗](evmos/fees/v1/query.ts) |
| Response | `QueryDevFeeInfosResponse` | [View source ↗](evmos/fees/v1/query.ts) |

---

**DevFeeInfo**

DevFeeInfo retrieves a registered contract for fee distribution

```ts
import { getDevFeeInfo } from 'customchain-js/evmos/fees/v1/query.rpc.func'
import { useGetDevFeeInfo } from 'customchain-js/evmos/fees/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDevFeeInfo` | [View source ↗](evmos/fees/v1/query.rpc.func.ts) |
| Hook | `useGetDevFeeInfo` | [View source ↗](evmos/fees/v1/query.rpc.react.ts) |
| Request | `QueryDevFeeInfoRequest` | [View source ↗](evmos/fees/v1/query.ts) |
| Response | `QueryDevFeeInfoResponse` | [View source ↗](evmos/fees/v1/query.ts) |

---

**Params**

Params retrieves the fees module params

```ts
import { getEvmosFeesV1Params } from 'customchain-js/evmos/fees/v1/query.rpc.func'
import { useGetEvmosFeesV1Params } from 'customchain-js/evmos/fees/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEvmosFeesV1Params` | [View source ↗](evmos/fees/v1/query.rpc.func.ts) |
| Hook | `useGetEvmosFeesV1Params` | [View source ↗](evmos/fees/v1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](evmos/fees/v1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](evmos/fees/v1/query.ts) |

---

**DevFeeInfosPerDeployer**

DevFeeInfosPerDeployer retrieves all contracts that a deployer has registered for fee distribution

```ts
import { getDevFeeInfosPerDeployer } from 'customchain-js/evmos/fees/v1/query.rpc.func'
import { useGetDevFeeInfosPerDeployer } from 'customchain-js/evmos/fees/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDevFeeInfosPerDeployer` | [View source ↗](evmos/fees/v1/query.rpc.func.ts) |
| Hook | `useGetDevFeeInfosPerDeployer` | [View source ↗](evmos/fees/v1/query.rpc.react.ts) |
| Request | `QueryDevFeeInfosPerDeployerRequest` | [View source ↗](evmos/fees/v1/query.ts) |
| Response | `QueryDevFeeInfosPerDeployerResponse` | [View source ↗](evmos/fees/v1/query.ts) |

### Transaction Methods

**RegisterDevFeeInfo**

RegisterDevFeeInfo is used by a deployer to register a new contract for receiving transaction fees

```ts
import { registerDevFeeInfo } from 'customchain-js/evmos/fees/v1/tx.rpc.func'
import { useRegisterDevFeeInfo } from 'customchain-js/evmos/fees/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `registerDevFeeInfo` | [View source ↗](evmos/fees/v1/tx.rpc.func.ts) |
| Hook | `useRegisterDevFeeInfo` | [View source ↗](evmos/fees/v1/tx.rpc.react.ts) |
| Request | `MsgRegisterDevFeeInfo` | [View source ↗](evmos/fees/v1/tx.ts) |
| Response | `MsgRegisterDevFeeInfoResponse` | [View source ↗](evmos/fees/v1/tx.ts) |

---

**CancelDevFeeInfo**

CancelDevFeeInfo is used by a deployer to cancel a registered contract and stop receiving transaction fees

```ts
import { cancelDevFeeInfo } from 'customchain-js/evmos/fees/v1/tx.rpc.func'
import { useCancelDevFeeInfo } from 'customchain-js/evmos/fees/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `cancelDevFeeInfo` | [View source ↗](evmos/fees/v1/tx.rpc.func.ts) |
| Hook | `useCancelDevFeeInfo` | [View source ↗](evmos/fees/v1/tx.rpc.react.ts) |
| Request | `MsgCancelDevFeeInfo` | [View source ↗](evmos/fees/v1/tx.ts) |
| Response | `MsgCancelDevFeeInfoResponse` | [View source ↗](evmos/fees/v1/tx.ts) |

---

**UpdateDevFeeInfo**

UpdateDevFeeInfo is used by a deployer to update the withdraw address

```ts
import { updateDevFeeInfo } from 'customchain-js/evmos/fees/v1/tx.rpc.func'
import { useUpdateDevFeeInfo } from 'customchain-js/evmos/fees/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `updateDevFeeInfo` | [View source ↗](evmos/fees/v1/tx.rpc.func.ts) |
| Hook | `useUpdateDevFeeInfo` | [View source ↗](evmos/fees/v1/tx.rpc.react.ts) |
| Request | `MsgUpdateDevFeeInfo` | [View source ↗](evmos/fees/v1/tx.ts) |
| Response | `MsgUpdateDevFeeInfoResponse` | [View source ↗](evmos/fees/v1/tx.ts) |


## evmos.incentives.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `CancelIncentiveProposal` | [View source ↗](evmos/incentives/v1/incentives.ts) |
| Type | `EvmosIncentivesV1Params` | [View source ↗](evmos/incentives/v1/genesis.ts) |
| Type | `GasMeter` | [View source ↗](evmos/incentives/v1/incentives.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `Incentive` | [View source ↗](evmos/incentives/v1/incentives.ts) |
| Type | `QueryAllocationMeterRequest` | [View source ↗](evmos/incentives/v1/query.ts) |
| Type | `QueryAllocationMeterResponse` | [View source ↗](evmos/incentives/v1/query.ts) |
| Type | `QueryAllocationMetersRequest` | [View source ↗](evmos/incentives/v1/query.ts) |
| Type | `QueryAllocationMetersResponse` | [View source ↗](evmos/incentives/v1/query.ts) |
| Type | `QueryGasMeterRequest` | [View source ↗](evmos/incentives/v1/query.ts) |
| Type | `QueryGasMeterResponse` | [View source ↗](evmos/incentives/v1/query.ts) |
| Type | `QueryGasMetersRequest` | [View source ↗](evmos/incentives/v1/query.ts) |
| Type | `QueryGasMetersResponse` | [View source ↗](evmos/incentives/v1/query.ts) |
| Type | `QueryIncentiveRequest` | [View source ↗](evmos/incentives/v1/query.ts) |
| Type | `QueryIncentiveResponse` | [View source ↗](evmos/incentives/v1/query.ts) |
| Type | `QueryIncentivesRequest` | [View source ↗](evmos/incentives/v1/query.ts) |
| Type | `QueryIncentivesResponse` | [View source ↗](evmos/incentives/v1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `RegisterIncentiveProposal` | [View source ↗](evmos/incentives/v1/incentives.ts) |

### Query Methods

**Incentives**

Incentives retrieves registered incentives

```ts
import { getIncentives } from 'customchain-js/evmos/incentives/v1/query.rpc.func'
import { useGetIncentives } from 'customchain-js/evmos/incentives/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getIncentives` | [View source ↗](evmos/incentives/v1/query.rpc.func.ts) |
| Hook | `useGetIncentives` | [View source ↗](evmos/incentives/v1/query.rpc.react.ts) |
| Request | `QueryIncentivesRequest` | [View source ↗](evmos/incentives/v1/query.ts) |
| Response | `QueryIncentivesResponse` | [View source ↗](evmos/incentives/v1/query.ts) |

---

**Incentive**

Incentive retrieves a registered incentive

```ts
import { getIncentive } from 'customchain-js/evmos/incentives/v1/query.rpc.func'
import { useGetIncentive } from 'customchain-js/evmos/incentives/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getIncentive` | [View source ↗](evmos/incentives/v1/query.rpc.func.ts) |
| Hook | `useGetIncentive` | [View source ↗](evmos/incentives/v1/query.rpc.react.ts) |
| Request | `QueryIncentiveRequest` | [View source ↗](evmos/incentives/v1/query.ts) |
| Response | `QueryIncentiveResponse` | [View source ↗](evmos/incentives/v1/query.ts) |

---

**GasMeters**

GasMeters retrieves active gas meters for a given contract

```ts
import { getGasMeters } from 'customchain-js/evmos/incentives/v1/query.rpc.func'
import { useGetGasMeters } from 'customchain-js/evmos/incentives/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGasMeters` | [View source ↗](evmos/incentives/v1/query.rpc.func.ts) |
| Hook | `useGetGasMeters` | [View source ↗](evmos/incentives/v1/query.rpc.react.ts) |
| Request | `QueryGasMetersRequest` | [View source ↗](evmos/incentives/v1/query.ts) |
| Response | `QueryGasMetersResponse` | [View source ↗](evmos/incentives/v1/query.ts) |

---

**GasMeter**

GasMeter Retrieves a active gas meter

```ts
import { getGasMeter } from 'customchain-js/evmos/incentives/v1/query.rpc.func'
import { useGetGasMeter } from 'customchain-js/evmos/incentives/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGasMeter` | [View source ↗](evmos/incentives/v1/query.rpc.func.ts) |
| Hook | `useGetGasMeter` | [View source ↗](evmos/incentives/v1/query.rpc.react.ts) |
| Request | `QueryGasMeterRequest` | [View source ↗](evmos/incentives/v1/query.ts) |
| Response | `QueryGasMeterResponse` | [View source ↗](evmos/incentives/v1/query.ts) |

---

**AllocationMeters**

AllocationMeters retrieves active allocation meters for a given denomination

```ts
import { getAllocationMeters } from 'customchain-js/evmos/incentives/v1/query.rpc.func'
import { useGetAllocationMeters } from 'customchain-js/evmos/incentives/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAllocationMeters` | [View source ↗](evmos/incentives/v1/query.rpc.func.ts) |
| Hook | `useGetAllocationMeters` | [View source ↗](evmos/incentives/v1/query.rpc.react.ts) |
| Request | `QueryAllocationMetersRequest` | [View source ↗](evmos/incentives/v1/query.ts) |
| Response | `QueryAllocationMetersResponse` | [View source ↗](evmos/incentives/v1/query.ts) |

---

**AllocationMeter**

AllocationMeter Retrieves a active gas meter

```ts
import { getAllocationMeter } from 'customchain-js/evmos/incentives/v1/query.rpc.func'
import { useGetAllocationMeter } from 'customchain-js/evmos/incentives/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAllocationMeter` | [View source ↗](evmos/incentives/v1/query.rpc.func.ts) |
| Hook | `useGetAllocationMeter` | [View source ↗](evmos/incentives/v1/query.rpc.react.ts) |
| Request | `QueryAllocationMeterRequest` | [View source ↗](evmos/incentives/v1/query.ts) |
| Response | `QueryAllocationMeterResponse` | [View source ↗](evmos/incentives/v1/query.ts) |

---

**Params**

Params retrieves the incentives module params

```ts
import { getEvmosIncentivesV1Params } from 'customchain-js/evmos/incentives/v1/query.rpc.func'
import { useGetEvmosIncentivesV1Params } from 'customchain-js/evmos/incentives/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEvmosIncentivesV1Params` | [View source ↗](evmos/incentives/v1/query.rpc.func.ts) |
| Hook | `useGetEvmosIncentivesV1Params` | [View source ↗](evmos/incentives/v1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](evmos/incentives/v1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](evmos/incentives/v1/query.ts) |


## evmos.inflation.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `EvmosInflationV1Params` | [View source ↗](evmos/inflation/v1/genesis.ts) |
| Type | `ExponentialCalculation` | [View source ↗](evmos/inflation/v1/inflation.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `InflationDistribution` | [View source ↗](evmos/inflation/v1/inflation.ts) |
| Type | `QueryCirculatingSupplyRequest` | [View source ↗](evmos/inflation/v1/query.ts) |
| Type | `QueryCirculatingSupplyResponse` | [View source ↗](evmos/inflation/v1/query.ts) |
| Type | `QueryEpochMintProvisionRequest` | [View source ↗](evmos/inflation/v1/query.ts) |
| Type | `QueryEpochMintProvisionResponse` | [View source ↗](evmos/inflation/v1/query.ts) |
| Type | `QueryInflationRateRequest` | [View source ↗](evmos/inflation/v1/query.ts) |
| Type | `QueryInflationRateResponse` | [View source ↗](evmos/inflation/v1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryPeriodRequest` | [View source ↗](evmos/inflation/v1/query.ts) |
| Type | `QueryPeriodResponse` | [View source ↗](evmos/inflation/v1/query.ts) |
| Type | `QuerySkippedEpochsRequest` | [View source ↗](evmos/inflation/v1/query.ts) |
| Type | `QuerySkippedEpochsResponse` | [View source ↗](evmos/inflation/v1/query.ts) |

### Query Methods

**Period**

Period retrieves current period.

```ts
import { getPeriod } from 'customchain-js/evmos/inflation/v1/query.rpc.func'
import { useGetPeriod } from 'customchain-js/evmos/inflation/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPeriod` | [View source ↗](evmos/inflation/v1/query.rpc.func.ts) |
| Hook | `useGetPeriod` | [View source ↗](evmos/inflation/v1/query.rpc.react.ts) |
| Request | `QueryPeriodRequest` | [View source ↗](evmos/inflation/v1/query.ts) |
| Response | `QueryPeriodResponse` | [View source ↗](evmos/inflation/v1/query.ts) |

---

**EpochMintProvision**

EpochMintProvision retrieves current minting epoch provision value.

```ts
import { getEpochMintProvision } from 'customchain-js/evmos/inflation/v1/query.rpc.func'
import { useGetEpochMintProvision } from 'customchain-js/evmos/inflation/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEpochMintProvision` | [View source ↗](evmos/inflation/v1/query.rpc.func.ts) |
| Hook | `useGetEpochMintProvision` | [View source ↗](evmos/inflation/v1/query.rpc.react.ts) |
| Request | `QueryEpochMintProvisionRequest` | [View source ↗](evmos/inflation/v1/query.ts) |
| Response | `QueryEpochMintProvisionResponse` | [View source ↗](evmos/inflation/v1/query.ts) |

---

**SkippedEpochs**

SkippedEpochs retrieves the total number of skipped epochs.

```ts
import { getSkippedEpochs } from 'customchain-js/evmos/inflation/v1/query.rpc.func'
import { useGetSkippedEpochs } from 'customchain-js/evmos/inflation/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSkippedEpochs` | [View source ↗](evmos/inflation/v1/query.rpc.func.ts) |
| Hook | `useGetSkippedEpochs` | [View source ↗](evmos/inflation/v1/query.rpc.react.ts) |
| Request | `QuerySkippedEpochsRequest` | [View source ↗](evmos/inflation/v1/query.ts) |
| Response | `QuerySkippedEpochsResponse` | [View source ↗](evmos/inflation/v1/query.ts) |

---

**CirculatingSupply**

CirculatingSupply retrieves the total number of tokens that are in circulation (i.e. excluding unvested tokens).

```ts
import { getCirculatingSupply } from 'customchain-js/evmos/inflation/v1/query.rpc.func'
import { useGetCirculatingSupply } from 'customchain-js/evmos/inflation/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCirculatingSupply` | [View source ↗](evmos/inflation/v1/query.rpc.func.ts) |
| Hook | `useGetCirculatingSupply` | [View source ↗](evmos/inflation/v1/query.rpc.react.ts) |
| Request | `QueryCirculatingSupplyRequest` | [View source ↗](evmos/inflation/v1/query.ts) |
| Response | `QueryCirculatingSupplyResponse` | [View source ↗](evmos/inflation/v1/query.ts) |

---

**InflationRate**

InflationRate retrieves the inflation rate of the current period.

```ts
import { getInflationRate } from 'customchain-js/evmos/inflation/v1/query.rpc.func'
import { useGetInflationRate } from 'customchain-js/evmos/inflation/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getInflationRate` | [View source ↗](evmos/inflation/v1/query.rpc.func.ts) |
| Hook | `useGetInflationRate` | [View source ↗](evmos/inflation/v1/query.rpc.react.ts) |
| Request | `QueryInflationRateRequest` | [View source ↗](evmos/inflation/v1/query.ts) |
| Response | `QueryInflationRateResponse` | [View source ↗](evmos/inflation/v1/query.ts) |

---

**Params**

Params retrieves the total set of minting parameters.

```ts
import { getEvmosInflationV1Params } from 'customchain-js/evmos/inflation/v1/query.rpc.func'
import { useGetEvmosInflationV1Params } from 'customchain-js/evmos/inflation/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEvmosInflationV1Params` | [View source ↗](evmos/inflation/v1/query.rpc.func.ts) |
| Hook | `useGetEvmosInflationV1Params` | [View source ↗](evmos/inflation/v1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](evmos/inflation/v1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](evmos/inflation/v1/query.ts) |


## evmos.recovery.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `EvmosRecoveryV1Params` | [View source ↗](evmos/recovery/v1/genesis.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |

### Query Methods

**Params**

Params retrieves the total set of recovery parameters.

```ts
import { getEvmosRecoveryV1Params } from 'customchain-js/evmos/recovery/v1/query.rpc.func'
import { useGetEvmosRecoveryV1Params } from 'customchain-js/evmos/recovery/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEvmosRecoveryV1Params` | [View source ↗](evmos/recovery/v1/query.rpc.func.ts) |
| Hook | `useGetEvmosRecoveryV1Params` | [View source ↗](evmos/recovery/v1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](evmos/recovery/v1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](evmos/recovery/v1/query.ts) |


## evmos.vesting.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `ClawbackVestingAccount` | [View source ↗](evmos/vesting/v1/vesting.ts) |
| Type | `MsgClawback` | [View source ↗](evmos/vesting/v1/tx.ts) |
| Type | `MsgClawbackResponse` | [View source ↗](evmos/vesting/v1/tx.ts) |
| Type | `MsgCreateClawbackVestingAccount` | [View source ↗](evmos/vesting/v1/tx.ts) |
| Type | `MsgCreateClawbackVestingAccountResponse` | [View source ↗](evmos/vesting/v1/tx.ts) |
| Type | `QueryBalancesRequest` | [View source ↗](evmos/vesting/v1/query.ts) |
| Type | `QueryBalancesResponse` | [View source ↗](evmos/vesting/v1/query.ts) |

### Query Methods

**Balances**

Retrieves the unvested, vested and locked tokens for a vesting account

```ts
import { getBalances } from 'customchain-js/evmos/vesting/v1/query.rpc.func'
import { useGetBalances } from 'customchain-js/evmos/vesting/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getBalances` | [View source ↗](evmos/vesting/v1/query.rpc.func.ts) |
| Hook | `useGetBalances` | [View source ↗](evmos/vesting/v1/query.rpc.react.ts) |
| Request | `QueryBalancesRequest` | [View source ↗](evmos/vesting/v1/query.ts) |
| Response | `QueryBalancesResponse` | [View source ↗](evmos/vesting/v1/query.ts) |

### Transaction Methods

**CreateClawbackVestingAccount**

CreateClawbackVestingAccount creats a vesting account that is subject to clawback and the configuration of vesting and lockup schedules.

```ts
import { createClawbackVestingAccount } from 'customchain-js/evmos/vesting/v1/tx.rpc.func'
import { useCreateClawbackVestingAccount } from 'customchain-js/evmos/vesting/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createClawbackVestingAccount` | [View source ↗](evmos/vesting/v1/tx.rpc.func.ts) |
| Hook | `useCreateClawbackVestingAccount` | [View source ↗](evmos/vesting/v1/tx.rpc.react.ts) |
| Request | `MsgCreateClawbackVestingAccount` | [View source ↗](evmos/vesting/v1/tx.ts) |
| Response | `MsgCreateClawbackVestingAccountResponse` | [View source ↗](evmos/vesting/v1/tx.ts) |

---

**Clawback**

Clawback removes the unvested tokens from a ClawbackVestingAccount.

```ts
import { clawback } from 'customchain-js/evmos/vesting/v1/tx.rpc.func'
import { useClawback } from 'customchain-js/evmos/vesting/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `clawback` | [View source ↗](evmos/vesting/v1/tx.rpc.func.ts) |
| Hook | `useClawback` | [View source ↗](evmos/vesting/v1/tx.rpc.react.ts) |
| Request | `MsgClawback` | [View source ↗](evmos/vesting/v1/tx.ts) |
| Response | `MsgClawbackResponse` | [View source ↗](evmos/vesting/v1/tx.ts) |


## ibc.applications.transfer.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `DenomTrace` | [View source ↗](ibc/applications/transfer/v1/transfer.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `IbcApplicationsTransferV1Params` | [View source ↗](ibc/applications/transfer/v1/transfer.ts) |
| Type | `MsgTransfer` | [View source ↗](ibc/applications/transfer/v1/tx.ts) |
| Type | `MsgTransferResponse` | [View source ↗](ibc/applications/transfer/v1/tx.ts) |
| Type | `QueryDenomTraceRequest` | [View source ↗](ibc/applications/transfer/v1/query.ts) |
| Type | `QueryDenomTraceResponse` | [View source ↗](ibc/applications/transfer/v1/query.ts) |
| Type | `QueryDenomTracesRequest` | [View source ↗](ibc/applications/transfer/v1/query.ts) |
| Type | `QueryDenomTracesResponse` | [View source ↗](ibc/applications/transfer/v1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |

### Query Methods

**DenomTrace**

DenomTrace queries a denomination trace information.

```ts
import { getDenomTrace } from 'customchain-js/ibc/applications/transfer/v1/query.rpc.func'
import { useGetDenomTrace } from 'customchain-js/ibc/applications/transfer/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDenomTrace` | [View source ↗](ibc/applications/transfer/v1/query.rpc.func.ts) |
| Hook | `useGetDenomTrace` | [View source ↗](ibc/applications/transfer/v1/query.rpc.react.ts) |
| Request | `QueryDenomTraceRequest` | [View source ↗](ibc/applications/transfer/v1/query.ts) |
| Response | `QueryDenomTraceResponse` | [View source ↗](ibc/applications/transfer/v1/query.ts) |

---

**DenomTraces**

DenomTraces queries all denomination traces.

```ts
import { getDenomTraces } from 'customchain-js/ibc/applications/transfer/v1/query.rpc.func'
import { useGetDenomTraces } from 'customchain-js/ibc/applications/transfer/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDenomTraces` | [View source ↗](ibc/applications/transfer/v1/query.rpc.func.ts) |
| Hook | `useGetDenomTraces` | [View source ↗](ibc/applications/transfer/v1/query.rpc.react.ts) |
| Request | `QueryDenomTracesRequest` | [View source ↗](ibc/applications/transfer/v1/query.ts) |
| Response | `QueryDenomTracesResponse` | [View source ↗](ibc/applications/transfer/v1/query.ts) |

---

**Params**

Params queries all parameters of the ibc-transfer module.

```ts
import { getIbcApplicationsTransferV1Params } from 'customchain-js/ibc/applications/transfer/v1/query.rpc.func'
import { useGetIbcApplicationsTransferV1Params } from 'customchain-js/ibc/applications/transfer/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getIbcApplicationsTransferV1Params` | [View source ↗](ibc/applications/transfer/v1/query.rpc.func.ts) |
| Hook | `useGetIbcApplicationsTransferV1Params` | [View source ↗](ibc/applications/transfer/v1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](ibc/applications/transfer/v1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](ibc/applications/transfer/v1/query.ts) |

### Transaction Methods

**Transfer**

Transfer defines a rpc handler method for MsgTransfer.

```ts
import { transfer } from 'customchain-js/ibc/applications/transfer/v1/tx.rpc.func'
import { useTransfer } from 'customchain-js/ibc/applications/transfer/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `transfer` | [View source ↗](ibc/applications/transfer/v1/tx.rpc.func.ts) |
| Hook | `useTransfer` | [View source ↗](ibc/applications/transfer/v1/tx.rpc.react.ts) |
| Request | `MsgTransfer` | [View source ↗](ibc/applications/transfer/v1/tx.ts) |
| Response | `MsgTransferResponse` | [View source ↗](ibc/applications/transfer/v1/tx.ts) |


## ibc.core.channel.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `Acknowledgement` | [View source ↗](ibc/core/channel/v1/channel.ts) |
| Type | `Channel` | [View source ↗](ibc/core/channel/v1/channel.ts) |
| Type | `Counterparty` | [View source ↗](ibc/core/channel/v1/channel.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `IdentifiedChannel` | [View source ↗](ibc/core/channel/v1/channel.ts) |
| Type | `MsgAcknowledgement` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgAcknowledgementResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgChannelCloseConfirm` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgChannelCloseConfirmResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgChannelCloseInit` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgChannelCloseInitResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgChannelOpenAck` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgChannelOpenAckResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgChannelOpenConfirm` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgChannelOpenConfirmResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgChannelOpenInit` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgChannelOpenInitResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgChannelOpenTry` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgChannelOpenTryResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgRecvPacket` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgRecvPacketResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgTimeout` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgTimeoutOnClose` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgTimeoutOnCloseResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `MsgTimeoutResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Type | `Order` | [View source ↗](akash/market/v1beta2/order.ts) |
| Type | `Packet` | [View source ↗](ibc/core/channel/v1/channel.ts) |
| Type | `PacketSequence` | [View source ↗](ibc/core/channel/v1/genesis.ts) |
| Type | `PacketState` | [View source ↗](ibc/core/channel/v1/channel.ts) |
| Type | `QueryChannelClientStateRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryChannelClientStateResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryChannelConsensusStateRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryChannelConsensusStateResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryChannelRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryChannelResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryChannelsRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryChannelsResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryConnectionChannelsRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryConnectionChannelsResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryNextSequenceReceiveRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryNextSequenceReceiveResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryPacketAcknowledgementRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryPacketAcknowledgementResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryPacketAcknowledgementsRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryPacketAcknowledgementsResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryPacketCommitmentRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryPacketCommitmentResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryPacketCommitmentsRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryPacketCommitmentsResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryPacketReceiptRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryPacketReceiptResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryUnreceivedAcksRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryUnreceivedAcksResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryUnreceivedPacketsRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `QueryUnreceivedPacketsResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Type | `State` | [View source ↗](google/api/serviceusage/v1/resources.ts) |

### Query Methods

**Channel**

Channel queries an IBC Channel.

```ts
import { getChannel } from 'customchain-js/ibc/core/channel/v1/query.rpc.func'
import { useGetChannel } from 'customchain-js/ibc/core/channel/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getChannel` | [View source ↗](ibc/core/channel/v1/query.rpc.func.ts) |
| Hook | `useGetChannel` | [View source ↗](ibc/core/channel/v1/query.rpc.react.ts) |
| Request | `QueryChannelRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Response | `QueryChannelResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |

---

**Channels**

Channels queries all the IBC channels of a chain.

```ts
import { getChannels } from 'customchain-js/ibc/core/channel/v1/query.rpc.func'
import { useGetChannels } from 'customchain-js/ibc/core/channel/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getChannels` | [View source ↗](ibc/core/channel/v1/query.rpc.func.ts) |
| Hook | `useGetChannels` | [View source ↗](ibc/core/channel/v1/query.rpc.react.ts) |
| Request | `QueryChannelsRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Response | `QueryChannelsResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |

---

**ConnectionChannels**

ConnectionChannels queries all the channels associated with a connection end.

```ts
import { getConnectionChannels } from 'customchain-js/ibc/core/channel/v1/query.rpc.func'
import { useGetConnectionChannels } from 'customchain-js/ibc/core/channel/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getConnectionChannels` | [View source ↗](ibc/core/channel/v1/query.rpc.func.ts) |
| Hook | `useGetConnectionChannels` | [View source ↗](ibc/core/channel/v1/query.rpc.react.ts) |
| Request | `QueryConnectionChannelsRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Response | `QueryConnectionChannelsResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |

---

**ChannelClientState**

ChannelClientState queries for the client state for the channel associated with the provided channel identifiers.

```ts
import { getChannelClientState } from 'customchain-js/ibc/core/channel/v1/query.rpc.func'
import { useGetChannelClientState } from 'customchain-js/ibc/core/channel/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getChannelClientState` | [View source ↗](ibc/core/channel/v1/query.rpc.func.ts) |
| Hook | `useGetChannelClientState` | [View source ↗](ibc/core/channel/v1/query.rpc.react.ts) |
| Request | `QueryChannelClientStateRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Response | `QueryChannelClientStateResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |

---

**ChannelConsensusState**

ChannelConsensusState queries for the consensus state for the channel associated with the provided channel identifiers.

```ts
import { getChannelConsensusState } from 'customchain-js/ibc/core/channel/v1/query.rpc.func'
import { useGetChannelConsensusState } from 'customchain-js/ibc/core/channel/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getChannelConsensusState` | [View source ↗](ibc/core/channel/v1/query.rpc.func.ts) |
| Hook | `useGetChannelConsensusState` | [View source ↗](ibc/core/channel/v1/query.rpc.react.ts) |
| Request | `QueryChannelConsensusStateRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Response | `QueryChannelConsensusStateResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |

---

**PacketCommitment**

PacketCommitment queries a stored packet commitment hash.

```ts
import { getPacketCommitment } from 'customchain-js/ibc/core/channel/v1/query.rpc.func'
import { useGetPacketCommitment } from 'customchain-js/ibc/core/channel/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPacketCommitment` | [View source ↗](ibc/core/channel/v1/query.rpc.func.ts) |
| Hook | `useGetPacketCommitment` | [View source ↗](ibc/core/channel/v1/query.rpc.react.ts) |
| Request | `QueryPacketCommitmentRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Response | `QueryPacketCommitmentResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |

---

**PacketCommitments**

PacketCommitments returns all the packet commitments hashes associated with a channel.

```ts
import { getPacketCommitments } from 'customchain-js/ibc/core/channel/v1/query.rpc.func'
import { useGetPacketCommitments } from 'customchain-js/ibc/core/channel/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPacketCommitments` | [View source ↗](ibc/core/channel/v1/query.rpc.func.ts) |
| Hook | `useGetPacketCommitments` | [View source ↗](ibc/core/channel/v1/query.rpc.react.ts) |
| Request | `QueryPacketCommitmentsRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Response | `QueryPacketCommitmentsResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |

---

**PacketReceipt**

PacketReceipt queries if a given packet sequence has been received on the queried chain

```ts
import { getPacketReceipt } from 'customchain-js/ibc/core/channel/v1/query.rpc.func'
import { useGetPacketReceipt } from 'customchain-js/ibc/core/channel/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPacketReceipt` | [View source ↗](ibc/core/channel/v1/query.rpc.func.ts) |
| Hook | `useGetPacketReceipt` | [View source ↗](ibc/core/channel/v1/query.rpc.react.ts) |
| Request | `QueryPacketReceiptRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Response | `QueryPacketReceiptResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |

---

**PacketAcknowledgement**

PacketAcknowledgement queries a stored packet acknowledgement hash.

```ts
import { getPacketAcknowledgement } from 'customchain-js/ibc/core/channel/v1/query.rpc.func'
import { useGetPacketAcknowledgement } from 'customchain-js/ibc/core/channel/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPacketAcknowledgement` | [View source ↗](ibc/core/channel/v1/query.rpc.func.ts) |
| Hook | `useGetPacketAcknowledgement` | [View source ↗](ibc/core/channel/v1/query.rpc.react.ts) |
| Request | `QueryPacketAcknowledgementRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Response | `QueryPacketAcknowledgementResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |

---

**PacketAcknowledgements**

PacketAcknowledgements returns all the packet acknowledgements associated with a channel.

```ts
import { getPacketAcknowledgements } from 'customchain-js/ibc/core/channel/v1/query.rpc.func'
import { useGetPacketAcknowledgements } from 'customchain-js/ibc/core/channel/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPacketAcknowledgements` | [View source ↗](ibc/core/channel/v1/query.rpc.func.ts) |
| Hook | `useGetPacketAcknowledgements` | [View source ↗](ibc/core/channel/v1/query.rpc.react.ts) |
| Request | `QueryPacketAcknowledgementsRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Response | `QueryPacketAcknowledgementsResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |

---

**UnreceivedPackets**

UnreceivedPackets returns all the unreceived IBC packets associated with a channel and sequences.

```ts
import { getUnreceivedPackets } from 'customchain-js/ibc/core/channel/v1/query.rpc.func'
import { useGetUnreceivedPackets } from 'customchain-js/ibc/core/channel/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getUnreceivedPackets` | [View source ↗](ibc/core/channel/v1/query.rpc.func.ts) |
| Hook | `useGetUnreceivedPackets` | [View source ↗](ibc/core/channel/v1/query.rpc.react.ts) |
| Request | `QueryUnreceivedPacketsRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Response | `QueryUnreceivedPacketsResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |

---

**UnreceivedAcks**

UnreceivedAcks returns all the unreceived IBC acknowledgements associated with a channel and sequences.

```ts
import { getUnreceivedAcks } from 'customchain-js/ibc/core/channel/v1/query.rpc.func'
import { useGetUnreceivedAcks } from 'customchain-js/ibc/core/channel/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getUnreceivedAcks` | [View source ↗](ibc/core/channel/v1/query.rpc.func.ts) |
| Hook | `useGetUnreceivedAcks` | [View source ↗](ibc/core/channel/v1/query.rpc.react.ts) |
| Request | `QueryUnreceivedAcksRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Response | `QueryUnreceivedAcksResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |

---

**NextSequenceReceive**

NextSequenceReceive returns the next receive sequence for a given channel.

```ts
import { getNextSequenceReceive } from 'customchain-js/ibc/core/channel/v1/query.rpc.func'
import { useGetNextSequenceReceive } from 'customchain-js/ibc/core/channel/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getNextSequenceReceive` | [View source ↗](ibc/core/channel/v1/query.rpc.func.ts) |
| Hook | `useGetNextSequenceReceive` | [View source ↗](ibc/core/channel/v1/query.rpc.react.ts) |
| Request | `QueryNextSequenceReceiveRequest` | [View source ↗](ibc/core/channel/v1/query.ts) |
| Response | `QueryNextSequenceReceiveResponse` | [View source ↗](ibc/core/channel/v1/query.ts) |

### Transaction Methods

**ChannelOpenInit**

ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.

```ts
import { channelOpenInit } from 'customchain-js/ibc/core/channel/v1/tx.rpc.func'
import { useChannelOpenInit } from 'customchain-js/ibc/core/channel/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `channelOpenInit` | [View source ↗](ibc/core/channel/v1/tx.rpc.func.ts) |
| Hook | `useChannelOpenInit` | [View source ↗](ibc/core/channel/v1/tx.rpc.react.ts) |
| Request | `MsgChannelOpenInit` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Response | `MsgChannelOpenInitResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |

---

**ChannelOpenTry**

ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.

```ts
import { channelOpenTry } from 'customchain-js/ibc/core/channel/v1/tx.rpc.func'
import { useChannelOpenTry } from 'customchain-js/ibc/core/channel/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `channelOpenTry` | [View source ↗](ibc/core/channel/v1/tx.rpc.func.ts) |
| Hook | `useChannelOpenTry` | [View source ↗](ibc/core/channel/v1/tx.rpc.react.ts) |
| Request | `MsgChannelOpenTry` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Response | `MsgChannelOpenTryResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |

---

**ChannelOpenAck**

ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.

```ts
import { channelOpenAck } from 'customchain-js/ibc/core/channel/v1/tx.rpc.func'
import { useChannelOpenAck } from 'customchain-js/ibc/core/channel/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `channelOpenAck` | [View source ↗](ibc/core/channel/v1/tx.rpc.func.ts) |
| Hook | `useChannelOpenAck` | [View source ↗](ibc/core/channel/v1/tx.rpc.react.ts) |
| Request | `MsgChannelOpenAck` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Response | `MsgChannelOpenAckResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |

---

**ChannelOpenConfirm**

ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.

```ts
import { channelOpenConfirm } from 'customchain-js/ibc/core/channel/v1/tx.rpc.func'
import { useChannelOpenConfirm } from 'customchain-js/ibc/core/channel/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `channelOpenConfirm` | [View source ↗](ibc/core/channel/v1/tx.rpc.func.ts) |
| Hook | `useChannelOpenConfirm` | [View source ↗](ibc/core/channel/v1/tx.rpc.react.ts) |
| Request | `MsgChannelOpenConfirm` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Response | `MsgChannelOpenConfirmResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |

---

**ChannelCloseInit**

ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.

```ts
import { channelCloseInit } from 'customchain-js/ibc/core/channel/v1/tx.rpc.func'
import { useChannelCloseInit } from 'customchain-js/ibc/core/channel/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `channelCloseInit` | [View source ↗](ibc/core/channel/v1/tx.rpc.func.ts) |
| Hook | `useChannelCloseInit` | [View source ↗](ibc/core/channel/v1/tx.rpc.react.ts) |
| Request | `MsgChannelCloseInit` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Response | `MsgChannelCloseInitResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |

---

**ChannelCloseConfirm**

ChannelCloseConfirm defines a rpc handler method for MsgChannelCloseConfirm.

```ts
import { channelCloseConfirm } from 'customchain-js/ibc/core/channel/v1/tx.rpc.func'
import { useChannelCloseConfirm } from 'customchain-js/ibc/core/channel/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `channelCloseConfirm` | [View source ↗](ibc/core/channel/v1/tx.rpc.func.ts) |
| Hook | `useChannelCloseConfirm` | [View source ↗](ibc/core/channel/v1/tx.rpc.react.ts) |
| Request | `MsgChannelCloseConfirm` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Response | `MsgChannelCloseConfirmResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |

---

**RecvPacket**

RecvPacket defines a rpc handler method for MsgRecvPacket.

```ts
import { recvPacket } from 'customchain-js/ibc/core/channel/v1/tx.rpc.func'
import { useRecvPacket } from 'customchain-js/ibc/core/channel/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `recvPacket` | [View source ↗](ibc/core/channel/v1/tx.rpc.func.ts) |
| Hook | `useRecvPacket` | [View source ↗](ibc/core/channel/v1/tx.rpc.react.ts) |
| Request | `MsgRecvPacket` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Response | `MsgRecvPacketResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |

---

**Timeout**

Timeout defines a rpc handler method for MsgTimeout.

```ts
import { timeout } from 'customchain-js/ibc/core/channel/v1/tx.rpc.func'
import { useTimeout } from 'customchain-js/ibc/core/channel/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `timeout` | [View source ↗](ibc/core/channel/v1/tx.rpc.func.ts) |
| Hook | `useTimeout` | [View source ↗](ibc/core/channel/v1/tx.rpc.react.ts) |
| Request | `MsgTimeout` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Response | `MsgTimeoutResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |

---

**TimeoutOnClose**

TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.

```ts
import { timeoutOnClose } from 'customchain-js/ibc/core/channel/v1/tx.rpc.func'
import { useTimeoutOnClose } from 'customchain-js/ibc/core/channel/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `timeoutOnClose` | [View source ↗](ibc/core/channel/v1/tx.rpc.func.ts) |
| Hook | `useTimeoutOnClose` | [View source ↗](ibc/core/channel/v1/tx.rpc.react.ts) |
| Request | `MsgTimeoutOnClose` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Response | `MsgTimeoutOnCloseResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |

---

**Acknowledgement**

Acknowledgement defines a rpc handler method for MsgAcknowledgement.

```ts
import { acknowledgement } from 'customchain-js/ibc/core/channel/v1/tx.rpc.func'
import { useAcknowledgement } from 'customchain-js/ibc/core/channel/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `acknowledgement` | [View source ↗](ibc/core/channel/v1/tx.rpc.func.ts) |
| Hook | `useAcknowledgement` | [View source ↗](ibc/core/channel/v1/tx.rpc.react.ts) |
| Request | `MsgAcknowledgement` | [View source ↗](ibc/core/channel/v1/tx.ts) |
| Response | `MsgAcknowledgementResponse` | [View source ↗](ibc/core/channel/v1/tx.ts) |


## ibc.core.client.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `ClientConsensusStates` | [View source ↗](ibc/core/client/v1/client.ts) |
| Type | `ClientUpdateProposal` | [View source ↗](ibc/core/client/v1/client.ts) |
| Type | `ConsensusStateWithHeight` | [View source ↗](ibc/core/client/v1/client.ts) |
| Type | `GenesisMetadata` | [View source ↗](ibc/core/client/v1/genesis.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `Height` | [View source ↗](ibc/core/client/v1/client.ts) |
| Type | `IbcCoreClientV1Params` | [View source ↗](ibc/core/client/v1/client.ts) |
| Type | `IdentifiedClientState` | [View source ↗](ibc/core/client/v1/client.ts) |
| Type | `IdentifiedGenesisMetadata` | [View source ↗](ibc/core/client/v1/genesis.ts) |
| Type | `MsgCreateClient` | [View source ↗](ibc/core/client/v1/tx.ts) |
| Type | `MsgCreateClientResponse` | [View source ↗](ibc/core/client/v1/tx.ts) |
| Type | `MsgSubmitMisbehaviour` | [View source ↗](ibc/core/client/v1/tx.ts) |
| Type | `MsgSubmitMisbehaviourResponse` | [View source ↗](ibc/core/client/v1/tx.ts) |
| Type | `MsgUpdateClient` | [View source ↗](ibc/core/client/v1/tx.ts) |
| Type | `MsgUpdateClientResponse` | [View source ↗](ibc/core/client/v1/tx.ts) |
| Type | `MsgUpgradeClient` | [View source ↗](ibc/core/client/v1/tx.ts) |
| Type | `MsgUpgradeClientResponse` | [View source ↗](ibc/core/client/v1/tx.ts) |
| Type | `QueryClientParamsRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryClientParamsResponse` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryClientStateRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryClientStateResponse` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryClientStatesRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryClientStatesResponse` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryClientStatusRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryClientStatusResponse` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryConsensusStateRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryConsensusStateResponse` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryConsensusStatesRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryConsensusStatesResponse` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryUpgradedClientStateRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryUpgradedClientStateResponse` | [View source ↗](ibc/core/client/v1/query.ts) |
| Type | `QueryUpgradedConsensusStateRequest` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Type | `QueryUpgradedConsensusStateResponse` | [View source ↗](cosmos/upgrade/v1beta1/query.ts) |
| Type | `UpgradeProposal` | [View source ↗](ibc/core/client/v1/client.ts) |

### Query Methods

**ClientState**

ClientState queries an IBC light client.

```ts
import { getClientState } from 'customchain-js/ibc/core/client/v1/query.rpc.func'
import { useGetClientState } from 'customchain-js/ibc/core/client/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getClientState` | [View source ↗](ibc/core/client/v1/query.rpc.func.ts) |
| Hook | `useGetClientState` | [View source ↗](ibc/core/client/v1/query.rpc.react.ts) |
| Request | `QueryClientStateRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Response | `QueryClientStateResponse` | [View source ↗](ibc/core/client/v1/query.ts) |

---

**ClientStates**

ClientStates queries all the IBC light clients of a chain.

```ts
import { getClientStates } from 'customchain-js/ibc/core/client/v1/query.rpc.func'
import { useGetClientStates } from 'customchain-js/ibc/core/client/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getClientStates` | [View source ↗](ibc/core/client/v1/query.rpc.func.ts) |
| Hook | `useGetClientStates` | [View source ↗](ibc/core/client/v1/query.rpc.react.ts) |
| Request | `QueryClientStatesRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Response | `QueryClientStatesResponse` | [View source ↗](ibc/core/client/v1/query.ts) |

---

**ConsensusState**

ConsensusState queries a consensus state associated with a client state at a given height.

```ts
import { getConsensusState } from 'customchain-js/ibc/core/client/v1/query.rpc.func'
import { useGetConsensusState } from 'customchain-js/ibc/core/client/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getConsensusState` | [View source ↗](ibc/core/client/v1/query.rpc.func.ts) |
| Hook | `useGetConsensusState` | [View source ↗](ibc/core/client/v1/query.rpc.react.ts) |
| Request | `QueryConsensusStateRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Response | `QueryConsensusStateResponse` | [View source ↗](ibc/core/client/v1/query.ts) |

---

**ConsensusStates**

ConsensusStates queries all the consensus state associated with a given client.

```ts
import { getConsensusStates } from 'customchain-js/ibc/core/client/v1/query.rpc.func'
import { useGetConsensusStates } from 'customchain-js/ibc/core/client/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getConsensusStates` | [View source ↗](ibc/core/client/v1/query.rpc.func.ts) |
| Hook | `useGetConsensusStates` | [View source ↗](ibc/core/client/v1/query.rpc.react.ts) |
| Request | `QueryConsensusStatesRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Response | `QueryConsensusStatesResponse` | [View source ↗](ibc/core/client/v1/query.ts) |

---

**ClientStatus**

Status queries the status of an IBC client.

```ts
import { getClientStatus } from 'customchain-js/ibc/core/client/v1/query.rpc.func'
import { useGetClientStatus } from 'customchain-js/ibc/core/client/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getClientStatus` | [View source ↗](ibc/core/client/v1/query.rpc.func.ts) |
| Hook | `useGetClientStatus` | [View source ↗](ibc/core/client/v1/query.rpc.react.ts) |
| Request | `QueryClientStatusRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Response | `QueryClientStatusResponse` | [View source ↗](ibc/core/client/v1/query.ts) |

---

**ClientParams**

ClientParams queries all parameters of the ibc client.

```ts
import { getClientParams } from 'customchain-js/ibc/core/client/v1/query.rpc.func'
import { useGetClientParams } from 'customchain-js/ibc/core/client/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getClientParams` | [View source ↗](ibc/core/client/v1/query.rpc.func.ts) |
| Hook | `useGetClientParams` | [View source ↗](ibc/core/client/v1/query.rpc.react.ts) |
| Request | `QueryClientParamsRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Response | `QueryClientParamsResponse` | [View source ↗](ibc/core/client/v1/query.ts) |

---

**UpgradedClientState**

UpgradedClientState queries an Upgraded IBC light client.

```ts
import { getUpgradedClientState } from 'customchain-js/ibc/core/client/v1/query.rpc.func'
import { useGetUpgradedClientState } from 'customchain-js/ibc/core/client/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getUpgradedClientState` | [View source ↗](ibc/core/client/v1/query.rpc.func.ts) |
| Hook | `useGetUpgradedClientState` | [View source ↗](ibc/core/client/v1/query.rpc.react.ts) |
| Request | `QueryUpgradedClientStateRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Response | `QueryUpgradedClientStateResponse` | [View source ↗](ibc/core/client/v1/query.ts) |

---

**UpgradedConsensusState**

UpgradedConsensusState queries an Upgraded IBC consensus state.

```ts
import { getUpgradedConsensusStateIbcCoreClientV1 } from 'customchain-js/ibc/bundle'
import { useGetUpgradedConsensusStateIbcCoreClientV1 } from 'customchain-js/ibc/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getUpgradedConsensusStateIbcCoreClientV1` | [View source ↗](ibc/core/client/v1/query.rpc.func.ts) |
| Hook | `useGetUpgradedConsensusStateIbcCoreClientV1` | [View source ↗](ibc/core/client/v1/query.rpc.react.ts) |
| Request | `QueryUpgradedConsensusStateRequest` | [View source ↗](ibc/core/client/v1/query.ts) |
| Response | `QueryUpgradedConsensusStateResponse` | [View source ↗](ibc/core/client/v1/query.ts) |

### Transaction Methods

**CreateClient**

CreateClient defines a rpc handler method for MsgCreateClient.

```ts
import { createClient } from 'customchain-js/ibc/core/client/v1/tx.rpc.func'
import { useCreateClient } from 'customchain-js/ibc/core/client/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createClient` | [View source ↗](ibc/core/client/v1/tx.rpc.func.ts) |
| Hook | `useCreateClient` | [View source ↗](ibc/core/client/v1/tx.rpc.react.ts) |
| Request | `MsgCreateClient` | [View source ↗](ibc/core/client/v1/tx.ts) |
| Response | `MsgCreateClientResponse` | [View source ↗](ibc/core/client/v1/tx.ts) |

---

**UpdateClient**

UpdateClient defines a rpc handler method for MsgUpdateClient.

```ts
import { updateClient } from 'customchain-js/ibc/core/client/v1/tx.rpc.func'
import { useUpdateClient } from 'customchain-js/ibc/core/client/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `updateClient` | [View source ↗](ibc/core/client/v1/tx.rpc.func.ts) |
| Hook | `useUpdateClient` | [View source ↗](ibc/core/client/v1/tx.rpc.react.ts) |
| Request | `MsgUpdateClient` | [View source ↗](ibc/core/client/v1/tx.ts) |
| Response | `MsgUpdateClientResponse` | [View source ↗](ibc/core/client/v1/tx.ts) |

---

**UpgradeClient**

UpgradeClient defines a rpc handler method for MsgUpgradeClient.

```ts
import { upgradeClient } from 'customchain-js/ibc/core/client/v1/tx.rpc.func'
import { useUpgradeClient } from 'customchain-js/ibc/core/client/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `upgradeClient` | [View source ↗](ibc/core/client/v1/tx.rpc.func.ts) |
| Hook | `useUpgradeClient` | [View source ↗](ibc/core/client/v1/tx.rpc.react.ts) |
| Request | `MsgUpgradeClient` | [View source ↗](ibc/core/client/v1/tx.ts) |
| Response | `MsgUpgradeClientResponse` | [View source ↗](ibc/core/client/v1/tx.ts) |

---

**SubmitMisbehaviour**

SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.

```ts
import { submitMisbehaviour } from 'customchain-js/ibc/core/client/v1/tx.rpc.func'
import { useSubmitMisbehaviour } from 'customchain-js/ibc/core/client/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `submitMisbehaviour` | [View source ↗](ibc/core/client/v1/tx.rpc.func.ts) |
| Hook | `useSubmitMisbehaviour` | [View source ↗](ibc/core/client/v1/tx.rpc.react.ts) |
| Request | `MsgSubmitMisbehaviour` | [View source ↗](ibc/core/client/v1/tx.ts) |
| Response | `MsgSubmitMisbehaviourResponse` | [View source ↗](ibc/core/client/v1/tx.ts) |


## ibc.core.connection.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `ClientPaths` | [View source ↗](ibc/core/connection/v1/connection.ts) |
| Type | `ConnectionEnd` | [View source ↗](ibc/core/connection/v1/connection.ts) |
| Type | `ConnectionPaths` | [View source ↗](ibc/core/connection/v1/connection.ts) |
| Type | `Counterparty` | [View source ↗](ibc/core/channel/v1/channel.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `IbcCoreConnectionV1Params` | [View source ↗](ibc/core/connection/v1/connection.ts) |
| Type | `IdentifiedConnection` | [View source ↗](ibc/core/connection/v1/connection.ts) |
| Type | `MsgConnectionOpenAck` | [View source ↗](ibc/core/connection/v1/tx.ts) |
| Type | `MsgConnectionOpenAckResponse` | [View source ↗](ibc/core/connection/v1/tx.ts) |
| Type | `MsgConnectionOpenConfirm` | [View source ↗](ibc/core/connection/v1/tx.ts) |
| Type | `MsgConnectionOpenConfirmResponse` | [View source ↗](ibc/core/connection/v1/tx.ts) |
| Type | `MsgConnectionOpenInit` | [View source ↗](ibc/core/connection/v1/tx.ts) |
| Type | `MsgConnectionOpenInitResponse` | [View source ↗](ibc/core/connection/v1/tx.ts) |
| Type | `MsgConnectionOpenTry` | [View source ↗](ibc/core/connection/v1/tx.ts) |
| Type | `MsgConnectionOpenTryResponse` | [View source ↗](ibc/core/connection/v1/tx.ts) |
| Type | `QueryClientConnectionsRequest` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Type | `QueryClientConnectionsResponse` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Type | `QueryConnectionClientStateRequest` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Type | `QueryConnectionClientStateResponse` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Type | `QueryConnectionConsensusStateRequest` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Type | `QueryConnectionConsensusStateResponse` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Type | `QueryConnectionRequest` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Type | `QueryConnectionResponse` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Type | `QueryConnectionsRequest` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Type | `QueryConnectionsResponse` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Type | `State` | [View source ↗](google/api/serviceusage/v1/resources.ts) |
| Type | `Version` | [View source ↗](google/protobuf/compiler/plugin.ts) |

### Query Methods

**Connection**

Connection queries an IBC connection end.

```ts
import { getConnection } from 'customchain-js/ibc/core/connection/v1/query.rpc.func'
import { useGetConnection } from 'customchain-js/ibc/core/connection/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getConnection` | [View source ↗](ibc/core/connection/v1/query.rpc.func.ts) |
| Hook | `useGetConnection` | [View source ↗](ibc/core/connection/v1/query.rpc.react.ts) |
| Request | `QueryConnectionRequest` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Response | `QueryConnectionResponse` | [View source ↗](ibc/core/connection/v1/query.ts) |

---

**Connections**

Connections queries all the IBC connections of a chain.

```ts
import { getConnections } from 'customchain-js/ibc/core/connection/v1/query.rpc.func'
import { useGetConnections } from 'customchain-js/ibc/core/connection/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getConnections` | [View source ↗](ibc/core/connection/v1/query.rpc.func.ts) |
| Hook | `useGetConnections` | [View source ↗](ibc/core/connection/v1/query.rpc.react.ts) |
| Request | `QueryConnectionsRequest` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Response | `QueryConnectionsResponse` | [View source ↗](ibc/core/connection/v1/query.ts) |

---

**ClientConnections**

ClientConnections queries the connection paths associated with a client state.

```ts
import { getClientConnections } from 'customchain-js/ibc/core/connection/v1/query.rpc.func'
import { useGetClientConnections } from 'customchain-js/ibc/core/connection/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getClientConnections` | [View source ↗](ibc/core/connection/v1/query.rpc.func.ts) |
| Hook | `useGetClientConnections` | [View source ↗](ibc/core/connection/v1/query.rpc.react.ts) |
| Request | `QueryClientConnectionsRequest` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Response | `QueryClientConnectionsResponse` | [View source ↗](ibc/core/connection/v1/query.ts) |

---

**ConnectionClientState**

ConnectionClientState queries the client state associated with the connection.

```ts
import { getConnectionClientState } from 'customchain-js/ibc/core/connection/v1/query.rpc.func'
import { useGetConnectionClientState } from 'customchain-js/ibc/core/connection/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getConnectionClientState` | [View source ↗](ibc/core/connection/v1/query.rpc.func.ts) |
| Hook | `useGetConnectionClientState` | [View source ↗](ibc/core/connection/v1/query.rpc.react.ts) |
| Request | `QueryConnectionClientStateRequest` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Response | `QueryConnectionClientStateResponse` | [View source ↗](ibc/core/connection/v1/query.ts) |

---

**ConnectionConsensusState**

ConnectionConsensusState queries the consensus state associated with the connection.

```ts
import { getConnectionConsensusState } from 'customchain-js/ibc/core/connection/v1/query.rpc.func'
import { useGetConnectionConsensusState } from 'customchain-js/ibc/core/connection/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getConnectionConsensusState` | [View source ↗](ibc/core/connection/v1/query.rpc.func.ts) |
| Hook | `useGetConnectionConsensusState` | [View source ↗](ibc/core/connection/v1/query.rpc.react.ts) |
| Request | `QueryConnectionConsensusStateRequest` | [View source ↗](ibc/core/connection/v1/query.ts) |
| Response | `QueryConnectionConsensusStateResponse` | [View source ↗](ibc/core/connection/v1/query.ts) |

### Transaction Methods

**ConnectionOpenInit**

ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit.

```ts
import { connectionOpenInit } from 'customchain-js/ibc/core/connection/v1/tx.rpc.func'
import { useConnectionOpenInit } from 'customchain-js/ibc/core/connection/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `connectionOpenInit` | [View source ↗](ibc/core/connection/v1/tx.rpc.func.ts) |
| Hook | `useConnectionOpenInit` | [View source ↗](ibc/core/connection/v1/tx.rpc.react.ts) |
| Request | `MsgConnectionOpenInit` | [View source ↗](ibc/core/connection/v1/tx.ts) |
| Response | `MsgConnectionOpenInitResponse` | [View source ↗](ibc/core/connection/v1/tx.ts) |

---

**ConnectionOpenTry**

ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry.

```ts
import { connectionOpenTry } from 'customchain-js/ibc/core/connection/v1/tx.rpc.func'
import { useConnectionOpenTry } from 'customchain-js/ibc/core/connection/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `connectionOpenTry` | [View source ↗](ibc/core/connection/v1/tx.rpc.func.ts) |
| Hook | `useConnectionOpenTry` | [View source ↗](ibc/core/connection/v1/tx.rpc.react.ts) |
| Request | `MsgConnectionOpenTry` | [View source ↗](ibc/core/connection/v1/tx.ts) |
| Response | `MsgConnectionOpenTryResponse` | [View source ↗](ibc/core/connection/v1/tx.ts) |

---

**ConnectionOpenAck**

ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck.

```ts
import { connectionOpenAck } from 'customchain-js/ibc/core/connection/v1/tx.rpc.func'
import { useConnectionOpenAck } from 'customchain-js/ibc/core/connection/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `connectionOpenAck` | [View source ↗](ibc/core/connection/v1/tx.rpc.func.ts) |
| Hook | `useConnectionOpenAck` | [View source ↗](ibc/core/connection/v1/tx.rpc.react.ts) |
| Request | `MsgConnectionOpenAck` | [View source ↗](ibc/core/connection/v1/tx.ts) |
| Response | `MsgConnectionOpenAckResponse` | [View source ↗](ibc/core/connection/v1/tx.ts) |

---

**ConnectionOpenConfirm**

ConnectionOpenConfirm defines a rpc handler method for MsgConnectionOpenConfirm.

```ts
import { connectionOpenConfirm } from 'customchain-js/ibc/core/connection/v1/tx.rpc.func'
import { useConnectionOpenConfirm } from 'customchain-js/ibc/core/connection/v1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `connectionOpenConfirm` | [View source ↗](ibc/core/connection/v1/tx.rpc.func.ts) |
| Hook | `useConnectionOpenConfirm` | [View source ↗](ibc/core/connection/v1/tx.rpc.react.ts) |
| Request | `MsgConnectionOpenConfirm` | [View source ↗](ibc/core/connection/v1/tx.ts) |
| Response | `MsgConnectionOpenConfirmResponse` | [View source ↗](ibc/core/connection/v1/tx.ts) |


## ibc.core.port.v1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `QueryAppVersionRequest` | [View source ↗](ibc/core/port/v1/query.ts) |
| Type | `QueryAppVersionResponse` | [View source ↗](ibc/core/port/v1/query.ts) |

### Query Methods

**AppVersion**

AppVersion queries an IBC Port and determines the appropriate application version to be used

```ts
import { getAppVersion } from 'customchain-js/ibc/core/port/v1/query.rpc.func'
import { useGetAppVersion } from 'customchain-js/ibc/core/port/v1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAppVersion` | [View source ↗](ibc/core/port/v1/query.rpc.func.ts) |
| Hook | `useGetAppVersion` | [View source ↗](ibc/core/port/v1/query.rpc.react.ts) |
| Request | `QueryAppVersionRequest` | [View source ↗](ibc/core/port/v1/query.ts) |
| Response | `QueryAppVersionResponse` | [View source ↗](ibc/core/port/v1/query.ts) |


## osmosis.claim.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `Action` | [View source ↗](evmos/claims/v1/claims.ts) |
| Type | `ClaimRecord` | [View source ↗](osmosis/claim/v1beta1/claim.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `OsmosisClaimV1beta1Params` | [View source ↗](osmosis/claim/v1beta1/params.ts) |
| Type | `QueryClaimableForActionRequest` | [View source ↗](osmosis/claim/v1beta1/query.ts) |
| Type | `QueryClaimableForActionResponse` | [View source ↗](osmosis/claim/v1beta1/query.ts) |
| Type | `QueryClaimRecordRequest` | [View source ↗](osmosis/claim/v1beta1/query.ts) |
| Type | `QueryClaimRecordResponse` | [View source ↗](osmosis/claim/v1beta1/query.ts) |
| Type | `QueryModuleAccountBalanceRequest` | [View source ↗](osmosis/claim/v1beta1/query.ts) |
| Type | `QueryModuleAccountBalanceResponse` | [View source ↗](osmosis/claim/v1beta1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryTotalClaimableRequest` | [View source ↗](osmosis/claim/v1beta1/query.ts) |
| Type | `QueryTotalClaimableResponse` | [View source ↗](osmosis/claim/v1beta1/query.ts) |

### Query Methods

**ModuleAccountBalance**

```ts
import { getModuleAccountBalance } from 'customchain-js/osmosis/claim/v1beta1/query.rpc.func'
import { useGetModuleAccountBalance } from 'customchain-js/osmosis/claim/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getModuleAccountBalance` | [View source ↗](osmosis/claim/v1beta1/query.rpc.func.ts) |
| Hook | `useGetModuleAccountBalance` | [View source ↗](osmosis/claim/v1beta1/query.rpc.react.ts) |
| Request | `QueryModuleAccountBalanceRequest` | [View source ↗](osmosis/claim/v1beta1/query.ts) |
| Response | `QueryModuleAccountBalanceResponse` | [View source ↗](osmosis/claim/v1beta1/query.ts) |

---

**Params**

```ts
import { getOsmosisClaimV1beta1Params } from 'customchain-js/osmosis/claim/v1beta1/query.rpc.func'
import { useGetOsmosisClaimV1beta1Params } from 'customchain-js/osmosis/claim/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getOsmosisClaimV1beta1Params` | [View source ↗](osmosis/claim/v1beta1/query.rpc.func.ts) |
| Hook | `useGetOsmosisClaimV1beta1Params` | [View source ↗](osmosis/claim/v1beta1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](osmosis/claim/v1beta1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](osmosis/claim/v1beta1/query.ts) |

---

**ClaimRecord**

```ts
import { getClaimRecord } from 'customchain-js/osmosis/claim/v1beta1/query.rpc.func'
import { useGetClaimRecord } from 'customchain-js/osmosis/claim/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getClaimRecord` | [View source ↗](osmosis/claim/v1beta1/query.rpc.func.ts) |
| Hook | `useGetClaimRecord` | [View source ↗](osmosis/claim/v1beta1/query.rpc.react.ts) |
| Request | `QueryClaimRecordRequest` | [View source ↗](osmosis/claim/v1beta1/query.ts) |
| Response | `QueryClaimRecordResponse` | [View source ↗](osmosis/claim/v1beta1/query.ts) |

---

**ClaimableForAction**

```ts
import { getClaimableForAction } from 'customchain-js/osmosis/claim/v1beta1/query.rpc.func'
import { useGetClaimableForAction } from 'customchain-js/osmosis/claim/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getClaimableForAction` | [View source ↗](osmosis/claim/v1beta1/query.rpc.func.ts) |
| Hook | `useGetClaimableForAction` | [View source ↗](osmosis/claim/v1beta1/query.rpc.react.ts) |
| Request | `QueryClaimableForActionRequest` | [View source ↗](osmosis/claim/v1beta1/query.ts) |
| Response | `QueryClaimableForActionResponse` | [View source ↗](osmosis/claim/v1beta1/query.ts) |

---

**TotalClaimable**

```ts
import { getTotalClaimable } from 'customchain-js/osmosis/claim/v1beta1/query.rpc.func'
import { useGetTotalClaimable } from 'customchain-js/osmosis/claim/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTotalClaimable` | [View source ↗](osmosis/claim/v1beta1/query.rpc.func.ts) |
| Hook | `useGetTotalClaimable` | [View source ↗](osmosis/claim/v1beta1/query.rpc.react.ts) |
| Request | `QueryTotalClaimableRequest` | [View source ↗](osmosis/claim/v1beta1/query.ts) |
| Response | `QueryTotalClaimableResponse` | [View source ↗](osmosis/claim/v1beta1/query.ts) |


## osmosis.epochs.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `EpochInfo` | [View source ↗](evmos/epochs/v1/genesis.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `QueryCurrentEpochRequest` | [View source ↗](evmos/epochs/v1/query.ts) |
| Type | `QueryCurrentEpochResponse` | [View source ↗](evmos/epochs/v1/query.ts) |
| Type | `QueryEpochsInfoRequest` | [View source ↗](evmos/epochs/v1/query.ts) |
| Type | `QueryEpochsInfoResponse` | [View source ↗](evmos/epochs/v1/query.ts) |

### Query Methods

**EpochInfos**

EpochInfos provide running epochInfos

```ts
import { getEpochInfosOsmosisEpochsV1beta1 } from 'customchain-js/osmosis/bundle'
import { useGetEpochInfosOsmosisEpochsV1beta1 } from 'customchain-js/osmosis/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEpochInfosOsmosisEpochsV1beta1` | [View source ↗](osmosis/epochs/query.rpc.func.ts) |
| Hook | `useGetEpochInfosOsmosisEpochsV1beta1` | [View source ↗](osmosis/epochs/query.rpc.react.ts) |
| Request | `QueryEpochsInfoRequest` | [View source ↗](osmosis/epochs/query.ts) |
| Response | `QueryEpochsInfoResponse` | [View source ↗](osmosis/epochs/query.ts) |

---

**CurrentEpoch**

CurrentEpoch provide current epoch of specified identifier

```ts
import { getCurrentEpochOsmosisEpochsV1beta1 } from 'customchain-js/osmosis/bundle'
import { useGetCurrentEpochOsmosisEpochsV1beta1 } from 'customchain-js/osmosis/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCurrentEpochOsmosisEpochsV1beta1` | [View source ↗](osmosis/epochs/query.rpc.func.ts) |
| Hook | `useGetCurrentEpochOsmosisEpochsV1beta1` | [View source ↗](osmosis/epochs/query.rpc.react.ts) |
| Request | `QueryCurrentEpochRequest` | [View source ↗](osmosis/epochs/query.ts) |
| Response | `QueryCurrentEpochResponse` | [View source ↗](osmosis/epochs/query.ts) |


## osmosis.gamm.poolmodels.balancer.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `MsgCreateBalancerPool` | [View source ↗](osmosis/gamm/pool-models/balancer/tx/tx.ts) |
| Type | `MsgCreateBalancerPoolResponse` | [View source ↗](osmosis/gamm/pool-models/balancer/tx/tx.ts) |

### Transaction Methods

**CreateBalancerPool**

```ts
import { createBalancerPool } from 'customchain-js/osmosis/gamm/pool-models/balancer/tx/tx.rpc.func'
import { useCreateBalancerPool } from 'customchain-js/osmosis/gamm/pool-models/balancer/tx/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createBalancerPool` | [View source ↗](osmosis/gamm/pool-models/balancer/tx/tx.rpc.func.ts) |
| Hook | `useCreateBalancerPool` | [View source ↗](osmosis/gamm/pool-models/balancer/tx/tx.rpc.react.ts) |
| Request | `MsgCreateBalancerPool` | [View source ↗](osmosis/gamm/pool-models/balancer/tx/tx.ts) |
| Response | `MsgCreateBalancerPoolResponse` | [View source ↗](osmosis/gamm/pool-models/balancer/tx/tx.ts) |


## osmosis.gamm.poolmodels.stableswap.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `MsgCreateStableswapPool` | [View source ↗](osmosis/gamm/pool-models/stableswap/tx.ts) |
| Type | `MsgCreateStableswapPoolResponse` | [View source ↗](osmosis/gamm/pool-models/stableswap/tx.ts) |
| Type | `MsgStableSwapAdjustScalingFactors` | [View source ↗](osmosis/gamm/pool-models/stableswap/tx.ts) |
| Type | `MsgStableSwapAdjustScalingFactorsResponse` | [View source ↗](osmosis/gamm/pool-models/stableswap/tx.ts) |
| Type | `Pool` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `PoolParams` | [View source ↗](osmosis/gamm/pool-models/balancer/balancerPool.ts) |

### Transaction Methods

**CreateStableswapPool**

```ts
import { createStableswapPool } from 'customchain-js/osmosis/gamm/pool-models/stableswap/tx.rpc.func'
import { useCreateStableswapPool } from 'customchain-js/osmosis/gamm/pool-models/stableswap/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createStableswapPool` | [View source ↗](osmosis/gamm/pool-models/stableswap/tx.rpc.func.ts) |
| Hook | `useCreateStableswapPool` | [View source ↗](osmosis/gamm/pool-models/stableswap/tx.rpc.react.ts) |
| Request | `MsgCreateStableswapPool` | [View source ↗](osmosis/gamm/pool-models/stableswap/tx.ts) |
| Response | `MsgCreateStableswapPoolResponse` | [View source ↗](osmosis/gamm/pool-models/stableswap/tx.ts) |

---

**StableSwapAdjustScalingFactors**

```ts
import { stableSwapAdjustScalingFactors } from 'customchain-js/osmosis/gamm/pool-models/stableswap/tx.rpc.func'
import { useStableSwapAdjustScalingFactors } from 'customchain-js/osmosis/gamm/pool-models/stableswap/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `stableSwapAdjustScalingFactors` | [View source ↗](osmosis/gamm/pool-models/stableswap/tx.rpc.func.ts) |
| Hook | `useStableSwapAdjustScalingFactors` | [View source ↗](osmosis/gamm/pool-models/stableswap/tx.rpc.react.ts) |
| Request | `MsgStableSwapAdjustScalingFactors` | [View source ↗](osmosis/gamm/pool-models/stableswap/tx.ts) |
| Response | `MsgStableSwapAdjustScalingFactorsResponse` | [View source ↗](osmosis/gamm/pool-models/stableswap/tx.ts) |


## osmosis.gamm.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MsgExitPool` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgExitPoolResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgExitSwapExternAmountOut` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgExitSwapExternAmountOutResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgExitSwapShareAmountIn` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgExitSwapShareAmountInResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgJoinPool` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgJoinPoolResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgJoinSwapExternAmountIn` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgJoinSwapExternAmountInResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgJoinSwapShareAmountOut` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgJoinSwapShareAmountOutResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgSwapExactAmountIn` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgSwapExactAmountInResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgSwapExactAmountOut` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `MsgSwapExactAmountOutResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `OsmosisGammV1beta1Params` | [View source ↗](osmosis/gamm/v1beta1/genesis.ts) |
| Type | `Pool` | [View source ↗](cosmos/staking/v1beta1/staking.ts) |
| Type | `PoolAsset` | [View source ↗](osmosis/gamm/pool-models/balancer/balancerPool.ts) |
| Type | `PoolParams` | [View source ↗](osmosis/gamm/pool-models/balancer/balancerPool.ts) |
| Type | `QueryCalcExitPoolCoinsFromSharesRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryCalcExitPoolCoinsFromSharesResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryCalcJoinPoolNoSwapSharesRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryCalcJoinPoolNoSwapSharesResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryCalcJoinPoolSharesRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryCalcJoinPoolSharesResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryNumPoolsRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryNumPoolsResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryPoolParamsRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryPoolParamsResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryPoolRequest` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryPoolResponse` | [View source ↗](cosmos/staking/v1beta1/query.ts) |
| Type | `QueryPoolsRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryPoolsResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryPoolsWithFilterRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryPoolsWithFilterResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryPoolTypeRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryPoolTypeResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QuerySpotPriceRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QuerySpotPriceResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QuerySwapExactAmountInRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QuerySwapExactAmountInResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QuerySwapExactAmountOutRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QuerySwapExactAmountOutResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryTotalLiquidityRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryTotalLiquidityResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryTotalPoolLiquidityRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryTotalPoolLiquidityResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryTotalSharesRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QueryTotalSharesResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `SmoothWeightChangeParams` | [View source ↗](osmosis/gamm/pool-models/balancer/balancerPool.ts) |
| Type | `SwapAmountInRoute` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Type | `SwapAmountOutRoute` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |

### Query Methods

**Pools**

```ts
import { getPools } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.func'
import { useGetPools } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPools` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetPools` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QueryPoolsRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QueryPoolsResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**NumPools**

```ts
import { getNumPools } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.func'
import { useGetNumPools } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getNumPools` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetNumPools` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QueryNumPoolsRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QueryNumPoolsResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**TotalLiquidity**

```ts
import { getTotalLiquidity } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.func'
import { useGetTotalLiquidity } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTotalLiquidity` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetTotalLiquidity` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QueryTotalLiquidityRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QueryTotalLiquidityResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**PoolsWithFilter**

PoolsWithFilter allows you to query specific pools with requested parameters

```ts
import { getPoolsWithFilter } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.func'
import { useGetPoolsWithFilter } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPoolsWithFilter` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetPoolsWithFilter` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QueryPoolsWithFilterRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QueryPoolsWithFilterResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**Pool**

Per Pool gRPC Endpoints

```ts
import { getPoolOsmosisGammV1beta1 } from 'customchain-js/osmosis/bundle'
import { useGetPoolOsmosisGammV1beta1 } from 'customchain-js/osmosis/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPoolOsmosisGammV1beta1` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetPoolOsmosisGammV1beta1` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QueryPoolRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QueryPoolResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**PoolType**

PoolType returns the type of the pool. Returns "Balancer" as a string literal when the pool is a balancer pool. Errors if the pool is failed to be type caseted.

```ts
import { getPoolType } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.func'
import { useGetPoolType } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPoolType` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetPoolType` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QueryPoolTypeRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QueryPoolTypeResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**CalcJoinPoolNoSwapShares**

Simulates joining pool without a swap. Returns the amount of shares you'd get and tokens needed to provide

```ts
import { getCalcJoinPoolNoSwapShares } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.func'
import { useGetCalcJoinPoolNoSwapShares } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCalcJoinPoolNoSwapShares` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetCalcJoinPoolNoSwapShares` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QueryCalcJoinPoolNoSwapSharesRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QueryCalcJoinPoolNoSwapSharesResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**CalcJoinPoolShares**

```ts
import { getCalcJoinPoolShares } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.func'
import { useGetCalcJoinPoolShares } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCalcJoinPoolShares` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetCalcJoinPoolShares` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QueryCalcJoinPoolSharesRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QueryCalcJoinPoolSharesResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**CalcExitPoolCoinsFromShares**

```ts
import { getCalcExitPoolCoinsFromShares } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.func'
import { useGetCalcExitPoolCoinsFromShares } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getCalcExitPoolCoinsFromShares` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetCalcExitPoolCoinsFromShares` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QueryCalcExitPoolCoinsFromSharesRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QueryCalcExitPoolCoinsFromSharesResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**PoolParams**

```ts
import { getPoolParams } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.func'
import { useGetPoolParams } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getPoolParams` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetPoolParams` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QueryPoolParamsRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QueryPoolParamsResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**TotalPoolLiquidity**

```ts
import { getTotalPoolLiquidity } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.func'
import { useGetTotalPoolLiquidity } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTotalPoolLiquidity` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetTotalPoolLiquidity` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QueryTotalPoolLiquidityRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QueryTotalPoolLiquidityResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**TotalShares**

```ts
import { getTotalShares } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.func'
import { useGetTotalShares } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTotalShares` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetTotalShares` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QueryTotalSharesRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QueryTotalSharesResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**SpotPrice**

SpotPrice defines a gRPC query handler that returns the spot price given a base denomination and a quote denomination.

```ts
import { getSpotPriceOsmosisGammV1beta1 } from 'customchain-js/osmosis/bundle'
import { useGetSpotPriceOsmosisGammV1beta1 } from 'customchain-js/osmosis/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSpotPriceOsmosisGammV1beta1` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetSpotPriceOsmosisGammV1beta1` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QuerySpotPriceRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QuerySpotPriceResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**EstimateSwapExactAmountIn**

Estimate the swap.

```ts
import { getEstimateSwapExactAmountIn } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.func'
import { useGetEstimateSwapExactAmountIn } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEstimateSwapExactAmountIn` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetEstimateSwapExactAmountIn` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QuerySwapExactAmountInRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QuerySwapExactAmountInResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

---

**EstimateSwapExactAmountOut**

```ts
import { getEstimateSwapExactAmountOut } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.func'
import { useGetEstimateSwapExactAmountOut } from 'customchain-js/osmosis/gamm/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEstimateSwapExactAmountOut` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.func.ts) |
| Hook | `useGetEstimateSwapExactAmountOut` | [View source ↗](osmosis/gamm/v1beta1/query.rpc.react.ts) |
| Request | `QuerySwapExactAmountOutRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Response | `QuerySwapExactAmountOutResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

### Transaction Methods

**JoinPool**

```ts
import { joinPool } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.func'
import { useJoinPool } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `joinPool` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.func.ts) |
| Hook | `useJoinPool` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.react.ts) |
| Request | `MsgJoinPool` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Response | `MsgJoinPoolResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |

---

**ExitPool**

```ts
import { exitPool } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.func'
import { useExitPool } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `exitPool` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.func.ts) |
| Hook | `useExitPool` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.react.ts) |
| Request | `MsgExitPool` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Response | `MsgExitPoolResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |

---

**SwapExactAmountIn**

```ts
import { swapExactAmountIn } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.func'
import { useSwapExactAmountIn } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `swapExactAmountIn` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.func.ts) |
| Hook | `useSwapExactAmountIn` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.react.ts) |
| Request | `MsgSwapExactAmountIn` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Response | `MsgSwapExactAmountInResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |

---

**SwapExactAmountOut**

```ts
import { swapExactAmountOut } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.func'
import { useSwapExactAmountOut } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `swapExactAmountOut` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.func.ts) |
| Hook | `useSwapExactAmountOut` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.react.ts) |
| Request | `MsgSwapExactAmountOut` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Response | `MsgSwapExactAmountOutResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |

---

**JoinSwapExternAmountIn**

```ts
import { joinSwapExternAmountIn } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.func'
import { useJoinSwapExternAmountIn } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `joinSwapExternAmountIn` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.func.ts) |
| Hook | `useJoinSwapExternAmountIn` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.react.ts) |
| Request | `MsgJoinSwapExternAmountIn` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Response | `MsgJoinSwapExternAmountInResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |

---

**JoinSwapShareAmountOut**

```ts
import { joinSwapShareAmountOut } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.func'
import { useJoinSwapShareAmountOut } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `joinSwapShareAmountOut` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.func.ts) |
| Hook | `useJoinSwapShareAmountOut` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.react.ts) |
| Request | `MsgJoinSwapShareAmountOut` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Response | `MsgJoinSwapShareAmountOutResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |

---

**ExitSwapExternAmountOut**

```ts
import { exitSwapExternAmountOut } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.func'
import { useExitSwapExternAmountOut } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `exitSwapExternAmountOut` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.func.ts) |
| Hook | `useExitSwapExternAmountOut` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.react.ts) |
| Request | `MsgExitSwapExternAmountOut` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Response | `MsgExitSwapExternAmountOutResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |

---

**ExitSwapShareAmountIn**

```ts
import { exitSwapShareAmountIn } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.func'
import { useExitSwapShareAmountIn } from 'customchain-js/osmosis/gamm/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `exitSwapShareAmountIn` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.func.ts) |
| Hook | `useExitSwapShareAmountIn` | [View source ↗](osmosis/gamm/v1beta1/tx.rpc.react.ts) |
| Request | `MsgExitSwapShareAmountIn` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |
| Response | `MsgExitSwapShareAmountInResponse` | [View source ↗](osmosis/gamm/v1beta1/tx.ts) |


## osmosis.gamm.v2

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `QuerySpotPriceRequest` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |
| Type | `QuerySpotPriceResponse` | [View source ↗](osmosis/gamm/v1beta1/query.ts) |

### Query Methods

**SpotPrice**

SpotPrice defines a gRPC query handler that returns the spot price given a base denomination and a quote denomination.

```ts
import { getSpotPriceOsmosisGammV2 } from 'customchain-js/osmosis/bundle'
import { useGetSpotPriceOsmosisGammV2 } from 'customchain-js/osmosis/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSpotPriceOsmosisGammV2` | [View source ↗](osmosis/gamm/v2/query.rpc.func.ts) |
| Hook | `useGetSpotPriceOsmosisGammV2` | [View source ↗](osmosis/gamm/v2/query.rpc.react.ts) |
| Request | `QuerySpotPriceRequest` | [View source ↗](osmosis/gamm/v2/query.ts) |
| Response | `QuerySpotPriceResponse` | [View source ↗](osmosis/gamm/v2/query.ts) |


## osmosis.ibcratelimit.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `OsmosisIbcratelimitV1beta1Params` | [View source ↗](osmosis/ibc-rate-limit/v1beta1/params.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |

### Query Methods

**Params**

Params defines a gRPC query method that returns the ibc-rate-limit module's parameters.

```ts
import { getOsmosisIbcratelimitV1beta1Params } from 'customchain-js/osmosis/ibc-rate-limit/v1beta1/query.rpc.func'
import { useGetOsmosisIbcratelimitV1beta1Params } from 'customchain-js/osmosis/ibc-rate-limit/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getOsmosisIbcratelimitV1beta1Params` | [View source ↗](osmosis/ibc-rate-limit/v1beta1/query.rpc.func.ts) |
| Hook | `useGetOsmosisIbcratelimitV1beta1Params` | [View source ↗](osmosis/ibc-rate-limit/v1beta1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](osmosis/ibc-rate-limit/v1beta1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](osmosis/ibc-rate-limit/v1beta1/query.ts) |


## osmosis.incentives

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `ActiveGaugesPerDenomRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `ActiveGaugesPerDenomResponse` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `ActiveGaugesRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `ActiveGaugesResponse` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `Gauge` | [View source ↗](osmosis/incentives/gauge.ts) |
| Type | `GaugeByIDRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `GaugeByIDResponse` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `GaugesRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `GaugesResponse` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `LockableDurationsInfo` | [View source ↗](osmosis/incentives/gauge.ts) |
| Type | `ModuleToDistributeCoinsRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `ModuleToDistributeCoinsResponse` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `MsgAddToGauge` | [View source ↗](osmosis/incentives/tx.ts) |
| Type | `MsgAddToGaugeResponse` | [View source ↗](osmosis/incentives/tx.ts) |
| Type | `MsgCreateGauge` | [View source ↗](osmosis/incentives/tx.ts) |
| Type | `MsgCreateGaugeResponse` | [View source ↗](osmosis/incentives/tx.ts) |
| Type | `OsmosisIncentivesParams` | [View source ↗](osmosis/incentives/params.ts) |
| Type | `QueryLockableDurationsRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `QueryLockableDurationsResponse` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `RewardsEstRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `RewardsEstResponse` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `UpcomingGaugesPerDenomRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `UpcomingGaugesPerDenomResponse` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `UpcomingGaugesRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `UpcomingGaugesResponse` | [View source ↗](osmosis/incentives/query.ts) |

### Query Methods

**ModuleToDistributeCoins**

ModuleToDistributeCoins returns coins that are going to be distributed

```ts
import { getModuleToDistributeCoins } from 'customchain-js/osmosis/incentives/query.rpc.func'
import { useGetModuleToDistributeCoins } from 'customchain-js/osmosis/incentives/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getModuleToDistributeCoins` | [View source ↗](osmosis/incentives/query.rpc.func.ts) |
| Hook | `useGetModuleToDistributeCoins` | [View source ↗](osmosis/incentives/query.rpc.react.ts) |
| Request | `ModuleToDistributeCoinsRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Response | `ModuleToDistributeCoinsResponse` | [View source ↗](osmosis/incentives/query.ts) |

---

**GaugeByID**

GaugeByID returns gauges by their respective ID

```ts
import { getGaugeByID } from 'customchain-js/osmosis/incentives/query.rpc.func'
import { useGetGaugeByID } from 'customchain-js/osmosis/incentives/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGaugeByID` | [View source ↗](osmosis/incentives/query.rpc.func.ts) |
| Hook | `useGetGaugeByID` | [View source ↗](osmosis/incentives/query.rpc.react.ts) |
| Request | `GaugeByIDRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Response | `GaugeByIDResponse` | [View source ↗](osmosis/incentives/query.ts) |

---

**Gauges**

Gauges returns both upcoming and active gauges

```ts
import { getGauges } from 'customchain-js/osmosis/incentives/query.rpc.func'
import { useGetGauges } from 'customchain-js/osmosis/incentives/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGauges` | [View source ↗](osmosis/incentives/query.rpc.func.ts) |
| Hook | `useGetGauges` | [View source ↗](osmosis/incentives/query.rpc.react.ts) |
| Request | `GaugesRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Response | `GaugesResponse` | [View source ↗](osmosis/incentives/query.ts) |

---

**ActiveGauges**

ActiveGauges returns active gauges

```ts
import { getActiveGauges } from 'customchain-js/osmosis/incentives/query.rpc.func'
import { useGetActiveGauges } from 'customchain-js/osmosis/incentives/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getActiveGauges` | [View source ↗](osmosis/incentives/query.rpc.func.ts) |
| Hook | `useGetActiveGauges` | [View source ↗](osmosis/incentives/query.rpc.react.ts) |
| Request | `ActiveGaugesRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Response | `ActiveGaugesResponse` | [View source ↗](osmosis/incentives/query.ts) |

---

**ActiveGaugesPerDenom**

ActiveGaugesPerDenom returns active gauges by denom

```ts
import { getActiveGaugesPerDenom } from 'customchain-js/osmosis/incentives/query.rpc.func'
import { useGetActiveGaugesPerDenom } from 'customchain-js/osmosis/incentives/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getActiveGaugesPerDenom` | [View source ↗](osmosis/incentives/query.rpc.func.ts) |
| Hook | `useGetActiveGaugesPerDenom` | [View source ↗](osmosis/incentives/query.rpc.react.ts) |
| Request | `ActiveGaugesPerDenomRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Response | `ActiveGaugesPerDenomResponse` | [View source ↗](osmosis/incentives/query.ts) |

---

**UpcomingGauges**

Returns scheduled gauges that have not yet occured

```ts
import { getUpcomingGauges } from 'customchain-js/osmosis/incentives/query.rpc.func'
import { useGetUpcomingGauges } from 'customchain-js/osmosis/incentives/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getUpcomingGauges` | [View source ↗](osmosis/incentives/query.rpc.func.ts) |
| Hook | `useGetUpcomingGauges` | [View source ↗](osmosis/incentives/query.rpc.react.ts) |
| Request | `UpcomingGaugesRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Response | `UpcomingGaugesResponse` | [View source ↗](osmosis/incentives/query.ts) |

---

**UpcomingGaugesPerDenom**

UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured by denom

```ts
import { getUpcomingGaugesPerDenom } from 'customchain-js/osmosis/incentives/query.rpc.func'
import { useGetUpcomingGaugesPerDenom } from 'customchain-js/osmosis/incentives/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getUpcomingGaugesPerDenom` | [View source ↗](osmosis/incentives/query.rpc.func.ts) |
| Hook | `useGetUpcomingGaugesPerDenom` | [View source ↗](osmosis/incentives/query.rpc.react.ts) |
| Request | `UpcomingGaugesPerDenomRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Response | `UpcomingGaugesPerDenomResponse` | [View source ↗](osmosis/incentives/query.ts) |

---

**RewardsEst**

RewardsEst returns an estimate of the rewards from now until a specified time in the future The querier either provides an address or a set of locks for which they want to find the associated rewards

```ts
import { getRewardsEst } from 'customchain-js/osmosis/incentives/query.rpc.func'
import { useGetRewardsEst } from 'customchain-js/osmosis/incentives/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getRewardsEst` | [View source ↗](osmosis/incentives/query.rpc.func.ts) |
| Hook | `useGetRewardsEst` | [View source ↗](osmosis/incentives/query.rpc.react.ts) |
| Request | `RewardsEstRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Response | `RewardsEstResponse` | [View source ↗](osmosis/incentives/query.ts) |

---

**LockableDurations**

LockableDurations returns lockable durations that are valid to distribute incentives for

```ts
import { getLockableDurationsOsmosisIncentives } from 'customchain-js/osmosis/bundle'
import { useGetLockableDurationsOsmosisIncentives } from 'customchain-js/osmosis/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getLockableDurationsOsmosisIncentives` | [View source ↗](osmosis/incentives/query.rpc.func.ts) |
| Hook | `useGetLockableDurationsOsmosisIncentives` | [View source ↗](osmosis/incentives/query.rpc.react.ts) |
| Request | `QueryLockableDurationsRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Response | `QueryLockableDurationsResponse` | [View source ↗](osmosis/incentives/query.ts) |

### Transaction Methods

**CreateGauge**

```ts
import { createGauge } from 'customchain-js/osmosis/incentives/tx.rpc.func'
import { useCreateGauge } from 'customchain-js/osmosis/incentives/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createGauge` | [View source ↗](osmosis/incentives/tx.rpc.func.ts) |
| Hook | `useCreateGauge` | [View source ↗](osmosis/incentives/tx.rpc.react.ts) |
| Request | `MsgCreateGauge` | [View source ↗](osmosis/incentives/tx.ts) |
| Response | `MsgCreateGaugeResponse` | [View source ↗](osmosis/incentives/tx.ts) |

---

**AddToGauge**

```ts
import { addToGauge } from 'customchain-js/osmosis/incentives/tx.rpc.func'
import { useAddToGauge } from 'customchain-js/osmosis/incentives/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `addToGauge` | [View source ↗](osmosis/incentives/tx.rpc.func.ts) |
| Hook | `useAddToGauge` | [View source ↗](osmosis/incentives/tx.rpc.react.ts) |
| Request | `MsgAddToGauge` | [View source ↗](osmosis/incentives/tx.ts) |
| Response | `MsgAddToGaugeResponse` | [View source ↗](osmosis/incentives/tx.ts) |


## osmosis.lockup

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `AccountLockedCoinsRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedCoinsResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedDurationRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedDurationResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedLongerDurationDenomRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedLongerDurationDenomResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedLongerDurationNotUnlockingOnlyRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedLongerDurationNotUnlockingOnlyResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedLongerDurationRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedLongerDurationResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedPastTimeDenomRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedPastTimeDenomResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedPastTimeNotUnlockingOnlyRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedPastTimeNotUnlockingOnlyResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedPastTimeRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountLockedPastTimeResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountUnlockableCoinsRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountUnlockableCoinsResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountUnlockedBeforeTimeRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountUnlockedBeforeTimeResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountUnlockingCoinsRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `AccountUnlockingCoinsResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `LockedDenomRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `LockedDenomResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `LockedRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `LockedResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `LockQueryType` | [View source ↗](osmosis/lockup/lock.ts) |
| Type | `ModuleBalanceRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `ModuleBalanceResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `ModuleLockedAmountRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `ModuleLockedAmountResponse` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `MsgBeginUnlocking` | [View source ↗](osmosis/lockup/tx.ts) |
| Type | `MsgBeginUnlockingAll` | [View source ↗](osmosis/lockup/tx.ts) |
| Type | `MsgBeginUnlockingAllResponse` | [View source ↗](osmosis/lockup/tx.ts) |
| Type | `MsgBeginUnlockingResponse` | [View source ↗](osmosis/lockup/tx.ts) |
| Type | `MsgExtendLockup` | [View source ↗](osmosis/lockup/tx.ts) |
| Type | `MsgExtendLockupResponse` | [View source ↗](osmosis/lockup/tx.ts) |
| Type | `MsgForceUnlock` | [View source ↗](osmosis/lockup/tx.ts) |
| Type | `MsgForceUnlockResponse` | [View source ↗](osmosis/lockup/tx.ts) |
| Type | `MsgLockTokens` | [View source ↗](osmosis/lockup/tx.ts) |
| Type | `MsgLockTokensResponse` | [View source ↗](osmosis/lockup/tx.ts) |
| Type | `OsmosisLockupParams` | [View source ↗](osmosis/lockup/params.ts) |
| Type | `PeriodLock` | [View source ↗](osmosis/lockup/lock.ts) |
| Type | `QueryCondition` | [View source ↗](osmosis/lockup/lock.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `SyntheticLock` | [View source ↗](osmosis/lockup/lock.ts) |
| Type | `SyntheticLockupsByLockupIDRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Type | `SyntheticLockupsByLockupIDResponse` | [View source ↗](osmosis/lockup/query.ts) |

### Query Methods

**ModuleBalance**

Return full balance of the module

```ts
import { getModuleBalance } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetModuleBalance } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getModuleBalance` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetModuleBalance` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `ModuleBalanceRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `ModuleBalanceResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**ModuleLockedAmount**

Return locked balance of the module

```ts
import { getModuleLockedAmount } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetModuleLockedAmount } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getModuleLockedAmount` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetModuleLockedAmount` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `ModuleLockedAmountRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `ModuleLockedAmountResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**AccountUnlockableCoins**

Returns unlockable coins which are not withdrawn yet

```ts
import { getAccountUnlockableCoins } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetAccountUnlockableCoins } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountUnlockableCoins` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetAccountUnlockableCoins` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `AccountUnlockableCoinsRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `AccountUnlockableCoinsResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**AccountUnlockingCoins**

Returns unlocking coins

```ts
import { getAccountUnlockingCoins } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetAccountUnlockingCoins } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountUnlockingCoins` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetAccountUnlockingCoins` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `AccountUnlockingCoinsRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `AccountUnlockingCoinsResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**AccountLockedCoins**

Return a locked coins that can't be withdrawn

```ts
import { getAccountLockedCoins } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetAccountLockedCoins } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountLockedCoins` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetAccountLockedCoins` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `AccountLockedCoinsRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `AccountLockedCoinsResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**AccountLockedPastTime**

Returns locked records of an account with unlock time beyond timestamp

```ts
import { getAccountLockedPastTime } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetAccountLockedPastTime } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountLockedPastTime` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetAccountLockedPastTime` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `AccountLockedPastTimeRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `AccountLockedPastTimeResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**AccountLockedPastTimeNotUnlockingOnly**

Returns locked records of an account with unlock time beyond timestamp excluding tokens started unlocking

```ts
import { getAccountLockedPastTimeNotUnlockingOnly } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetAccountLockedPastTimeNotUnlockingOnly } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountLockedPastTimeNotUnlockingOnly` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetAccountLockedPastTimeNotUnlockingOnly` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `AccountLockedPastTimeNotUnlockingOnlyRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `AccountLockedPastTimeNotUnlockingOnlyResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**AccountUnlockedBeforeTime**

Returns unlocked records with unlock time before timestamp

```ts
import { getAccountUnlockedBeforeTime } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetAccountUnlockedBeforeTime } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountUnlockedBeforeTime` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetAccountUnlockedBeforeTime` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `AccountUnlockedBeforeTimeRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `AccountUnlockedBeforeTimeResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**AccountLockedPastTimeDenom**

Returns lock records by address, timestamp, denom

```ts
import { getAccountLockedPastTimeDenom } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetAccountLockedPastTimeDenom } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountLockedPastTimeDenom` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetAccountLockedPastTimeDenom` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `AccountLockedPastTimeDenomRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `AccountLockedPastTimeDenomResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**LockedDenom**

Returns total locked per denom with longer past given time

```ts
import { getLockedDenom } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetLockedDenom } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getLockedDenom` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetLockedDenom` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `LockedDenomRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `LockedDenomResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**LockedByID**

Returns lock record by id

```ts
import { getLockedByID } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetLockedByID } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getLockedByID` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetLockedByID` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `LockedRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `LockedResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**SyntheticLockupsByLockupID**

Returns synthetic lockups by native lockup id

```ts
import { getSyntheticLockupsByLockupID } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetSyntheticLockupsByLockupID } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSyntheticLockupsByLockupID` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetSyntheticLockupsByLockupID` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `SyntheticLockupsByLockupIDRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `SyntheticLockupsByLockupIDResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**AccountLockedLongerDuration**

Returns account locked records with longer duration

```ts
import { getAccountLockedLongerDuration } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetAccountLockedLongerDuration } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountLockedLongerDuration` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetAccountLockedLongerDuration` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `AccountLockedLongerDurationRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `AccountLockedLongerDurationResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**AccountLockedDuration**

Returns account locked records with a specific duration

```ts
import { getAccountLockedDuration } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetAccountLockedDuration } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountLockedDuration` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetAccountLockedDuration` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `AccountLockedDurationRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `AccountLockedDurationResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**AccountLockedLongerDurationNotUnlockingOnly**

Returns account locked records with longer duration excluding tokens started unlocking

```ts
import { getAccountLockedLongerDurationNotUnlockingOnly } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetAccountLockedLongerDurationNotUnlockingOnly } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountLockedLongerDurationNotUnlockingOnly` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetAccountLockedLongerDurationNotUnlockingOnly` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `AccountLockedLongerDurationNotUnlockingOnlyRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `AccountLockedLongerDurationNotUnlockingOnlyResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**AccountLockedLongerDurationDenom**

Returns account's locked records for a denom with longer duration

```ts
import { getAccountLockedLongerDurationDenom } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetAccountLockedLongerDurationDenom } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAccountLockedLongerDurationDenom` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetAccountLockedLongerDurationDenom` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `AccountLockedLongerDurationDenomRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `AccountLockedLongerDurationDenomResponse` | [View source ↗](osmosis/lockup/query.ts) |

---

**Params**

Params returns lockup params.

```ts
import { getOsmosisLockupParams } from 'customchain-js/osmosis/lockup/query.rpc.func'
import { useGetOsmosisLockupParams } from 'customchain-js/osmosis/lockup/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getOsmosisLockupParams` | [View source ↗](osmosis/lockup/query.rpc.func.ts) |
| Hook | `useGetOsmosisLockupParams` | [View source ↗](osmosis/lockup/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](osmosis/lockup/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](osmosis/lockup/query.ts) |

### Transaction Methods

**LockTokens**

LockTokens lock tokens

```ts
import { lockTokens } from 'customchain-js/osmosis/lockup/tx.rpc.func'
import { useLockTokens } from 'customchain-js/osmosis/lockup/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `lockTokens` | [View source ↗](osmosis/lockup/tx.rpc.func.ts) |
| Hook | `useLockTokens` | [View source ↗](osmosis/lockup/tx.rpc.react.ts) |
| Request | `MsgLockTokens` | [View source ↗](osmosis/lockup/tx.ts) |
| Response | `MsgLockTokensResponse` | [View source ↗](osmosis/lockup/tx.ts) |

---

**BeginUnlockingAll**

BeginUnlockingAll begin unlocking all tokens

```ts
import { beginUnlockingAll } from 'customchain-js/osmosis/lockup/tx.rpc.func'
import { useBeginUnlockingAll } from 'customchain-js/osmosis/lockup/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `beginUnlockingAll` | [View source ↗](osmosis/lockup/tx.rpc.func.ts) |
| Hook | `useBeginUnlockingAll` | [View source ↗](osmosis/lockup/tx.rpc.react.ts) |
| Request | `MsgBeginUnlockingAll` | [View source ↗](osmosis/lockup/tx.ts) |
| Response | `MsgBeginUnlockingAllResponse` | [View source ↗](osmosis/lockup/tx.ts) |

---

**BeginUnlocking**

MsgBeginUnlocking begins unlocking tokens by lock ID

```ts
import { beginUnlocking } from 'customchain-js/osmosis/lockup/tx.rpc.func'
import { useBeginUnlocking } from 'customchain-js/osmosis/lockup/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `beginUnlocking` | [View source ↗](osmosis/lockup/tx.rpc.func.ts) |
| Hook | `useBeginUnlocking` | [View source ↗](osmosis/lockup/tx.rpc.react.ts) |
| Request | `MsgBeginUnlocking` | [View source ↗](osmosis/lockup/tx.ts) |
| Response | `MsgBeginUnlockingResponse` | [View source ↗](osmosis/lockup/tx.ts) |

---

**ExtendLockup**

MsgEditLockup edits the existing lockups by lock ID

```ts
import { extendLockup } from 'customchain-js/osmosis/lockup/tx.rpc.func'
import { useExtendLockup } from 'customchain-js/osmosis/lockup/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `extendLockup` | [View source ↗](osmosis/lockup/tx.rpc.func.ts) |
| Hook | `useExtendLockup` | [View source ↗](osmosis/lockup/tx.rpc.react.ts) |
| Request | `MsgExtendLockup` | [View source ↗](osmosis/lockup/tx.ts) |
| Response | `MsgExtendLockupResponse` | [View source ↗](osmosis/lockup/tx.ts) |

---

**ForceUnlock**

```ts
import { forceUnlock } from 'customchain-js/osmosis/lockup/tx.rpc.func'
import { useForceUnlock } from 'customchain-js/osmosis/lockup/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `forceUnlock` | [View source ↗](osmosis/lockup/tx.rpc.func.ts) |
| Hook | `useForceUnlock` | [View source ↗](osmosis/lockup/tx.rpc.react.ts) |
| Request | `MsgForceUnlock` | [View source ↗](osmosis/lockup/tx.ts) |
| Response | `MsgForceUnlockResponse` | [View source ↗](osmosis/lockup/tx.ts) |


## osmosis.mint.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `DistributionProportions` | [View source ↗](osmosis/mint/v1beta1/mint.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `Minter` | [View source ↗](cosmos/mint/v1beta1/mint.ts) |
| Type | `OsmosisMintV1beta1Params` | [View source ↗](osmosis/mint/v1beta1/mint.ts) |
| Type | `QueryEpochProvisionsRequest` | [View source ↗](osmosis/mint/v1beta1/query.ts) |
| Type | `QueryEpochProvisionsResponse` | [View source ↗](osmosis/mint/v1beta1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `WeightedAddress` | [View source ↗](osmosis/mint/v1beta1/mint.ts) |

### Query Methods

**Params**

Params returns the total set of minting parameters.

```ts
import { getOsmosisMintV1beta1Params } from 'customchain-js/osmosis/mint/v1beta1/query.rpc.func'
import { useGetOsmosisMintV1beta1Params } from 'customchain-js/osmosis/mint/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getOsmosisMintV1beta1Params` | [View source ↗](osmosis/mint/v1beta1/query.rpc.func.ts) |
| Hook | `useGetOsmosisMintV1beta1Params` | [View source ↗](osmosis/mint/v1beta1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](osmosis/mint/v1beta1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](osmosis/mint/v1beta1/query.ts) |

---

**EpochProvisions**

EpochProvisions returns the current minting epoch provisions value.

```ts
import { getEpochProvisions } from 'customchain-js/osmosis/mint/v1beta1/query.rpc.func'
import { useGetEpochProvisions } from 'customchain-js/osmosis/mint/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEpochProvisions` | [View source ↗](osmosis/mint/v1beta1/query.rpc.func.ts) |
| Hook | `useGetEpochProvisions` | [View source ↗](osmosis/mint/v1beta1/query.rpc.react.ts) |
| Request | `QueryEpochProvisionsRequest` | [View source ↗](osmosis/mint/v1beta1/query.ts) |
| Response | `QueryEpochProvisionsResponse` | [View source ↗](osmosis/mint/v1beta1/query.ts) |


## osmosis.poolincentives.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `DistrInfo` | [View source ↗](osmosis/pool-incentives/v1beta1/incentives.ts) |
| Type | `DistrRecord` | [View source ↗](osmosis/pool-incentives/v1beta1/incentives.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `IncentivizedPool` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Type | `LockableDurationsInfo` | [View source ↗](osmosis/incentives/gauge.ts) |
| Type | `OsmosisPoolincentivesV1beta1Params` | [View source ↗](osmosis/pool-incentives/v1beta1/incentives.ts) |
| Type | `PoolToGauge` | [View source ↗](osmosis/pool-incentives/v1beta1/incentives.ts) |
| Type | `PoolToGauges` | [View source ↗](osmosis/pool-incentives/v1beta1/incentives.ts) |
| Type | `QueryDistrInfoRequest` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Type | `QueryDistrInfoResponse` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Type | `QueryExternalIncentiveGaugesRequest` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Type | `QueryExternalIncentiveGaugesResponse` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Type | `QueryGaugeIdsRequest` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Type | `QueryGaugeIdsResponse` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Type | `QueryIncentivizedPoolsRequest` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Type | `QueryIncentivizedPoolsResponse` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Type | `QueryLockableDurationsRequest` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `QueryLockableDurationsResponse` | [View source ↗](osmosis/incentives/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `ReplacePoolIncentivesProposal` | [View source ↗](osmosis/pool-incentives/v1beta1/gov.ts) |
| Type | `UpdatePoolIncentivesProposal` | [View source ↗](osmosis/pool-incentives/v1beta1/gov.ts) |

### Query Methods

**GaugeIds**

GaugeIds takes the pool id and returns the matching gauge ids and durations

```ts
import { getGaugeIds } from 'customchain-js/osmosis/pool-incentives/v1beta1/query.rpc.func'
import { useGetGaugeIds } from 'customchain-js/osmosis/pool-incentives/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getGaugeIds` | [View source ↗](osmosis/pool-incentives/v1beta1/query.rpc.func.ts) |
| Hook | `useGetGaugeIds` | [View source ↗](osmosis/pool-incentives/v1beta1/query.rpc.react.ts) |
| Request | `QueryGaugeIdsRequest` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Response | `QueryGaugeIdsResponse` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |

---

**DistrInfo**

DistrInfo returns the pool's matching gauge ids and weights.

```ts
import { getDistrInfo } from 'customchain-js/osmosis/pool-incentives/v1beta1/query.rpc.func'
import { useGetDistrInfo } from 'customchain-js/osmosis/pool-incentives/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDistrInfo` | [View source ↗](osmosis/pool-incentives/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDistrInfo` | [View source ↗](osmosis/pool-incentives/v1beta1/query.rpc.react.ts) |
| Request | `QueryDistrInfoRequest` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Response | `QueryDistrInfoResponse` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |

---

**Params**

Params returns pool incentives params.

```ts
import { getOsmosisPoolincentivesV1beta1Params } from 'customchain-js/osmosis/pool-incentives/v1beta1/query.rpc.func'
import { useGetOsmosisPoolincentivesV1beta1Params } from 'customchain-js/osmosis/pool-incentives/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getOsmosisPoolincentivesV1beta1Params` | [View source ↗](osmosis/pool-incentives/v1beta1/query.rpc.func.ts) |
| Hook | `useGetOsmosisPoolincentivesV1beta1Params` | [View source ↗](osmosis/pool-incentives/v1beta1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |

---

**LockableDurations**

LockableDurations returns lock durations for pools.

```ts
import { getLockableDurationsOsmosisPoolincentivesV1beta1 } from 'customchain-js/osmosis/bundle'
import { useGetLockableDurationsOsmosisPoolincentivesV1beta1 } from 'customchain-js/osmosis/bundle'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getLockableDurationsOsmosisPoolincentivesV1beta1` | [View source ↗](osmosis/pool-incentives/v1beta1/query.rpc.func.ts) |
| Hook | `useGetLockableDurationsOsmosisPoolincentivesV1beta1` | [View source ↗](osmosis/pool-incentives/v1beta1/query.rpc.react.ts) |
| Request | `QueryLockableDurationsRequest` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Response | `QueryLockableDurationsResponse` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |

---

**IncentivizedPools**

IncentivizedPools returns currently incentivized pools

```ts
import { getIncentivizedPools } from 'customchain-js/osmosis/pool-incentives/v1beta1/query.rpc.func'
import { useGetIncentivizedPools } from 'customchain-js/osmosis/pool-incentives/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getIncentivizedPools` | [View source ↗](osmosis/pool-incentives/v1beta1/query.rpc.func.ts) |
| Hook | `useGetIncentivizedPools` | [View source ↗](osmosis/pool-incentives/v1beta1/query.rpc.react.ts) |
| Request | `QueryIncentivizedPoolsRequest` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Response | `QueryIncentivizedPoolsResponse` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |

---

**ExternalIncentiveGauges**

ExternalIncentiveGauges returns external incentive gauges.

```ts
import { getExternalIncentiveGauges } from 'customchain-js/osmosis/pool-incentives/v1beta1/query.rpc.func'
import { useGetExternalIncentiveGauges } from 'customchain-js/osmosis/pool-incentives/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getExternalIncentiveGauges` | [View source ↗](osmosis/pool-incentives/v1beta1/query.rpc.func.ts) |
| Hook | `useGetExternalIncentiveGauges` | [View source ↗](osmosis/pool-incentives/v1beta1/query.rpc.react.ts) |
| Request | `QueryExternalIncentiveGaugesRequest` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |
| Response | `QueryExternalIncentiveGaugesResponse` | [View source ↗](osmosis/pool-incentives/v1beta1/query.ts) |


## osmosis.superfluid

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `AllAssetsRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `AllAssetsResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `AllIntermediaryAccountsRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `AllIntermediaryAccountsResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `AssetMultiplierRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `AssetMultiplierResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `AssetTypeRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `AssetTypeResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `ConnectedIntermediaryAccountRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `ConnectedIntermediaryAccountResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `Delegations` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `EstimateSuperfluidDelegatedAmountByValidatorDenomRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `EstimateSuperfluidDelegatedAmountByValidatorDenomResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `LockIdIntermediaryAccountConnection` | [View source ↗](osmosis/superfluid/superfluid.ts) |
| Type | `MsgLockAndSuperfluidDelegate` | [View source ↗](osmosis/superfluid/tx.ts) |
| Type | `MsgLockAndSuperfluidDelegateResponse` | [View source ↗](osmosis/superfluid/tx.ts) |
| Type | `MsgSuperfluidDelegate` | [View source ↗](osmosis/superfluid/tx.ts) |
| Type | `MsgSuperfluidDelegateResponse` | [View source ↗](osmosis/superfluid/tx.ts) |
| Type | `MsgSuperfluidUnbondLock` | [View source ↗](osmosis/superfluid/tx.ts) |
| Type | `MsgSuperfluidUnbondLockResponse` | [View source ↗](osmosis/superfluid/tx.ts) |
| Type | `MsgSuperfluidUndelegate` | [View source ↗](osmosis/superfluid/tx.ts) |
| Type | `MsgSuperfluidUndelegateResponse` | [View source ↗](osmosis/superfluid/tx.ts) |
| Type | `MsgUnPoolWhitelistedPool` | [View source ↗](osmosis/superfluid/tx.ts) |
| Type | `MsgUnPoolWhitelistedPoolResponse` | [View source ↗](osmosis/superfluid/tx.ts) |
| Type | `OsmoEquivalentMultiplierRecord` | [View source ↗](osmosis/superfluid/superfluid.ts) |
| Type | `OsmosisSuperfluidParams` | [View source ↗](osmosis/superfluid/params.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryTotalDelegationByDelegatorRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `QueryTotalDelegationByDelegatorResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `QueryTotalDelegationByValidatorForDenomRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `QueryTotalDelegationByValidatorForDenomResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `QueryUnpoolWhitelistRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `QueryUnpoolWhitelistResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `SuperfluidAsset` | [View source ↗](osmosis/superfluid/superfluid.ts) |
| Type | `SuperfluidAssetType` | [View source ↗](osmosis/superfluid/superfluid.ts) |
| Type | `SuperfluidDelegationAmountRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `SuperfluidDelegationAmountResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `SuperfluidDelegationRecord` | [View source ↗](osmosis/superfluid/superfluid.ts) |
| Type | `SuperfluidDelegationsByDelegatorRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `SuperfluidDelegationsByDelegatorResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `SuperfluidDelegationsByValidatorDenomRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `SuperfluidDelegationsByValidatorDenomResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `SuperfluidIntermediaryAccount` | [View source ↗](osmosis/superfluid/superfluid.ts) |
| Type | `SuperfluidIntermediaryAccountInfo` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `SuperfluidUndelegationsByDelegatorRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `SuperfluidUndelegationsByDelegatorResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `TotalSuperfluidDelegationsRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `TotalSuperfluidDelegationsResponse` | [View source ↗](osmosis/superfluid/query.ts) |
| Type | `UnpoolWhitelistedPools` | [View source ↗](osmosis/superfluid/superfluid.ts) |

### Query Methods

**Params**

Params returns the total set of superfluid parameters.

```ts
import { getOsmosisSuperfluidParams } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetOsmosisSuperfluidParams } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getOsmosisSuperfluidParams` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetOsmosisSuperfluidParams` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**AssetType**

Returns superfluid asset type, whether if it's a native asset or an lp share.

```ts
import { getAssetType } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetAssetType } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAssetType` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetAssetType` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `AssetTypeRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `AssetTypeResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**AllAssets**

Returns all registered superfluid assets.

```ts
import { getAllAssets } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetAllAssets } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAllAssets` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetAllAssets` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `AllAssetsRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `AllAssetsResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**AssetMultiplier**

Returns the osmo equivalent multiplier used in the most recent epoch.

```ts
import { getAssetMultiplier } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetAssetMultiplier } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAssetMultiplier` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetAssetMultiplier` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `AssetMultiplierRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `AssetMultiplierResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**AllIntermediaryAccounts**

Returns all superfluid intermediary accounts.

```ts
import { getAllIntermediaryAccounts } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetAllIntermediaryAccounts } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getAllIntermediaryAccounts` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetAllIntermediaryAccounts` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `AllIntermediaryAccountsRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `AllIntermediaryAccountsResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**ConnectedIntermediaryAccount**

Returns intermediary account connected to a superfluid staked lock by id

```ts
import { getConnectedIntermediaryAccount } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetConnectedIntermediaryAccount } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getConnectedIntermediaryAccount` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetConnectedIntermediaryAccount` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `ConnectedIntermediaryAccountRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `ConnectedIntermediaryAccountResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**TotalDelegationByValidatorForDenom**

Returns the amount of delegations of specific denom for all validators

```ts
import { getTotalDelegationByValidatorForDenom } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetTotalDelegationByValidatorForDenom } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTotalDelegationByValidatorForDenom` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetTotalDelegationByValidatorForDenom` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `QueryTotalDelegationByValidatorForDenomRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `QueryTotalDelegationByValidatorForDenomResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**TotalSuperfluidDelegations**

Returns the total amount of osmo superfluidly staked. Response is denominated in uosmo.

```ts
import { getTotalSuperfluidDelegations } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetTotalSuperfluidDelegations } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTotalSuperfluidDelegations` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetTotalSuperfluidDelegations` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `TotalSuperfluidDelegationsRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `TotalSuperfluidDelegationsResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**SuperfluidDelegationAmount**

Returns the coins superfluid delegated for the delegator, validator, denom triplet

```ts
import { getSuperfluidDelegationAmount } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetSuperfluidDelegationAmount } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSuperfluidDelegationAmount` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetSuperfluidDelegationAmount` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `SuperfluidDelegationAmountRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `SuperfluidDelegationAmountResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**SuperfluidDelegationsByDelegator**

Returns all the delegated superfluid poistions for a specific delegator.

```ts
import { getSuperfluidDelegationsByDelegator } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetSuperfluidDelegationsByDelegator } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSuperfluidDelegationsByDelegator` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetSuperfluidDelegationsByDelegator` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `SuperfluidDelegationsByDelegatorRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `SuperfluidDelegationsByDelegatorResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**SuperfluidUndelegationsByDelegator**

Returns all the undelegating superfluid poistions for a specific delegator.

```ts
import { getSuperfluidUndelegationsByDelegator } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetSuperfluidUndelegationsByDelegator } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSuperfluidUndelegationsByDelegator` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetSuperfluidUndelegationsByDelegator` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `SuperfluidUndelegationsByDelegatorRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `SuperfluidUndelegationsByDelegatorResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**SuperfluidDelegationsByValidatorDenom**

Returns all the superfluid positions of a specific denom delegated to one validator

```ts
import { getSuperfluidDelegationsByValidatorDenom } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetSuperfluidDelegationsByValidatorDenom } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getSuperfluidDelegationsByValidatorDenom` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetSuperfluidDelegationsByValidatorDenom` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `SuperfluidDelegationsByValidatorDenomRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `SuperfluidDelegationsByValidatorDenomResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**EstimateSuperfluidDelegatedAmountByValidatorDenom**

Returns the amount of a specific denom delegated to a specific validator This is labeled an estimate, because the way it calculates the amount can lead rounding errors from the true delegated amount

```ts
import { getEstimateSuperfluidDelegatedAmountByValidatorDenom } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetEstimateSuperfluidDelegatedAmountByValidatorDenom } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getEstimateSuperfluidDelegatedAmountByValidatorDenom` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetEstimateSuperfluidDelegatedAmountByValidatorDenom` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `EstimateSuperfluidDelegatedAmountByValidatorDenomRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `EstimateSuperfluidDelegatedAmountByValidatorDenomResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**TotalDelegationByDelegator**

Returns the specified delegations for a specific delegator

```ts
import { getTotalDelegationByDelegator } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetTotalDelegationByDelegator } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getTotalDelegationByDelegator` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetTotalDelegationByDelegator` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `QueryTotalDelegationByDelegatorRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `QueryTotalDelegationByDelegatorResponse` | [View source ↗](osmosis/superfluid/query.ts) |

---

**UnpoolWhitelist**

Returns a list of whitelisted pool ids to unpool.

```ts
import { getUnpoolWhitelist } from 'customchain-js/osmosis/superfluid/query.rpc.func'
import { useGetUnpoolWhitelist } from 'customchain-js/osmosis/superfluid/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getUnpoolWhitelist` | [View source ↗](osmosis/superfluid/query.rpc.func.ts) |
| Hook | `useGetUnpoolWhitelist` | [View source ↗](osmosis/superfluid/query.rpc.react.ts) |
| Request | `QueryUnpoolWhitelistRequest` | [View source ↗](osmosis/superfluid/query.ts) |
| Response | `QueryUnpoolWhitelistResponse` | [View source ↗](osmosis/superfluid/query.ts) |

### Transaction Methods

**SuperfluidDelegate**

Execute superfluid delegation for a lockup

```ts
import { superfluidDelegate } from 'customchain-js/osmosis/superfluid/tx.rpc.func'
import { useSuperfluidDelegate } from 'customchain-js/osmosis/superfluid/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `superfluidDelegate` | [View source ↗](osmosis/superfluid/tx.rpc.func.ts) |
| Hook | `useSuperfluidDelegate` | [View source ↗](osmosis/superfluid/tx.rpc.react.ts) |
| Request | `MsgSuperfluidDelegate` | [View source ↗](osmosis/superfluid/tx.ts) |
| Response | `MsgSuperfluidDelegateResponse` | [View source ↗](osmosis/superfluid/tx.ts) |

---

**SuperfluidUndelegate**

Execute superfluid undelegation for a lockup

```ts
import { superfluidUndelegate } from 'customchain-js/osmosis/superfluid/tx.rpc.func'
import { useSuperfluidUndelegate } from 'customchain-js/osmosis/superfluid/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `superfluidUndelegate` | [View source ↗](osmosis/superfluid/tx.rpc.func.ts) |
| Hook | `useSuperfluidUndelegate` | [View source ↗](osmosis/superfluid/tx.rpc.react.ts) |
| Request | `MsgSuperfluidUndelegate` | [View source ↗](osmosis/superfluid/tx.ts) |
| Response | `MsgSuperfluidUndelegateResponse` | [View source ↗](osmosis/superfluid/tx.ts) |

---

**SuperfluidUnbondLock**

For a given lock that is being superfluidly undelegated, also unbond the underlying lock.

```ts
import { superfluidUnbondLock } from 'customchain-js/osmosis/superfluid/tx.rpc.func'
import { useSuperfluidUnbondLock } from 'customchain-js/osmosis/superfluid/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `superfluidUnbondLock` | [View source ↗](osmosis/superfluid/tx.rpc.func.ts) |
| Hook | `useSuperfluidUnbondLock` | [View source ↗](osmosis/superfluid/tx.rpc.react.ts) |
| Request | `MsgSuperfluidUnbondLock` | [View source ↗](osmosis/superfluid/tx.ts) |
| Response | `MsgSuperfluidUnbondLockResponse` | [View source ↗](osmosis/superfluid/tx.ts) |

---

**LockAndSuperfluidDelegate**

Execute lockup lock and superfluid delegation in a single msg

```ts
import { lockAndSuperfluidDelegate } from 'customchain-js/osmosis/superfluid/tx.rpc.func'
import { useLockAndSuperfluidDelegate } from 'customchain-js/osmosis/superfluid/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `lockAndSuperfluidDelegate` | [View source ↗](osmosis/superfluid/tx.rpc.func.ts) |
| Hook | `useLockAndSuperfluidDelegate` | [View source ↗](osmosis/superfluid/tx.rpc.react.ts) |
| Request | `MsgLockAndSuperfluidDelegate` | [View source ↗](osmosis/superfluid/tx.ts) |
| Response | `MsgLockAndSuperfluidDelegateResponse` | [View source ↗](osmosis/superfluid/tx.ts) |

---

**UnPoolWhitelistedPool**

```ts
import { unPoolWhitelistedPool } from 'customchain-js/osmosis/superfluid/tx.rpc.func'
import { useUnPoolWhitelistedPool } from 'customchain-js/osmosis/superfluid/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `unPoolWhitelistedPool` | [View source ↗](osmosis/superfluid/tx.rpc.func.ts) |
| Hook | `useUnPoolWhitelistedPool` | [View source ↗](osmosis/superfluid/tx.rpc.react.ts) |
| Request | `MsgUnPoolWhitelistedPool` | [View source ↗](osmosis/superfluid/tx.ts) |
| Response | `MsgUnPoolWhitelistedPoolResponse` | [View source ↗](osmosis/superfluid/tx.ts) |


## osmosis.tokenfactory.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `DenomAuthorityMetadata` | [View source ↗](osmosis/tokenfactory/v1beta1/authorityMetadata.ts) |
| Type | `GenesisDenom` | [View source ↗](osmosis/tokenfactory/v1beta1/genesis.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `MsgBurn` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Type | `MsgBurnResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Type | `MsgChangeAdmin` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Type | `MsgChangeAdminResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Type | `MsgCreateDenom` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Type | `MsgCreateDenomResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Type | `MsgMint` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Type | `MsgMintResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Type | `MsgSetDenomMetadata` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Type | `MsgSetDenomMetadataResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Type | `OsmosisTokenfactoryV1beta1Params` | [View source ↗](osmosis/tokenfactory/v1beta1/params.ts) |
| Type | `QueryDenomAuthorityMetadataRequest` | [View source ↗](osmosis/tokenfactory/v1beta1/query.ts) |
| Type | `QueryDenomAuthorityMetadataResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/query.ts) |
| Type | `QueryDenomsFromCreatorRequest` | [View source ↗](osmosis/tokenfactory/v1beta1/query.ts) |
| Type | `QueryDenomsFromCreatorResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/query.ts) |
| Type | `QueryParamsRequest` | [View source ↗](cosmos/auth/v1beta1/query.ts) |
| Type | `QueryParamsResponse` | [View source ↗](cosmos/auth/v1beta1/query.ts) |

### Query Methods

**Params**

Params defines a gRPC query method that returns the tokenfactory module's parameters.

```ts
import { getOsmosisTokenfactoryV1beta1Params } from 'customchain-js/osmosis/tokenfactory/v1beta1/query.rpc.func'
import { useGetOsmosisTokenfactoryV1beta1Params } from 'customchain-js/osmosis/tokenfactory/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getOsmosisTokenfactoryV1beta1Params` | [View source ↗](osmosis/tokenfactory/v1beta1/query.rpc.func.ts) |
| Hook | `useGetOsmosisTokenfactoryV1beta1Params` | [View source ↗](osmosis/tokenfactory/v1beta1/query.rpc.react.ts) |
| Request | `QueryParamsRequest` | [View source ↗](osmosis/tokenfactory/v1beta1/query.ts) |
| Response | `QueryParamsResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/query.ts) |

---

**DenomAuthorityMetadata**

DenomAuthorityMetadata defines a gRPC query method for fetching DenomAuthorityMetadata for a particular denom.

```ts
import { getDenomAuthorityMetadata } from 'customchain-js/osmosis/tokenfactory/v1beta1/query.rpc.func'
import { useGetDenomAuthorityMetadata } from 'customchain-js/osmosis/tokenfactory/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDenomAuthorityMetadata` | [View source ↗](osmosis/tokenfactory/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDenomAuthorityMetadata` | [View source ↗](osmosis/tokenfactory/v1beta1/query.rpc.react.ts) |
| Request | `QueryDenomAuthorityMetadataRequest` | [View source ↗](osmosis/tokenfactory/v1beta1/query.ts) |
| Response | `QueryDenomAuthorityMetadataResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/query.ts) |

---

**DenomsFromCreator**

DenomsFromCreator defines a gRPC query method for fetching all denominations created by a specific admin/creator.

```ts
import { getDenomsFromCreator } from 'customchain-js/osmosis/tokenfactory/v1beta1/query.rpc.func'
import { useGetDenomsFromCreator } from 'customchain-js/osmosis/tokenfactory/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDenomsFromCreator` | [View source ↗](osmosis/tokenfactory/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDenomsFromCreator` | [View source ↗](osmosis/tokenfactory/v1beta1/query.rpc.react.ts) |
| Request | `QueryDenomsFromCreatorRequest` | [View source ↗](osmosis/tokenfactory/v1beta1/query.ts) |
| Response | `QueryDenomsFromCreatorResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/query.ts) |

### Transaction Methods

**CreateDenom**

```ts
import { createDenom } from 'customchain-js/osmosis/tokenfactory/v1beta1/tx.rpc.func'
import { useCreateDenom } from 'customchain-js/osmosis/tokenfactory/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `createDenom` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.rpc.func.ts) |
| Hook | `useCreateDenom` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.rpc.react.ts) |
| Request | `MsgCreateDenom` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Response | `MsgCreateDenomResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |

---

**Mint**

```ts
import { mint } from 'customchain-js/osmosis/tokenfactory/v1beta1/tx.rpc.func'
import { useMint } from 'customchain-js/osmosis/tokenfactory/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `mint` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.rpc.func.ts) |
| Hook | `useMint` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.rpc.react.ts) |
| Request | `MsgMint` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Response | `MsgMintResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |

---

**Burn**

```ts
import { burn } from 'customchain-js/osmosis/tokenfactory/v1beta1/tx.rpc.func'
import { useBurn } from 'customchain-js/osmosis/tokenfactory/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `burn` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.rpc.func.ts) |
| Hook | `useBurn` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.rpc.react.ts) |
| Request | `MsgBurn` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Response | `MsgBurnResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |

---

**ChangeAdmin**

```ts
import { changeAdmin } from 'customchain-js/osmosis/tokenfactory/v1beta1/tx.rpc.func'
import { useChangeAdmin } from 'customchain-js/osmosis/tokenfactory/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `changeAdmin` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.rpc.func.ts) |
| Hook | `useChangeAdmin` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.rpc.react.ts) |
| Request | `MsgChangeAdmin` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Response | `MsgChangeAdminResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |

---

**SetDenomMetadata**

```ts
import { setDenomMetadata } from 'customchain-js/osmosis/tokenfactory/v1beta1/tx.rpc.func'
import { useSetDenomMetadata } from 'customchain-js/osmosis/tokenfactory/v1beta1/tx.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `setDenomMetadata` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.rpc.func.ts) |
| Hook | `useSetDenomMetadata` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.rpc.react.ts) |
| Request | `MsgSetDenomMetadata` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |
| Response | `MsgSetDenomMetadataResponse` | [View source ↗](osmosis/tokenfactory/v1beta1/tx.ts) |


## osmosis.twap.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `ArithmeticTwapRequest` | [View source ↗](osmosis/twap/v1beta1/query.ts) |
| Type | `ArithmeticTwapResponse` | [View source ↗](osmosis/twap/v1beta1/query.ts) |
| Type | `ArithmeticTwapToNowRequest` | [View source ↗](osmosis/twap/v1beta1/query.ts) |
| Type | `ArithmeticTwapToNowResponse` | [View source ↗](osmosis/twap/v1beta1/query.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `OsmosisTwapV1beta1Params` | [View source ↗](osmosis/twap/v1beta1/genesis.ts) |
| Type | `ParamsRequest` | [View source ↗](osmosis/twap/v1beta1/query.ts) |
| Type | `ParamsResponse` | [View source ↗](osmosis/twap/v1beta1/query.ts) |
| Type | `TwapRecord` | [View source ↗](osmosis/twap/v1beta1/twap_record.ts) |

### Query Methods

**Params**

```ts
import { getOsmosisTwapV1beta1Params } from 'customchain-js/osmosis/twap/v1beta1/query.rpc.func'
import { useGetOsmosisTwapV1beta1Params } from 'customchain-js/osmosis/twap/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getOsmosisTwapV1beta1Params` | [View source ↗](osmosis/twap/v1beta1/query.rpc.func.ts) |
| Hook | `useGetOsmosisTwapV1beta1Params` | [View source ↗](osmosis/twap/v1beta1/query.rpc.react.ts) |
| Request | `ParamsRequest` | [View source ↗](osmosis/twap/v1beta1/query.ts) |
| Response | `ParamsResponse` | [View source ↗](osmosis/twap/v1beta1/query.ts) |

---

**ArithmeticTwap**

```ts
import { getArithmeticTwap } from 'customchain-js/osmosis/twap/v1beta1/query.rpc.func'
import { useGetArithmeticTwap } from 'customchain-js/osmosis/twap/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getArithmeticTwap` | [View source ↗](osmosis/twap/v1beta1/query.rpc.func.ts) |
| Hook | `useGetArithmeticTwap` | [View source ↗](osmosis/twap/v1beta1/query.rpc.react.ts) |
| Request | `ArithmeticTwapRequest` | [View source ↗](osmosis/twap/v1beta1/query.ts) |
| Response | `ArithmeticTwapResponse` | [View source ↗](osmosis/twap/v1beta1/query.ts) |

---

**ArithmeticTwapToNow**

```ts
import { getArithmeticTwapToNow } from 'customchain-js/osmosis/twap/v1beta1/query.rpc.func'
import { useGetArithmeticTwapToNow } from 'customchain-js/osmosis/twap/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getArithmeticTwapToNow` | [View source ↗](osmosis/twap/v1beta1/query.rpc.func.ts) |
| Hook | `useGetArithmeticTwapToNow` | [View source ↗](osmosis/twap/v1beta1/query.rpc.react.ts) |
| Request | `ArithmeticTwapToNowRequest` | [View source ↗](osmosis/twap/v1beta1/query.ts) |
| Response | `ArithmeticTwapToNowResponse` | [View source ↗](osmosis/twap/v1beta1/query.ts) |


## osmosis.txfees.v1beta1

### Types

| Type | Name | Source |
| --- | --- | --- |
| Type | `FeeToken` | [View source ↗](osmosis/txfees/v1beta1/feetoken.ts) |
| Type | `GenesisState` | [View source ↗](akash/audit/v1beta2/genesis.ts) |
| Type | `QueryBaseDenomRequest` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |
| Type | `QueryBaseDenomResponse` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |
| Type | `QueryDenomPoolIdRequest` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |
| Type | `QueryDenomPoolIdResponse` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |
| Type | `QueryDenomSpotPriceRequest` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |
| Type | `QueryDenomSpotPriceResponse` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |
| Type | `QueryFeeTokensRequest` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |
| Type | `QueryFeeTokensResponse` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |
| Type | `UpdateFeeTokenProposal` | [View source ↗](osmosis/txfees/v1beta1/gov.ts) |

### Query Methods

**FeeTokens**

FeeTokens returns a list of all the whitelisted fee tokens and their corresponding pools. It does not include the BaseDenom, which has its own query endpoint

```ts
import { getFeeTokens } from 'customchain-js/osmosis/txfees/v1beta1/query.rpc.func'
import { useGetFeeTokens } from 'customchain-js/osmosis/txfees/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getFeeTokens` | [View source ↗](osmosis/txfees/v1beta1/query.rpc.func.ts) |
| Hook | `useGetFeeTokens` | [View source ↗](osmosis/txfees/v1beta1/query.rpc.react.ts) |
| Request | `QueryFeeTokensRequest` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |
| Response | `QueryFeeTokensResponse` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |

---

**DenomSpotPrice**

DenomSpotPrice returns all spot prices by each registered token denom.

```ts
import { getDenomSpotPrice } from 'customchain-js/osmosis/txfees/v1beta1/query.rpc.func'
import { useGetDenomSpotPrice } from 'customchain-js/osmosis/txfees/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDenomSpotPrice` | [View source ↗](osmosis/txfees/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDenomSpotPrice` | [View source ↗](osmosis/txfees/v1beta1/query.rpc.react.ts) |
| Request | `QueryDenomSpotPriceRequest` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |
| Response | `QueryDenomSpotPriceResponse` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |

---

**DenomPoolId**

Returns the poolID for a specified denom input.

```ts
import { getDenomPoolId } from 'customchain-js/osmosis/txfees/v1beta1/query.rpc.func'
import { useGetDenomPoolId } from 'customchain-js/osmosis/txfees/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getDenomPoolId` | [View source ↗](osmosis/txfees/v1beta1/query.rpc.func.ts) |
| Hook | `useGetDenomPoolId` | [View source ↗](osmosis/txfees/v1beta1/query.rpc.react.ts) |
| Request | `QueryDenomPoolIdRequest` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |
| Response | `QueryDenomPoolIdResponse` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |

---

**BaseDenom**

Returns a list of all base denom tokens and their corresponding pools.

```ts
import { getBaseDenom } from 'customchain-js/osmosis/txfees/v1beta1/query.rpc.func'
import { useGetBaseDenom } from 'customchain-js/osmosis/txfees/v1beta1/query.rpc.react'
```

| Field | Value | Source |
| --- | --- | --- |
| Function | `getBaseDenom` | [View source ↗](osmosis/txfees/v1beta1/query.rpc.func.ts) |
| Hook | `useGetBaseDenom` | [View source ↗](osmosis/txfees/v1beta1/query.rpc.react.ts) |
| Request | `QueryBaseDenomRequest` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |
| Response | `QueryBaseDenomResponse` | [View source ↗](osmosis/txfees/v1beta1/query.ts) |


