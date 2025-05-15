# Getting Started with Telescope

Welcome to Telescope! This guide will walk you through the process of creating and publishing a TypeScript package for interacting with Cosmos SDK modules.

## What is Telescope?

Telescope is a tool that generates TypeScript client libraries from Cosmos SDK protocol buffer definitions. It allows you to build type-safe applications that interact with Cosmos blockchains.

## Prerequisites

Before we begin, make sure you have:
- Node.js (v14 or higher)
- npm or yarn
- Basic knowledge of TypeScript and the Cosmos SDK

## Step 1: Install Required Tools

First, let's install Telescope and create-cosmos-app globally:

```sh
npm install -g @cosmology/telescope create-cosmos-app
```

This will give you access to the `telescope` and `cca` commands in your terminal.

## Step 2: Generate a New Project

We'll create a new project using the Telescope boilerplate:

```sh
cca --boilerplate telescope
```

This command creates a new project with the necessary configuration files and folder structure. It will prompt you for a project name - enter something descriptive for your package.

## Step 3: Navigate to Your Package Directory

Once the project is created, change to the telescope package directory:

```sh
cd ./your-project/packages/telescope
```

This is where we'll be working for the rest of this tutorial.

## Step 4: Configure Your Package

If you'd like to customize your package settings, you can use the `telescope generate` command:

```sh
telescope generate
```

This will prompt you for various details like:
- Your name and email
- Module description
- GitHub username
- Module name
- Chain name
- Package access (public or private)
- License type

Alternatively, you can provide all these parameters directly in the command:

```sh
telescope generate --access public --userfullname "Your Name" --useremail "your@email.com" --module-desc "Your module description" --username "your-username" --license MIT --module-name "your-module" --chain-name cosmos --use-npm-scoped
```

## Step 5: Download Protocol Buffers

Next, we need to download the protocol buffer definitions for the Cosmos SDK modules we want to work with:

```sh
telescope download
```

This command will:
1. Clone the Cosmos SDK repositories specified in your configuration
2. Extract the proto files
3. Place them in the `./protos` directory

You should see output indicating which repos are being cloned and which proto files are being processed.

## Step 6: Generate TypeScript Code

Now it's time to generate the TypeScript code from the proto files:

```sh
yarn codegen
```

This command reads your proto files and generates corresponding TypeScript interfaces, classes, and utility functions in the `./src` directory.

Take a moment to explore the generated code - you'll find:
- Message types as TypeScript interfaces
- Client classes for interacting with the blockchain
- Helper functions for common operations

## Step 7: Build Your Package

With the TypeScript code generated, we can now build the package:

```sh
yarn build
```

This compiles the TypeScript files to JavaScript and generates type definitions, preparing your package for distribution.

## Step 8: Test Your Package (Optional)

Before publishing, you might want to test your package:

```sh
yarn test
```

## Step 9: Publish Your Package

Finally, you can publish your package to npm:

```sh
npm publish
```

If you're using the create-cosmos-app boilerplate with lerna, use:

```sh
lerna publish
```

## Next Steps

Congratulations! You've created a TypeScript package for interacting with Cosmos SDK modules. Here are some things you can do next:

1. Create a sample application that uses your package
2. Add custom methods to extend the generated code
3. Implement specific business logic for your use case
4. Share your package with the Cosmos community

In the following tutorials, we'll explore how to use your generated package in real-world applications. 