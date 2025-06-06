import { TelescopeBuilder } from "../builder";
import { writeContentToFile } from "../utils/files";
import { join, relative } from "path";
import { readdirSync, statSync } from "fs";

/**
 * Generates a file tree representation for the README
 */
function generateFileTree(dir: string, prefix = "", rootPath: string): string {
    let result = "";
    const files = readdirSync(dir);

    files.forEach((file, index) => {
        const isLast = index === files.length - 1;
        const path = join(dir, file);
        const stats = statSync(path);

        // Add file/directory entry with proper prefix
        if (stats.isDirectory()) {
            result += `${prefix}${isLast ? "└── " : "├── "}${file}/\n`;
            result += generateFileTree(
                path,
                prefix + (isLast ? "    " : "│   "),
                rootPath
            );
        } else {
            result += `${prefix}${isLast ? "└── " : "├── "}${file}\n`;
        }
    });

    return result;
}

export const plugin = (builder: TelescopeBuilder) => {
    if (!builder.options.exportReadme) {
        return;
    }

    const readmePath = join(builder.outPath, "README.md");

    // Generate file tree
    const fileTree = generateFileTree(builder.outPath, "", builder.outPath);

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

                packageDocs += `**${methodName}**\n`;
                packageDocs += `- Function: \`${method.functionName}\`\n`;
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

                packageDocs += `**${methodName}**\n`;
                packageDocs += `- Function: \`${method.functionName}\`\n`;
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

## File Structure

\`\`\`
${fileTree}
\`\`\`

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