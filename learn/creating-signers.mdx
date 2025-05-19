# Creating Signers for Transaction Authorization

In this tutorial, we'll learn how to create and use signers with Telescope-generated clients to authenticate and authorize transactions on Cosmos-based blockchains.

## Understanding Blockchain Authentication

Before broadcasting a transaction to a blockchain, you need to prove that you have the authority to perform that action. In Cosmos-based blockchains, this is done by cryptographically signing transactions with a private key. Let's learn how to create and use these signers in your applications.

## Creating Basic Signers

Let's start by creating a simple signer that we can use for development purposes.

### Using a Mnemonic (For Development Only)

```ts
import { chains } from 'chain-registry';
import { getOfflineSigner as getOfflineSignerAmino } from 'cosmjs-utils';

// WARNING: This is just an example mnemonic - never hardcode mnemonics in production code
const mnemonic = 'unfold client turtle either pilot stock floor glow toward bullet car science';

// Get the chain configuration from the chain-registry
const chain = chains.find(({ chain_name }) => chain_name === 'osmosis');

// Create an Amino-compatible offline signer
const signer = await getOfflineSignerAmino({
    mnemonic,
    chain
});

// You can get the accounts from this signer
const accounts = await signer.getAccounts();
console.log('Account address:', accounts[0].address);
```

> ⚠️ **Security Warning**: Never store mnemonics or private keys in your application code. The example above is only for development purposes. In production, always use secure key management systems or wallet integrations.

## Choosing Between Amino and Proto Signers

Telescope supports two main signing formats:

### Amino Signer

The Amino signer uses the legacy Amino encoding format which is compatible with most wallets like Keplr. This is the recommended approach for client applications:

```ts
import { getOfflineSigner as getOfflineSignerAmino } from 'cosmjs-utils';

const signer = await getOfflineSignerAmino({
    mnemonic,
    chain
});
```

### Proto Signer

The Proto signer uses the newer Protobuf encoding format:

```ts
import { getOfflineSigner as getOfflineSignerProto } from 'cosmjs-utils';

const signer = await getOfflineSignerProto({
    mnemonic,
    chain
});
```

For most applications, you should use the Amino signer unless you have specific requirements for using the Proto signer.

## Integrating with Keplr Wallet

In browser environments, you can integrate with the Keplr wallet extension to handle signing:

```ts
// Check if Keplr is available
if (!window.keplr) {
    alert("Please install Keplr extension");
    throw new Error("Keplr extension not found");
}

// Request access to the specified chain
await window.keplr.enable(chainId);

// Get the offline signer
const signer = window.keplr.getOfflineSigner(chainId);

// You can now use this signer with your Telescope client
const client = await getSigningOsmosisClient({
    rpcEndpoint: "https://rpc.osmosis.zone",
    signer
});

// Get the user's address from the signer
const accounts = await signer.getAccounts();
const address = accounts[0].address;
console.log("Connected address:", address);
```

## Creating a Signing Client with Your Signer

Once you have a signer, you can create a signing client to interact with the blockchain:

```ts
import { getSigningOsmosisClient } from 'osmojs';

// Create the signing client
const client = await getSigningOsmosisClient({
    rpcEndpoint: "https://rpc.osmosis.zone",
    signer: signer
});

// Now you can use this client to broadcast transactions
// For example, to send tokens:
const result = await client.sendTokens(
    senderAddress,
    recipientAddress,
    [{ denom: "uosmo", amount: "1000000" }],
    fee,
    "Transfer tokens"
);

console.log("Transaction hash:", result.transactionHash);
```

## Working with DirectSecp256k1Wallet

For more control over the signing process, you can use the `DirectSecp256k1Wallet` from CosmJS:

```ts
import { DirectSecp256k1Wallet } from '@cosmjs/proto-signing';
import { fromHex } from '@cosmjs/encoding';

// Create a wallet from a private key (hex encoded)
const privateKey = fromHex("1234..."); // Your private key here
const wallet = await DirectSecp256k1Wallet.fromKey(privateKey, "osmo");

// Or generate a random wallet
const randomWallet = await DirectSecp256k1Wallet.generate("osmo");
console.log("Random address:", (await randomWallet.getAccounts())[0].address);
console.log("Make sure to save this mnemonic:", await randomWallet.mnemonic);
```

## Advanced: Custom Registry Configuration

When working with custom chains or when you need support for specific message types, you might need to configure the registry and amino types:

```ts
import { Registry, EncodeObject } from '@cosmjs/proto-signing';
import { SigningStargateClient, AminoTypes, StdFee } from '@cosmjs/stargate';
import { 
    cosmosAminoConverters, cosmosProtoRegistry,
    osmosisAminoConverters, osmosisProtoRegistry
} from 'osmojs';

// Combine registries from different modules
const registry = new Registry([
    ...cosmosProtoRegistry,
    ...osmosisProtoRegistry
]);

// Combine amino converters from different modules
const aminoTypes = new AminoTypes({
    ...cosmosAminoConverters,
    ...osmosisAminoConverters
});

// Create a client with custom configuration
const client = await SigningStargateClient.connectWithSigner(
    "https://rpc.osmosis.zone",
    signer,
    { registry, aminoTypes }
);

// Create a message
const message: EncodeObject = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    value: {
        fromAddress: "osmo1...",
        toAddress: "osmo1...",
        amount: [{ denom: "uosmo", amount: "1000000" }]
    }
};

// Define fee
const fee: StdFee = {
    amount: [{ denom: "uosmo", amount: "5000" }],
    gas: "200000"
};

// Broadcast the transaction
const result = await client.signAndBroadcast(
    "osmo1...", // sender address
    [message],  // messages
    fee,        // fee
    "Send tokens via custom client" // memo
);

console.log("Transaction result:", result);
```

## Security Best Practices

When working with signers and private keys, always follow these security practices:

1. **Never hardcode mnemonics or private keys** in your application code
2. **Don't store unencrypted private keys** on the client side
3. **Use hardware wallets or browser extensions** like Keplr when possible
4. **Implement proper key rotation** procedures for long-running applications
5. **Use secure key management services** for server-side applications
6. **Apply proper encryption** for any stored key material
7. **Avoid transmitting private keys** over the network

## Troubleshooting Common Issues

### Invalid Address Prefix

If you see address validation errors, ensure you're using the correct chain prefix:

```ts
// Make sure the prefix matches the chain you're targeting
const wallet = await DirectSecp256k1Wallet.generate("osmo"); // for Osmosis
// or
const wallet = await DirectSecp256k1Wallet.generate("cosmos"); // for Cosmos Hub
```

### Transaction Simulation Failures

If your transactions are failing during simulation:

```ts
try {
    // Try to simulate the transaction first
    const gasEstimated = await client.simulate(address, messages, memo);
    console.log("Estimated gas:", gasEstimated);
    
    // Create a fee with a buffer
    const fee = {
        amount: [{ denom: "uosmo", amount: "5000" }],
        gas: Math.ceil(gasEstimated * 1.3).toString()
    };
    
    // Now broadcast with the calculated fee
    const result = await client.signAndBroadcast(address, messages, fee, memo);
    console.log("Success:", result);
} catch (error) {
    console.error("Simulation failed:", error.message);
    // Handle the error appropriately
}
```

## Practical Example: Sending Tokens

Let's put everything together in a practical example of sending tokens:

```ts
import { getSigningOsmosisClient } from 'osmojs';
import { getOfflineSigner as getOfflineSignerAmino } from 'cosmjs-utils';
import { chains } from 'chain-registry';
import { GasPrice } from '@cosmjs/stargate';

async function sendTokens() {
    try {
        // Get chain info from registry
        const chain = chains.find(({ chain_name }) => chain_name === 'osmosis');
        
        // Get signer from Keplr or create from mnemonic for development
        let signer;
        if (window.keplr) {
            await window.keplr.enable(chain.chain_id);
            signer = window.keplr.getOfflineSigner(chain.chain_id);
        } else {
            // Dev-only fallback
            const mnemonic = 'your test mnemonic here';
            signer = await getOfflineSignerAmino({ mnemonic, chain });
        }
        
        // Get account address
        const accounts = await signer.getAccounts();
        const fromAddress = accounts[0].address;
        
        // Create signing client
        const client = await getSigningOsmosisClient({
            rpcEndpoint: chain.apis.rpc[0].address,
            signer: signer
        });
        
        // Set recipient and amount
        const toAddress = 'osmo1recipient...';
        const amount = [{ denom: 'uosmo', amount: '1000000' }]; // 1 OSMO
        
        // Estimate fee
        const gasPrice = GasPrice.fromString('0.025uosmo');
        const gasEstimated = await client.simulate(fromAddress, [
            {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: fromAddress,
                    toAddress: toAddress,
                    amount: amount
                }
            }
        ], '');
        
        const fee = {
            amount: [{ denom: 'uosmo', amount: gasPrice.amount.multiply(gasEstimated).toString() }],
            gas: gasEstimated.toString()
        };
        
        // Send tokens
        const result = await client.sendTokens(
            fromAddress,
            toAddress,
            amount,
            fee,
            'Sent from my application'
        );
        
        console.log('Transaction successful!');
        console.log('Transaction hash:', result.transactionHash);
        
        return result;
    } catch (error) {
        console.error('Error sending tokens:', error);
        throw error;
    }
}

// Call the function
sendTokens().catch(console.error);
```

## Next Steps

Now that you've learned how to create and use signers, you're ready to build more complex applications with Telescope. Here are some recommended next steps:

- Learn about [composing messages](./composing-messages.md) for different transaction types
- Understand how to [calculate fees](./calculating-fees.md) for your transactions
- Explore [Stargate clients](./stargate-clients.md) for more advanced interactions

Remember to always prioritize security when dealing with private keys and signers in your applications. 