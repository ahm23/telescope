# Codegen Usage Guide

## Overview
This guide provides instructions for MCP agents on how to use the telescope generated code when implementing the `use-customchain-js` tool.

## Understanding the Structure

### Primary Reference: `src/customchain-js/` Directory
This is your **main reference** for understanding the complete telescope-generated codebase. It contains:

- **Complete type definitions** for all blockchain modules
- **Client implementations** for queries and transactions  
- **Generated interfaces** from protobuf definitions
- **All available methods** and their signatures

**Key files to understand**:
- `src/customchain-js/index.ts` - Main exports and available modules
- `src/customchain-js/cosmos/` - Cosmos SDK modules (bank, staking, gov, etc.)
- `src/customchain-js/osmosis/` - Osmosis-specific modules
- `src/customchain-js/ibc/` - Inter-blockchain communication
- `src/customchain-js/README.md` - Comprehensive documentation

### Production Examples: `src/customchain-js-examples/` Directory  
Use these as **implementation patterns** and **logic reference**:

- **Real production code** showing how to use telescope functions
- **Best practices** for error handling and data processing
- **Complete workflows** for common blockchain operations

**⚠️ Important**: These examples may contain import/compilation errors since they reference the main codebase. **Focus on the logic and patterns** rather than copying code directly.

## Using the MCP Tool

### Single Tool: `use-customchain-js`
This MCP server provides one tool that generates implementation guidance by:

1. **Analyzing your request** (task, chain, function type)
2. **Finding relevant examples** from `customchain-js-examples/`
3. **Providing step-by-step guidance** using telescope patterns
4. **Showing proper imports** and configuration

## Implementation Approach

### Step 1: Understand Telescope Structure
When implementing a function, first explore `src/customchain-js/` to understand:

```typescript
// Example: For balance queries, look at:
// src/customchain-js/cosmos/bank/v1beta1/query.ts - Type definitions
// src/customchain-js/cosmos/bank/v1beta1/query.rpc.Query.ts - Query client
// src/customchain-js/cosmos/bank/v1beta1/query.rpc.func.ts - Direct functions
// src/customchain-js/cosmos/bank/v1beta1/query.rpc.react.ts - React hooks
```

### Step 2: Reference Production Examples
Look at `customchain-js-examples/` for implementation patterns:

```typescript
// Example: useBalance.ts shows the pattern for:
// - Proper imports from telescope
// - Error handling approaches  
// - Data transformation logic
// - Integration with React Query

// Focus on UNDERSTANDING the logic:
// - How RPC endpoints are configured
// - How parameters are validated
// - How responses are processed
// - How errors are handled
```

### Step 3: Generate Your Implementation
Use the patterns from both directories to create your function:

```typescript
// Your implementation should:
// 1. Use proper imports from the telescope codebase
// 2. Follow error handling patterns from examples
// 3. Include proper TypeScript types
// 4. Handle edge cases shown in examples
```

## Category of Functions in Telescope

### 1. **query.rpc.func.ts** - Direct Function Calls
- Server-side operations
- Node.js scripts  
- Direct blockchain queries

### 2. **query.rpc.react.ts** - React Hooks
- Frontend applications
- Automatic caching and refetching
- Loading states and error handling

### 3. **tx.rpc.func.ts** - Transaction Functions
- Broadcasting transactions
- Message composition

### 4. **tx.rpc.react.ts** - Transaction Hooks
- Transaction broadcasting in React
- Transaction state management

## Chain Configuration Pattern

Always reference `config-example.ts` for proper setup:

```typescript
import { assetLists, chains } from "@chain-registry/v2";

export const targetChainName = 'cosmos';
export const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';
export const chain = chains.find((chain) => chain.chainName === targetChainName);
export const assetList = assetLists.find((assetList) => assetList.chainName === targetChainName);
```

## Important Guidelines

### When Using Examples
- **Study the logic**, don't copy/paste directly
- **Understand the patterns** for imports and usage
- **Learn from error handling** approaches
- **Adapt the structure** to your specific needs

### When Using Telescope Codebase
- **Browse the generated files** to understand available methods
- **Check type definitions** for proper parameter structures
- **Look at client implementations** for usage patterns
- **Reference documentation** in README.md files

### Best Practices
1. Always include comprehensive error handling
2. Validate input parameters before making calls
3. Convert base units to human-readable amounts when needed
4. Use proper TypeScript types from telescope
5. Test your implementations thoroughly
