# Using Instant RPC Methods

In this tutorial, we'll explore how to use Instant RPC Methods with Telescope-generated code to create simplified interfaces for common blockchain operations. This powerful feature allows you to build customized, focused clients that make your code more readable and maintainable.

## Understanding Instant RPC Methods

When working with Cosmos SDK blockchains, you often need to interact with many different modules and methods. Standard RPC clients provide access to all these methods through a nested hierarchy, which can lead to verbose code:

```typescript
// Standard RPC client usage - verbose and deeply nested
const balance = await client.cosmos.bank.v1beta1.balance({
  address: "cosmos1...",
  denom: "uatom"
});
```

Instant RPC Methods solve this problem by allowing you to create customized client classes that expose only the specific methods you need, with names you choose:

```typescript
// Instant RPC client usage - direct and intuitive
const balance = await cosmosClient.getBalance({
  address: "cosmos1...",
  denom: "uatom"
});
```

This approach makes your code more readable and focused on your application's needs.

## Setting Up Your Project

First, let's enable Instant RPC Methods generation in your Telescope configuration:

```typescript
// In your Telescope configuration file
import { TelescopeOptions } from "@cosmology/types";

const options: TelescopeOptions = {
  rpcClients: {
    enabled: true,
    instantOps: [
      {
        className: "CosmosClient",
        nameMapping: {
          All: {
            "cosmos.bank.v1beta1.balance": "getBalance",
            "cosmos.bank.v1beta1.allBalances": "getAllBalances",
            "cosmos.staking.v1beta1.validators": "getValidators"
          }
        }
      }
    ]
  }
  // Other Telescope options...
};

export default options;
```

After running Telescope with this configuration, it will generate a `service-ops.ts` file in your project's root directory containing your customized client class.

## Creating Your First Instant RPC Client

Let's walk through a simple example of using an Instant RPC client to query account balances:

```typescript
import { CosmosClient } from "./service-ops";
import { createRPCQueryClient } from "./codegen/rpc";

async function main() {
  try {
    // First create a regular RPC client
    console.log("Connecting to Cosmos Hub...");
    const rpcClient = await createRPCQueryClient({
      rpcEndpoint: "https://rpc.cosmos.network"
    });
    
    // Initialize our instant client
    const cosmosClient = new CosmosClient();
    cosmosClient.init(rpcClient);
    
    console.log("Client created successfully!");
    
    // Query an account's balance using our simplified method
    const address = "cosmos1..."; // Replace with a real address
    const { balance } = await cosmosClient.getBalance({
      address,
      denom: "uatom"
    });
    
    if (balance) {
      const atomAmount = parseInt(balance.amount) / 1_000_000;
      console.log(`Account has ${atomAmount} ATOM`);
    } else {
      console.log("Account has no ATOM balance");
    }
    
    // Query all balances for the account
    const { balances } = await cosmosClient.getAllBalances({
      address
    });
    
    console.log("\nAll account balances:");
    if (balances.length === 0) {
      console.log("No tokens found");
    } else {
      balances.forEach(coin => {
        const amount = coin.denom.startsWith('u')
          ? parseInt(coin.amount) / 1_000_000
          : coin.amount;
        const symbol = coin.denom.startsWith('u')
          ? coin.denom.substring(1).toUpperCase()
          : coin.denom;
        console.log(`${amount} ${symbol}`);
      });
    }
    
    // Query validators
    const { validators } = await cosmosClient.getValidators({
      status: "BOND_STATUS_BONDED"
    });
    
    console.log(`\nFound ${validators.length} active validators`);
    console.log("Top 3 validators:");
    validators
      .sort((a, b) => parseInt(b.tokens) - parseInt(a.tokens))
      .slice(0, 3)
      .forEach((validator, index) => {
        console.log(`${index + 1}. ${validator.description.moniker}`);
      });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
```

## Customizing Method Names

One of the powerful features of Instant RPC Methods is the ability to customize method names. Let's see how different naming mappings affect your client's interface:

```typescript
// In your configuration
nameMapping: {
  All: {
    // Original format: "package.method" -> "customName"
    "cosmos.bank.v1beta1.balance": "getAccountBalance",
    "cosmos.bank.v1beta1.allBalances": "getAllTokenBalances",
    "cosmos.staking.v1beta1.validators": "listValidators"
  }
}

// In your code
const { balance } = await cosmosClient.getAccountBalance({
  address: "cosmos1...",
  denom: "uatom"
});

const { validators } = await cosmosClient.listValidators({});
```

Choose names that make sense for your application's domain, making the code more self-explanatory.

## Creating Domain-Specific Clients

For larger applications, you might want to create multiple client classes, each focused on a specific domain. This helps organize your code and makes it more maintainable:

```typescript
// In your configuration
instantOps: [
  {
    className: "BankingClient",
    nameMapping: {
      All: {
        "cosmos.bank.v1beta1.balance": "getBalance",
        "cosmos.bank.v1beta1.allBalances": "getAllBalances",
        "cosmos.bank.v1beta1.totalSupply": "getTotalSupply"
      }
    }
  },
  {
    className: "StakingClient",
    nameMapping: {
      All: {
        "cosmos.staking.v1beta1.validators": "getValidators",
        "cosmos.staking.v1beta1.delegatorDelegations": "getDelegations",
        "cosmos.staking.v1beta1.delegatorUnbondingDelegations": "getUnbonding"
      }
    }
  },
  {
    className: "GovernanceClient",
    nameMapping: {
      All: {
        "cosmos.gov.v1beta1.proposals": "getProposals",
        "cosmos.gov.v1beta1.proposal": "getProposal",
        "cosmos.gov.v1beta1.params": "getGovParams"
      }
    }
  }
]

// In your code
import { BankingClient, StakingClient, GovernanceClient } from "./service-ops";

// Initialize clients
const bankingClient = new BankingClient();
const stakingClient = new StakingClient();
const govClient = new GovernanceClient();

// Connect all clients to the same RPC endpoint
const rpcClient = await createRPCQueryClient({
  rpcEndpoint: "https://rpc.cosmos.network"
});

bankingClient.init(rpcClient);
stakingClient.init(rpcClient);
govClient.init(rpcClient);

// Use domain-specific clients
const { balances } = await bankingClient.getAllBalances({ address });
const { validators } = await stakingClient.getValidators({});
const { proposals } = await govClient.getProposals({});
```

## Combining Query and Transaction Methods

Instant RPC clients can also combine query methods (for reading data) and transaction methods (for writing data) in a single client. To do this, use the `Query` and `Msg` categories in your name mapping:

```typescript
// In your configuration
nameMapping: {
  Query: {
    "cosmos.bank.v1beta1.balance": "getBalance",
    "cosmos.bank.v1beta1.allBalances": "getAllBalances"
  },
  Msg: {
    "cosmos.bank.v1beta1.send": "sendTokens",
    "cosmos.staking.v1beta1.delegate": "delegateTokens"
  }
}

// In your code - for queries (read operations)
const { balance } = await client.getBalance({
  address: "cosmos1...",
  denom: "uatom"
});

// In your code - for transactions (write operations)
const sendResult = await client.sendTokens({
  fromAddress: "cosmos1sender...",
  toAddress: "cosmos1recipient...",
  amount: [{ denom: "uatom", amount: "1000000" }]
});
```

## Building a Portfolio App with Instant RPC Methods

Let's create a more complete example - a portfolio application that shows a user's balances, staking positions, and rewards:

```typescript
// Configuration in Telescope options
instantOps: [
  {
    className: "PortfolioClient",
    nameMapping: {
      All: {
        // Banking methods
        "cosmos.bank.v1beta1.allBalances": "getWalletBalances",
        
        // Staking methods
        "cosmos.staking.v1beta1.delegatorDelegations": "getStakedPositions",
        "cosmos.staking.v1beta1.delegatorUnbondingDelegations": "getUnbondingPositions",
        
        // Distribution methods
        "cosmos.distribution.v1beta1.delegationTotalRewards": "getStakingRewards",
        
        // Validator info
        "cosmos.staking.v1beta1.validators": "getValidatorList"
      }
    }
  }
]

// Application code
import { PortfolioClient } from "./service-ops";
import { createRPCQueryClient } from "./codegen/rpc";

async function displayPortfolio(address) {
  try {
    // Create and initialize the client
    const rpcClient = await createRPCQueryClient({
      rpcEndpoint: "https://rpc.cosmos.network"
    });
    
    const portfolioClient = new PortfolioClient();
    portfolioClient.init(rpcClient);
    
    // Fetch all portfolio data in parallel for efficiency
    const [
      walletResponse,
      stakingResponse,
      unbondingResponse,
      rewardsResponse
    ] = await Promise.all([
      portfolioClient.getWalletBalances({ address }),
      portfolioClient.getStakedPositions({ delegatorAddr: address }),
      portfolioClient.getUnbondingPositions({ delegatorAddr: address }),
      portfolioClient.getStakingRewards({ delegatorAddress: address })
    ]);
    
    // Get validator details for display
    const validatorAddresses = stakingResponse.delegationResponses.map(
      del => del.delegation.validatorAddress
    );
    
    const validatorsResponse = await portfolioClient.getValidatorList({
      // Get details for validators the user has delegated to
      validatorAddresses
    });
    
    // Create a map of validator addresses to names
    const validatorMap = {};
    validatorsResponse.validators.forEach(validator => {
      validatorMap[validator.operatorAddress] = validator.description.moniker;
    });
    
    // Process wallet balances
    const liquidBalances = walletResponse.balances.map(coin => {
      return {
        denom: coin.denom,
        amount: coin.amount,
        displayAmount: formatAmount(coin.amount, coin.denom)
      };
    });
    
    // Process staked positions
    const stakedPositions = stakingResponse.delegationResponses.map(del => {
      return {
        validatorAddress: del.delegation.validatorAddress,
        validatorName: validatorMap[del.delegation.validatorAddress] || "Unknown validator",
        amount: del.balance.amount,
        denom: del.balance.denom,
        displayAmount: formatAmount(del.balance.amount, del.balance.denom)
      };
    });
    
    // Process unbonding positions
    const unbondingPositions = unbondingResponse.unbondingResponses.map(unbond => {
      // Calculate total unbonding amount
      const totalAmount = unbond.entries.reduce(
        (sum, entry) => sum + BigInt(entry.balance),
        BigInt(0)
      ).toString();
      
      return {
        validatorAddress: unbond.validatorAddress,
        validatorName: validatorMap[unbond.validatorAddress] || "Unknown validator",
        entries: unbond.entries.length,
        completionTime: new Date(unbond.entries[0].completionTime).toLocaleString(),
        totalAmount,
        displayAmount: formatAmount(totalAmount, "uatom")
      };
    });
    
    // Process rewards
    const rewards = rewardsResponse.rewards.map(reward => {
      return {
        validatorAddress: reward.validatorAddress,
        validatorName: validatorMap[reward.validatorAddress] || "Unknown validator",
        rewards: reward.reward.map(r => ({
          denom: r.denom,
          amount: r.amount,
          displayAmount: formatAmount(r.amount, r.denom)
        }))
      };
    });
    
    // Calculate total rewards
    const totalRewards = rewardsResponse.total.map(r => ({
      denom: r.denom,
      amount: r.amount,
      displayAmount: formatAmount(r.amount, r.denom)
    }));
    
    // Display the portfolio
    console.log(`=== Portfolio for ${address} ===`);
    
    // Liquid balances
    console.log("\nLiquid Balances:");
    if (liquidBalances.length === 0) {
      console.log("  No liquid tokens found");
    } else {
      liquidBalances.forEach(b => {
        console.log(`  ${b.displayAmount}`);
      });
    }
    
    // Staked positions
    console.log("\nStaked Positions:");
    if (stakedPositions.length === 0) {
      console.log("  No staked tokens found");
    } else {
      stakedPositions.forEach(p => {
        console.log(`  ${p.displayAmount} with ${p.validatorName}`);
      });
    }
    
    // Unbonding positions
    console.log("\nUnbonding Positions:");
    if (unbondingPositions.length === 0) {
      console.log("  No unbonding tokens found");
    } else {
      unbondingPositions.forEach(p => {
        console.log(`  ${p.displayAmount} from ${p.validatorName}`);
        console.log(`    Complete on: ${p.completionTime}`);
      });
    }
    
    // Rewards
    console.log("\nPending Rewards:");
    if (totalRewards.length === 0) {
      console.log("  No pending rewards found");
    } else {
      totalRewards.forEach(r => {
        console.log(`  ${r.displayAmount}`);
      });
    }
  } catch (error) {
    console.error("Error displaying portfolio:", error.message);
  }
}

// Helper function to format token amounts for display
function formatAmount(amount, denom) {
  if (denom === "uatom") {
    const atoms = Number(amount) / 1_000_000;
    return `${atoms.toLocaleString()} ATOM`;
  } else if (denom.startsWith("u")) {
    const standardAmount = Number(amount) / 1_000_000;
    const symbol = denom.substring(1).toUpperCase();
    return `${standardAmount.toLocaleString()} ${symbol}`;
  } else {
    return `${amount} ${denom}`;
  }
}

// Call the function with a real address
displayPortfolio("cosmos1...");
```

## Best Practices and Tips

Here are some best practices to follow when using Instant RPC Methods:

### 1. Choose Descriptive Method Names

Select method names that clearly describe what the method does, making your code more self-explanatory:

```typescript
// Good naming
"cosmos.bank.v1beta1.balance": "getAccountBalance"
"cosmos.staking.v1beta1.delegatorDelegations": "getStakedPositions"

// Less clear naming
"cosmos.bank.v1beta1.balance": "getB"
"cosmos.staking.v1beta1.delegatorDelegations": "getDels"
```

### 2. Group Related Methods in Domain-Specific Clients

Create separate clients for different functional areas of your application:

```typescript
// Banking client
className: "BankClient"

// Staking client
className: "StakingClient"

// Governance client
className: "GovClient"
```

### 3. Use Consistent Naming Patterns

Maintain consistency in your method naming to make your API more predictable:

```typescript
// Consistent pattern for getter methods
"cosmos.bank.v1beta1.balance": "getBalance"
"cosmos.bank.v1beta1.allBalances": "getAllBalances"
"cosmos.staking.v1beta1.validators": "getValidators"

// Consistent pattern for action methods
"cosmos.bank.v1beta1.send": "sendTokens"
"cosmos.staking.v1beta1.delegate": "delegateTokens"
```

### 4. Document Your Custom Methods

Add comments to explain what your custom methods do, especially if you've significantly altered the original method name:

```typescript
// In your code
/**
 * Gets the current liquid balance of an account for a specific token
 * @param address The account address to query
 * @param denom The token denomination (e.g., 'uatom')
 * @returns The token balance
 */
const { balance } = await client.getBalance({ address, denom });
```

### 5. Initialize Once, Reuse Often

Initialize your client once and reuse it for multiple operations to avoid unnecessary connection overhead:

```typescript
// Initialize once
const client = new PortfolioClient();
client.init(rpcClient);

// Reuse for multiple operations
const balances = await client.getWalletBalances({ address });
const staking = await client.getStakedPositions({ delegatorAddr: address });
const rewards = await client.getStakingRewards({ delegatorAddress: address });
```

## Conclusion

In this tutorial, you've learned how to use Instant RPC Methods to create customized, focused clients for working with Cosmos SDK blockchains. By using this approach, you can:

1. Simplify your code by eliminating deep nesting of method calls
2. Create more intuitive interfaces with custom method names
3. Organize your code into domain-specific clients
4. Combine both query and transaction methods in a single client
5. Improve the overall readability and maintainability of your application

Instant RPC Methods provide a powerful way to tailor the generated Telescope code to your application's specific needs, making it more accessible to other developers on your team and easier to maintain over time.

In the next tutorial, we'll explore [Manually Registering Types](./manually-registering-types.md) to extend Telescope's capabilities with custom or third-party types. 