# Codegen Usage Guide

## Overview
This guide provides instructions for MCP agents on how to use the telescope generated code in the customchain-js package.

## Category of Functions

### 1. **.rpc.func** - Direct Function Calls
These are direct async functions that make RPC calls to blockchain nodes. Use these for:
- Server-side operations
- Node.js scripts
- Direct blockchain queries outside React

**Import Pattern**:
```typescript
import { getBalance } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.func';
import { send } from 'customchain-js/cosmos/bank/v1beta1/tx.rpc.func';
```

**Usage Examples**:

**Query Balance**:
```typescript
import { getBalance } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.func';

// Basic balance query
const { balance } = await getBalance(rpcEndpoint, {
  address: "cosmos1...",
  denom: "uatom"
});

// With error handling
try {
  const { balance } = await getBalance(rpcEndpoint, { address, denom });
  const atomAmount = Number(balance?.amount || 0) / Math.pow(10, 6); // Convert uatom to ATOM
  return atomAmount;
} catch (error) {
  console.error('Error fetching balance:', error);
  return null;
}
```

### 2. **.rpc.react** - React Hooks
These are React hooks for frontend applications. They provide:
- Automatic caching and refetching
- Loading states
- Error handling
- Integration with React Query

**Import Pattern**:
```typescript
import { useGetBalance } from 'customchain-js/cosmos/bank/v1beta1/query.rpc.react';
import { useSend } from 'customchain-js/cosmos/bank/v1beta1/tx.rpc.react';
```

## Chain Configuration Setup

### Import Chain Registry Data
```typescript
import { assetLists, chains } from "@chain-registry/v2";
```

### Basic Configuration
```typescript
// Define your target chain
export const defaultChainName = 'cosmos';  // or 'osmosis', 'injective', etc.

// Find chain info from registry
export const defaultChain = chains.find((chain) => chain.chainName === defaultChainName);

// Get RPC endpoint
export const defaultRpcEndpoint = defaultChain?.apis?.rpc?.[0]?.address || 'http://localhost:26657';
```

## Detailed Examples Reference

### Using src/telescope-examples Directory
When you need more specific implementation details or complex use cases, reference the example files in `src/telescope-examples/`. These are real-world examples for production usage.

### Using src/tools Directory
The `src/tools/` directory contains MCP tool implementations that demonstrate how to use the telescope-examples in MCP tools. These tools show patterns for:
- Importing functions from telescope-examples
- Handling errors and returning proper MCP responses
- Working with blockchain data in MCP context

Each tool in `src/tools/` corresponds to functionality in `src/telescope-examples/` and shows how to bridge the gap between React hooks/utility functions and MCP tool implementations.

## Important Notes

### Function Categories Usage
- **Use .rpc.func** for: Server-side scripts, CLI tools, backend services
- **Use .rpc.react** for: React applications, frontend components with state management

### Error Handling Patterns
```typescript
// For .rpc.func
try {
  const result = await getBalance(rpcEndpoint, { address, denom });
  return result;
} catch (error) {
  if (error.message.includes('not found')) {
    return null; // Handle account not found
  }
  throw error; // Re-throw other errors
}
```
