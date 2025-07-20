import { readFileSync } from 'node:fs';
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
       return `Module documentation not found for ${modulePath}`;
     }
  }

  /**
   * Get module schema information
   */
  getModuleSchema(modulePath: string) {
    // Return basic schema info for the module
    return {
      module: modulePath,
      package: 'customchain-js',
      queries: ['getBalance', 'getAllBalances'],
      mutations: ['send', 'delegate'],
      types: ['Coin', 'MsgSend', 'MsgDelegate']
    };
  }
}

export const telescopeLoader = new TelescopeLoader();
