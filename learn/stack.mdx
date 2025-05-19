# Understanding Telescope's Technology Stack

In this tutorial, we'll explore the technology stack that powers Telescope and the code it generates. By understanding the underlying technologies, you'll be better equipped to work with Telescope-generated code and troubleshoot any issues that arise.

## The Building Blocks of Telescope

Let's start by examining the key technologies that make up the Telescope ecosystem and how they work together.

### TypeScript: The Foundation

At its core, Telescope is built with TypeScript and generates TypeScript code. But why TypeScript instead of plain JavaScript?

TypeScript provides several advantages for blockchain development:

1. **Static typing** - Catches type errors at compile time rather than runtime
2. **Better tooling** - Improved autocompletion, refactoring, and documentation
3. **Code clarity** - Self-documenting code with explicit types
4. **Interface definitions** - Clear contracts between different parts of your code

```typescript
// Example of TypeScript's benefits in blockchain code
interface Coin {
  denom: string;
  amount: string;
}

// This will show an error at compile time if you forget a field
const atomCoin: Coin = { 
  denom: "uatom",
  amount: "1000000"
};

// Without types, you might accidentally create invalid data
const invalidCoin = {
  denom: "uatom",
  // Missing amount field would cause runtime errors
};
```

To work effectively with Telescope, you should have a basic understanding of TypeScript concepts like:

- Interfaces and types
- Generics
- Union and intersection types
- Type assertions

If you're new to TypeScript, the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) is an excellent resource.

### Protocol Buffers: The Schema Language

Cosmos SDK chains use Protocol Buffers (Protobuf) as their schema definition language. Telescope consumes these Protobuf definitions to generate TypeScript code.

Protobuf offers several advantages:

1. **Language neutrality** - Schemas can be used with many programming languages
2. **Structured data** - Clear message definitions
3. **Efficiency** - Compact binary representation
4. **Schema evolution** - Backward and forward compatibility

Here's what a simple Protobuf definition looks like:

```protobuf
syntax = "proto3";
package cosmos.bank.v1beta1;

message Coin {
  string denom = 1;
  string amount = 2;
}

message Input {
  string address = 1;
  repeated Coin coins = 2;
}

message Output {
  string address = 1;
  repeated Coin coins = 2;
}

message MsgSend {
  string from_address = 1;
  string to_address = 2;
  repeated Coin amount = 3;
}
```

Telescope reads these definitions and generates corresponding TypeScript types:

```typescript
export interface Coin {
  denom: string;
  amount: string;
}

export interface Input {
  address: string;
  coins: Coin[];
}

export interface Output {
  address: string;
  coins: Coin[];
}

export interface MsgSend {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}
```

### CosmJS: The Runtime Library

Telescope-generated code relies on CosmJS, a JavaScript/TypeScript library for interacting with Cosmos-based blockchains. CosmJS provides:

1. **Client implementations** - For connecting to blockchain nodes
2. **Transaction creation** - Utilities for creating and signing transactions
3. **Query capabilities** - Tools for reading blockchain state
4. **Wallet integration** - Support for various signing methods

When using Telescope-generated code, you'll often work with these CosmJS packages:

- **@cosmjs/stargate** - High-level client for Cosmos SDK chains
- **@cosmjs/proto-signing** - Transaction signing with Protobuf
- **@cosmjs/tendermint-rpc** - Low-level RPC client
- **@cosmjs/amino** - Support for Amino encoding (legacy but still used)

Here's a simple example of using CosmJS with Telescope-generated code:

```typescript
import { StargateClient } from "@cosmjs/stargate";
import { QueryClientImpl } from "./generated/cosmos/bank/v1beta1/query";
import { createProtobufRpcClient } from "@cosmjs/stargate";

async function getBalance(address: string) {
  // Connect to a Cosmos chain
  const client = await StargateClient.connect("https://rpc.cosmoshub.strange.love");
  
  // Create a Protobuf RPC client
  const rpcClient = createProtobufRpcClient(client.queryClient);
  
  // Use the Telescope-generated client
  const queryClient = new QueryClientImpl(rpcClient);
  
  // Query for balances
  const response = await queryClient.AllBalances({ address });
  
  return response.balances;
}
```

## The Inner Workings of Telescope

Now that we understand the key technologies, let's explore how Telescope works under the hood.

### Code Generation Process

When you run Telescope, it follows these steps:

1. **Parse Protobuf files** - Reads and parses all .proto files in the specified directories
2. **Build the AST** - Constructs an Abstract Syntax Tree representing the types and services
3. **Apply transformations** - Transforms the AST according to your configuration options
4. **Generate output files** - Produces TypeScript code from the transformed AST

This process uses several key technologies:

#### Abstract Syntax Tree (AST) Manipulation

Telescope uses AST manipulation to transform Protobuf definitions into TypeScript code. This involves:

1. Creating a tree representation of the code structure
2. Manipulating this tree according to rules
3. Generating TypeScript code from the modified tree

This approach allows for fine-grained control over the generated code.

#### Template-Based Generation

For consistent patterns, Telescope uses code templates. These templates:

1. Define the structure of generated files
2. Include placeholders for dynamic content
3. Get populated with specific data during generation

This template-based approach ensures consistency across generated files.

## Framework Integrations

One of Telescope's powerful features is its ability to integrate with popular frameworks. Let's explore how these integrations work.

### React Integration

If you're building a React application, Telescope can generate React Query hooks for data fetching:

```typescript
// Generated by Telescope with React integration enabled
export function useBalance(
  rpcEndpoint: string,
  params: QueryBalanceRequest,
  options?: UseQueryOptions<QueryBalanceResponse>
): UseQueryResult<QueryBalanceResponse, Error> {
  return useQuery<QueryBalanceResponse, Error>(
    ['balance', rpcEndpoint, params],
    () => getBalance(rpcEndpoint, params),
    options
  );
}
```

You can then use these hooks in your components:

```tsx
function BalanceDisplay({ address }: { address: string }) {
  const { data, isLoading, error } = useBalance(
    "https://rpc.cosmoshub.strange.love",
    { address, denom: "uatom" }
  );
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h2>Balance</h2>
      <p>{data?.balance?.amount || "0"} {data?.balance?.denom || "uatom"}</p>
    </div>
  );
}
```

### Vue Integration

For Vue applications, Telescope can generate Vue Query composables:

```typescript
// Generated by Telescope with Vue integration enabled
export function useBalance(
  rpcEndpoint: string,
  params: QueryBalanceRequest,
  options?: UseQueryOptions<QueryBalanceResponse>
) {
  return useQuery<QueryBalanceResponse, Error>(
    ['balance', rpcEndpoint, params],
    () => getBalance(rpcEndpoint, params),
    options
  );
}
```

You can use these composables in your Vue components:

```vue
<script setup>
import { useBalance } from '../generated/cosmos/bank/v1beta1/query.hooks';

const props = defineProps({
  address: {
    type: String,
    required: true
  }
});

const { data, isLoading, error } = useBalance(
  "https://rpc.cosmoshub.strange.love",
  { address: props.address, denom: "uatom" }
);
</script>

<template>
  <div>
    <h2>Balance</h2>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <p v-else>{{ data?.balance?.amount || "0" }} {{ data?.balance?.denom || "uatom" }}</p>
  </div>
</template>
```

### CosmWasm Integration

For projects working with CosmWasm smart contracts, Telescope integrates with @cosmwasm/ts-codegen to generate TypeScript clients:

```typescript
// Example of using a generated CosmWasm client
import { CwCoin } from "./generated/CwCoin.client";

async function sendCoins() {
  // Create a client instance
  const client = new CwCoin("your-contract-address", signingClient);
  
  // Call a contract method
  const result = await client.send({
    amount: "1000",
    to: "recipient-address"
  });
  
  console.log("Transaction hash:", result.transactionHash);
}
```

## Runtime Environment Considerations

Telescope-generated code can run in different environments, each with its own considerations.

### Browser Environment

When running in browsers, you need to be aware of:

#### Polyfills for Node.js Built-ins

Many CosmJS packages use Node.js built-ins that aren't available in browsers. You'll need polyfills for:

- `Buffer`
- `stream`
- `crypto`
- `path`
- `os`

Here's how to configure webpack for these polyfills:

```javascript
// webpack.config.js
module.exports = {
  // ...
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/"),
      "crypto": require.resolve("crypto-browserify"),
      // Other polyfills...
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

#### CORS Considerations

Browser security policies may restrict connections to blockchain RPC endpoints. Solutions include:

1. Using CORS-enabled endpoints
2. Setting up a proxy server
3. Using a service like [cors-anywhere](https://github.com/Rob--W/cors-anywhere/)

```typescript
// Using a CORS proxy
const corsProxy = "https://cors-anywhere.herokuapp.com/";
const rpcEndpoint = "https://rpc.cosmoshub.strange.love";
const client = await StargateClient.connect(corsProxy + rpcEndpoint);
```

### Node.js Environment

Node.js applications have fewer compatibility issues since CosmJS is primarily developed for Node.js:

```typescript
// Node.js example
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";

async function sendTokens() {
  // Create a wallet
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    "your secret mnemonic here",
    { prefix: "cosmos" }
  );
  
  // Create a signing client
  const client = await SigningStargateClient.connectWithSigner(
    "https://rpc.cosmoshub.strange.love",
    wallet
  );
  
  // Send tokens
  const result = await client.sendTokens(
    "sender-address",
    "recipient-address",
    [{ denom: "uatom", amount: "1000000" }],
    { amount: [{ denom: "uatom", amount: "5000" }], gas: "200000" }
  );
  
  console.log("Transaction hash:", result.transactionHash);
}
```

### Mobile Environment (React Native)

For React Native applications, additional considerations include:

1. Native cryptography modules
2. Platform-specific networking
3. Memory constraints

You may need to use libraries like `react-native-get-random-values` and `@walletconnect/react-native-compat`.

## Development Tools and Best Practices

To work effectively with Telescope, consider adopting these tools and practices:

### Recommended Development Environment

- **IDE**: Visual Studio Code with TypeScript support
- **Extensions**:
  - ESLint for code linting
  - Prettier for code formatting
  - Proto3 for .proto file syntax highlighting
- **Node.js**: Use version 16+ for optimal performance
- **Package Manager**: Yarn 1.x for consistent dependency management

### Testing Strategies

When working with Telescope-generated code:

1. **Mock the RPC layer** for unit tests:

```typescript
// Example of mocking a query client
const mockQueryClient = {
  balance: jest.fn().mockResolvedValue({
    balance: { denom: "uatom", amount: "1000000" }
  })
};

const client = new QueryClientImpl(mockQueryClient);
const result = await client.Balance({ address: "cosmos1...", denom: "uatom" });
expect(result.balance.amount).toBe("1000000");
```

2. **Use test networks** for integration tests:

```typescript
// Integration test with test network
const testnetEndpoint = "https://rpc.sentry-01.theta-testnet.polypore.xyz";
const client = await StargateClient.connect(testnetEndpoint);
const balance = await client.getAllBalances("cosmos1test...");
expect(balance).toBeDefined();
```

3. **Consider specialized testing tools** like @cosmjs/starship for simulated environments

### Performance Optimization

To optimize the performance of applications using Telescope-generated code:

1. **Implement caching** for frequently accessed data:

```typescript
// Simple cache implementation
const cache = new Map<string, any>();
const CACHE_TTL = 30000; // 30 seconds

async function getCachedBalance(address: string) {
  const cacheKey = `balance:${address}`;
  const cachedData = cache.get(cacheKey);
  
  if (cachedData && cachedData.timestamp > Date.now() - CACHE_TTL) {
    return cachedData.data;
  }
  
  const client = await StargateClient.connect("https://rpc.cosmoshub.strange.love");
  const balance = await client.getAllBalances(address);
  
  cache.set(cacheKey, {
    timestamp: Date.now(),
    data: balance
  });
  
  return balance;
}
```

2. **Batch queries** where possible:

```typescript
// Instead of multiple individual queries
const [balanceResponse, stakingResponse, distributionResponse] = await Promise.all([
  queryClient.cosmos.bank.v1beta1.allBalances({ address }),
  queryClient.cosmos.staking.v1beta1.delegatorDelegations({ delegatorAddr: address }),
  queryClient.cosmos.distribution.v1beta1.delegationRewards({ delegatorAddress: address, validatorAddress })
]);
```

3. **Use pagination** for large result sets:

```typescript
// Paginated query example
let nextKey = null;
const allValidators = [];

do {
  const response = await queryClient.cosmos.staking.v1beta1.validators({
    pagination: {
      key: nextKey,
      limit: "100"
    }
  });
  
  allValidators.push(...response.validators);
  nextKey = response.pagination.nextKey;
} while (nextKey && nextKey.length > 0);
```

## Conclusion

Understanding Telescope's technology stack empowers you to build better applications for the Cosmos ecosystem. The combination of TypeScript, Protocol Buffers, and CosmJS provides a solid foundation for developing robust blockchain applications.

By leveraging Telescope's integrations with popular frameworks like React and Vue, you can build user-friendly interfaces that interact seamlessly with Cosmos SDK chains. And by considering the runtime environment and following best practices, you can ensure your applications are performant and reliable.

As you continue your journey with Telescope, remember that the community is a valuable resource. Don't hesitate to ask questions in the Cosmos Developer Discord or contribute to the project on GitHub.

Happy building! 