# Using LCD Clients

In this tutorial, we'll learn how to use LCD (Light Client Daemon) clients with Telescope-generated code to query blockchain data through REST endpoints. This approach is ideal for applications that need to read data from a blockchain without submitting transactions.

## Understanding LCD Clients

LCD clients allow your application to query the state of a blockchain through REST API endpoints. These endpoints provide access to all the data stored on the blockchain, from account balances to validator information to governance proposals.

The advantage of using Telescope-generated LCD clients is that they provide full TypeScript type safety, making your queries more reliable and providing excellent autocomplete support in your IDE.

## Setting Up Your Project

First, let's make sure your Telescope configuration has LCD client generation enabled:

```typescript
// In your Telescope configuration file
import { TelescopeOptions } from "@cosmology/types";

const options: TelescopeOptions = {
  lcdClients: {
    enabled: true
  }
  // Other Telescope options...
};

export default options;
```

Run your Telescope code generation, and it will create LCD client code for all the modules in your Protobuf definitions.

## Creating a Basic LCD Client

Let's start by creating a simple LCD client to query the Cosmos Hub:

```typescript
import { createLCDClient } from "./codegen/client";

async function queryCosmosHub() {
  // Create an LCD client connected to the Cosmos Hub REST endpoint
  const client = await createLCDClient({
    restEndpoint: "https://rest.cosmos.network"
  });
  
  console.log("Successfully connected to Cosmos Hub REST API");
  
  // Now you can use this client to query the blockchain
  return client;
}

// Call the function to get our client
const client = await queryCosmosHub();
```

Now that we have our client, let's learn how to use it to query blockchain data.

## Querying Account Balances

One of the most common operations is checking an account's balance:

```typescript
async function checkAccountBalance(address) {
  const client = await createLCDClient({
    restEndpoint: "https://rest.cosmos.network"
  });
  
  try {
    // Query all balances for an address
    const { balances } = await client.cosmos.bank.v1beta1.allBalances({
      address: address
    });
    
    console.log(`Account ${address} has the following balances:`);
    
    if (balances.length === 0) {
      console.log("  No tokens found");
    } else {
      balances.forEach(coin => {
        console.log(`  ${coin.amount} ${coin.denom}`);
      });
    }
    
    return balances;
  } catch (error) {
    console.error("Error querying balances:", error.message);
    throw error;
  }
}

// Example usage
const address = "cosmos1..."; // Replace with a real address
const balances = await checkAccountBalance(address);
```

## Querying Validators

Let's see how to get information about active validators:

```typescript
async function getActiveValidators() {
  const client = await createLCDClient({
    restEndpoint: "https://rest.cosmos.network"
  });
  
  try {
    // Query active validators (bonded)
    const { validators } = await client.cosmos.staking.v1beta1.validators({
      status: "BOND_STATUS_BONDED"
    });
    
    console.log(`Found ${validators.length} active validators:`);
    
    // Print top 5 validators by voting power
    validators
      .sort((a, b) => parseInt(b.tokens) - parseInt(a.tokens))
      .slice(0, 5)
      .forEach((validator, index) => {
        console.log(`${index + 1}. ${validator.description.moniker}`);
        console.log(`   Address: ${validator.operatorAddress}`);
        console.log(`   Voting Power: ${parseInt(validator.tokens) / 1000000} ATOM`);
        console.log(`   Commission: ${parseFloat(validator.commission.commissionRates.rate) * 100}%`);
      });
    
    return validators;
  } catch (error) {
    console.error("Error querying validators:", error.message);
    throw error;
  }
}

// Get active validators
const validators = await getActiveValidators();
```

## Working with Pagination

When querying large datasets, you'll need to handle pagination to get all the results:

```typescript
async function getAllProposals() {
  const client = await createLCDClient({
    restEndpoint: "https://rest.cosmos.network"
  });
  
  let allProposals = [];
  let nextKey = null;
  
  try {
    // Loop to get all pages of data
    do {
      // Set up pagination parameters
      const paginationParams = nextKey 
        ? { key: nextKey, limit: "50" } 
        : { limit: "50" };
      
      // Query proposals with pagination
      const response = await client.cosmos.gov.v1beta1.proposals({
        pagination: paginationParams,
        proposalStatus: 0, // 0 means all proposals
      });
      
      // Add this page of proposals to our result
      allProposals = [...allProposals, ...response.proposals];
      
      // Update nextKey for the next iteration
      nextKey = response.pagination?.nextKey || null;
      
      console.log(`Fetched ${response.proposals.length} proposals, total: ${allProposals.length}`);
      
    } while (nextKey);
    
    console.log(`Retrieved a total of ${allProposals.length} proposals`);
    return allProposals;
  } catch (error) {
    console.error("Error querying proposals:", error.message);
    throw error;
  }
}

// Get all governance proposals
const proposals = await getAllProposals();
```

## Querying Chain-specific Modules

Different Cosmos chains have their own specific modules. Let's look at an example of querying Osmosis liquidity pools:

```typescript
async function getOsmosisPools() {
  const client = await createLCDClient({
    restEndpoint: "https://rest.osmosis.zone"
  });
  
  try {
    // Query pools on Osmosis
    const { pools } = await client.osmosis.gamm.v1beta1.pools({});
    
    console.log(`Found ${pools.length} liquidity pools on Osmosis`);
    
    // Look at details of pool #1 (a popular ATOM/OSMO pool)
    const { pool } = await client.osmosis.gamm.v1beta1.pool({
      poolId: "1"
    });
    
    console.log("Pool #1 details:");
    console.log(`  ID: ${pool.id}`);
    console.log(`  Type: ${pool["@type"]}`);
    console.log("  Assets:");
    
    // Display the assets in the pool
    if (pool.poolAssets) {
      pool.poolAssets.forEach(asset => {
        console.log(`    ${asset.token.amount} ${asset.token.denom}`);
      });
    }
    
    return {
      pools,
      pool1Details: pool
    };
  } catch (error) {
    console.error("Error querying Osmosis pools:", error.message);
    throw error;
  }
}

// Get information about Osmosis pools
const osmosisData = await getOsmosisPools();
```

## Creating Custom Scoped Clients

For larger applications, you might want to create scoped clients that only include the modules you need:

```typescript
// This is part of your Telescope configuration file
const options: TelescopeOptions = {
  lcdClients: {
    enabled: true,
    scoped: [
      {
        dir: "bank-client",
        filename: "bank-client.ts",
        packages: [
          "cosmos.bank.v1beta1",
          "cosmos.base.v1beta1"
        ],
        addToBundle: true,
        methodName: "createBankClient"
      }
    ]
  }
};

// After running Telescope, you can use your scoped client:
import { createBankClient } from "./codegen/bank-client/bank-client";

async function queryBankModule() {
  const bankClient = await createBankClient({
    restEndpoint: "https://rest.cosmos.network"
  });
  
  // Now you can only access the bank module
  const { balances } = await bankClient.cosmos.bank.v1beta1.allBalances({
    address: "cosmos1..."
  });
  
  // This would fail because the client only has bank module
  // const validators = await bankClient.cosmos.staking.v1beta1.validators({});
  
  return balances;
}
```

## Error Handling Best Practices

When working with network requests, it's important to handle errors properly:

```typescript
async function queryWithErrorHandling(address) {
  const client = await createLCDClient({
    restEndpoint: "https://rest.cosmos.network"
  });
  
  try {
    const response = await client.cosmos.bank.v1beta1.balance({
      address: address,
      denom: "uatom"
    });
    
    return response.balance;
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      // The server responded with an error status
      if (error.response.status === 400) {
        console.error("Bad request. Check your parameters:", error.response.data);
      } else if (error.response.status === 404) {
        console.error("Resource not found. The address may not exist on chain.");
      } else if (error.response.status === 500) {
        console.error("Server error. The node might be experiencing issues.");
      } else {
        console.error(`Error ${error.response.status}:`, error.response.data);
      }
    } else if (error.request) {
      // The request was made but no response received
      console.error("No response from server. Check your internet connection or the node may be down.");
    } else {
      // Something happened in setting up the request
      console.error("Error creating request:", error.message);
    }
    
    // You might want to return a default value or rethrow
    throw new Error(`Failed to query balance for ${address}: ${error.message}`);
  }
}
```

## Building a Dashboard Application

Let's put everything together and create a simple blockchain dashboard:

```typescript
import { createLCDClient } from "./codegen/client";

async function createBlockchainDashboard() {
  // Create the client
  const client = await createLCDClient({
    restEndpoint: "https://rest.cosmos.network"
  });
  
  try {
    // Get chain information
    const nodeInfo = await client.cosmos.base.tendermint.v1beta1.getNodeInfo({});
    const chainId = nodeInfo.defaultNodeInfo.network;
    console.log(`Connected to chain: ${chainId}`);
    
    // Get latest block
    const latestBlock = await client.cosmos.base.tendermint.v1beta1.getLatestBlock({});
    console.log(`Latest block: ${latestBlock.block.header.height}`);
    console.log(`Block time: ${latestBlock.block.header.time}`);
    
    // Get validator count
    const { validators: activeValidators } = await client.cosmos.staking.v1beta1.validators({
      status: "BOND_STATUS_BONDED"
    });
    console.log(`Active validators: ${activeValidators.length}`);
    
    // Get governance metrics
    const { proposals } = await client.cosmos.gov.v1beta1.proposals({
      proposalStatus: 2 // PROPOSAL_STATUS_VOTING_PERIOD
    });
    console.log(`Proposals in voting period: ${proposals.length}`);
    
    // Get supply information
    const totalSupply = await client.cosmos.bank.v1beta1.totalSupply({});
    const atomSupply = totalSupply.supply.find(coin => coin.denom === "uatom");
    if (atomSupply) {
      const atomAmount = parseInt(atomSupply.amount) / 1000000; // Convert from uatom to ATOM
      console.log(`Total ATOM supply: ${atomAmount.toLocaleString()} ATOM`);
    }
    
    // Get inflation rate
    const inflation = await client.cosmos.mint.v1beta1.inflation({});
    const inflationRate = parseFloat(inflation.inflation) * 100;
    console.log(`Current inflation rate: ${inflationRate.toFixed(2)}%`);
    
    return {
      chainId,
      latestBlockHeight: latestBlock.block.header.height,
      blockTime: latestBlock.block.header.time,
      activeValidatorCount: activeValidators.length,
      proposalsInVoting: proposals.length,
      atomSupply: atomSupply ? parseInt(atomSupply.amount) / 1000000 : 0,
      inflationRate: inflationRate
    };
  } catch (error) {
    console.error("Error creating dashboard:", error.message);
    throw error;
  }
}

// Create the dashboard
const dashboard = await createBlockchainDashboard();
console.log(JSON.stringify(dashboard, null, 2));
```

## Working with CosmWasm Smart Contracts

If you're working with a chain that supports CosmWasm smart contracts, you can query them like this:

```typescript
async function querySmartContract() {
  // Connect to a CosmWasm-enabled chain like Juno
  const client = await createLCDClient({
    restEndpoint: "https://rest.juno.strange.love"
  });
  
  try {
    // The contract address you want to query
    const contractAddress = "juno1..."; // Replace with a real contract address
    
    // The query to send to the contract (this depends on the contract's interface)
    const queryMsg = {
      token_info: {}
    };
    
    // Convert the JSON query to base64 as required by the API
    const queryData = btoa(JSON.stringify(queryMsg));
    
    // Query the smart contract
    const response = await client.cosmwasm.wasm.v1.smartContractState({
      address: contractAddress,
      queryData: queryData
    });
    
    // The data comes back as binary, so we need to decode and parse it
    const contractData = JSON.parse(
      new TextDecoder().decode(response.data)
    );
    
    console.log("Contract query result:", contractData);
    return contractData;
  } catch (error) {
    console.error("Error querying smart contract:", error.message);
    throw error;
  }
}

// Query a CosmWasm smart contract
const contractData = await querySmartContract();
```

## Performance Optimization Tips

When working with LCD clients in production applications, consider these tips:

```typescript
// Create a client with custom timeout and caching headers
import { createLCDClient } from "./codegen/client";
import axios from "axios";

// Create a custom axios instance with caching
const axiosInstance = axios.create({
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Cache-Control": "max-age=30" // Allow caching for 30 seconds
  }
});

// Create the LCD client with the custom axios instance
const client = await createLCDClient({
  restEndpoint: "https://rest.cosmos.network",
  // Pass the custom axios instance
  axios: axiosInstance
});

// Example of batching multiple queries together for efficiency
async function batchQueries(address) {
  // Use Promise.all to run queries in parallel
  const [balanceResponse, delegationsResponse, rewardsResponse] = await Promise.all([
    client.cosmos.bank.v1beta1.allBalances({ address }),
    client.cosmos.staking.v1beta1.delegatorDelegations({ delegatorAddr: address }),
    client.cosmos.distribution.v1beta1.delegationTotalRewards({ delegatorAddress: address })
  ]);
  
  // Now use the results
  console.log("Balances:", balanceResponse.balances);
  console.log("Delegations:", delegationsResponse.delegationResponses);
  console.log("Rewards:", rewardsResponse.rewards);
  
  return {
    balances: balanceResponse.balances,
    delegations: delegationsResponse.delegationResponses,
    rewards: rewardsResponse.rewards
  };
}
```

## Conclusion

In this tutorial, you've learned how to:

1. Enable LCD client generation in Telescope
2. Create and use LCD clients for querying blockchain data
3. Handle pagination for large datasets
4. Work with chain-specific modules like Osmosis DEX
5. Create custom scoped clients for your application
6. Properly handle errors in network requests
7. Create a simple blockchain dashboard using various queries
8. Query CosmWasm smart contracts
9. Optimize performance for production applications

LCD clients provide a convenient way to read data from the blockchain without having to set up a full node or use more complex RPC methods. They're perfect for applications that need to display blockchain data to users or perform read-only operations.

In the next tutorial, we'll explore [LCD Client Classes](./lcd-clients-classes.md) for more advanced usage patterns. 