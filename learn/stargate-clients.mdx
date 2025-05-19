# Working with Stargate Clients

In this tutorial, we'll learn how to use Stargate clients with Telescope-generated types to communicate with Cosmos SDK blockchains. We'll cover everything from basic setup to advanced usage patterns to help you build robust blockchain applications.

## Understanding Stargate Clients

Stargate clients are the primary way to interact with Cosmos SDK blockchains from your JavaScript or TypeScript applications. They provide an interface to:

1. Query blockchain data (account balances, delegations, governance proposals, etc.)
2. Send transactions (transfer tokens, delegate to validators, vote on proposals, etc.)
3. Subscribe to blockchain events

Telescope enhances these clients by generating TypeScript types that provide type safety and autocompletion for all blockchain interactions.

## Types of Clients

Let's start by understanding the different client types available:

### Query-only Clients

These clients can only read data from the blockchain, not modify it:

- **StargateClient**: Basic read-only client for common operations
- **QueryClient**: Advanced read-only client that can be extended with module-specific query methods

### Transaction Clients

These clients can both read data and send transactions:

- **SigningStargateClient**: The main client for sending signed transactions
- **Telescope-generated clients**: Chain-specific clients like `getSigningOsmosisClient`

Let's learn how to use each of these clients, starting with the simplest ones.

## Setting Up a Basic StargateClient

First, let's create a simple StargateClient to query basic blockchain information:

```typescript
import { StargateClient } from "@cosmjs/stargate";

async function queryBasicInfo() {
  // Connect to a Cosmos SDK chain (in this case, Cosmos Hub)
  const client = await StargateClient.connect("https://rpc.cosmos.network");
  
  try {
    // Get the chain ID
    const chainId = await client.getChainId();
    console.log("Chain ID:", chainId);
    
    // Get the current block height
    const height = await client.getHeight();
    console.log("Current height:", height);
    
    // Get account balance
    const address = "cosmos1..."; // Replace with an actual address
    const balance = await client.getAllBalances(address);
    console.log("Account balance:", balance);
    
    // Get account information
    const account = await client.getAccount(address);
    console.log("Account details:", account);
  } finally {
    // Always disconnect when done to free resources
    client.disconnect();
  }
}

queryBasicInfo().catch(console.error);
```

This client is perfect for simple read-only operations, but for more advanced queries, we'll need to use a QueryClient.

## Working with QueryClient and Extensions

The QueryClient is more powerful because it can be extended with module-specific functionality:

```typescript
import { QueryClient, setupStargateClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { setupBankExtension, BankExtension } from "@cosmjs/stargate";

// Define a type that includes our extensions
type ExtendedQueryClient = QueryClient & {
  stargateClient: ReturnType<typeof setupStargateClient>;
  bank: BankExtension;
};

async function queryWithExtensions() {
  // First, create a Tendermint client
  const tmClient = await Tendermint34Client.connect("https://rpc.cosmos.network");
  
  try {
    // Create a query client with extensions
    const queryClient = QueryClient.withExtensions(
      tmClient,
      setupStargateClient,
      setupBankExtension
    ) as ExtendedQueryClient;
    
    // Use the base stargate client extension
    const chainId = await queryClient.stargateClient.getChainId();
    const height = await queryClient.stargateClient.getHeight();
    console.log(`Chain: ${chainId}, Height: ${height}`);
    
    // Use the bank extension
    const address = "cosmos1..."; // Replace with an actual address
    const balances = await queryClient.bank.allBalances(address);
    console.log("Balances:", balances);
    
    const supply = await queryClient.bank.totalSupply();
    console.log("Total supply:", supply);
  } finally {
    tmClient.disconnect();
  }
}

queryWithExtensions().catch(console.error);
```

## Creating a Client with Telescope-generated Types

Telescope enhances your interaction with Cosmos chains by generating type-safe clients. Let's see how to use them:

```typescript
import { createRPCQueryClient } from "./codegen/cosmos";

async function queryWithTelescopeTypes() {
  // Create a Telescope-generated query client
  const client = await createRPCQueryClient({
    rpcEndpoint: "https://rpc.cosmos.network"
  });
  
  try {
    // Query bank module with full type safety
    const address = "cosmos1..."; // Replace with an actual address
    const { balances } = await client.cosmos.bank.v1beta1.allBalances({ address });
    console.log("Balances:", balances);
    
    // Query staking module
    const { validators } = await client.cosmos.staking.v1beta1.validators({});
    console.log(`Found ${validators.length} validators`);
    
    // Query governance proposals
    const { proposals } = await client.cosmos.gov.v1beta1.proposals({
      proposalStatus: 0, // All proposals
      voter: "",
      depositor: ""
    });
    console.log(`Found ${proposals.length} governance proposals`);
  } finally {
    client.disconnect();
  }
}

queryWithTelescopeTypes().catch(console.error);
```

## Signing and Broadcasting Transactions

Now let's learn how to send transactions using the SigningStargateClient:

```typescript
import { SigningStargateClient, GasPrice } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { registry } from "./codegen/registry";

async function sendTransaction() {
  // First, create a wallet (in production, use a more secure method)
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    "your mnemonic phrase here", // Never hardcode this in production!
    { prefix: "cosmos" } // Address prefix for the chain
  );
  
  // Get the first account from the wallet
  const [firstAccount] = await wallet.getAccounts();
  const sender = firstAccount.address;
  
  // Create a signing client
  const client = await SigningStargateClient.connectWithSigner(
    "https://rpc.cosmos.network",
    wallet,
    { 
      registry, // Use Telescope-generated registry
      gasPrice: GasPrice.fromString("0.025uatom") // Set an appropriate gas price
    }
  );
  
  try {
    // Example: Send tokens
    const recipient = "cosmos1recipient...";
    const amount = [{ denom: "uatom", amount: "1000000" }]; // 1 ATOM in microatoms
    
    // Estimate fee through simulation (recommended)
    const gasEstimated = await client.simulate(sender, [
      {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
          fromAddress: sender,
          toAddress: recipient,
          amount: amount
        }
      }
    ], "");
    
    // Add a safety margin to gas estimate
    const gasLimit = Math.round(gasEstimated * 1.3);
    
    // Create the fee
    const fee = {
      amount: [{ denom: "uatom", amount: "5000" }],
      gas: gasLimit.toString()
    };
    
    // Send the transaction
    const result = await client.signAndBroadcast(
      sender,
      [
        {
          typeUrl: "/cosmos.bank.v1beta1.MsgSend",
          value: {
            fromAddress: sender,
            toAddress: recipient,
            amount: amount
          }
        }
      ],
      fee,
      "Transaction from Telescope tutorial" // Memo
    );
    
    console.log("Transaction result:", result);
    console.log("Transaction hash:", result.transactionHash);
    
    // Check if transaction was successful
    if (result.code === 0) {
      console.log("Transaction successful!");
    } else {
      console.error("Transaction failed with code:", result.code);
      console.error("Error message:", result.rawLog);
    }
  } finally {
    client.disconnect();
  }
}

sendTransaction().catch(console.error);
```

## Using Telescope-generated Message Types

Telescope generates TypeScript types for all the messages in a blockchain. Let's use them for better type safety:

```typescript
import { SigningStargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { registry } from "./codegen/registry";
import { MsgSend } from "./codegen/cosmos/bank/v1beta1/tx";

async function sendTypedTransaction() {
  // Set up wallet and client as before
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic("...");
  const [account] = await wallet.getAccounts();
  const client = await SigningStargateClient.connectWithSigner(
    "https://rpc.cosmos.network",
    wallet,
    { registry }
  );
  
  try {
    // Create a MsgSend using Telescope-generated types
    const sendMsg = MsgSend.fromPartial({
      fromAddress: account.address,
      toAddress: "cosmos1recipient...",
      amount: [{ denom: "uatom", amount: "1000000" }]
    });
    
    // Prepare the transaction
    const msgSend = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: sendMsg
    };
    
    // Send the transaction
    const result = await client.signAndBroadcast(
      account.address,
      [msgSend],
      {
        amount: [{ denom: "uatom", amount: "5000" }],
        gas: "200000"
      }
    );
    
    console.log("Transaction hash:", result.transactionHash);
  } finally {
    client.disconnect();
  }
}

sendTypedTransaction().catch(console.error);
```

## Using Chain-Specific Signing Clients

Telescope generates chain-specific clients that make it even easier to interact with specific blockchains:

```typescript
import { getSigningOsmosisClient } from "osmojs";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

async function useChainSpecificClient() {
  // Create a wallet for the Osmosis chain
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    "your mnemonic here",
    { prefix: "osmo" } // Osmosis address prefix
  );
  
  // Get the first account
  const [account] = await wallet.getAccounts();
  
  // Create a chain-specific signing client
  const client = await getSigningOsmosisClient({
    rpcEndpoint: "https://rpc.osmosis.zone",
    signer: wallet
  });
  
  try {
    // Now you can use methods specific to Osmosis
    // For example, to swap tokens:
    const swapMsg = {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
      value: {
        sender: account.address,
        routes: [
          {
            poolId: "1",
            tokenOutDenom: "uosmo"
          }
        ],
        tokenIn: {
          denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
          amount: "1000000"
        },
        tokenOutMinAmount: "500000"
      }
    };
    
    // Send the transaction
    const result = await client.signAndBroadcast(
      account.address,
      [swapMsg],
      {
        amount: [{ denom: "uosmo", amount: "5000" }],
        gas: "300000"
      }
    );
    
    console.log("Swap completed, txhash:", result.transactionHash);
  } finally {
    client.disconnect();
  }
}

useChainSpecificClient().catch(console.error);
```

## Setting Up Registry and Amino Types

When working with custom chains or custom message types, you might need to configure the registry and amino types:

```typescript
import { SigningStargateClient, AminoTypes } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { 
  cosmosAminoConverters, cosmosProtoRegistry,
  ibcAminoConverters, ibcProtoRegistry,
  osmosisAminoConverters, osmosisProtoRegistry
} from "osmojs";

async function setupCustomRegistryAndAmino() {
  // Combine registries from different modules
  const registry = new Registry([
    ...cosmosProtoRegistry,
    ...ibcProtoRegistry,
    ...osmosisProtoRegistry
  ]);
  
  // Combine amino converters from different modules
  const aminoTypes = new AminoTypes({
    ...cosmosAminoConverters,
    ...ibcAminoConverters,
    ...osmosisAminoConverters
  });
  
  // Create a client with custom registry and amino types
  const client = await SigningStargateClient.connectWithSigner(
    "https://rpc.osmosis.zone",
    wallet,
    {
      registry,
      aminoTypes
    }
  );
  
  // Now you can use this client to send any supported message type
  // The registry ensures proper encoding/decoding of Protobuf messages
  // The aminoTypes ensures compatibility with wallets that use Amino encoding
}
```

## Managing Multiple Chain Configurations

In real-world applications, you might need to interact with multiple chains. Here's how to manage configurations:

```typescript
import { GasPrice } from "@cosmjs/stargate";

// Define configurations for different chains
const chainConfigs = {
  "cosmoshub-4": {
    rpcEndpoint: "https://rpc.cosmos.network",
    restEndpoint: "https://rest.cosmos.network",
    prefix: "cosmos",
    gasPrice: GasPrice.fromString("0.025uatom"),
    feeDenom: "uatom"
  },
  "osmosis-1": {
    rpcEndpoint: "https://rpc.osmosis.zone",
    restEndpoint: "https://rest.osmosis.zone", 
    prefix: "osmo",
    gasPrice: GasPrice.fromString("0.025uosmo"),
    feeDenom: "uosmo"
  },
  "juno-1": {
    rpcEndpoint: "https://rpc.juno.omniflix.co",
    restEndpoint: "https://rest.juno.omniflix.co",
    prefix: "juno",
    gasPrice: GasPrice.fromString("0.025ujuno"),
    feeDenom: "ujuno"
  }
};

async function createClientForChain(chainId, wallet) {
  const config = chainConfigs[chainId];
  if (!config) {
    throw new Error(`Config not found for chain: ${chainId}`);
  }
  
  // Create a signing client for the selected chain
  return SigningStargateClient.connectWithSigner(
    config.rpcEndpoint,
    wallet,
    {
      prefix: config.prefix,
      gasPrice: config.gasPrice
    }
  );
}
```

## Reading Transaction Results

When you send a transaction, you get back a result object with important information. Here's how to interpret it:

```typescript
// After sending a transaction
const result = await client.signAndBroadcast(sender, messages, fee);

// Basic transaction info
console.log("Transaction hash:", result.transactionHash);
console.log("Block height:", result.height);
console.log("Gas used:", result.gasUsed, "out of", result.gasWanted);

// Check if transaction was successful
if (result.code === 0) {
  console.log("Transaction successful!");
} else {
  console.error("Transaction failed with code:", result.code);
  console.error("Error message:", result.rawLog);
}

// Parse events and attributes
if (result.events) {
  console.log("Events from transaction:");
  result.events.forEach(event => {
    console.log(`Event type: ${event.type}`);
    event.attributes.forEach(attr => {
      console.log(`  ${attr.key}: ${attr.value}`);
    });
  });
  
  // Example: Extract a proposal ID from a submit proposal transaction
  const submitEvent = result.events.find(e => e.type === "submit_proposal");
  if (submitEvent) {
    const proposalIdAttr = submitEvent.attributes.find(a => a.key === "proposal_id");
    if (proposalIdAttr) {
      console.log("Created proposal ID:", proposalIdAttr.value);
    }
  }
}
```

## Error Handling and Retries

Blockchain interactions can fail for various reasons. Here's how to handle common errors and implement retries:

```typescript
async function sendTransactionWithRetry(client, sender, messages, fee, maxRetries = 3) {
  let retries = 0;
  
  while (retries < maxRetries) {
    try {
      const result = await client.signAndBroadcast(sender, messages, fee);
      
      // Check for failure codes
      if (result.code !== 0) {
        console.error(`Transaction failed with code ${result.code}: ${result.rawLog}`);
        
        // Handle specific error cases
        if (result.rawLog.includes("insufficient fees")) {
          // Increase fees and retry
          fee.amount[0].amount = (parseInt(fee.amount[0].amount) * 1.5).toString();
          console.log("Retrying with higher fees:", fee);
          retries++;
          continue;
        }
        
        if (result.rawLog.includes("out of gas")) {
          // Increase gas limit and retry
          fee.gas = (parseInt(fee.gas) * 1.5).toString();
          console.log("Retrying with higher gas limit:", fee);
          retries++;
          continue;
        }
        
        // For other errors, don't retry
        return result;
      }
      
      // Success
      return result;
    } catch (error) {
      console.error(`Attempt ${retries + 1} failed:`, error.message);
      
      // Handle network errors
      if (error.message.includes("socket hang up") || 
          error.message.includes("connection refused") ||
          error.message.includes("timeout")) {
        console.log("Network error, retrying...");
        retries++;
        // Wait before retrying (exponential backoff)
        await new Promise(r => setTimeout(r, 1000 * Math.pow(2, retries)));
        continue;
      }
      
      // For other errors, don't retry
      throw error;
    }
  }
  
  throw new Error(`Failed after ${maxRetries} attempts`);
}
```

## Best Practices

To make the most of Stargate clients in your applications:

1. **Always disconnect clients when done** to prevent resource leaks
2. **Use a proper registry** with all your message types registered
3. **Implement proper error handling** for network issues and other failures
4. **Simulate transactions** before broadcasting to estimate gas
5. **Add a safety margin** to gas estimates (usually 1.3x to 1.5x)
6. **Use appropriate gas prices** for each chain
7. **Include informative memos** in transactions for better traceability
8. **Parse transaction events** to extract important information
9. **Implement retry mechanisms** for transient failures
10. **Use type-safe message composition** with Telescope-generated types

## Next Steps

Now that you understand how to use Stargate clients with Telescope-generated types, you can:

- Learn about [creating signers](./creating-signers.md) for transaction authorization
- Explore [composing messages](./composing-messages.md) for different transaction types
- Understand [calculating fees](./calculating-fees.md) for your transactions

By combining these skills, you'll be able to build robust applications that interact with any Cosmos SDK blockchain in a type-safe way. 