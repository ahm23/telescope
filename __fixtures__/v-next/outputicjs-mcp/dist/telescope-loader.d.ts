/**
 * Load telescope generated modules dynamically
 * This utility helps MCP tools access the telescope codebase
 */
export declare class TelescopeLoader {
    private basePath;
    constructor();
    /**
     * Get available modules in the telescope codebase
     */
    getAvailableModules(): string[];
    /**
     * Load module documentation/examples
     */
    loadModuleInfo(modulePath: string): string;
    /**
     * Get module schema information
     */
    getModuleSchema(modulePath: string): {
        module: string;
        package: string;
        queries: string[];
        mutations: string[];
        types: string[];
    };
}
export declare const telescopeLoader: TelescopeLoader;
//# sourceMappingURL=telescope-loader.d.ts.map