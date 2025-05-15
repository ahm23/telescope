# Solving Common Problems in Telescope Projects

In this tutorial, we'll walk through common issues that you might encounter when working with Telescope-generated code and provide step-by-step solutions for each problem. Whether you're facing build errors, runtime issues, or type problems, this guide will help you diagnose and fix them.

## Understanding Telescope Error Types

When working with Telescope, you might encounter several types of errors:

1. **Build-time errors** - Issues that occur during code generation
2. **Compile-time errors** - TypeScript errors when compiling your application
3. **Runtime errors** - Issues that occur when your application is running
4. **Environment-specific issues** - Problems related to specific frameworks or platforms

Let's tackle each category one by one.

## Build-Time Errors

### Problem: Proto Parsing Errors

One of the most common issues is errors when Telescope tries to parse proto files.

**Symptoms:**
```
Error parsing proto file: syntax error, unexpected IDENTIFIER, expecting MESSAGE
```

**Solution:**

1. First, identify which proto file is causing the issue:

```bash
npx telescope --debug
```

2. Look for syntax errors in the proto file. Common issues include:
   - Missing semicolons
   - Incorrect indentation
   - Invalid message or field names
   - Using reserved keywords

For example, if you have:

```protobuf
message User
  string name = 1;
  int32 age = 2;
}
```

Fix it by adding the opening brace and semicolons:

```protobuf
message User {
  string name = 1;
  int32 age = 2;
}
```

### Problem: Missing Import Files

**Symptoms:**
```
Cannot find imported file: "google/protobuf/timestamp.proto"
```

**Solution:**

1. Ensure you have all needed proto files available in your proto directories
2. For standard Google protobuf definitions, install them:

```bash
mkdir -p proto/google/protobuf
curl -o proto/google/protobuf/timestamp.proto https://raw.githubusercontent.com/protocolbuffers/protobuf/main/src/google/protobuf/timestamp.proto
```

3. Update your Telescope configuration to include all proto directories:

```javascript
module.exports = {
  protoDirs: [
    'proto',
    'third_party/proto'
  ],
  // ...
};
```

## Compile-Time Errors

### Problem: Long Type Errors

Telescope generates complex types that can sometimes lead to lengthy, hard-to-understand type errors.

**Symptoms:**
```
Type 'DeepPartial<{ amount: string; denom: string; }>' is not assignable to type...
[extremely long error message follows]
```

**Solution:**

1. Enable the `useDeepPartial` option in your configuration:

```javascript
module.exports = {
  // ...
  options: {
    useDeepPartial: true
  }
};
```

2. Use type assertions in problematic areas:

```typescript
// From this:
const amount: Coin = { amount: "1000", denom: "uatom" };

// To this:
const amount = { amount: "1000", denom: "uatom" } as Coin;
```

3. In extreme cases, use `@ts-ignore` comments for lines that TypeScript struggles with:

```typescript
// @ts-ignore - Complex nested type issue
const result = await queryClient.cosmos.bank.v1beta1.allBalances({ address });
```

### Problem: Module Resolution Issues

**Symptoms:**
```
Cannot find module '@cosmos/telescope-generated/cosmos.bank.v1beta1'
```

**Solution:**

1. Check your `tsconfig.json` settings:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "baseUrl": ".",
    "paths": {
      "@cosmos/*": ["./src/generated/*"]
    }
  }
}
```

2. Ensure your import paths match the output structure:

```typescript
// If generated code is at src/generated/cosmos/bank/v1beta1/query.ts
import { QueryClientImpl } from "./src/generated/cosmos/bank/v1beta1/query";

// Or with path aliasing:
import { QueryClientImpl } from "@cosmos/telescope-generated/cosmos/bank/v1beta1/query";
```

3. Regenerate your code if paths have changed:

```bash
npx telescope --clear
```

## Runtime Errors

### Problem: Webpack Polyfill Issues in Browser

**Symptoms:**
```
Uncaught ReferenceError: Buffer is not defined
```

or

```
Module not found: Error: Can't resolve 'stream' in '...'
```

**Solution:**

For Create React App projects:

1. Install `react-app-rewired` and `customize-cra`:

```bash
npm install --save-dev react-app-rewired customize-cra
```

2. Create a `config-overrides.js` file in your project root:

```javascript
const { override, addWebpackPlugin, addWebpackAlias } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
  // Add polyfills
  addWebpackPlugin(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    })
  ),
  // Add aliases for Node.js core modules
  addWebpackAlias({
    'stream': 'stream-browserify',
    'path': 'path-browserify',
    'crypto': 'crypto-browserify',
    'http': 'stream-http',
    'https': 'https-browserify',
    'os': 'os-browserify/browser',
  })
);
```

3. Modify your `package.json` scripts:

```json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test"
}
```

4. Install the polyfill packages:

```bash
npm install buffer process stream-browserify path-browserify crypto-browserify stream-http https-browserify os-browserify
```

For other bundlers like webpack:

```javascript
// webpack.config.js
module.exports = {
  // ...
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/"),
      "crypto": require.resolve("crypto-browserify"),
      "path": require.resolve("path-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ]
};
```

### Problem: Chain Connection Issues

**Symptoms:**
```
Error: socket hang up
```

or

```
Error: Request failed with status code 404
```

**Solution:**

1. Check your RPC endpoint URL:

```typescript
// Instead of this (which might be outdated or incorrect)
const client = await StargateClient.connect("https://rpc.cosmos.hub.com");

// Try a known working public endpoint
const client = await StargateClient.connect("https://rpc.cosmoshub.strange.love");
```

2. Use error handling and fallback endpoints:

```typescript
async function connectWithFallbacks() {
  const endpoints = [
    "https://rpc.cosmoshub.strange.love",
    "https://cosmos-rpc.polkachu.com",
    "https://rpc-cosmoshub.blockapsis.com"
  ];
  
  for (const endpoint of endpoints) {
    try {
      console.log(`Trying to connect to ${endpoint}...`);
      const client = await StargateClient.connect(endpoint);
      console.log(`Connected to ${endpoint}`);
      return client;
    } catch (error) {
      console.error(`Failed to connect to ${endpoint}:`, error.message);
    }
  }
  
  throw new Error("Failed to connect to any RPC endpoint");
}
```

3. Enable network monitoring to see the actual requests and responses:

```typescript
// In your browser's console
const client = await StargateClient.connect(
  "https://rpc.cosmoshub.strange.love", 
  { logger: new ConsoleLogger("debug") }
);
```

## Framework-Specific Issues

### React Query Integration Issues

**Symptoms:**
```
TypeError: Cannot read property 'fetchQuery' of undefined
```

**Solution:**

1. Ensure you have the correct React Query setup:

```tsx
// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourComponent />
    </QueryClientProvider>
  );
}
```

2. Check your hook usage:

```tsx
// Component.tsx
import { useBalance } from '../generated/cosmos/bank/v1beta1/query.hooks';

function WalletBalance({ address }) {
  const { data, isLoading, error } = useBalance(
    "https://rpc.cosmoshub.strange.love",
    { address, denom: "uatom" }
  );
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>Balance: {parseFloat(data?.balance?.amount || "0") / 1_000_000} ATOM</div>;
}
```

### Next.js Integration Issues

**Symptoms:**
```
Error: Cannot serialize type BigInt
```

**Solution:**

Create a custom serialization helper:

```typescript
// utils/serializers.ts
export function serializable<T>(obj: T): T {
  return JSON.parse(
    JSON.stringify(obj, (key, value) => 
      typeof value === 'bigint' ? value.toString() : value
    )
  );
}
```

Then use it in your Next.js pages:

```typescript
// pages/balances.tsx
import { serializable } from '../utils/serializers';

export async function getServerSideProps() {
  const client = await StargateClient.connect("https://rpc.cosmoshub.strange.love");
  const balance = await client.getAllBalances("cosmos1...");
  
  return {
    props: {
      balance: serializable(balance)
    }
  };
}
```

## Debugging Strategies

Let's explore some general debugging strategies for Telescope projects:

### 1. Enable Verbose Logging

Enable debug logging in Telescope during code generation:

```bash
npx telescope --debug
```

Enable logging in CosmJS clients:

```typescript
import { ConsoleLogger } from "@cosmjs/stargate";

const client = await StargateClient.connect(
  "https://rpc.cosmoshub.strange.love",
  { logger: new ConsoleLogger("debug") }
);
```

### 2. Inspect Network Requests

For browser applications, use the Network tab in Developer Tools:

1. Open your browser's Developer Tools (F12)
2. Navigate to the Network tab
3. Filter for "Fetch/XHR" requests
4. Locate requests to your RPC endpoints
5. Examine the request and response payloads

For Node.js applications, use a tool like `axios-debug-log`:

```typescript
import axios from "axios";
import axiosDebug from "axios-debug-log";

axiosDebug(axios);
```

### 3. Capture Detailed Error Information

Create a helper function to extract more information from errors:

```typescript
function logDetailedError(error: any) {
  console.error({
    message: error.message,
    name: error.name,
    code: error.code,
    data: error.data,
    stack: error.stack,
    response: error.response && {
      status: error.response.status,
      statusText: error.response.statusText,
      data: error.response.data,
      headers: error.response.headers,
    },
  });
}
```

Use this in try/catch blocks:

```typescript
try {
  const result = await client.sendTokens(...);
} catch (error) {
  logDetailedError(error);
}
```

### 4. Use TypeScript Playground

For complex type issues, you can use the [TypeScript Playground](https://www.typescriptlang.org/play/) to isolate and experiment with problematic types.

## Real World Example: Debugging a Transaction Broadcast Issue

Let's walk through a complete example of debugging a common issue: a failed transaction broadcast.

### The Problem

You're trying to send tokens from one address to another, but the transaction fails with a cryptic error.

### Step 1: Implement Basic Error Handling

```typescript
import { SigningStargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

async function sendTokens() {
  try {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      "your secret mnemonic here",
      { prefix: "cosmos" }
    );
    
    const [firstAccount] = await wallet.getAccounts();
    console.log("Sender address:", firstAccount.address);
    
    const client = await SigningStargateClient.connectWithSigner(
      "https://rpc.cosmoshub.strange.love",
      wallet,
      { logger: new ConsoleLogger("debug") }
    );
    
    const result = await client.sendTokens(
      firstAccount.address,
      "cosmos1recipient",
      [{ denom: "uatom", amount: "1000" }],
      { amount: [{ denom: "uatom", amount: "5000" }], gas: "200000" }
    );
    
    console.log("Transaction result:", result);
  } catch (error) {
    console.error("Transaction failed:", {
      message: error.message,
      code: error.code,
      data: error.data,
    });
  }
}
```

### Step 2: Run and Identify the Issue

When you run this code, you might see an error like:

```
Transaction failed: {
  message: "Account does not exist on chain. Send some tokens there before trying to query sequence.",
  code: undefined,
  data: undefined
}
```

### Step 3: Diagnose the Problem

This error indicates that the sender account doesn't exist on the blockchain yet. This happens when an account has not yet received any tokens or interacted with the blockchain.

### Step 4: Fix the Issue

There are two possible solutions:

1. **If you're using a test account**: Send some tokens to this account first from a faucet or another account.

2. **If you're using the wrong network**: Make sure your mnemonic corresponds to an account on the network you're connecting to.

```typescript
// For testnet, use a testnet endpoint and prefix
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
  "your secret mnemonic here",
  { prefix: "cosmos" }
);

// Use a testnet endpoint
const client = await SigningStargateClient.connectWithSigner(
  "https://rpc.testnet.cosmos.network",
  wallet
);
```

### Step 5: Verify the Solution

Add a check to ensure the account exists and has sufficient funds before attempting to send tokens:

```typescript
async function sendTokensWithVerification() {
  try {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      "your secret mnemonic here",
      { prefix: "cosmos" }
    );
    
    const [firstAccount] = await wallet.getAccounts();
    const address = firstAccount.address;
    console.log("Sender address:", address);
    
    // First create a query client to check the account
    const client = await SigningStargateClient.connectWithSigner(
      "https://rpc.cosmoshub.strange.love",
      wallet
    );
    
    // Check if the account exists and has sufficient funds
    const balance = await client.getBalance(address, "uatom");
    console.log("Account balance:", balance);
    
    const amountToSend = "1000";
    const fee = "5000";
    const totalNeeded = parseInt(amountToSend) + parseInt(fee);
    
    if (!balance.amount || parseInt(balance.amount) < totalNeeded) {
      throw new Error(`Insufficient funds. Have ${balance.amount || 0} uatom, need ${totalNeeded} uatom.`);
    }
    
    // Now proceed with the transaction
    const result = await client.sendTokens(
      address,
      "cosmos1recipient",
      [{ denom: "uatom", amount: amountToSend }],
      { amount: [{ denom: "uatom", amount: fee }], gas: "200000" }
    );
    
    console.log("Transaction result:", result);
    return result;
  } catch (error) {
    console.error("Transaction failed:", {
      message: error.message,
      code: error.code,
      data: error.data,
    });
    throw error;
  }
}
```

## Getting Help from the Community

If you've tried all the troubleshooting steps and still can't resolve your issue, it's time to seek help from the community.

### 1. Prepare a Clear Description

Before reaching out, prepare a clear description of your issue:

- What you're trying to accomplish
- What you've tried so far
- The exact error messages you're seeing
- Your environment details (Node.js version, Telescope version, etc.)
- A minimal reproducible example if possible

### 2. Join the Cosmos Developer Discord

The Cosmos Developer Discord is a great place to get help:

1. Join the [Cosmos Developer Discord](https://discord.gg/cosmosnetwork)
2. Navigate to the #developers channel or the #telescope channel
3. Post your question with the information you prepared

### 3. Submit a GitHub Issue

For bugs or feature requests, submit an issue on the Telescope GitHub repository:

1. Go to [Telescope GitHub Issues](https://github.com/hyperweb-io/telescope/issues)
2. Click "New Issue"
3. Fill out the template with your information

## Conclusion

Troubleshooting issues in Telescope projects requires a systematic approach. By understanding the different types of errors you might encounter and following the debugging strategies outlined in this tutorial, you'll be better equipped to identify and resolve problems quickly.

Remember that many issues are common and have been encountered by others before you. Don't hesitate to leverage the community resources available to help you overcome challenges in your Telescope projects. 