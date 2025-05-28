# Broadcasting Messages to the Network

In this tutorial, we'll learn how to broadcast transactions containing your messages to a Cosmos blockchain. Broadcasting is the final step in the transaction lifecycle, where your signed transaction is sent to the network for processing.

## Understanding the Transaction Broadcast Process

When you broadcast a transaction to a Cosmos blockchain, several things happen:

1. Your transaction is submitted to a node's mempool
2. The node validates your transaction
3. The transaction gets included in a block
4. The transaction is executed by all nodes in the network
5. The transaction's effects are recorded in the blockchain state

Let's learn how to implement this process in your application.

## Prerequisites

Before you can broadcast transactions, you need:

- A properly configured signer (see [Creating Signers](./creating-signers.md))
- Messages to send (see [Composing Messages](./composing-messages.md))
- Transaction fees (see [Calculating Fees](./calculating-fees.md))

## Basic Broadcasting with SigningStargateClient

The most straightforward way to broadcast a transaction is using the `signAndBroadcast` method from a `SigningStargateClient`:

```typescript
import { SigningStargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { registry } from "./codegen/registry";

async function broadcastSimpleTransaction() {
  // Set up a wallet (in production, use a more secure approach)
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    "your mnemonic here", // Never hardcode in production!
    { prefix: "cosmos" }
  );
  
  // Get the sender address
  const [firstAccount] = await wallet.getAccounts();
  const sender = firstAccount.address;
  
  // Create a signing client
  const client = await SigningStargateClient.connectWithSigner(
    "https://rpc.cosmos.network",
    wallet,
    { registry }
  );
  
  try {
    // Define the messages you want to send
    const messages = [
      {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
          fromAddress: sender,
          toAddress: "cosmos1recipient...",
          amount: [{ denom: "uatom", amount: "1000000" }] // 1 ATOM
        }
      }
    ];
    
    // Define the fee
    const fee = {
      amount: [{ denom: "uatom", amount: "5000" }],
      gas: "200000"
    };
    
    // Optional memo
    const memo = "Transaction sent from my app";
    
    // Sign and broadcast in one step
    const result = await client.signAndBroadcast(
      sender,
      messages,
      fee,
      memo
    );
    
    console.log("Broadcast result:", result);
    
    // Check if transaction was successful
    if (result.code === 0) {
      console.log("Transaction successful!");
      console.log("Transaction hash:", result.transactionHash);
    } else {
      console.error("Transaction failed with code:", result.code);
      console.error("Error message:", result.rawLog);
    }
  } finally {
    client.disconnect();
  }
}

broadcastSimpleTransaction().catch(console.error);
```

## Using Chain-Specific Clients

Telescope generates chain-specific clients that make broadcasting even easier:

```typescript
import { getSigningOsmosisClient } from "osmojs";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { MsgSwapExactAmountIn } from "osmojs/types/codegen/osmosis/gamm/v1beta1/tx";

async function broadcastWithChainSpecificClient() {
  // Create wallet for Osmosis
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    "your mnemonic here",
    { prefix: "osmo" }
  );
  
  const [account] = await wallet.getAccounts();
  const sender = account.address;
  
  // Create Osmosis-specific client
  const client = await getSigningOsmosisClient({
    rpcEndpoint: "https://rpc.osmosis.zone",
    signer: wallet
  });
  
  try {
    // Create a swap message using Telescope-generated types
    const swapMsg = {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
      value: MsgSwapExactAmountIn.fromPartial({
        sender: sender,
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
      })
    };
    
    // Define fee
    const fee = {
      amount: [{ denom: "uosmo", amount: "5000" }],
      gas: "300000"
    };
    
    // Broadcast the transaction
    const result = await client.signAndBroadcast(
      sender,
      [swapMsg],
      fee,
      "Swap tokens using Telescope"
    );
    
    console.log("Transaction hash:", result.transactionHash);
    
    if (result.code === 0) {
      console.log("Swap successful!");
    } else {
      console.error("Swap failed:", result.rawLog);
    }
  } finally {
    client.disconnect();
  }
}
```

## Simulating Before Broadcasting

Before sending a transaction, it's often a good idea to simulate it to estimate the required gas:

```typescript
async function simulateAndBroadcast(client, sender, messages, memo = "") {
  try {
    // Step 1: Simulate to estimate gas
    console.log("Simulating transaction...");
    const gasEstimated = await client.simulate(sender, messages, memo);
    console.log("Estimated gas:", gasEstimated);
    
    // Step 2: Add a safety margin (30%)
    const gasLimit = Math.round(gasEstimated * 1.3);
    console.log("Gas limit with safety margin:", gasLimit);
    
    // Step 3: Calculate the fee
    const fee = {
      amount: [{ denom: "uatom", amount: "5000" }],
      gas: gasLimit.toString()
    };
    
    // Step 4: Sign and broadcast with estimated gas
    console.log("Broadcasting transaction...");
    const result = await client.signAndBroadcast(sender, messages, fee, memo);
    
    console.log("Transaction successful!");
    console.log("Transaction hash:", result.transactionHash);
    return result;
  } catch (error) {
    console.error("Error in transaction:", error.message);
    throw error;
  }
}
```

## Understanding Broadcast Modes

Under the hood, CosmJS offers different broadcast modes that determine how the client waits for transaction confirmation:

1. **Block Mode**: Waits for the transaction to be included in a block (default)
2. **Sync Mode**: Returns after the transaction passes mempool validation
3. **Async Mode**: Returns immediately without waiting

Most of the time, you'll want to use the default Block Mode, but for specialized applications you might use others.

```typescript
// Lower-level direct broadcast with specific mode (usually not needed)
const result = await client.broadcastTx(
  signedTxBytes,
  timeoutMs,
  "sync" // broadcast mode: "block", "sync", or "async"
);
```

## Handling Common Broadcasting Errors

Let's look at common errors you might encounter when broadcasting:

```typescript
async function broadcastWithErrorHandling(client, sender, messages, fee, memo = "") {
  try {
    const result = await client.signAndBroadcast(sender, messages, fee, memo);
    
    if (result.code === 0) {
      return result; // Success
    } else {
      // Transaction was included in a block but failed execution
      if (result.rawLog.includes("insufficient funds")) {
        throw new Error("Account doesn't have enough tokens");
      } else if (result.rawLog.includes("out of gas")) {
        // Retry with more gas
        console.log("Transaction ran out of gas, retrying with more gas...");
        fee.gas = (parseInt(fee.gas) * 1.5).toString();
        return broadcastWithErrorHandling(client, sender, messages, fee, memo);
      } else {
        throw new Error(`Transaction failed: ${result.rawLog}`);
      }
    }
  } catch (error) {
    // Error before transaction was included in a block
    if (error.message.includes("account sequence mismatch")) {
      // Handle sequence mismatch
      console.log("Sequence mismatch, retrying with refreshed account data...");
      const account = await client.getAccount(sender);
      // Now you would need to update the sequence and retry
      // This is handled automatically by signAndBroadcast, so this error 
      // usually occurs when manually signing
    } else if (error.message.includes("timed out")) {
      console.log("Network timeout, retrying...");
      // Wait a bit and retry
      await new Promise(resolve => setTimeout(resolve, 2000));
      return broadcastWithErrorHandling(client, sender, messages, fee, memo);
    } else {
      throw error; // Rethrow other errors
    }
  }
}
```

## Implementing Retry Logic

For production applications, it's important to implement retry logic to handle transient failures:

```typescript
async function broadcastWithRetry(client, sender, messages, fee, memo = "", maxRetries = 3) {
  let attempt = 0;
  
  while (attempt < maxRetries) {
    try {
      attempt++;
      console.log(`Attempt ${attempt} of ${maxRetries}...`);
      
      const result = await client.signAndBroadcast(sender, messages, fee, memo);
      
      if (result.code === 0) {
        console.log("Transaction successful!");
        return result;
      } else {
        console.error(`Transaction failed with code ${result.code}: ${result.rawLog}`);
        
        // Check for fee-related errors
        if (result.rawLog.includes("insufficient fee")) {
          console.log("Increasing fee for next attempt...");
          // Increase fee by 50%
          fee.amount[0].amount = (parseInt(fee.amount[0].amount) * 1.5).toString();
        } 
        // Check for gas-related errors
        else if (result.rawLog.includes("out of gas")) {
          console.log("Increasing gas limit for next attempt...");
          // Increase gas by 50%
          fee.gas = (parseInt(fee.gas) * 1.5).toString();
        } 
        // If it's another type of error, we might not want to retry
        else {
          throw new Error(`Transaction failed: ${result.rawLog}`);
        }
      }
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error.message);
      
      // Only retry on specific errors
      if (error.message.includes("timed out") || 
          error.message.includes("socket hang up") ||
          error.message.includes("account sequence mismatch")) {
        // Add exponential backoff
        const backoffMs = 1000 * Math.pow(2, attempt - 1);
        console.log(`Waiting ${backoffMs}ms before retrying...`);
        await new Promise(resolve => setTimeout(resolve, backoffMs));
      } else {
        throw error; // Don't retry on other errors
      }
    }
  }
  
  throw new Error(`Failed after ${maxRetries} attempts`);
}
```

## Separating Signing and Broadcasting

For some advanced use cases, you might want to separate the signing and broadcasting steps:

```typescript
async function signThenBroadcast() {
  // Create wallet and client
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic("...");
  const [account] = await wallet.getAccounts();
  const sender = account.address;
  
  // Get chain info
  const client = await SigningStargateClient.connectWithSigner("https://rpc...", wallet);
  const chainId = await client.getChainId();
  
  // Prepare transaction
  const messages = [/* your messages here */];
  const fee = {
    amount: [{ denom: "uatom", amount: "5000" }],
    gas: "200000"
  };
  const memo = "Signed offline";
  
  // Step 1: Get account info
  const accountOnChain = await client.getAccount(sender);
  if (!accountOnChain) {
    throw new Error("Account not found on chain");
  }
  
  // Step 2: Prepare the signing document
  const signDoc = {
    chainId,
    accountNumber: accountOnChain.accountNumber,
    sequence: accountOnChain.sequence,
    fee,
    msgs: messages,
    memo
  };
  
  // Step 3: Sign the transaction (can be done offline)
  const { signed, signature } = await wallet.signDirect(
    sender,
    signDoc
  );
  
  // Step 4: Encode the signed transaction
  const signedTx = {
    authInfoBytes: signed.authInfoBytes,
    bodyBytes: signed.bodyBytes,
    signatures: [signature.signature]
  };
  
  // Step 5: Broadcast the signed transaction
  const result = await client.broadcastTx(
    signedTx,
    60000, // timeout in ms
    "block" // wait for block inclusion
  );
  
  console.log("Transaction result:", result);
}
```

## Working with Transaction Events

After broadcasting a transaction, you can extract important information from the events:

```typescript
function parseTransactionEvents(result) {
  if (!result.events || result.events.length === 0) {
    console.log("No events in transaction");
    return;
  }
  
  console.log("Transaction events:");
  
  // Process each event
  result.events.forEach(event => {
    console.log(`Event type: ${event.type}`);
    
    // Process attributes within each event
    event.attributes.forEach(attr => {
      console.log(`  ${attr.key}: ${attr.value}`);
    });
    
    // Extract specific information based on event type
    if (event.type === "transfer") {
      const recipient = event.attributes.find(a => a.key === "recipient")?.value;
      const amount = event.attributes.find(a => a.key === "amount")?.value;
      
      if (recipient && amount) {
        console.log(`  Transferred ${amount} to ${recipient}`);
      }
    } else if (event.type === "message") {
      const action = event.attributes.find(a => a.key === "action")?.value;
      if (action) {
        console.log(`  Action performed: ${action}`);
      }
    }
  });
}

// After broadcasting
const result = await client.signAndBroadcast(sender, messages, fee, memo);
parseTransactionEvents(result);
```

## Best Practices for Production Applications

When broadcasting transactions in production:

1. **Always handle errors gracefully** and provide meaningful feedback to users
2. **Implement retry logic** with exponential backoff for transient failures
3. **Simulate transactions first** to get accurate gas estimates
4. **Add a safety margin** to gas estimates (usually 30% is sufficient)
5. **Store transaction hashes** for later reference and to avoid duplicates
6. **Parse transaction events** to confirm the specific actions were performed
7. **Monitor mempool congestion** and adjust gas prices accordingly
8. **Implement a queue system** for high-volume broadcasting scenarios
9. **Track pending transactions** so users can see their status
10. **Implement proper error messages** for different failure scenarios

## A Complete Broadcasting Example

Let's put everything together in a complete example:

```typescript
import { SigningStargateClient, GasPrice, calculateFee } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { registry } from "./codegen/registry";
import { MsgSend } from "./codegen/cosmos/bank/v1beta1/tx";

async function sendTokens(
  mnemonic: string,
  recipientAddress: string,
  amount: string,
  denom: string
) {
  try {
    console.log("Preparing transaction...");
    
    // Create wallet
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      mnemonic,
      { prefix: "cosmos" }
    );
    
    const [account] = await wallet.getAccounts();
    const sender = account.address;
    console.log(`Sender address: ${sender}`);
    
    // Create client
    const rpcEndpoint = "https://rpc.cosmos.network";
    const gasPrice = GasPrice.fromString("0.025uatom");
    
    const client = await SigningStargateClient.connectWithSigner(
      rpcEndpoint,
      wallet,
      { 
        registry,
        gasPrice
      }
    );
    
    // Get chain info
    const chainId = await client.getChainId();
    console.log(`Connected to chain: ${chainId}`);
    
    // Check balance
    const balance = await client.getBalance(sender, denom);
    console.log(`Sender balance: ${balance.amount} ${balance.denom}`);
    
    const amountToSend = amount;
    if (parseInt(balance.amount) < parseInt(amountToSend)) {
      throw new Error(`Insufficient balance: ${balance.amount} ${balance.denom}`);
    }
    
    // Create the message
    const message = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: MsgSend.fromPartial({
        fromAddress: sender,
        toAddress: recipientAddress,
        amount: [{ denom, amount: amountToSend }]
      })
    };
    
    // Simulate transaction to estimate gas
    console.log("Simulating transaction to estimate gas...");
    const gasEstimated = await client.simulate(sender, [message], "");
    console.log(`Gas estimate: ${gasEstimated}`);
    
    // Add safety margin
    const gasLimit = Math.round(gasEstimated * 1.3);
    
    // Calculate fee based on gas limit and gas price
    const fee = calculateFee(gasLimit, gasPrice);
    console.log(`Fee: ${fee.amount[0].amount} ${fee.amount[0].denom}`);
    
    // Broadcast with retry logic
    console.log("Broadcasting transaction...");
    const result = await broadcastWithRetry(
      client, 
      sender, 
      [message], 
      fee, 
      `Send ${amountToSend} ${denom} to ${recipientAddress}`
    );
    
    console.log("Transaction successful!");
    console.log(`Transaction hash: ${result.transactionHash}`);
    console.log(`Gas used: ${result.gasUsed} / ${result.gasWanted}`);
    
    // Parse events
    parseTransactionEvents(result);
    
    return result;
  } catch (error) {
    console.error("Error sending tokens:", error.message);
    throw error;
  }
}

// Usage example
sendTokens(
  "your mnemonic",
  "cosmos1recipient...",
  "1000000", // 1 ATOM in uatom
  "uatom"
).catch(console.error);
```

## Next Steps

Now that you've learned how to broadcast messages to Cosmos blockchains, you may want to explore:

- [LCD Clients](./lcd-clients.md) for querying blockchain data via REST
- [RPC Clients](./rpc-clients.md) for more direct interaction with nodes
- [CosmWasm Integration](./cosmwasm.md) if you're working with smart contracts

By mastering the broadcasting process, you now have the complete toolkit to interact with any Cosmos SDK blockchain using Telescope-generated types and clients. 