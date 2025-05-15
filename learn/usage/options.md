# Configuration Options Guide

In this tutorial, we'll explore Telescope's configuration options and learn how to customize the generated TypeScript code for your project's specific needs. Telescope offers rich configuration options that give you precise control over every aspect of the code generation process.

## Understanding the Structure of Configuration Options

Telescope's configuration options are passed to the main function through a JavaScript object. The structure is as follows:

```js
telescope({
  protoDirs, // Input directories
  outPath,   // Output directory
  options: {
    // All configuration options go here
  }
});
```

Configuration options can be divided into several main categories, each controlling different aspects of the generated code. Let's explore these categories one by one.

## Amino Encoding Options

Amino encoding is a serialization format used in Cosmos SDK that allows sharing data structures between different languages. These options are important when you need to maintain compatibility with older Cosmos SDK versions or work with wallets like Keplr.

### Basic Setup

The most basic setup is enabling or disabling Amino encoding:

```js
options: {
  aminoEncoding: {
    enabled: true // Default is true
  }
}
```

### Advanced Amino Configuration

For more complex use cases, you can configure the following options:

```js
options: {
  aminoEncoding: {
    enabled: true,
    // Determines when to omit fields during JSON serialization
    omitEmptyTags: ["omitempty", "dont_omitempty"],
    // Disable generating AminoMsg types
    disableMsgTypes: false,
    // Set the casing function
    casingFn: snake(),
    // Set custom amino type names for specific message types
    exceptions: {
      '/cosmos.gov.v1beta1.MsgSubmitProposal': 'cosmos-sdk/MsgSubmitProposal'
    }
  }
}
```

### Practical Example

Suppose you're building an application that needs to integrate with Keplr wallet, you might need to ensure amino types are correctly generated:

```js
options: {
  aminoEncoding: {
    enabled: true,
    // Use some project-specific amino naming conventions
    exceptions: {
      '/your.chain.module.MsgCustomAction': 'your-chain/MsgCustomAction'
    }
  }
}
```

## Interface and Implementation Options

These options control how Telescope handles interfaces and their implementations. In Cosmos SDK, interfaces (like `sdk.Msg`) can have multiple concrete implementations, and these options help handle such cases.

```js
options: {
  interfaces: {
    enabled: true,
    // Enable global decoder registry, recommended when dealing with fields having 'accepted_interface' option
    useGlobalDecoderRegistry: true,
    // Use union types instead of intersection types for Any type
    useUnionTypes: true
  }
}
```

### When to Use Global Decoder Registry

When working with modules that use interface fields (for example, Cosmos SDK's `Any` type), enabling `useGlobalDecoderRegistry` is very useful:

```js
// This will allow proper decoding of messages with Any type fields
options: {
  interfaces: {
    enabled: true,
    useGlobalDecoderRegistry: true,
    useByDefault: true
  }
}
```

## Prototype Options

These options control how TypeScript types and methods are generated to handle Protocol Buffer messages. Prototype options are the core configuration, determining the structure and functionality of the generated code.

### Basic Setup

```js
options: {
  prototypes: {
    enabled: true,
    // Export a protoPackage variable
    includePackageVar: true,
    // Whether fields are optional by default
    fieldDefaultIsOptional: false
  }
}
```

### Including and Excluding Specific Packages or Files

If you only want to process specific packages or files, you can use include and exclude options:

```js
options: {
  prototypes: {
    includes: {
      packages: ["cosmos.bank", "cosmos.staking"],
      protos: ["your/custom/proto/file.proto"]
    },
    excluded: {
      packages: ["unused.package"],
      protos: ["unused/proto.proto"],
      // Force exclude these files regardless of whether they are dependencies of other files
      hardProtos: ["problematic/proto.proto"]
    }
  }
}
```

### Controlling Generated Methods

You can precisely control which methods are generated:

```js
options: {
  prototypes: {
    methods: {
      encode: true,
      decode: true,
      fromJSON: true,
      toJSON: true,
      fromPartial: true,
      // These methods are disabled by default
      fromSDK: true,
      toSDK: true
    }
  }
}
```

### Practical Example: Handling Specific Types

Suppose you need special handling for timestamp and duration types:

```js
options: {
  prototypes: {
    typingsFormat: {
      // Use JavaScript Date object for Timestamp
      timestamp: 'date',
      // Use string for Duration
      duration: 'string'
    }
  }
}
```

## Client Generation Options

Telescope can generate different types of clients for interacting with the blockchain. These include LCD (REST) clients, RPC clients, and Stargate clients.

### LCD Client Options

LCD clients use HTTP/REST endpoints to query blockchain state:

```js
options: {
  lcdClients: {
    enabled: true,
    // Generate a factory bundle of all LCD clients
    bundle: true,
    // Create scoped client factories
    scoped: [
      {
        dir: 'mychain',
        filename: 'custom-lcd-client.ts',
        packages: ['cosmos.bank.v1beta1', 'mychain.module.v1'],
        addToBundle: true,
        methodName: 'createCustomLCDClient'
      }
    ]
  }
}
```

### RPC Client Options

RPC clients use Tendermint RPC, gRPC-web, or gRPC endpoints to interact with the blockchain:

```js
options: {
  rpcClients: {
    enabled: true,
    // Choose client type: 'tendermint', 'gRPC-web', or 'gRPC'
    type: 'tendermint',
    // Use camelCase for RPC methods
    camelCase: true,
    // Enabled service types
    enabledServices: ['Msg', 'Query', 'Service']
  }
}
```

### Stargate Client Options

Stargate clients are CosmJS-compatible clients used for signing and broadcasting transactions:

```js
options: {
  stargateClients: {
    // Whether to include cosmjs default types
    includeCosmosDefaultTypes: true,
    // Add getSigningTxRpc to clients in namespaces
    addGetTxRpc: true
  }
}
```

### Practical Example: Creating Custom Clients

Suppose you're building a dApp that needs to interact with specific modules:

```js
options: {
  rpcClients: {
    enabled: true,
    type: 'tendermint',
    camelCase: true,
    // Include only the services your application needs
    scoped: [
      {
        dir: 'mychain',
        filename: 'my-rpc-client.ts',
        packages: [
          'cosmos.bank.v1beta1',
          'cosmos.staking.v1beta1',
          'mychain.module.v1'
        ],
        addToBundle: true,
        methodNameQuery: 'createMyRPCQueryClient',
        methodNameTx: 'createMyRPCTxClient'
      }
    ]
  }
}
```

## Frontend Integration Options

Telescope can integrate with various frontend frameworks and state management solutions like React Query, Mobx, Pinia, and Vue Query.

### React Query Integration

```js
options: {
  reactQuery: {
    enabled: true,
    // Whether to allow extra query keys
    needExtraQueryKey: true,
    include: {
      // Create hooks on matched packages
      packages: ['cosmos.bank.v1beta1', 'cosmos.staking.v1beta1']
    },
    // Configure instant exports
    instantExport: {
      include: {
        patterns: ['cosmos.bank.v1beta1.*']
      },
      // Custom naming mapping
      nameMapping: {
        useBankBalance: 'cosmos.bank.v1beta1.useBalance'
      }
    }
  }
}
```

### State Management Integration (Mobx, Pinia)

```js
options: {
  // Mobx integration
  mobx: {
    enabled: true,
    include: {
      packages: ['cosmos.bank.v1beta1']
    }
  },
  // Pinia integration (for Vue projects)
  pinia: {
    enabled: true,
    include: {
      packages: ['cosmos.staking.v1beta1']
    }
  }
}
```

## Helper Functions Options

Helper functions make common tasks easier, such as constructing messages or querying blockchain state:

```js
options: {
  helperFunctions: {
    enabled: true,
    // Generate React and Vue hooks
    hooks: {
      react: true,
      vue: true
    },
    include: {
      // Service types to include
      serviceTypes: ['Query', 'Msg'],
      // Glob patterns to match specific services
      patterns: ['cosmos.gov.v1beta1.**', 'cosmos.bank.v1beta1.*']
    },
    // Custom function naming
    nameMappers: {
      Query: {
        funcBody: (name) => `get${name}`,
        hookPrefix: 'use'
      },
      Msg: {
        funcBody: (name) => `send${name}`,
        hookPrefix: 'useTx'
      }
    }
  }
}
```

## Typing Format and Output Options

These options control the format and style of the generated TypeScript code:

```js
options: {
  prototypes: {
    typingsFormat: {
      // Use DeepPartial type
      useDeepPartial: true,
      // Use Exact type
      useExact: false,
      // Use bigint for int64
      num64: 'bigint'
    }
  },
  // Remove unused imports
  removeUnusedImports: true,
  // Use arrow functions in classes
  classesUseArrowFunctions: true
}
```

## Disabling TypeScript and ESLint Checks

For some auto-generated files, you might want to disable TypeScript checking or ESLint:

```js
options: {
  tsDisable: {
    // Disable TypeScript checking on all files
    disableAll: false,
    // Disable on matched patterns
    patterns: ['**/amino/**']
  },
  eslintDisable: {
    // Disable ESLint on matched files
    files: ['**/tx.amino.ts']
  }
}
```

## Advanced Example: Complete Configuration

Here's a more complete configuration example combining various options:

```js
telescope({
  protoDirs: [join(__dirname, '/proto')],
  outPath: join(__dirname, '/src/generated'),
  options: {
    aminoEncoding: {
      enabled: true,
      exceptions: {
        '/cosmos.gov.v1beta1.MsgSubmitProposal': 'cosmos-sdk/MsgSubmitProposal'
      }
    },
    interfaces: {
      enabled: true,
      useGlobalDecoderRegistry: true
    },
    prototypes: {
      includePackageVar: true,
      fieldDefaultIsOptional: true,
      methods: {
        encode: true,
        decode: true,
        fromJSON: true,
        toJSON: true,
        fromPartial: true
      },
      typingsFormat: {
        useDeepPartial: true,
        timestamp: 'date',
        duration: 'duration',
        num64: 'bigint'
      }
    },
    lcdClients: {
      enabled: true,
      bundle: true
    },
    rpcClients: {
      enabled: true,
      type: 'tendermint',
      camelCase: true
    },
    reactQuery: {
      enabled: true,
      include: {
        packages: ['cosmos.bank.v1beta1', 'cosmos.staking.v1beta1']
      }
    },
    helperFunctions: {
      enabled: true,
      hooks: {
        react: true
      },
      include: {
        patterns: ['cosmos.bank.v1beta1.*']
      }
    },
    tsDisable: {
      patterns: ['**/amino/**']
    },
    removeUnusedImports: true
  }
});
```

## Choosing Configuration Based on Project Type

Different types of projects may require different configurations. Here are some recommended configuration combinations:

### Developing a Wallet or dApp Interface

```js
options: {
  aminoEncoding: { enabled: true },
  interfaces: { useGlobalDecoderRegistry: true },
  stargateClients: { enabled: true },
  reactQuery: { enabled: true }
}
```

### Developing a Blockchain Explorer

```js
options: {
  lcdClients: { enabled: true },
  rpcClients: { enabled: true, type: 'tendermint' },
  prototypes: {
    typingsFormat: {
      timestamp: 'date'
    }
  }
}
```

### Creating an On-chain Indexer or Analytics Tool

```js
options: {
  rpcClients: { enabled: true, type: 'gRPC' },
  prototypes: {
    methods: {
      fromSDK: true,
      toSDK: true
    }
  }
}
```

## Summary

Through this tutorial, you've learned about Telescope's main configuration options and how to customize them according to your project's requirements. Properly configuring these options can greatly enhance your development efficiency and generate TypeScript code that better meets your needs.

In the next tutorial, we'll explore how to use the generated types and clients to build actual applications.

## Further Learning

- Check out the [Types documentation](./types.md) to learn how to use the generated types
- Explore the [Stargate Clients documentation](./stargate-clients.md) to learn how to use the generated clients
- Read the [Composing Messages documentation](./composing-messages.md) to learn how to create and send transactions 