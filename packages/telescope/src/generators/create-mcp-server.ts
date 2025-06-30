import { TelescopeBuilder } from '../builder';
import { Bundler } from '../bundler';
import { writeFileSync, mkdirSync, cpSync, existsSync } from 'fs';
import { join, dirname, basename } from 'path';

export const plugin = (
  builder: TelescopeBuilder,
  bundler: Bundler
) => {
  // Early return if MCP server is not enabled
  if (!builder.options.mcpServer?.enabled) {
    return;
  }

  // Use the output directory name instead of bundle base
  const outputDirName = basename(builder.outPath);
  const packageName = outputDirName || bundler.bundle.base;
  const parentDir = dirname(builder.outPath);
  const mcpServerPath = join(parentDir, `${packageName}-mcp`);

  // Ensure MCP server directory exists
  mkdirSync(mcpServerPath, { recursive: true });
  mkdirSync(join(mcpServerPath, 'src'), { recursive: true });
  mkdirSync(join(mcpServerPath, 'src', 'prompts'), { recursive: true });
  mkdirSync(join(mcpServerPath, 'src', 'telescope-examples'), { recursive: true });

  // Generate package.json for MCP server
  const packageJson = generateMcpPackageJson(packageName);
  writeFileSync(
    join(mcpServerPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  // Generate main MCP server file
  const indexContent = `#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

// Get package.json version
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJson = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf8'));
const VERSION = packageJson.version;

async function main() {
  const server = new McpServer({
    name: '${packageName} MCP Server',
    version: VERSION,
  });

  // Add prompts for AI agents
  server.prompt(
    'codegen-usage',
    'Guide for using telescope generated code',
    async () => {
      const promptPath = resolve(__dirname, 'prompts/codegen-usage.md');
      const content = readFileSync(promptPath, 'utf-8');
      return {
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: content
          }
        }]
      };
    }
  );

  server.prompt(
    'agent-guidelines', 
    'Guidelines for MCP agents using ${packageName}',
    async () => {
      const promptPath = resolve(__dirname, 'prompts/agent-guidelines.md');
      const content = readFileSync(promptPath, 'utf-8');
      return {
        messages: [{
          role: 'user',
          content: {
            type: 'text',  
            text: content
          }
        }]
      };
    }
  );

  // Register blockchain function generator tool
  server.tool(
    'create-blockchain-function',
    'Create custom blockchain functions by referencing telescope examples and generated code',
    {
      task: z.string().describe('The blockchain task to implement (e.g., "get balance", "check staking rewards", "query validators")').optional(),
      chainName: z.string().describe('The blockchain name (e.g., cosmos, osmosis, injective)').optional(),
      functionType: z.enum(['query', 'transaction', 'react-hook', 'utility']).describe('Type of function to create').optional(),
      customRequirements: z.string().describe('Any specific requirements or modifications needed').optional()
    },
    async (args) => {
      try {
        const { task = 'get account balance', chainName = 'cosmos', functionType = 'query', customRequirements } = args;
        
        // Read available examples
        const examplesPath = resolve(__dirname, 'telescope-examples');
        let availableExamples: string[] = [];
        
        try {
          const fs = await import('fs');
          availableExamples = fs.readdirSync(examplesPath)
            .filter(file => file.endsWith('.ts'))
            .map(file => file.replace('.ts', ''));
        } catch (error) {
          // If examples directory doesn't exist, provide default list
          availableExamples = [
            'config-example', 'useBalance', 'useBalanceFunc', 'getBalance',
            'useAssets', 'useStakingData', 'useValidators', 'useVoting',
            'useVotingData', 'useContractInfo', 'useQueryContract',
            'useCodeDetails', 'useMyContracts', 'useGrants', 'useSendData',
            'useTotalAssets', 'useBalanceReact'
          ];
        }
        
        const examplesList = availableExamples.map(example => \`- **\${example}.ts**: Reference implementation\`).join('\\n');
        
        const relevantExamples = getRelevantExamples(task, availableExamples)
          .map(example => \`- **\${example}**: \${getExampleDescription(example)}\`)
          .join('\\n');

        const codeBlockStart = '\`\`\`';
        const codeBlockEnd = '\`\`\`';
        
        const response = [
          '# Blockchain Function Generator',
          '',
          \`## Task: \${task}\`,
          \`## Chain: \${chainName}\`,
          \`## Function Type: \${functionType}\`,
          customRequirements ? \`## Custom Requirements: \${customRequirements}\` : '',
          '',
          '## Instructions for Implementation',
          '',
          '### Step 1: Review Available Examples',
          'The following example files are available in \`src/telescope-examples/\`:',
          '',
          examplesList,
          '',
          '### Step 2: Identify Relevant Examples',
          \`Based on your task "\${task}", you should primarily reference:\`,
          '',
          relevantExamples,
          '',
          '### Step 3: Implementation Pattern',
          '',
          \`**For Query Functions (\${functionType === 'query' ? 'SELECTED' : 'Available'}):**\`,
          \`\${codeBlockStart}typescript\`,
          "import { getBalance } from '${packageName}/cosmos/bank/v1beta1/query.rpc.func';",
          '',
          'export const customQueryFunction = async (params: QueryParams) => {',
          \`  const rpcEndpoint = 'https://\${chainName}-rpc.quickapi.com:443';\`,
          '  ',
          '  try {',
          '    const result = await getBalance(rpcEndpoint, params);',
          '    return {',
          '      success: true,',
          '      data: result,',
          '    };',
          '  } catch (error) {',
          '    return {',
          '      success: false,',
          '      error: (error as Error).message,',
          '    };',
          '  }',
          '};',
          codeBlockEnd,
          '',
          \`**For React Hooks (\${functionType === 'react-hook' ? 'SELECTED' : 'Available'}):**\`,
          \`\${codeBlockStart}typescript\`,
          "import { useGetBalance } from '${packageName}/cosmos/bank/v1beta1/query.rpc.react';",
          "import { defaultContext } from '@tanstack/react-query';",
          '',
          'export const useCustomHook = (params: HookParams) => {',
          \`  const rpcEndpoint = 'https://\${chainName}-rpc.quickapi.com:443';\`,
          '  ',
          '  return useGetBalance({',
          '    request: params,',
          '    options: {',
          '      enabled: !!params.address,',
          '      context: defaultContext,',
          '    },',
          '    clientResolver: rpcEndpoint,',
          '  });',
          '};',
          codeBlockEnd,
          '',
          '### Step 4: Configuration Setup',
          'Always include proper chain configuration. Reference \`config-example.ts\`:',
          '',
          \`\${codeBlockStart}typescript\`,
          'import { assetLists, chains } from "@chain-registry/v2";',
          '',
          \`export const targetChainName = '\${chainName}';\`,
          \`export const rpcEndpoint = 'https://\${chainName}-rpc.quickapi.com:443';\`,
          'export const chain = chains.find((chain) => chain.chainName === targetChainName);',
          'export const assetList = assetLists.find((assetList) => assetList.chainName === targetChainName);',
          codeBlockEnd,
          '',
          '### Step 5: Error Handling & Best Practices',
          '- Always wrap async calls in try-catch blocks',
          '- Validate input parameters before making requests',
          '- Handle network timeouts and connection errors',
          '- Convert base units to human-readable amounts (uatom → ATOM)',
          '- Include proper TypeScript types',
          '',
          '### Step 6: Testing Your Function',
          \`\${codeBlockStart}typescript\`,
          '// Example usage',
          'const result = await customQueryFunction({',
          "  address: 'cosmos1...',",
          "  denom: 'uatom'",
          '});',
          '',
          'if (result.success) {',
          "  console.log('Result:', result.data);",
          '} else {',
          "  console.error('Error:', result.error);",
          '}',
          codeBlockEnd,
          '',
          '## Additional Resources',
          '',
          '- **Full codebase reference**: \`src/telescope/\` directory contains all generated types and functions',
          '- **Configuration examples**: \`src/telescope-examples/config-example.ts\`',
          '- **Chain registry data**: \`src/prompts/chains.json\`',
          '- **Usage guidelines**: Use the \`codegen-usage\` and \`agent-guidelines\` prompts for detailed instructions',
          '',
          '## Next Steps',
          '',
          '1. Review the suggested example files above',
          '2. Copy and modify the relevant pattern for your use case',
          '3. Test your implementation with proper error handling',
          '4. Ensure proper TypeScript types are used',
          '',
          'The examples in \`telescope-examples/\` are production-ready patterns that you can adapt for any blockchain task.'
        ].filter(line => line !== '').join('\\n');

        return {
          content: [{
            type: "text",
            text: response
          }]
        };
        
      } catch (error) {
        return {
          content: [{
            type: "text", 
            text: \`Error generating blockchain function guidance: \${(error as Error).message}\`
          }]
        };
      }
    }
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log('${packageName} MCP server started on stdio');
}

// Helper functions for example recommendations
function getRelevantExamples(task: string, availableExamples: string[]): string[] {
  const taskLower = task.toLowerCase();
  const relevantExamples: string[] = [];
  
  // Balance-related tasks
  if (taskLower.includes('balance')) {
    relevantExamples.push('useBalance', 'useBalanceFunc', 'getBalance');
    if (taskLower.includes('react')) {
      relevantExamples.push('useBalanceReact');
    }
  }
  
  // Staking-related tasks  
  if (taskLower.includes('staking') || taskLower.includes('delegate') || taskLower.includes('validator')) {
    relevantExamples.push('useStakingData', 'useValidators');
  }
  
  // Governance/voting tasks
  if (taskLower.includes('voting') || taskLower.includes('proposal') || taskLower.includes('governance')) {
    relevantExamples.push('useVoting', 'useVotingData');
  }
  
  // Assets/portfolio tasks
  if (taskLower.includes('asset') || taskLower.includes('portfolio') || taskLower.includes('total')) {
    relevantExamples.push('useAssets', 'useTotalAssets');
  }
  
  // Contract-related tasks
  if (taskLower.includes('contract') || taskLower.includes('cosmwasm')) {
    relevantExamples.push('useContractInfo', 'useQueryContract', 'useCodeDetails', 'useMyContracts');
  }
  
  // Transaction/sending tasks
  if (taskLower.includes('send') || taskLower.includes('transaction') || taskLower.includes('transfer')) {
    relevantExamples.push('useSendData', 'getBalance');
  }
  
  // Authorization tasks
  if (taskLower.includes('grant') || taskLower.includes('authorization') || taskLower.includes('authz')) {
    relevantExamples.push('useGrants');
  }
  
  // Always include config as it's fundamental
  relevantExamples.unshift('config-example');
  
  // Remove duplicates and ensure examples exist
  return [...new Set(relevantExamples)].filter(example => 
    availableExamples.includes(example)
  );
}

function getExampleDescription(example: string): string {
  const descriptions: Record<string, string> = {
    'config-example': 'Chain configuration and RPC endpoints setup',
    'useBalance': 'React hook for querying account balance',
    'useBalanceFunc': 'Direct function for balance queries',
    'useBalanceReact': 'React hook with BigNumber for balance queries',
    'getBalance': 'Basic balance query with transaction examples',
    'useAssets': 'Query all token balances for an account',
    'useStakingData': 'Comprehensive staking information (delegations, rewards, validators)',
    'useValidators': 'Query active validators with sorting',
    'useVoting': 'Active governance proposals in voting period',
    'useVotingData': 'All governance proposals with categorization',
    'useContractInfo': 'Smart contract information queries',
    'useQueryContract': 'Execute smart contract queries',
    'useCodeDetails': 'Contract code information and metadata',
    'useMyContracts': 'Contracts created by specific address',
    'useGrants': 'Authorization grants (granter/grantee)',
    'useSendData': 'Prepare transaction data for token transfers',
    'useTotalAssets': 'Portfolio summary with total asset calculations'
  };
  
  return descriptions[example] || 'Blockchain utility function';
}

main().catch((error) => {
  console.error('Fatal error in main()', error);
  process.exit(1);
});
`;

  writeFileSync(
    join(mcpServerPath, 'src', 'index.ts'),
    indexContent
  );

  // Generate telescope loader utility
  const telescopeLoaderCode = generateTelescopeLoader(packageName);
  writeFileSync(
    join(mcpServerPath, 'src', 'telescope-loader.ts'),
    telescopeLoaderCode
  );

  // Generate TypeScript configuration
  const tsConfig = generateTsConfig();
  writeFileSync(
    join(mcpServerPath, 'tsconfig.json'),
    JSON.stringify(tsConfig, null, 2)
  );

  // Generate README
  const readme = generateReadme(packageName);
  writeFileSync(
    join(mcpServerPath, 'README.md'),
    readme
  );

  // Generate comprehensive prompts and guidelines
  generateComprehensivePrompts(mcpServerPath, packageName);

  // Generate telescope examples
  generateTelescopeExamples(mcpServerPath, packageName);

  // Copy entire telescope generated codebase for AI reference (excluded from build)
  copyTelescopeCodebase(builder, mcpServerPath, packageName);
};

function generateMcpPackageJson(packageName: string) {

  return {
    name: `@${packageName}/mcp-server`,
    version: "0.1.0",
    description: `MCP server for ${packageName} blockchain interactions`,
    main: "dist/index.js",
    type: "module",
    bin: {
      [`@${packageName}/mcp-server`]: "./dist/index.js"
    },
    scripts: {
      build: "rimraf dist && tsc",
      clean: "rimraf dist",
      test: "vitest",
      inspector: "npm run build && npm exec @modelcontextprotocol/inspector node dist/index.js",
      format: "biome check --write",
      lint: "biome check"
    },
    dependencies: {
      "@modelcontextprotocol/sdk": "^1.7.0",
      "zod": "^3.24.2"
    },
    devDependencies: {
      "@biomejs/biome": "1.9.4",
      "@types/node": "^22.13.10",
      "rimraf": "^6.0.1",
      "typescript": "^5.8.2",
      "vitest": "^3.1.1"
    },
    files: ["dist"],
    publishConfig: {
      access: "public"
    }
  };
}

function generateMcpServerCode(builder: TelescopeBuilder, bundler: Bundler) {
  const outputDirName = basename(builder.outPath);
  const packageName = outputDirName || bundler.bundle.base;

  return `#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

// NOTE: Tool imports are commented out since they are excluded from build
// Uncomment and modify these imports if you want to include tools in your build
/*
import { getBalanceTool } from './tools/getBalance.js';
import { getBalanceReactTool } from './tools/useBalance.js';
*/

// Get package.json version
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJson = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf8'));
const VERSION = packageJson.version;

async function main() {
  const server = new McpServer({
    name: '${packageName} MCP Server',
    version: VERSION,
  });

  // Add prompts for AI agents
  server.prompt(
    'codegen-usage',
    'Guide for using telescope generated code',
    async () => {
      const promptPath = resolve(__dirname, 'prompts/codegen-usage.md');
      const content = readFileSync(promptPath, 'utf-8');
      return {
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: content
          }
        }]
      };
    }
  );

  server.prompt(
    'agent-guidelines', 
    'Guidelines for MCP agents using ${packageName}',
    async () => {
      const promptPath = resolve(__dirname, 'prompts/agent-guidelines.md');
      const content = readFileSync(promptPath, 'utf-8');
      return {
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: content
          }
        }]
      };
    }
  );

  // NOTE: Tool registrations are commented out since tool functions are not imported
  // Uncomment and modify these registrations if you want to include tools in your build
  /*
  // Register tools
  server.tool('get-balance', 'Get account balance for a specific token', {
    address: z.string().describe('The account address'),
    chainName: z.string().describe('The blockchain name (e.g., cosmos, osmosis)').optional(),
    denom: z.string().describe('The token denomination (e.g., uatom, uosmo)').optional()
  }, getBalanceTool);

  server.tool('get-balance-react', 'Get balance using React hook pattern', {
    address: z.string().describe('The account address'),
    chainName: z.string().describe('The blockchain name').optional(),
    displayDenom: z.string().describe('The display denomination').optional()
  }, getBalanceReactTool);
  */

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log('${packageName} MCP server started on stdio');
}

main().catch((error) => {
  console.error('Fatal error in main()', error);
  process.exit(1);
});
`;
}

function generateTsConfig() {
  return {
    compilerOptions: {
      target: "ES2022",
      module: "ESNext",
      moduleResolution: "node",
      outDir: "./dist",
      rootDir: "./src",
      strict: true,
      esModuleInterop: true,
      skipLibCheck: true,
      forceConsistentCasingInFileNames: true,
      declaration: true,
      declarationMap: true,
      sourceMap: true,
      allowSyntheticDefaultImports: true,
      resolveJsonModule: true
    },
    include: ["src/**/*"],
    exclude: ["node_modules", "dist", "src/telescope/**/*", "src/telescope-examples/**/*"]
  };
}

function generateReadme(packageName: string) {

  return `# ${packageName.charAt(0).toUpperCase() + packageName.slice(1)} MCP Server

This MCP server provides AI agents with tools to interact with blockchain through generated TypeScript clients.

**Note**: This MCP server contains a complete copy of the telescope generated codebase in \`src/telescope/\` for AI agents to reference, but uses mock implementations for demonstration. The telescope code is excluded from the build process.

## Installation

\`\`\`bash
cd ${packageName}-mcp
npm install
npm run build
\`\`\`

## Usage with AI Agents

Add this configuration to your AI agent's MCP settings:

\`\`\`json
{
  "mcpServers": {
    "${packageName}-mcp-server": {
      "command": "node",
      "args": ["/path/to/${packageName}-mcp/dist/index.js"]
    }
  }
}
\`\`\`

## Available Features

This MCP server provides:

- **Comprehensive Examples**: Reference implementations in \`src/telescope-examples/\`
- **Function Generator Tool**: AI-powered tool that creates custom blockchain functions based on user requirements
- **AI Guidance**: Prompt files to help AI agents understand blockchain development
- **Complete Codebase**: Full telescope-generated code in \`src/telescope/\` for reference

**Note**: The MCP server uses a meta-tool approach - instead of predefined tools, it instructs agents to create custom functions by referencing the comprehensive examples.

## Development

\`\`\`bash
npm run build      # Build the server
npm run inspector  # Run MCP inspector for testing
npm run clean      # Clean dist directory
\`\`\`

  ## Directory Structure

\`\`\`
${packageName}-mcp/
├── src/
│   ├── telescope/          # 📚 Telescope generated code (reference only, excluded from build)
│   │   ├── cosmos/         # Full cosmos SDK modules 
│   │   │   ├── bank/       # Balance queries, transfers
│   │   │   ├── staking/    # Validator operations
│   │   │   └── ...         # Other cosmos modules
│   │   ├── osmosis/        # Osmosis DEX functionality
│   │   ├── ibc/            # Inter-blockchain communication
│   │   └── index.ts        # Main exports
│   ├── telescope-examples/ # 📖 Usage examples and patterns (excluded from build)
│   │   ├── config-example.ts      # Chain configuration setup
│   │   ├── useBalance.ts          # Balance query React hooks
│   │   ├── useBalanceFunc.ts      # Direct balance functions
│   │   ├── getBalance.ts          # Balance queries with examples
│   │   ├── useAssets.ts           # Multi-token balance queries
│   │   ├── useStakingData.ts      # Staking and delegation info
│   │   ├── useValidators.ts       # Validator queries
│   │   ├── useVoting.ts           # Governance proposals
│   │   ├── useContractInfo.ts     # Smart contract queries
│   │   ├── useMyContracts.ts      # User's contract list
│   │   ├── useGrants.ts           # Authorization grants
│   │   └── useSendData.ts         # Transaction preparation
│   ├── prompts/            # 🤖 Agent instruction files
│   │   ├── codegen-usage.md       # Telescope usage guide
│   │   ├── agent-guidelines.md    # Best practices for agents
│   │   └── chains.json            # Chain registry data
│   ├── index.ts            # MCP server with function generator tool
│   └── telescope-loader.ts # Utility for dynamic code loading
├── dist/                   # Compiled JavaScript (excludes telescope/ and telescope-examples/)
└── package.json
\`\`\`

The \`src/telescope/\` and \`src/telescope-examples/\` directories contain reference code for AI agents but are excluded from the TypeScript build process.

Generated by [Telescope](https://github.com/hyperweb-io/telescope) 🔭
`;
}

function copyTelescopeCodebase(builder: TelescopeBuilder, mcpServerPath: string, packageName: string) {
  const sourcePath = builder.outPath;
  const destPath = join(mcpServerPath, 'src', 'telescope');

  // Copy the entire telescope generated directory
  if (existsSync(sourcePath)) {
    // Skip copy if destination already exists (avoids Windows file permission issues)
    if (existsSync(destPath)) {
      console.log(`Telescope codebase already exists at ${destPath}, skipping copy to avoid Windows file permission issues`);
      return;
    }

    console.log(`Copying telescope codebase from ${sourcePath} to ${destPath}`);

    // Ensure parent directory exists
    mkdirSync(dirname(destPath), { recursive: true });

    // Copy without removing destination first
    try {
      cpSync(sourcePath, destPath, { recursive: true, force: true });
    } catch (error) {
      console.warn(`Warning: Could not copy telescope codebase: ${error}`);
      console.log('MCP server will still function, but AI agents will have limited code references');
      // Don't throw error - let MCP server generation continue
    }
  } else {
    console.warn(`Source path ${sourcePath} does not exist, skipping telescope codebase copy`);
  }
}

// Removed retry logic - no longer needed since we skip copy if destination exists

function generateTelescopeLoader(packageName: string) {
  return `import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Load telescope generated modules dynamically
 * This utility helps MCP tools access the telescope codebase
 */
export class TelescopeLoader {
  private basePath: string;

  constructor() {
    this.basePath = resolve(__dirname, 'telescope');
  }

  /**
   * Get available modules in the telescope codebase
   */
  getAvailableModules(): string[] {
    // This would typically read the directory structure
    // For now, return common cosmos modules
    return [
      'cosmos/bank/v1beta1',
      'cosmos/staking/v1beta1', 
      'cosmos/gov/v1beta1',
      'cosmos/distribution/v1beta1',
      'cosmwasm/wasm/v1',
      'ibc/core/client/v1',
      'osmosis/gamm/v1beta1'
    ];
  }

  /**
   * Load module documentation/examples
   */
  loadModuleInfo(modulePath: string) {
    try {
      const infoPath = resolve(this.basePath, modulePath, 'README.md');
      return readFileSync(infoPath, 'utf-8');
              } catch (error) {
       return \`Module documentation not found for \${modulePath}\`;
     }
  }

  /**
   * Get module schema information
   */
  getModuleSchema(modulePath: string) {
    // Return basic schema info for the module
    return {
      module: modulePath,
      package: '${packageName}',
      queries: ['getBalance', 'getAllBalances'],
      mutations: ['send', 'delegate'],
      types: ['Coin', 'MsgSend', 'MsgDelegate']
    };
  }
}

export const telescopeLoader = new TelescopeLoader();
`;
}

function generateComprehensivePrompts(mcpServerPath: string, packageName: string) {
  // Generate codegen-usage.md
  const codegenUsageContent = `# Codegen Usage Guide

## Overview
This guide provides instructions for MCP agents on how to use the telescope generated code in the ${packageName} package.

## Category of Functions

### 1. **.rpc.func** - Direct Function Calls
These are direct async functions that make RPC calls to blockchain nodes. Use these for:
- Server-side operations
- Node.js scripts
- Direct blockchain queries outside React

**Import Pattern**:
\`\`\`typescript
import { getBalance } from '${packageName}/cosmos/bank/v1beta1/query.rpc.func';
import { send } from '${packageName}/cosmos/bank/v1beta1/tx.rpc.func';
\`\`\`

**Usage Examples**:

**Query Balance**:
\`\`\`typescript
import { getBalance } from '${packageName}/cosmos/bank/v1beta1/query.rpc.func';

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
\`\`\`

### 2. **.rpc.react** - React Hooks
These are React hooks for frontend applications. They provide:
- Automatic caching and refetching
- Loading states
- Error handling
- Integration with React Query

**Import Pattern**:
\`\`\`typescript
import { useGetBalance } from '${packageName}/cosmos/bank/v1beta1/query.rpc.react';
import { useSend } from '${packageName}/cosmos/bank/v1beta1/tx.rpc.react';
\`\`\`

## Chain Configuration Setup

### Import Chain Registry Data
\`\`\`typescript
import { assetLists, chains } from "@chain-registry/v2";
\`\`\`

### Basic Configuration
\`\`\`typescript
// Define your target chain
export const defaultChainName = 'cosmos';  // or 'osmosis', 'injective', etc.

// Find chain info from registry
export const defaultChain = chains.find((chain) => chain.chainName === defaultChainName);

// Get RPC endpoint
export const defaultRpcEndpoint = defaultChain?.apis?.rpc?.[0]?.address || 'http://localhost:26657';
\`\`\`

## Detailed Examples Reference

### Using src/telescope-examples Directory
When you need more specific implementation details or complex use cases, reference the example files in \`src/telescope-examples/\`. These are real-world examples for production usage.

### Using src/tools Directory
The \`src/tools/\` directory contains MCP tool implementations that demonstrate how to use the telescope-examples in MCP tools. These tools show patterns for:
- Importing functions from telescope-examples
- Handling errors and returning proper MCP responses
- Working with blockchain data in MCP context

Each tool in \`src/tools/\` corresponds to functionality in \`src/telescope-examples/\` and shows how to bridge the gap between React hooks/utility functions and MCP tool implementations.

## Important Notes

### Function Categories Usage
- **Use .rpc.func** for: Server-side scripts, CLI tools, backend services
- **Use .rpc.react** for: React applications, frontend components with state management

### Error Handling Patterns
\`\`\`typescript
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
\`\`\`
`;

  writeFileSync(join(mcpServerPath, 'src', 'prompts', 'codegen-usage.md'), codegenUsageContent);

  // Generate agent-guidelines.md
  const agentGuidelinesContent = `# MCP Agent Guidelines

## Overview
These guidelines help MCP agents provide helpful, accurate, and safe blockchain interactions using the ${packageName} library.

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
\`\`\`
✅ Good Response:
"You have 12.5 ATOM (12,500,000 uatom) in your wallet. This is worth approximately $150 USD at current prices. You also have 0.05 ATOM available to pay for transaction fees."

❌ Poor Response:
"Balance: 12500000"
\`\`\`

## Data Formatting Guidelines

### Amounts
Always convert from base units:
\`\`\`typescript
// Good
const atomAmount = parseInt(balance.amount) / 1_000_000;
return \`$\{atomAmount} ATOM\`;

// Bad
return \`$\{balance.amount} uatom\`;
\`\`\`

### Addresses
Abbreviate long addresses for readability:
\`\`\`typescript
const formatAddress = (addr: string) => {
  return \`$\{addr.slice(0, 10)}...$\{addr.slice(-4)}\`;
};
// cosmos1abc123...xyz9
\`\`\`

## Security Guidelines

### Address Validation
\`\`\`typescript
const validateCosmosAddress = (address: string): boolean => {
  return address.startsWith('cosmos1') && address.length === 45;
};
\`\`\`

### Amount Validation
\`\`\`typescript
const validateAmount = (amount: string): boolean => {
  const num = parseFloat(amount);
  return !isNaN(num) && num > 0 && num < 1e15; // Reasonable limits
};
\`\`\`
`;

  writeFileSync(join(mcpServerPath, 'src', 'prompts', 'agent-guidelines.md'), agentGuidelinesContent);

  // Copy chains.json from chain-registry (this is a large static file)
  const chainsJsonContent = `[
  {
    "$schema": "../chain.schema.json",
    "chainName": "cosmos",
    "status": "live",
    "networkType": "mainnet",
    "prettyName": "Cosmos Hub",
    "chainId": "cosmoshub-4",
    "bech32Prefix": "cosmos",
    "daemonName": "gaiad",
    "nodeHome": "$HOME/.gaia",
    "slip44": 118,
    "apis": {
      "rpc": [
        {
          "address": "https://cosmos-rpc.quickapi.com:443"
        }
      ],
      "rest": [
        {
          "address": "https://cosmos-rest.quickapi.com:443"
        }
      ]
    }
  },
  {
    "chainName": "osmosis",
    "status": "live",
    "networkType": "mainnet",
    "prettyName": "Osmosis",
    "chainId": "osmosis-1",
    "bech32Prefix": "osmo",
    "daemonName": "osmosisd",
    "nodeHome": "$HOME/.osmosisd",
    "slip44": 118,
    "apis": {
      "rpc": [
        {
          "address": "https://osmosis-rpc.quickapi.com:443"
        }
      ],
      "rest": [
        {
          "address": "https://osmosis-rest.quickapi.com:443"
        }
      ]
    }
  },
  {
    "chainName": "injective",
    "status": "live",
    "networkType": "mainnet",
    "prettyName": "Injective",
    "chainId": "injective-1",
    "bech32Prefix": "inj",
    "daemonName": "injectived",
    "nodeHome": "$HOME/.injectived",
    "slip44": 60,
    "apis": {
      "rpc": [
        {
          "address": "https://injective-rpc.quickapi.com:443"
        }
      ],
      "rest": [
        {
          "address": "https://injective-rest.quickapi.com:443"
        }
      ]
    }
  }
]`;

  writeFileSync(join(mcpServerPath, 'src', 'prompts', 'chains.json'), chainsJsonContent);
}

function generateTelescopeExamples(mcpServerPath: string, packageName: string) {
  const exampleFiles = [
    {
      name: 'config-example.ts',
      content: `import { assetLists, chains } from "@chain-registry/v2";

/**
 * mainnet: 'cosmos'
 * testnet: 'cosmoshub-testnet'
 * mainnet rpc: 'https://cosmos-rpc.quickapi.com:443'
 * testnet rpc: 'https://rpc.testnet.cosmos.network:443'
 */
export const defaultChainName = 'cosmos'
export const defaultRpcEndpoint = 'https://cosmos-rpc.quickapi.com:443'

export const defaultChain = chains.find((chain) => chain.chainName === defaultChainName)

export const defaultAssetList = assetLists.find((assetList) => assetList.chainName === defaultChainName)
`
    },
    {
      name: 'useBalance.ts',
      content: `import { useChain } from '@interchain-kit/react';
import { defaultContext } from '@tanstack/react-query';
import { useGetBalance } from '${packageName}/cosmos/bank/v1beta1/query.rpc.react';

export const useBalance = (
  chainName: string,
  enabled: boolean = true,
  displayDenom?: string
) => {
  const { address, assetList } = useChain(chainName);

  let denom = assetList?.assets[0].base!;
  for (const asset of assetList?.assets || []) {
    if (asset.display.toLowerCase() === displayDenom?.toLowerCase()) {
      denom = asset.base;
      break;
    }
  }

  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443'; // Use dynamic endpoint

  const isReady = !!address && !!rpcEndpoint;

  const balanceQuery = useGetBalance({
    request: {
      denom,
      address: address || '',
    },
    options: {
      enabled: isReady && enabled,
      select: ({ balance }) => balance,
      context: defaultContext,
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['balance', address, denom],
  });

  return {
    balance: balanceQuery.data,
    isLoading: balanceQuery.isFetching,
  };
};
`
    },
    {
      name: 'useBalanceReact.ts',
      content: `import { useGetBalance } from '${packageName}/cosmos/bank/v1beta1/query.rpc.react';
import { defaultRpcEndpoint as rpcEndpoint } from '@/config';
import BigNumber from 'bignumber.js';
import { defaultAssetList } from '@/config';
import { defaultContext } from '@tanstack/react-query';

export default function useBalance({ address }: { address: string }) {
  const coin = defaultAssetList?.assets[0];

  const denom = coin!.base!;

  const COIN_DISPLAY_EXPONENT = coin!.denomUnits.find(
    (unit) => unit.denom === coin!.display
  )?.exponent as number;

  const {
    data: balance,
    isSuccess: isBalanceLoaded,
    isLoading: isFetchingBalance,
    refetch: refetchBalance,
  } = useGetBalance({
    request: {
      address: address || '',
      denom,
    },
    options: {
      context: defaultContext,
      enabled: !!address,
      select: ({ balance }) =>
        new BigNumber(balance?.amount ?? 0).multipliedBy(
          10 ** -COIN_DISPLAY_EXPONENT
        ),
      staleTime: 0,
    },
    clientResolver: rpcEndpoint,
  });

  return {
    balance,
    isBalanceLoaded,
    isFetchingBalance,
    refetchBalance,
  };
}
`
    },
    {
      name: 'useBalanceFunc.ts',
      content: `import { getBalance } from '${packageName}/cosmos/bank/v1beta1/query.rpc.func';
import { defaultRpcEndpoint } from '@/config';

export const useBalanceFunc = async (address: string, denom: string) => {
  try {
    const { balance } = await getBalance(defaultRpcEndpoint, {
      address,
      denom,
    });

    return {
      balance: balance?.amount || '0',
      denom: balance?.denom || denom,
    };
  } catch (error) {
    console.error('Error fetching balance:', error);
    return {
      balance: '0',
      denom,
    };
  }
};
`
    },
    {
      name: 'getBalance.ts',
      content: `import { getBalance } from '${packageName}/cosmos/bank/v1beta1/query.rpc.func';
import { send } from '${packageName}/cosmos/bank/v1beta1/tx.rpc.func';
import { MsgSend } from '${packageName}/cosmos/bank/v1beta1/tx';

const main = async () => {
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';
  const denom = 'uatom';
  const address = 'cosmos1...'; // Your address here

  // Query balance
  const { balance } = await getBalance(rpcEndpoint, {
    address,
    denom,
  });

  console.log(\`Balance: \${balance?.amount} \${denom}\`);

  // Example: Send transaction (requires signer setup)
  /*
  const fee = {
    amount: [{ denom, amount: '5000' }],
    gas: '200000',
  };

  const token = {
    amount: '1000000',
    denom,
  };

  const msg = MsgSend.fromPartial({
    fromAddress: address,
    toAddress: 'cosmos1recipient...',
    amount: [token],
  });

  // const tx = await send(signer, address, msg, fee, 'Payment');
  */
};

main().catch(console.error);
`
    },
    {
      name: 'useAssets.ts',
      content: `import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import { defaultContext } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';
import { useGetAllBalances } from '${packageName}/cosmos/bank/v1beta1/query.rpc.react';
import { Coin } from '${packageName}/types';

export const useAssets = (chainName: string) => {
  const { address } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const isReady = !!address && !!rpcEndpoint;

  const allBalancesQuery = useGetAllBalances({
    request: {
      address: address || '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 100n,
        countTotal: true,
        reverse: false,
      },
      resolveDenom: false,
    },
    options: {
      enabled: isReady,
      select: ({ balances }) => balances || [],
      context: defaultContext,
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['allBalances', address],
  });

  const data = useMemo(() => {
    if (!allBalancesQuery.data) return;

    const assets = allBalancesQuery.data.map(({ amount, denom }) => ({
      symbol: denom.toUpperCase(),
      displayAmount: new BigNumber(amount).dividedBy(1e6).toString(),
      amount,
      denom,
    }));

    return { assets };
  }, [allBalancesQuery.data]);

  return { 
    data, 
    isLoading: allBalancesQuery.isLoading,
    refetch: allBalancesQuery.refetch 
  };
};
`
    },
    {
      name: 'useStakingData.ts',
      content: `import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import BigNumber from 'bignumber.js';
import {
  BondStatus,
  bondStatusToJSON,
} from '${packageName}/cosmos/staking/v1beta1/staking';
import { useGetBalance } from '${packageName}/cosmos/bank/v1beta1/query.rpc.react';
import {
  useGetDelegatorValidators,
  useGetDelegatorDelegations,
  useGetValidators,
  useGetParams as useStakingParams,
  useGetPool,
} from '${packageName}/cosmos/staking/v1beta1/query.rpc.react';
import {
  useGetDelegationTotalRewards,
  useGetParams as useDistributionParams,
} from '${packageName}/cosmos/distribution/v1beta1/query.rpc.react';
import { useGetAnnualProvisions } from '${packageName}/cosmos/mint/v1beta1/query.rpc.react';
import { defaultContext } from '@tanstack/react-query';

export const useStakingData = (chainName: string) => {
  const { address, assetList } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const coin = assetList?.assets[0];
  const denom = coin?.base || 'uatom';

  const isDataQueryEnabled = !!address && !!rpcEndpoint;

  const balanceQuery = useGetBalance({
    request: {
      address: address || '',
      denom,
    },
    options: {
      context: defaultContext,
      enabled: isDataQueryEnabled,
      select: ({ balance }) => balance?.amount || '0',
      refetchOnMount: 'always',
    },
    clientResolver: rpcEndpoint,
  });

  const validatorsQuery = useGetValidators({
    request: {
      status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED),
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 200n,
        countTotal: true,
        reverse: false,
      },
    },
    options: {
      context: defaultContext,
      enabled: isDataQueryEnabled,
      select: ({ validators }) => {
        return validators.sort((a, b) =>
          new BigNumber(b.tokens).minus(a.tokens).toNumber(),
        );
      },
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['validators', chainName],
  });

  const delegationsQuery = useGetDelegatorDelegations({
    request: {
      delegatorAddr: address || '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 100n,
        countTotal: true,
        reverse: false,
      },
    },
    options: {
      context: defaultContext,
      enabled: isDataQueryEnabled,
      select: ({ delegationResponses }) => delegationResponses,
    },
    clientResolver: rpcEndpoint,
  });

  const rewardsQuery = useGetDelegationTotalRewards({
    request: {
      delegatorAddress: address || '',
    },
    options: {
      context: defaultContext,
      enabled: isDataQueryEnabled,
      select: (data) => data,
    },
    clientResolver: rpcEndpoint,
  });

  const allQueries = {
    balance: balanceQuery,
    validators: validatorsQuery,
    delegations: delegationsQuery,
    rewards: rewardsQuery,
  };

  const isLoading = Object.values(allQueries).some(
    ({ isLoading }) => isLoading,
  );

  const data = useMemo(() => {
    if (isLoading) return;

    return {
      balance: balanceQuery.data,
      validators: validatorsQuery.data,
      delegations: delegationsQuery.data,
      rewards: rewardsQuery.data,
    };
  }, [isLoading, balanceQuery.data, validatorsQuery.data, delegationsQuery.data, rewardsQuery.data]);

  const refetch = () => {
    Object.values(allQueries).forEach((query) => query.refetch());
  };

  return { data, isLoading, refetch };
};
`
    },
    {
      name: 'useValidators.ts',
      content: `import { useMemo } from 'react';
import { BondStatus, bondStatusToJSON } from '${packageName}/cosmos/staking/v1beta1/staking';
import { useGetValidators } from '${packageName}/cosmos/staking/v1beta1/query.rpc.react';
import { defaultContext } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';

export const useValidators = (chainName: string) => {
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const validatorsQuery = useGetValidators({
    request: {
      status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED),
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 200n,
        countTotal: true,
        reverse: false,
      },
    },
    options: {
      context: defaultContext,
      enabled: !!rpcEndpoint,
      select: ({ validators }) => {
        return validators
          .sort((a, b) => new BigNumber(b.tokens).minus(a.tokens).toNumber())
          .map((validator) => ({
            operatorAddress: validator.operatorAddress,
            moniker: validator.description?.moniker || '',
            tokens: validator.tokens,
            delegatorShares: validator.delegatorShares,
            commission: validator.commission?.commissionRates?.rate || '0',
            status: validator.status,
            jailed: validator.jailed,
          }));
      },
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['validators', chainName],
  });

  return {
    data: validatorsQuery.data,
    isLoading: validatorsQuery.isLoading,
    refetch: validatorsQuery.refetch,
  };
};
`
    },
    {
      name: 'useVoting.ts',
      content: `import { useMemo } from 'react';
import { useGetProposals } from '${packageName}/cosmos/gov/v1beta1/query.rpc.react';
import { ProposalStatus, proposalStatusToJSON } from '${packageName}/cosmos/gov/v1beta1/gov';
import { defaultContext } from '@tanstack/react-query';

export const useVoting = (chainName: string) => {
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const proposalsQuery = useGetProposals({
    request: {
      proposalStatus: proposalStatusToJSON(ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD),
      voter: '',
      depositor: '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 50n,
        countTotal: true,
        reverse: true,
      },
    },
    options: {
      context: defaultContext,
      enabled: !!rpcEndpoint,
      select: ({ proposals }) => proposals,
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['proposals', chainName],
  });

  const data = useMemo(() => {
    if (!proposalsQuery.data) return;

    return {
      proposals: proposalsQuery.data.map((proposal) => ({
        proposalId: proposal.proposalId.toString(),
        title: proposal.content?.title || '',
        description: proposal.content?.description || '',
        status: proposal.status,
        submitTime: proposal.submitTime,
        votingStartTime: proposal.votingStartTime,
        votingEndTime: proposal.votingEndTime,
      })),
    };
  }, [proposalsQuery.data]);

  return {
    data,
    isLoading: proposalsQuery.isLoading,
    refetch: proposalsQuery.refetch,
  };
};
`
    },
    {
      name: 'useVotingData.ts',
      content: `import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import {
  useGetProposals,
  useGetVote,
  useGetTallyResult,
} from '${packageName}/cosmos/gov/v1beta1/query.rpc.react';
import { ProposalStatus, proposalStatusToJSON } from '${packageName}/cosmos/gov/v1beta1/gov';
import { defaultContext } from '@tanstack/react-query';

export const useVotingData = (chainName: string) => {
  const { address } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const isEnabled = !!rpcEndpoint;

  const proposalsQuery = useGetProposals({
    request: {
      proposalStatus: proposalStatusToJSON(ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED),
      voter: '',
      depositor: '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 100n,
        countTotal: true,
        reverse: true,
      },
    },
    options: {
      context: defaultContext,
      enabled: isEnabled,
      select: ({ proposals }) => proposals,
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['allProposals', chainName],
  });

  const activeProposals = useMemo(() => {
    return proposalsQuery.data?.filter(
      (proposal) => proposal.status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
    ) || [];
  }, [proposalsQuery.data]);

  const data = useMemo(() => {
    if (!proposalsQuery.data) return;

    const categorized = {
      active: activeProposals,
      passed: proposalsQuery.data.filter(
        (p) => p.status === ProposalStatus.PROPOSAL_STATUS_PASSED
      ),
      rejected: proposalsQuery.data.filter(
        (p) => p.status === ProposalStatus.PROPOSAL_STATUS_REJECTED
      ),
      failed: proposalsQuery.data.filter(
        (p) => p.status === ProposalStatus.PROPOSAL_STATUS_FAILED
      ),
    };

    return {
      proposals: proposalsQuery.data,
      categorized,
      activeCount: categorized.active.length,
    };
  }, [proposalsQuery.data, activeProposals]);

  return {
    data,
    isLoading: proposalsQuery.isLoading,
    refetch: proposalsQuery.refetch,
  };
};
`
    },
    {
      name: 'useContractInfo.ts',
      content: `import { defaultContext } from '@tanstack/react-query';
import { useGetContractInfo } from '${packageName}/cosmwasm/wasm/v1/query.rpc.react';

export const useContractInfo = ({
  contractAddress,
  enabled = true,
}: {
  contractAddress: string;
  enabled?: boolean;
}) => {
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  return useGetContractInfo({
    request: {
      address: contractAddress,
    },
    options: {
      enabled: !!contractAddress && !!rpcEndpoint && enabled,
      context: defaultContext,
    },
    clientResolver: rpcEndpoint,
  });
};
`
    },
    {
      name: 'useQueryContract.ts',
      content: `import { defaultContext } from '@tanstack/react-query';
import { useGetSmartContractState } from '${packageName}/cosmwasm/wasm/v1/query.rpc.react';

export const useQueryContract = ({
  contractAddress,
  queryMsg,
  enabled = true,
}: {
  contractAddress: string;
  queryMsg: object;
  enabled?: boolean;
}) => {
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  return useGetSmartContractState({
    request: {
      address: contractAddress,
      queryData: new TextEncoder().encode(JSON.stringify(queryMsg)),
    },
    options: {
      enabled: !!contractAddress && !!queryMsg && !!rpcEndpoint && enabled,
      context: defaultContext,
      select: ({ data }) => {
        if (data) {
          return JSON.parse(new TextDecoder().decode(data));
        }
        return null;
      },
    },
    clientResolver: rpcEndpoint,
  });
};
`
    },
    {
      name: 'useCodeDetails.ts',
      content: `import { defaultContext } from '@tanstack/react-query';
import { useGetCode } from '${packageName}/cosmwasm/wasm/v1/query.rpc.react';

export const useCodeDetails = ({
  codeId,
  enabled = true,
}: {
  codeId: string | number;
  enabled?: boolean;
}) => {
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  return useGetCode({
    request: {
      codeId: BigInt(codeId),
    },
    options: {
      enabled: !!codeId && !!rpcEndpoint && enabled,
      context: defaultContext,
    },
    clientResolver: rpcEndpoint,
  });
};
`
    },
    {
      name: 'useMyContracts.ts',
      content: `import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import { useGetContractsByCreator } from '${packageName}/cosmwasm/wasm/v1/query.rpc.react';
import { defaultContext } from '@tanstack/react-query';

export const useMyContracts = (chainName: string) => {
  const { address } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const contractsQuery = useGetContractsByCreator({
    request: {
      creatorAddress: address || '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 100n,
        countTotal: true,
        reverse: false,
      },
    },
    options: {
      enabled: !!address && !!rpcEndpoint,
      context: defaultContext,
      select: ({ contractAddresses }) => contractAddresses,
    },
    clientResolver: rpcEndpoint,
  });

  const data = useMemo(() => {
    if (!contractsQuery.data) return;

    return {
      contracts: contractsQuery.data.map((address) => ({
        address,
        label: \`Contract \${address.slice(0, 8)}...\`,
      })),
      count: contractsQuery.data.length,
    };
  }, [contractsQuery.data]);

  return {
    data,
    isLoading: contractsQuery.isLoading,
    refetch: contractsQuery.refetch,
  };
};
`
    },
    {
      name: 'useGrants.ts',
      content: `import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import { useGetGranterGrants, useGetGranteeGrants } from '${packageName}/cosmos/authz/v1beta1/query.rpc.react';
import { defaultContext } from '@tanstack/react-query';

export const useGrants = (chainName: string) => {
  const { address } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const granterQuery = useGetGranterGrants({
    request: {
      granter: address || '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 100n,
        countTotal: true,
        reverse: false,
      },
    },
    options: {
      enabled: !!address && !!rpcEndpoint,
      context: defaultContext,
      select: ({ grants }) => grants,
    },
    clientResolver: rpcEndpoint,
  });

  const granteeQuery = useGetGranteeGrants({
    request: {
      grantee: address || '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 100n,
        countTotal: true,
        reverse: false,
      },
    },
    options: {
      enabled: !!address && !!rpcEndpoint,
      context: defaultContext,
      select: ({ grants }) => grants,
    },
    clientResolver: rpcEndpoint,
  });

  const data = useMemo(() => {
    return {
      granterGrants: granterQuery.data || [],
      granteeGrants: granteeQuery.data || [],
    };
  }, [granterQuery.data, granteeQuery.data]);

  const isLoading = granterQuery.isLoading || granteeQuery.isLoading;

  return {
    data,
    isLoading,
    refetch: () => {
      granterQuery.refetch();
      granteeQuery.refetch();
    },
  };
};
`
    },
    {
      name: 'useSendData.ts',
      content: `import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import { useGetBalance } from '${packageName}/cosmos/bank/v1beta1/query.rpc.react';
import { defaultContext } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';

export const useSendData = (chainName: string) => {
  const { address, assetList } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const coin = assetList?.assets[0];
  const denom = coin?.base || 'uatom';
  const exponent = coin?.denomUnits?.find(unit => unit.denom === coin.display)?.exponent || 6;

  const balanceQuery = useGetBalance({
    request: {
      address: address || '',
      denom,
    },
    options: {
      enabled: !!address && !!rpcEndpoint,
      context: defaultContext,
      select: ({ balance }) => {
        const amount = balance?.amount || '0';
        const displayAmount = new BigNumber(amount).dividedBy(Math.pow(10, exponent));
        return {
          amount,
          displayAmount: displayAmount.toString(),
          denom: balance?.denom || denom,
        };
      },
    },
    clientResolver: rpcEndpoint,
  });

  const data = useMemo(() => {
    if (!balanceQuery.data) return;

    return {
      balance: balanceQuery.data,
      canSend: new BigNumber(balanceQuery.data.amount).isGreaterThan(0),
      fee: {
        amount: '5000',
        displayAmount: new BigNumber('5000').dividedBy(Math.pow(10, exponent)).toString(),
        denom,
      },
    };
  }, [balanceQuery.data, denom, exponent]);

  return {
    data,
    isLoading: balanceQuery.isLoading,
    refetch: balanceQuery.refetch,
  };
};
`
    },
    {
      name: 'useTotalAssets.ts',
      content: `import { useMemo } from 'react';
import { useChain } from '@interchain-kit/react';
import { useGetAllBalances } from '${packageName}/cosmos/bank/v1beta1/query.rpc.react';
import { defaultContext } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';

export const getPagination = (limit: bigint) => ({
  key: new Uint8Array(),
  offset: 0n,
  limit,
  countTotal: true,
  reverse: false,
});

export const useTotalAssets = (chainName: string) => {
  const { address, assetList } = useChain(chainName);
  const rpcEndpoint = 'https://cosmos-rpc.quickapi.com:443';

  const allBalancesQuery = useGetAllBalances({
    request: {
      address: address || '',
      pagination: getPagination(100n),
      resolveDenom: false,
    },
    options: {
      enabled: !!address && !!rpcEndpoint,
      select: ({ balances }) => balances || [],
      context: defaultContext,
    },
    clientResolver: rpcEndpoint,
    customizedQueryKey: ['totalAssets', address],
  });

  const data = useMemo(() => {
    if (!allBalancesQuery.data) return;

    const totalValue = allBalancesQuery.data.reduce((sum, balance) => {
      return sum.plus(balance.amount);
    }, new BigNumber(0));

    return {
      balances: allBalancesQuery.data,
      totalCount: allBalancesQuery.data.length,
      totalValue: totalValue.toString(),
      nonZeroBalances: allBalancesQuery.data.filter(
        balance => new BigNumber(balance.amount).isGreaterThan(0)
      ),
    };
  }, [allBalancesQuery.data]);

  return {
    data,
    isLoading: allBalancesQuery.isLoading,
    refetch: allBalancesQuery.refetch,
  };
};
`
    }
  ];

  // Write all example files
  exampleFiles.forEach(({ name, content }) => {
    writeFileSync(join(mcpServerPath, 'src', 'telescope-examples', name), content);
  });
}

