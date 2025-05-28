# Building TypeScript SDKs for CosmWasm Smart Contracts

In this tutorial, we'll explore how to use Telescope to generate TypeScript SDKs for your CosmWasm smart contracts. This powerful integration allows you to interact with your contracts using strongly-typed interfaces in your frontend applications, providing a much better developer experience.

## Understanding CosmWasm and TypeScript Integration

CosmWasm is a smart contracting platform built for the Cosmos ecosystem. When building dApps that interact with CosmWasm contracts, you typically need to:

1. Handle contract message formatting
2. Parse contract responses
3. Manage type conversions
4. Create proper queries and transactions

Telescope, in conjunction with [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen), automates this process by generating TypeScript clients from your contract schema files. This provides you with a type-safe way to interact with your contracts, complete with auto-completion in your IDE.

## Prerequisites

Before starting, ensure you have:

1. A CosmWasm smart contract with schema files generated
2. A Telescope project set up
3. Basic knowledge of TypeScript and CosmWasm

## Setting Up Your Project

For this tutorial, we'll assume you already have a Telescope project. If not, you can create one:

```bash
# Install telescope globally if needed
npm install -g @cosmology/telescope

# Create a new project
mkdir my-cosmwasm-sdk
cd my-cosmwasm-sdk
npm init -y
npm install --save-dev @cosmology/telescope
```

Next, you'll need the schema files for your CosmWasm contract. These are typically generated when you build your contract. If you're working with an existing contract, you might find these in the contract's repository.

Let's create a directory for our sample schema files:

```bash
mkdir -p schema/cw721
```

For this tutorial, let's assume we're building an SDK for a CW721 (NFT) contract. You would typically have schema files like:

- `schema/cw721/instantiate_msg.json`
- `schema/cw721/execute_msg.json`
- `schema/cw721/query_msg.json`
- And others...

## Configuring Telescope for CosmWasm

Now, let's update your Telescope configuration to generate TypeScript SDKs for your CosmWasm contracts. Create or modify your `telescope.config.js` file:

```javascript
const { join } = require('path');

module.exports = {
  protoDirs: [/* your proto directories */],
  outPath: join(__dirname, './src/generated'),
  options: {
    // Existing Telescope options...
    
    // Add CosmWasm configuration
    cosmwasm: {
      contracts: [
        {
          name: "CW721",
          dir: "./schema/cw721"
        }
      ],
      outPath: "./src/contracts"
    }
  }
};
```

In this configuration:

- `name`: The name used for the generated TypeScript classes
- `dir`: The path to your contract schema directory
- `outPath`: Where the generated files should be placed

## Enhanced Configuration for Complex Projects

For more complex projects, you might want additional configuration options:

```javascript
cosmwasm: {
  contracts: [
    {
      name: "CW721Base",
      dir: "./schema/cw721",
      
      // Convert snake_case to camelCase for better TypeScript experience
      camelCase: true,
      
      // Map external types to your preferred imports
      customTypes: {
        "cosmos.base.v1beta1.Coin": {
          module: "@cosmjs/stargate",
          type: "Coin"
        }
      },
      
      // Configure React Query hooks
      reactQuery: {
        enabled: true,
        version: 'v4',
        // Optional: customize generated hook names
        queryKeys: {
          prefix: "useCW721"
        }
      }
    },
    
    // You can generate SDKs for multiple contracts
    {
      name: "Marketplace",
      dir: "./schema/marketplace"
    }
  ],
  outPath: "./src/contracts"
}
```

## Generating Your CosmWasm SDK

With your configuration in place, run Telescope to generate your TypeScript SDKs:

```bash
npx telescope
```

After running this command, you should see the generated files in your specified `outPath` directory:

```
src/contracts/
├── CW721Base.client.ts
├── CW721Base.message-composer.ts
├── CW721Base.react-query.ts (if enabled)
├── CW721Base.types.ts
├── Marketplace.client.ts
├── Marketplace.message-composer.ts
└── Marketplace.types.ts
```

## Understanding the Generated Files

Let's go through each of the generated files and understand how to use them:

### Types File

The `.types.ts` file contains all the TypeScript interfaces for your contract's messages and responses:

```typescript
// CW721Base.types.ts
export interface CW721BaseReadOnlyInterface {
  ownerOf: (params: OwnerOfRequest) => Promise<OwnerOfResponse>;
  approval: (params: ApprovalRequest) => Promise<ApprovalResponse>;
  approvals: (params: ApprovalsRequest) => Promise<ApprovalsResponse>;
  tokens: (params: TokensRequest) => Promise<TokensResponse>;
  // More query methods...
}

export interface CW721BaseInterface extends CW721BaseReadOnlyInterface {
  transferNft: (params: TransferNftParams) => Promise<any>;
  sendNft: (params: SendNftParams) => Promise<any>;
  approve: (params: ApproveParams) => Promise<any>;
  mint: (params: MintParams) => Promise<any>;
  // More execute methods...
}

export interface OwnerOfRequest {
  token_id: string;
  include_expired?: boolean;
}

export interface OwnerOfResponse {
  owner: string;
  approvals: Approval[];
}

// More interfaces...
```

This gives you a complete type-safe representation of your contract's API.

### Client File

The `.client.ts` file provides a client class for interacting with your contract:

```typescript
// CW721Base.client.ts
import { CosmWasmClient, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { CW721BaseInterface, CW721BaseReadOnlyInterface } from "./CW721Base.types";

export class CW721BaseQueryClient implements CW721BaseReadOnlyInterface {
  private readonly client: CosmWasmClient;
  private readonly contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
  }

  ownerOf = async ({ token_id, include_expired }: OwnerOfRequest): Promise<OwnerOfResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      owner_of: { token_id, include_expired }
    });
  };

  // More query methods...
}

export class CW721BaseClient extends CW721BaseQueryClient implements CW721BaseInterface {
  private readonly client: SigningCosmWasmClient;
  
  constructor(client: SigningCosmWasmClient, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
  }

  transferNft = async ({ sender, recipient, token_id }: TransferNftParams): Promise<any> => {
    return this.client.executeContract(
      sender,
      this.contractAddress,
      { transfer_nft: { recipient, token_id } },
      "auto"
    );
  };

  // More execute methods...
}
```

### Message Composer

The `.message-composer.ts` file provides a utility for creating contract messages without actually executing them:

```typescript
// CW721Base.message-composer.ts
export class CW721BaseMessageComposer {
  private readonly contractAddress: string;

  constructor(contractAddress: string) {
    this.contractAddress = contractAddress;
  }

  transferNft = ({ recipient, token_id }: Omit<TransferNftParams, "sender">): any => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: {
        contractAddress: this.contractAddress,
        msg: Buffer.from(JSON.stringify({ transfer_nft: { recipient, token_id } })),
        // Note: sender must be filled in by the client
      }
    };
  };

  // More message composers...
}
```

### React Query Hooks (if enabled)

If you enabled React Query integration, the `.react-query.ts` file contains hooks for each query and mutation:

```typescript
// CW721Base.react-query.ts
import { useQuery, useMutation } from "@tanstack/react-query";
import { CW721BaseQueryClient, CW721BaseClient } from "./CW721Base.client";

export const useCW721OwnerOf = (
  client: CW721BaseQueryClient,
  params: OwnerOfRequest,
  options?: UseQueryOptions<OwnerOfResponse>
) => {
  return useQuery<OwnerOfResponse>(
    ["cw721-owner-of", client.contractAddress, params],
    () => client.ownerOf(params),
    options
  );
};

export const useCW721TransferNft = (
  client: CW721BaseClient,
  options?: UseMutationOptions<any, Error, TransferNftParams>
) => {
  return useMutation<any, Error, TransferNftParams>(
    (params) => client.transferNft(params),
    options
  );
};

// More hooks...
```

## Using Your Generated SDK

Now that you understand the generated files, let's see how to use them in your application:

### Basic Querying

```typescript
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { CW721BaseQueryClient } from "./contracts/CW721Base.client";

async function queryNFTOwner(tokenId: string) {
  // Create a CosmosWasm client
  const client = await CosmWasmClient.connect("https://rpc.cosmos.network");
  
  // Create a query client for your contract
  const contractClient = new CW721BaseQueryClient(
    client,
    "cosmos1..." // Your contract address
  );
  
  // Query the contract - with full type safety!
  const { owner, approvals } = await contractClient.ownerOf({
    token_id: tokenId
  });
  
  console.log(`Token ${tokenId} is owned by: ${owner}`);
  console.log(`It has ${approvals.length} approvals`);
  
  return owner;
}
```

### Executing Transactions

```typescript
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { CW721BaseClient } from "./contracts/CW721Base.client";

async function transferNFT(tokenId: string, recipient: string) {
  // Create a wallet - in a real app, you'd get this from the user
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    "your mnemonic here",
    { prefix: "cosmos" }
  );
  const [firstAccount] = await wallet.getAccounts();
  
  // Create a signing client
  const client = await SigningCosmWasmClient.connectWithSigner(
    "https://rpc.cosmos.network",
    wallet
  );
  
  // Create a contract client
  const contractClient = new CW721BaseClient(
    client,
    "cosmos1..." // Your contract address
  );
  
  // Execute the transfer - with full type safety!
  const result = await contractClient.transferNft({
    sender: firstAccount.address,
    recipient,
    token_id: tokenId
  });
  
  console.log(`Transfer successful! Transaction hash: ${result.transactionHash}`);
  
  return result;
}
```

### Using Message Composers

Message composers are useful when you need to include contract messages in a batch transaction:

```typescript
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { CW721BaseMessageComposer } from "./contracts/CW721Base.message-composer";

async function batchTransferNFTs(tokenIds: string[], recipient: string) {
  // Create a signing client as before
  // ...
  
  // Create a message composer
  const composer = new CW721BaseMessageComposer("cosmos1..."); // Contract address
  
  // Create multiple transfer messages
  const messages = tokenIds.map(tokenId => 
    composer.transferNft({
      recipient,
      token_id: tokenId
    })
  );
  
  // All messages need a sender
  const completeMessages = messages.map(msg => ({
    ...msg,
    value: {
      ...msg.value,
      sender: firstAccount.address
    }
  }));
  
  // Broadcast as a batch
  const result = await client.signAndBroadcast(
    firstAccount.address,
    completeMessages,
    "auto"
  );
  
  console.log(`Batch transfer successful! Transaction hash: ${result.transactionHash}`);
  
  return result;
}
```

### Using React Query Hooks

If you've enabled React Query hooks, you can use them in your React components:

```tsx
import React from 'react';
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { CW721BaseQueryClient } from "./contracts/CW721Base.client";
import { useCW721OwnerOf } from "./contracts/CW721Base.react-query";

function NFTOwnerDisplay({ tokenId }: { tokenId: string }) {
  // In a real app, you'd likely use a provider for this
  const [client, setClient] = React.useState<CW721BaseQueryClient | null>(null);
  
  React.useEffect(() => {
    async function setupClient() {
      const cosmWasmClient = await CosmWasmClient.connect("https://rpc.cosmos.network");
      const newClient = new CW721BaseQueryClient(
        cosmWasmClient,
        "cosmos1..." // Contract address
      );
      setClient(newClient);
    }
    
    setupClient();
  }, []);
  
  const { data, isLoading, error } = useCW721OwnerOf(
    client!,
    { token_id: tokenId },
    { enabled: !!client }
  );
  
  if (!client || isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h2>NFT Owner Information</h2>
      <p>Token ID: {tokenId}</p>
      <p>Owner: {data?.owner}</p>
      <p>Number of approvals: {data?.approvals.length}</p>
    </div>
  );
}
```

## Advanced Usage: Multiple Contracts

For more complex applications, you might need to interact with multiple contracts. Telescope makes this easy by letting you generate SDKs for all your contracts:

```javascript
cosmwasm: {
  contracts: [
    { name: "NFT", dir: "./schema/cw721" },
    { name: "Marketplace", dir: "./schema/marketplace" },
    { name: "Staking", dir: "./schema/staking" }
  ],
  outPath: "./src/contracts"
}
```

Then you can use them together:

```typescript
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { NFTClient } from "./contracts/NFT.client";
import { MarketplaceClient } from "./contracts/Marketplace.client";

async function listNFTForSale(tokenId: string, price: number) {
  // Set up wallet and signing client
  // ...
  
  // Create clients for both contracts
  const nftClient = new NFTClient(
    client,
    "cosmos1..." // NFT contract address
  );
  
  const marketplaceClient = new MarketplaceClient(
    client,
    "cosmos1..." // Marketplace contract address
  );
  
  // First approve the marketplace to transfer the NFT
  await nftClient.approve({
    sender: firstAccount.address,
    spender: marketplaceClient.contractAddress,
    token_id: tokenId
  });
  
  // Then list it on the marketplace
  const result = await marketplaceClient.listToken({
    sender: firstAccount.address,
    token_contract: nftClient.contractAddress,
    token_id: tokenId,
    price: price.toString()
  });
  
  console.log(`NFT listed for sale! Transaction hash: ${result.transactionHash}`);
  
  return result;
}
```

## Customizing Type Imports

If your contract uses custom types or you want to use specific implementations of common types, you can configure this in the `customTypes` section:

```javascript
{
  name: "MyContract",
  dir: "./schema/mycontract",
  customTypes: {
    // Map Cosmos SDK Coin type to CosmJS implementation
    "cosmos.base.v1beta1.Coin": {
      module: "@cosmjs/stargate",
      type: "Coin"
    },
    
    // Map a custom type to your own implementation
    "MyCustomType": {
      module: "../types/custom",
      type: "MyImplementation"
    }
  }
}
```

This ensures that your generated code uses the right imports for these types.

## Best Practices

When working with CosmWasm TypeScript SDKs, follow these best practices:

1. **Keep schema files updated**: Regenerate your SDKs whenever your contract schema changes
2. **Use message composers for batch transactions**: They're more efficient than multiple single transactions
3. **Implement proper error handling**: CosmWasm contract errors are returned as strings
4. **Consider using React Query for state management**: It handles caching, refetching, and loading states
5. **Create a client provider**: In React apps, create a provider that gives components access to contract clients

## Troubleshooting

Here are some common issues and their solutions:

### Schema Files Not Found

If Telescope can't find your schema files, double-check the path in your configuration. The path is relative to where you run the Telescope command.

### Generated Types Don't Match Contract

Ensure your schema files are up-to-date with your contract. You might need to rebuild your contract to regenerate schema files.

### Type Errors in Generated Code

If you see type errors in the generated code, you might need to customize how certain types are imported using the `customTypes` configuration.

### React Query Hooks Not Working

If your React Query hooks aren't working properly, check that you've installed the correct version of React Query that matches your configuration.

## Conclusion

In this tutorial, you've learned how to use Telescope to generate TypeScript SDKs for your CosmWasm smart contracts. This powerful integration brings type safety, auto-completion, and a better developer experience to your dApp development workflow.

By leveraging these generated SDKs, you can:

1. Query and execute contract operations with full type safety
2. Compose complex messages for batch transactions
3. Use React Query hooks for efficient state management
4. Work with multiple contracts in a type-safe way

The combination of Telescope and CosmWasm opens up new possibilities for building sophisticated dApps on the Cosmos ecosystem with a modern TypeScript stack.

In the next tutorial, we'll explore [Helper Functions Configuration](./helper-functions-configuration.md) to see how Telescope can generate custom utility functions for your blockchain interactions. 