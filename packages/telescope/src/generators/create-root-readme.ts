import { TelescopeBuilder } from "../builder";
import { writeContentToFile } from "../utils/files";
import { join } from "path";


/**
 * Gets the aliased function name if it's duplicated across multiple files
 */
function getAliasedFunctionName(builder: TelescopeBuilder, functionName: string): string {
    const duplicatedHelperFuncs = builder.store.getHelperFuncsInMultipleFiles();
    const isDuplicated = duplicatedHelperFuncs.includes(functionName);

    if (isDuplicated) {
        const serialNumber = builder.store.getAndIncTypeSerialNumber(functionName);
        if (serialNumber > 0) {
            return `${functionName}${serialNumber}`;
        }
    }

    return functionName;
}

export const plugin = (builder: TelescopeBuilder) => {
    if (!builder.options.exportReadme) {
        return;
    }

    const readmePath = join(builder.outPath, "README.md");

    // Get function mappings from builder
    const functionMappings = builder.getFunctionMappings();

    // Generate package documentation
    let packageDocs = "";

    Object.keys(functionMappings).sort().forEach(packageName => {
        const packageServices = functionMappings[packageName];
        packageDocs += `\n## ${packageName}\n\n`;

        // Type section

        // Query section
        if (packageServices.Query) {
            packageDocs += `### Query Methods\n\n`;
            const queryMethods = Object.keys(packageServices.Query);
            queryMethods.forEach(methodName => {
                const method = packageServices.Query[methodName];

                // Get the aliased function name
                const aliasedFunctionName = getAliasedFunctionName(builder, method.functionName);
                const aliasedHookName = getAliasedFunctionName(builder, method.hookName);

                packageDocs += `**${methodName}**\n`;
                packageDocs += `- Function: \`${aliasedFunctionName}\`\n`;
                if (method.hookName && aliasedHookName !== aliasedFunctionName) {
                    packageDocs += `- Hook: \`${aliasedHookName}\`\n`;
                }
                if (method.comment) {
                    packageDocs += `- Description: ${method.comment}\n`;
                }
                if (method.requestType) {
                    packageDocs += `- Request: ${method.requestType}\n`;
                }
                if (method.responseType) {
                    packageDocs += `- Response: ${method.responseType}\n`;
                }
                packageDocs += '\n';
            });
        }

        // Tx section
        if (packageServices.Msg) {
            packageDocs += `### Transaction Methods\n\n`;
            const msgMethods = Object.keys(packageServices.Msg);
            msgMethods.forEach(methodName => {
                const method = packageServices.Msg[methodName];

                // Get the aliased function name
                const aliasedFunctionName = getAliasedFunctionName(builder, method.functionName);
                const aliasedHookName = getAliasedFunctionName(builder, method.hookName);

                packageDocs += `**${methodName}**\n`;
                packageDocs += `- Function: \`${aliasedFunctionName}\`\n`;
                if (method.hookName && aliasedHookName !== aliasedFunctionName) {
                    packageDocs += `- Hook: \`${aliasedHookName}\`\n`;
                }
                if (method.comment) {
                    packageDocs += `- Description: ${method.comment}\n`;
                }
                if (method.requestType) {
                    packageDocs += `- Request: ${method.requestType}\n`;
                }
                if (method.responseType) {
                    packageDocs += `- Response: ${method.responseType}\n`;
                }
                packageDocs += '\n';
            });
        }
    });

    const readmeContent = `# Generated Code

# Package Documentation

${packageDocs}
`;

    writeContentToFile(
        builder.outPath,
        builder.options,
        readmeContent,
        readmePath
    );
};