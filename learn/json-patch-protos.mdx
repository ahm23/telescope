# Modifying Protos with JSON Patch

In this tutorial, we'll explore how to use Telescope's JSON Patch Protos feature to modify protocol buffer definitions without changing the original files. This powerful capability allows you to customize generated code while keeping your proto files untouched.

## Understanding the Problem

When working with Cosmos SDK blockchains, you'll often encounter situations where:

1. You need to customize the generated TypeScript code
2. The upstream proto files can't be modified because they're maintained by others
3. You're waiting for a pull request to be merged
4. You need to work around issues in the proto definitions

Instead of forking and maintaining your own version of the proto files, Telescope provides a solution: JSON Patch Protos.

## What is JSON Patch?

JSON Patch is a format for describing changes to a JSON document. It consists of operations like "add", "replace", and "remove" that can transform one JSON document into another. Telescope uses this approach to modify proto definitions during code generation.

## Setting Up Your Project

First, let's set up a project with Telescope. If you haven't already done so, create a new Telescope project:

```bash
# Install telescope globally if needed
npm install -g @cosmology/telescope

# Create a new project
mkdir my-patched-protos
cd my-patched-protos
npm init -y
npm install --save-dev @cosmology/telescope
```

Next, create a basic Telescope configuration file (telescope.config.js):

```javascript
const { join } = require('path');

module.exports = {
  protoDirs: [join(__dirname, './proto')],
  outPath: join(__dirname, './src/generated'),
  options: {
    // We'll add our patches here
  }
};
```

## Your First Patch: Customizing an Enum

Let's say you're working with the CosmWasm module, and you want to customize the `AccessType` enum to have more descriptive names for better developer experience.

First, examine the original proto definition (which you can't modify directly):

```protobuf
// File: cosmwasm/wasm/v1/types.proto
enum AccessType {
  // ACCESS_TYPE_UNSPECIFIED placeholder for empty value
  ACCESS_TYPE_UNSPECIFIED = 0 [(gogoproto.enumvalue_customname) = "Unspecified"];
  // ACCESS_TYPE_NOBODY nobody can execute this contract
  ACCESS_TYPE_NOBODY = 1 [(gogoproto.enumvalue_customname) = "Nobody"];
  // ACCESS_TYPE_ONLY_ADDRESS only a specific address can execute this contract
  ACCESS_TYPE_ONLY_ADDRESS = 2 [(gogoproto.enumvalue_customname) = "OnlyAddress"];
  // ACCESS_TYPE_EVERYBODY everybody can execute this contract
  ACCESS_TYPE_EVERYBODY = 3 [(gogoproto.enumvalue_customname) = "Everybody"];
}
```

Now, let's modify this enum using JSON Patch by updating our Telescope configuration:

```javascript
module.exports = {
  protoDirs: [join(__dirname, './proto')],
  outPath: join(__dirname, './src/generated'),
  options: {
    prototypes: {
      patch: {
        "cosmwasm/wasm/v1/types.proto": [
          {
            // Replace the custom name for the UNSPECIFIED value
            op: "replace",
            path: "@/AccessType/valuesOptions/ACCESS_TYPE_UNSPECIFIED/(gogoproto.enumvalue_customname)",
            value: "UnspecifiedAccess"
          },
          {
            // Replace the custom name for the NOBODY value
            op: "replace",
            path: "@/AccessType/valuesOptions/ACCESS_TYPE_NOBODY/(gogoproto.enumvalue_customname)",
            value: "NobodyAccess"
          },
          {
            // Add a completely new enum value
            op: "add",
            path: "@/AccessType/values/ACCESS_TYPE_SUPER_ADMIN",
            value: 4
          },
          {
            // Add custom name for the new enum value
            op: "add",
            path: "@/AccessType/valuesOptions/ACCESS_TYPE_SUPER_ADMIN",
            value: {
              "(gogoproto.enumvalue_customname)": "SuperAdminAccess"
            }
          }
        ]
      }
    }
  }
};
```

In this configuration:

1. We're replacing the custom names for existing enum values
2. We're adding a completely new enum value with ID 4
3. We're adding a custom name for our new enum value

After running Telescope code generation, the TypeScript code will include our customized enum with more descriptive names and the additional SuperAdminAccess type.

## Understanding Path Syntax

The path in each patch operation points to the target location in the proto definition. Telescope supports two path formats:

1. **Absolute paths**: Direct JSON paths to the field
2. **Package-derived paths**: Paths prefixed with `@` that are derived from the package name

For example, in the path `@/AccessType/valuesOptions/ACCESS_TYPE_UNSPECIFIED/(gogoproto.enumvalue_customname)`:

- `@` indicates this is a package-derived path
- `/AccessType` targets the AccessType enum
- `/valuesOptions/ACCESS_TYPE_UNSPECIFIED` targets the options for the UNSPECIFIED value
- `/(gogoproto.enumvalue_customname)` targets the specific option to replace

## Adding Fields to Messages

Beyond modifying enums, you can also add or modify fields in message types. Let's see how to add a new field to a message:

```javascript
"cosmwasm/wasm/v1/types.proto": [
  {
    // Add a new field to the Contract message
    op: "add",
    path: "@/Contract/fields/admin",
    value: {
      rule: "optional",
      type: "string",
      name: "admin",
      id: 3,  // Choose an unused field number
      options: {
        "(gogoproto.moretags)": "yaml:\"admin\""
      }
    }
  }
]
```

This adds a new `admin` field to the `Contract` message, which will be included in the generated TypeScript code.

## Real-World Example: Fixing a Proto Definition

Let's look at a more practical example. Imagine you're working with a chain that has a proto definition with an issue - a field that should be an array but isn't defined correctly:

Original problematic proto:
```protobuf
message Validator {
  string address = 1;
  int64 voting_power = 2;
  string public_key = 3; // Should be bytes, not string
}
```

You could fix this with a patch:

```javascript
"cosmos/base/tendermint/v1beta1/query.proto": [
  {
    // Change the field type from string to bytes
    op: "replace",
    path: "@/Validator/fields/public_key/type",
    value: "bytes"
  },
  {
    // Add additional options for proper handling
    op: "add",
    path: "@/Validator/fields/public_key/options",
    value: {
      "(gogoproto.casttype)": "github.com/tendermint/tendermint/crypto/crypto.PubKey"
    }
  }
]
```

## Creating Complex Patches

For more complex modifications, you can combine multiple operations. Let's say you want to modify a message, its fields, and add a new enum all at once:

```javascript
"mychain/custom/v1/types.proto": [
  // Add a new message
  {
    op: "add",
    path: "@/messages/CustomSettings",
    value: {
      name: "CustomSettings",
      fields: {},
      reserved: [],
      extensions: []
    }
  },
  
  // Add fields to the new message
  {
    op: "add",
    path: "@/CustomSettings/fields/enabled",
    value: {
      rule: "optional",
      type: "bool",
      name: "enabled",
      id: 1
    }
  },
  {
    op: "add",
    path: "@/CustomSettings/fields/mode",
    value: {
      rule: "optional",
      type: "SettingsMode",
      name: "mode",
      id: 2
    }
  },
  
  // Add a new enum for the message
  {
    op: "add",
    path: "@/enums/SettingsMode",
    value: {
      name: "SettingsMode",
      values: {
        "SETTINGS_MODE_UNSPECIFIED": 0,
        "SETTINGS_MODE_BASIC": 1,
        "SETTINGS_MODE_ADVANCED": 2
      },
      valuesOptions: {
        "SETTINGS_MODE_UNSPECIFIED": {
          "(gogoproto.enumvalue_customname)": "Unspecified"
        },
        "SETTINGS_MODE_BASIC": {
          "(gogoproto.enumvalue_customname)": "Basic"
        },
        "SETTINGS_MODE_ADVANCED": {
          "(gogoproto.enumvalue_customname)": "Advanced"
        }
      }
    }
  }
]
```

## Best Practices

When using JSON Patch Protos, follow these best practices:

### 1. Document Your Patches

Always add comments explaining why each patch exists:

```javascript
"cosmwasm/wasm/v1/types.proto": [
  {
    // PATCH REASON: Better naming for UI display purposes
    op: "replace",
    path: "@/AccessType/valuesOptions/ACCESS_TYPE_UNSPECIFIED/(gogoproto.enumvalue_customname)",
    value: "UnspecifiedAccess"
  }
]
```

### 2. Keep Patches Minimal

Only modify what's necessary. Extensive changes make your code harder to maintain when the upstream protos change.

### 3. Review Regularly

Revisit your patches after upgrading dependencies to see if they're still needed.

### 4. Test Thoroughly

After applying patches, test the generated code to ensure it works as expected:

```typescript
// Test that your patched enum has the expected values
import { AccessType } from './generated/cosmwasm/wasm/v1/types';

console.log(AccessType.UnspecifiedAccess); // Should be 0
console.log(AccessType.NobodyAccess); // Should be 1
console.log(AccessType.SuperAdminAccess); // Should be 4
```

### 5. Consider Upstreaming Changes

If your patches solve a common problem, consider submitting a pull request to the original repository.

## Limitations to Be Aware Of

While JSON Patch Protos is powerful, it has some limitations:

1. **Complex Nested Structures**: Some deeply nested or complex proto structures may be difficult to modify.

2. **Proto Validation**: Telescope doesn't validate that your patched proto definitions conform to the protobuf specification.

3. **Changes to Original Structure**: If the original proto files change significantly, your patches may break and need to be updated.

## Troubleshooting

If your patches aren't working as expected, try these troubleshooting steps:

1. **Verify Proto Structure**: Use Telescope's debugging features to output the parsed proto structure and check that your paths match:

```javascript
options: {
  debug: {
    printProtoAST: true // Add this to see the full proto structure
  },
  prototypes: {
    patch: { /* your patches */ }
  }
}
```

2. **Start Simple**: If you're having trouble with complex patches, start with a simple patch and gradually add complexity.

3. **Check Path Syntax**: Ensure your paths correctly target the fields you want to modify.

## Conclusion

JSON Patch Protos is a powerful feature that allows you to modify proto definitions without changing the original files. This can be particularly useful when:

- You're waiting for upstream changes to be merged
- You need to adapt proto definitions to your specific needs
- You want to add custom fields or modify behavior without forking

By using patches judiciously and following best practices, you can customize your generated code while maintaining compatibility with the original proto files.

In the next tutorial, we'll explore [CosmWasm Integration](./cosmwasm.md) to see how Telescope can generate TypeScript SDKs for your CosmWasm smart contracts. 