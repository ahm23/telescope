# Programatic Usage

This guide explains how to use Telescope programmatically in your project to generate TypeScript code from Protobuf definitions.

## Installation

Add Telescope to your development dependencies:

```sh
yarn add --dev @cosmology/telescope
```

Install required dependencies:

```sh
yarn add @cosmjs/amino @cosmjs/proto-signing @cosmjs/stargate @cosmjs/tendermint-rpc
```

## Basic Usage

Import Telescope and configure it in your build script:

```js
import { join } from 'path';
import telescope from '@cosmology/telescope';
import { sync as rimraf } from 'rimraf';

// Define input and output paths
const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src');
rimraf(outPath);

// Run Telescope with options
telescope({
  protoDirs,
  outPath,
  options: {
    // Your configuration options here
  }
}).then(() => {
  console.log('✨ all done!');
}).catch(e => {
  console.error(e);
  process.exit(1);
});
```

## Configuration Options

Telescope accepts configuration options to customize the generated code:

```js
telescope({
  protoDirs,
  outPath,
  options: {
    aminoEncoding: {
      enabled: true
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
});
```

## Package-Specific Options

You can scope options to specific packages:

```js
telescope({
  protoDirs,
  outPath,
  options: {
    packages: {
      nebula: {
        prototypes: {
          typingsFormat: {
            useExact: false
          }
        }
      },
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

## Integration Examples

### Example: Build Script

```js
// scripts/codegen.js
import { join } from 'path';
import telescope from '@cosmology/telescope';
import { sync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/generated');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    tsDisable: {
      disableAll: false,
      patterns: ['**/amino/**']
    },
    eslintDisable: {
      patterns: ['**/tx.amino.ts']
    },
    prototypes: {
      includePackageVar: true,
      typingsFormat: {
        useDeepPartial: true,
        timestamp: 'date',
        duration: 'duration'
      }
    }
  }
}).then(() => {
  console.log('✨ Code generation complete');
}); 