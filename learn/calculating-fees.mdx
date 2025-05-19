# How to Calculate Transaction Fees

In this tutorial, we'll learn how to calculate and manage transaction fees when sending transactions to a Cosmos SDK blockchain using Telescope-generated types. Understanding fees is crucial for building reliable applications that interact with blockchains.

## Understanding Blockchain Fees

Every transaction in a Cosmos SDK blockchain requires a fee to be processed. This fee serves two purposes:

1. Compensates validators for executing and validating your transaction
2. Prevents spam or denial of service attacks on the network

Unlike fixed fees you might be familiar with in traditional payment systems, blockchain fees are variable and depend on the computational complexity of your transaction.

## The Components of a Fee

A fee in Cosmos SDK chains consists of two main components:

### 1. Gas

Gas is a measure of computational resources required to process your transaction. Each operation (like sending tokens, delegating, or submitting a proposal) requires different amounts of gas. Think of gas as the "fuel" your transaction needs to run.

### 2. Gas Price

Gas price is how much you're willing to pay per unit of gas. It's usually denominated in a specific token (like ATOM, OSMO, etc.). When the network is congested, you might want to pay a higher gas price to prioritize your transaction.

The total fee is calculated as:
```
Fee = Gas × Gas Price
```

## Basic Fee Structure

Let's look at how a fee is structured in the code:

```typescript
// A simple fee structure
const fee = {
  amount: [
    { denom: "uatom", amount: "5000" } // 0.005 ATOM (in microatoms)
  ],
  gas: "200000" // 200,000 units of gas
};
```

The `amount` field specifies how much you're willing to pay in total, and the `gas` field specifies the gas limit for your transaction.

## Methods for Setting Fees

There are three main approaches to setting fees:

### 1. Manual Fee Setting

This is the simplest approach, where you explicitly specify the gas limit and fee amount:

```typescript
// Manually set fees
const fee = {
  amount: [{ denom: "uatom", amount: "5000" }],
  gas: "200000"
};

// Use this fee when sending a transaction
const result = await txClient.signAndBroadcast(
  sender,
  messages,
  fee
);
```

This approach works well for simple transactions where you know the approximate gas requirements. However, it's less flexible for complex or variable transactions.

### 2. Fee Calculation with Gas Price

A more flexible approach is to use a gas price and calculate the fee based on the estimated gas:

```typescript
import { calculateFee, GasPrice } from "@cosmjs/stargate";

// Define a gas price (e.g., 0.025 microatoms per gas unit)
const gasPrice = GasPrice.fromString("0.025uatom");

// For a transaction that needs 200,000 gas
const fee = calculateFee(200000, gasPrice);

// Result will be:
// {
//   amount: [{ denom: "uatom", amount: "5000" }], // 200,000 * 0.025 = 5,000
//   gas: "200000"
// }
```

This approach allows you to adjust the gas limit while maintaining a consistent price per unit of gas.

### 3. Automatic Fee Estimation

The most advanced approach is to automatically estimate the gas needed for your transaction:

```typescript
import { SigningStargateClient } from "@cosmjs/stargate";
import { GasPrice } from "@cosmjs/stargate";

// Create a client with auto-gas estimation
const client = await SigningStargateClient.connectWithSigner(
  rpcEndpoint,
  wallet,
  { 
    gasPrice: GasPrice.fromString("0.025uatom"),
    // Optional gas adjustment factor (e.g., add 30% margin)
    gasAdjustment: 1.3
  }
);

// The "auto" string tells the client to estimate gas
const result = await client.signAndBroadcast(
  sender,
  messages,
  "auto"
);
```

When you use `"auto"`, the client will:
1. Simulate the transaction to estimate the gas required
2. Apply a safety margin (specified by `gasAdjustment`)
3. Calculate the fee based on the adjusted gas estimate and gas price

## Gas Estimation via Simulation

Let's look at how gas estimation works in more detail:

```typescript
import { SigningStargateClient } from "@cosmjs/stargate";
import { calculateFee, GasPrice } from "@cosmjs/stargate";

// First, create a client
const client = await SigningStargateClient.connectWithSigner(
  rpcEndpoint,
  wallet
);

// Define messages for your transaction
const messages = [/* your transaction messages */];

// Simulate the transaction to estimate gas
const gasEstimate = await client.simulate(
  senderAddress,
  messages,
  "memo" // Optional memo
);

console.log(`Estimated gas: ${gasEstimate}`);

// Apply a safety margin (usually 1.3x to 1.5x)
const gasLimit = Math.round(gasEstimate * 1.3);
console.log(`Gas limit with safety margin: ${gasLimit}`);

// Calculate the fee with a specific gas price
const gasPrice = GasPrice.fromString("0.025uatom");
const fee = calculateFee(gasLimit, gasPrice);

console.log("Calculated fee:", fee);
// Now use this fee when sending the transaction
const result = await client.signAndBroadcast(
  senderAddress,
  messages,
  fee
);
```

This approach gives you precise control over the fee calculation process while ensuring your transaction has enough gas to complete.

## Fee Estimation with Telescope-generated Clients

Telescope generates client code that makes fee handling even easier:

```typescript
import { createTxClient } from "./tx";
import { GasPrice } from "@cosmjs/stargate";

// Create a transaction client
const txClient = await createTxClient({
  signer: wallet,
  rpcEndpoint: "https://rpc.cosmos.network",
  gasPrice: GasPrice.fromString("0.025uatom")
});

// Define your messages
const messages = [/* your transaction messages */];

// Method 1: Let the client handle everything
const result1 = await txClient.signAndBroadcast(
  senderAddress,
  messages,
  "auto" // Automatic gas estimation
);

// Method 2: Simulate first, then calculate fee manually
const gasEstimate = await txClient.simulate({
  messages,
  signer: senderAddress
});

const gasLimit = Math.round(gasEstimate * 1.3);
const fee = {
  amount: [{ denom: "uatom", amount: (gasLimit * 0.025).toString() }],
  gas: gasLimit.toString()
};

const result2 = await txClient.signAndBroadcast(
  senderAddress,
  messages,
  fee
);
```

## Choosing the Right Fee Denomination

Most Cosmos chains accept fees in multiple denominations. Here's how to select an appropriate fee denomination based on the user's available balances:

```typescript
import { createRPCQueryClient } from "./rpc.query";

// Create a query client
const queryClient = await createRPCQueryClient({
  rpcEndpoint: "https://rpc.cosmos.network"
});

// Get the user's balances
const { balances } = await queryClient.cosmos.bank.v1beta1.allBalances({
  address: userAddress
});

// Function to select an appropriate fee denomination
function selectFeeDenom(balances, preferredDenom = "uatom", minimumAmount = 5000) {
  // First try the preferred denomination
  const preferred = balances.find(coin => coin.denom === preferredDenom);
  if (preferred && parseInt(preferred.amount) > minimumAmount) {
    return {
      denom: preferredDenom,
      available: preferred.amount
    };
  }
  
  // If preferred denomination isn't available or sufficient, look for alternatives
  // List of accepted fee denominations in order of preference
  const acceptedDenoms = ["uatom", "uosmo", "ujuno", "usomm"];
  
  for (const denom of acceptedDenoms) {
    if (denom === preferredDenom) continue; // Already checked
    
    const coin = balances.find(c => c.denom === denom);
    if (coin && parseInt(coin.amount) > minimumAmount) {
      return {
        denom,
        available: coin.amount
      };
    }
  }
  
  // If no good options found, return the preferred denom anyway
  // (the transaction will fail if there are insufficient funds)
  return {
    denom: preferredDenom,
    available: "0"
  };
}

// Use the function to select a fee denomination
const { denom, available } = selectFeeDenom(balances);
console.log(`Using ${denom} for fees. Available: ${available}`);

// Create a gas price with the selected denomination
const gasPrice = GasPrice.fromString(`0.025${denom}`);
```

## Handling Common Fee-related Errors

Let's look at how to handle common fee-related errors:

### 1. Insufficient Funds for Fees

```typescript
try {
  const result = await txClient.signAndBroadcast(
    senderAddress,
    messages,
    fee
  );
  // Process result
} catch (error) {
  if (error.message.includes("insufficient funds")) {
    console.error("Account doesn't have enough funds to pay for fees.");
    // Maybe suggest getting more tokens or using a different denom
  } else {
    console.error("Transaction failed:", error);
  }
}
```

### 2. Out of Gas Errors

```typescript
try {
  const result = await txClient.signAndBroadcast(
    senderAddress,
    messages,
    fee
  );
  // Process result
} catch (error) {
  if (error.message.includes("out of gas")) {
    console.error("Transaction ran out of gas. Trying again with more gas...");
    
    // Increase gas limit by 50%
    const newGasLimit = Math.round(parseInt(fee.gas) * 1.5);
    const newFee = {
      amount: [{ 
        denom: fee.amount[0].denom,
        amount: (parseInt(fee.amount[0].amount) * 1.5).toString()
      }],
      gas: newGasLimit.toString()
    };
    
    // Retry with higher gas
    try {
      const retryResult = await txClient.signAndBroadcast(
        senderAddress,
        messages,
        newFee
      );
      console.log("Transaction successful with increased gas:", retryResult);
    } catch (retryError) {
      console.error("Retry also failed:", retryError);
    }
  } else {
    console.error("Transaction failed:", error);
  }
}
```

## Typical Gas Costs for Common Operations

Here are approximate gas costs for common operations (these can vary by chain and version):

```typescript
const GAS_ESTIMATES = {
  send: 80000,           // Simple token transfer
  delegate: 160000,      // Delegate tokens to a validator
  undelegate: 180000,    // Undelegate tokens
  redelegate: 240000,    // Redelegate tokens from one validator to another
  withdrawRewards: 200000, // Withdraw staking rewards
  vote: 120000,          // Vote on a governance proposal
  submitProposal: 250000 // Submit a governance proposal (basic text proposal)
};

// Use these estimates for simple cases
const fee = {
  amount: [{ denom: "uatom", amount: "5000" }],
  gas: GAS_ESTIMATES.send.toString()
};
```

Remember that these are only estimates and might need adjustment based on the specific blockchain and transaction details.

## Fee Grants

Some Cosmos chains support fee grants, which allow one account to pay fees on behalf of another. This is useful for dApps that want to cover transaction fees for their users:

```typescript
import { MsgGrantAllowance } from "./cosmos/feegrant/v1beta1/tx";
import { BasicAllowance } from "./cosmos/feegrant/v1beta1/feegrant";
import { Any } from "./google/protobuf/any";

// Create a fee allowance that expires in one month
const expirationDate = new Date();
expirationDate.setMonth(expirationDate.getMonth() + 1);

// Create a basic allowance
const basicAllowance = BasicAllowance.fromPartial({
  spendLimit: [{ denom: "uatom", amount: "1000000" }], // 1 ATOM limit
  expiration: expirationDate // Expires in one month
});

// Pack the allowance into an Any type
const packedAllowance = Any.pack(
  basicAllowance,
  "/cosmos.feegrant.v1beta1.BasicAllowance"
);

// Create the grant message
const grantMsg = MsgGrantAllowance.fromPartial({
  granter: "cosmos1granter...", // Account paying for fees
  grantee: "cosmos1grantee...", // Account using the fees
  allowance: packedAllowance
});

// Send the grant message
const result = await txClient.signAndBroadcast(
  granterAddress,
  [grantMsg],
  fee
);

// Now the grantee can send transactions with the granter paying the fees
```

After setting up a fee grant, the grantee can send transactions without having tokens for fees. The chain will automatically use the granted allowance.

## Best Practices

1. **Always use gas estimation for complex transactions**: Simple transactions like token transfers might work fine with fixed gas, but complex messages need proper estimation.

2. **Add a safety margin**: Always add 30-50% more gas than estimated to account for blockchain state changes that might occur between simulation and execution.

3. **Check balances before sending**: Always verify the user has enough balance to cover the fees.

4. **Handle fee-related errors gracefully**: Implement proper error handling for common fee-related issues.

5. **Consider network congestion**: During high network activity, you might need to increase gas prices to ensure timely processing.

6. **Use appropriate denominations**: Make sure you're using fee denominations accepted by validators on that chain.

7. **Test on testnet first**: Always test your fee handling logic on testnets before deploying to mainnet.

## Conclusion

You now understand how to calculate and manage transaction fees when working with Cosmos SDK blockchains using Telescope-generated types. Proper fee handling is crucial for building reliable blockchain applications that provide a good user experience.

In the next tutorial, we'll learn about [Stargate clients](./stargate-clients.md) for interacting with blockchain nodes. 