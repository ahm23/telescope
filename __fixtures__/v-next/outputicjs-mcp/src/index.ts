#!/usr/bin/env node

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
    name: 'outputicjs MCP Server',
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
    'Guidelines for MCP agents using outputicjs',
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
            'useTotalAssets', 'useBalanceInjective'
          ];
        }
        
        const examplesList = availableExamples.map(example => `- **${example}.ts**: Reference implementation`).join('\n');
        
        const relevantExamples = getRelevantExamples(task, availableExamples)
          .map(example => `- **${example}**: ${getExampleDescription(example)}`)
          .join('\n');

        const codeBlockStart = '```';
        const codeBlockEnd = '```';
        
        const response = [
          '# Blockchain Function Generator',
          '',
          `## Task: ${task}`,
          `## Chain: ${chainName}`,
          `## Function Type: ${functionType}`,
          customRequirements ? `## Custom Requirements: ${customRequirements}` : '',
          '',
          '## Instructions for Implementation',
          '',
          '### Step 1: Review Available Examples',
          'The following example files are available in `src/telescope-examples/`:',
          '',
          examplesList,
          '',
          '### Step 2: Identify Relevant Examples',
          `Based on your task "${task}", you should primarily reference:`,
          '',
          relevantExamples,
          '',
          '### Step 3: Implementation Pattern',
          '',
          `**For Query Functions (${functionType === 'query' ? 'SELECTED' : 'Available'}):**`,
          `${codeBlockStart}typescript`,
          "import { getBalance } from 'outputicjs/cosmos/bank/v1beta1/query.rpc.func';",
          '',
          'export const customQueryFunction = async (params: QueryParams) => {',
          `  const rpcEndpoint = 'https://${chainName}-rpc.quickapi.com:443';`,
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
          `**For React Hooks (${functionType === 'react-hook' ? 'SELECTED' : 'Available'}):**`,
          `${codeBlockStart}typescript`,
          "import { useGetBalance } from 'outputicjs/cosmos/bank/v1beta1/query.rpc.react';",
          "import { defaultContext } from '@tanstack/react-query';",
          '',
          'export const useCustomHook = (params: HookParams) => {',
          `  const rpcEndpoint = 'https://${chainName}-rpc.quickapi.com:443';`,
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
          'Always include proper chain configuration. Reference `config-example.ts`:',
          '',
          `${codeBlockStart}typescript`,
          'import { assetLists, chains } from "@chain-registry/v2";',
          '',
          `export const targetChainName = '${chainName}';`,
          `export const rpcEndpoint = 'https://${chainName}-rpc.quickapi.com:443';`,
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
          `${codeBlockStart}typescript`,
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
          '- **Full codebase reference**: `src/telescope/` directory contains all generated types and functions',
          '- **Configuration examples**: `src/telescope-examples/config-example.ts`',
          '- **Chain registry data**: `src/prompts/chains.json`',
          '- **Usage guidelines**: Use the `codegen-usage` and `agent-guidelines` prompts for detailed instructions',
          '',
          '## Next Steps',
          '',
          '1. Review the suggested example files above',
          '2. Copy and modify the relevant pattern for your use case',
          '3. Test your implementation with proper error handling',
          '4. Ensure proper TypeScript types are used',
          '',
          'The examples in `telescope-examples/` are production-ready patterns that you can adapt for any blockchain task.'
        ].filter(line => line !== '').join('\n');

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
            text: `Error generating blockchain function guidance: ${(error as Error).message}`
          }]
        };
      }
    }
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log('outputicjs MCP server started on stdio');
}

// Helper functions for example recommendations
function getRelevantExamples(task: string, availableExamples: string[]): string[] {
  const taskLower = task.toLowerCase();
  const relevantExamples: string[] = [];
  
  // Balance-related tasks
  if (taskLower.includes('balance')) {
    relevantExamples.push('useBalance', 'useBalanceFunc', 'getBalance');
    if (taskLower.includes('injective')) {
      relevantExamples.push('useBalanceInjective');
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
    'useBalanceInjective': 'Injective-specific balance queries with BigNumber',
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
