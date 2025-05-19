# Programmatic Usage Guide

In this tutorial, we'll learn how to integrate Telescope into your own build process using its JavaScript API. This approach gives you more flexibility and control over the code generation process compared to using the CLI tools.

## Understanding Programmatic Usage

While Telescope's CLI tools are convenient for quick setups, the programmatic approach allows you to:

- Integrate code generation into your existing build pipeline
- Customize the generation process with fine-grained options
- Generate code on-demand as part of your CI/CD workflow
- Apply different options for different parts of your project

## Setting Up Your Project

First, let's add Telescope and its dependencies to your project. Open your terminal and navigate to your project directory:

```sh
# Add Telescope as a development dependency
yarn add --dev @cosmology/telescope

# Add required CosmJS dependencies
yarn add @cosmjs/amino @cosmjs/proto-signing @cosmjs/stargate @cosmjs/tendermint-rpc
```

If you'll be using LCD clients, you'll also need:

```sh
yarn add @cosmology/lcd
```

## Creating a Build Script

Now, let's create a build script that will use Telescope to generate TypeScript code from your Protobuf definitions. Create a new file called `codegen.js` (or `codegen.mjs` if you're using ECMAScript modules) in your project:

```js
import { join } from 'path';
import telescope from '@cosmology/telescope';
import { sync as rimraf } from 'rimraf';

// Define the paths to your proto files and output directory
const protoDirs = [join(__dirname, '/proto')];
const outPath = join(__dirname, '/src/generated');

// Clear the output directory before generation
rimraf(outPath);

// Run Telescope with your desired options
telescope({
  protoDirs,
  outPath,
  options: {
    // We'll configure these options in the next section
  }
}).then(() => {
  console.log('✨ Code generation complete!');
}).catch(e => {
  console.error('Error generating code:', e);
  process.exit(1);
});
```

## Configuring Telescope Options

The real power of programmatic usage comes from the ability to configure Telescope with various options. Let's explore some common configurations:

### Basic Configuration

```js
telescope({
  protoDirs,
  outPath,
  options: {
    // Enable Amino encoding for compatibility with older clients
    aminoEncoding: {
      enabled: true
    },
    
    // Generate LCD clients for REST API interaction
    lcdClients: {
      enabled: true
    },
    
    // Generate RPC clients with camelCase method names
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
});
```

### Advanced Configuration for Different Packages

Sometimes you need different options for different packages in your project:

```js
telescope({
  protoDirs,
  outPath,
  options: {
    // Global options applied to all packages
    aminoEncoding: {
      enabled: true
    },
    
    // Package-specific options
    packages: {
      // Options for the 'nebula' package
      nebula: {
        prototypes: {
          typingsFormat: {
            useExact: false
          }
        }
      },
      
      // Options for the 'akash' package
      akash: {
        stargateClients: {
          enabled: true,
          includeCosmosDefaultTypes: false
        },
        prototypes: {
          typingsFormat: {
            useExact: false
          }
        }
      }
    }
  }
});
```

## Integrating with Your Build Process

To integrate your code generation script with your build process, you can add it as a script in your `package.json`:

```json
{
  "scripts": {
    "codegen": "node codegen.js",
    "prebuild": "npm run codegen",
    "build": "tsc"
  }
}
```

Now, whenever you run `npm run build`, your Telescope code generation will run first, followed by the TypeScript compilation.

## Handling Protobuf Updates

When your Protobuf definitions are updated, you'll need to regenerate your TypeScript code. If you're working with a Cosmos SDK chain that's actively developing, you might want to set up a way to automatically pull the latest Protobuf definitions.

Here's an example of how you might extend your script to download the latest Protobufs:

```js
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Ensure the proto directory exists
const protoDir = path.join(__dirname, '/proto');
if (!fs.existsSync(protoDir)) {
  fs.mkdirSync(protoDir, { recursive: true });
}

// Clone or update the Protobuf repository
try {
  if (fs.existsSync(path.join(protoDir, '.git'))) {
    console.log('Updating Protobuf repository...');
    execSync('git pull', { cwd: protoDir, stdio: 'inherit' });
  } else {
    console.log('Cloning Protobuf repository...');
    execSync(`git clone https://github.com/cosmos/cosmos-sdk.git ${protoDir}`, { stdio: 'inherit' });
  }
} catch (error) {
  console.error('Error updating Protobuf files:', error);
  process.exit(1);
}

// Then proceed with Telescope code generation...
```

## Real-World Example

Let's put everything together in a complete example that you might use in a production environment:

```js
import { join } from 'path';
import telescope from '@cosmology/telescope';
import { sync as rimraf } from 'rimraf';

async function generateCode() {
  const protoDirs = [join(__dirname, '/proto')];
  const outPath = join(__dirname, '/src/generated');
  
  // Ensure clean output directory
  rimraf(outPath);
  
  try {
    await telescope({
      protoDirs,
      outPath,
      options: {
        // Amino encoding options
        aminoEncoding: {
          enabled: true,
          exceptions: {
            // Custom amino type names for specific messages
            '/cosmos.gov.v1beta1.MsgSubmitProposal': 'cosmos-sdk/MsgSubmitProposal'
          }
        },
        
        // Client generation options
        lcdClients: {
          enabled: true,
          bundle: true
        },
        rpcClients: {
          enabled: true,
          camelCase: true,
          type: 'tendermint'
        },
        
        // Typescript formatting options
        prototypes: {
          includePackageVar: true,
          fieldDefaultIsOptional: true,
          typingsFormat: {
            useDeepPartial: true,
            useExact: false,
            timestamp: 'date',
            duration: 'duration'
          }
        },
        
        // Add React Query hooks for specific modules
        reactQuery: {
          enabled: true,
          include: {
            patterns: ['cosmos.bank.v1beta1.*', 'cosmos.staking.v1beta1.*']
          }
        },
        
        // Ensure clean code output
        eslintDisable: {
          patterns: ['**/tx.amino.ts']
        },
        removeUnusedImports: true
      }
    });
    
    console.log('✨ Code generation complete!');
  } catch (error) {
    console.error('Error generating code:', error);
    process.exit(1);
  }
}

generateCode();
```

## Conclusion

Using Telescope programmatically provides a powerful way to integrate Cosmos SDK type generation into your project's build process. With the flexibility of configuration options, you can tailor the generated code to your specific needs.

In the next tutorial, we'll explore the various configuration options in depth to help you understand how each one affects the generated code.

## Next Steps

Now that you understand how to use Telescope programmatically, you might want to:

1. Learn about the [Configuration Options](./options.md) in detail
2. Explore how to work with [Types](./types.md) in the generated code
3. See how to create and use [Stargate Clients](./stargate-clients.md) 