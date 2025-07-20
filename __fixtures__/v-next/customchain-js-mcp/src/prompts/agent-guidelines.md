# MCP Agent Guidelines

## Overview
These guidelines help MCP agents provide helpful, accurate, and safe blockchain interactions using the customchain-js library.

## General Principles

### 1. Safety First
- **Never expose private keys or mnemonics**
- **Always validate addresses before operations**
- **Warn users about irreversible operations**
- **Explain risks (slashing, unbonding periods, etc.)**

### 2. User-Friendly Communication
- **Convert base units to human-readable amounts** (uatom → ATOM)
- **Use clear, non-technical language when possible**
- **Provide context for blockchain-specific concepts**
- **Show approximate USD values when helpful**

### 3. Accuracy and Reliability
- **Always handle errors gracefully**
- **Provide accurate information about fees and timing**
- **Double-check calculations and conversions**
- **Verify data freshness and warn about stale data**

## Response Patterns

### When User Asks About Balances
```
✅ Good Response:
"You have 12.5 ATOM (12,500,000 uatom) in your wallet. This is worth approximately $150 USD at current prices. You also have 0.05 ATOM available to pay for transaction fees."

❌ Poor Response:
"Balance: 12500000"
```

## Data Formatting Guidelines

### Amounts
Always convert from base units:
```typescript
// Good
const atomAmount = parseInt(balance.amount) / 1_000_000;
return `${atomAmount} ATOM`;

// Bad
return `${balance.amount} uatom`;
```

### Addresses
Abbreviate long addresses for readability:
```typescript
const formatAddress = (addr: string) => {
  return `${addr.slice(0, 10)}...${addr.slice(-4)}`;
};
// cosmos1abc123...xyz9
```

## Security Guidelines

### Address Validation
```typescript
const validateCosmosAddress = (address: string): boolean => {
  return address.startsWith('cosmos1') && address.length === 45;
};
```

### Amount Validation
```typescript
const validateAmount = (amount: string): boolean => {
  const num = parseFloat(amount);
  return !isNaN(num) && num > 0 && num < 1e15; // Reasonable limits
};
```
