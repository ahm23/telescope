# Contributing to Telescope: A Development Guide

In this tutorial, we'll walk through the process of contributing to the Telescope project. Whether you want to fix a bug, add a new feature, or improve documentation, this guide will help you understand how to set up your development environment, make changes, and submit contributions effectively.

## Understanding the Telescope Project Structure

Telescope is a monorepo (a single repository containing multiple related projects) built with modern JavaScript technologies. Before diving into development, let's understand how the project is organized.

### Repository Structure

When you clone the Telescope repository, you'll find several packages organized in a monorepo structure:

```
telescope/
├── packages/
│   ├── telescope/       # Main code generator package
│   ├── types/           # TypeScript type definitions
│   ├── ast/             # Abstract syntax tree utilities
│   ├── parser/          # Protobuf parsing utilities
│   ├── utils/           # Shared utility functions
│   ├── lcd/             # LCD client utilities
│   └── starship/        # Testing and development utilities
├── examples/            # Example projects using Telescope
├── docs/                # Documentation
├── .github/             # GitHub workflows and templates
├── jest.config.js       # Test configuration
├── lerna.json           # Monorepo configuration
├── package.json         # Root package configuration
└── README.md            # Project overview
```

## Setting Up Your Development Environment

Let's set up your development environment step by step.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- Yarn (v1.x recommended)
- Git

### Step 1: Fork the Repository

Start by forking the Telescope repository on GitHub. This creates your own copy of the repository that you can freely experiment with.

1. Go to the [Telescope repository](https://github.com/hyperweb-io/telescope)
2. Click the "Fork" button in the top-right corner
3. Wait for the forking process to complete

### Step 2: Clone Your Fork

Now, clone your fork to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/telescope.git
cd telescope
```

### Step 3: Set Up Upstream Remote

Add the original repository as an "upstream" remote to keep your fork in sync:

```bash
git remote add upstream https://github.com/hyperweb-io/telescope.git
```

Verify your remotes:

```bash
git remote -v
```

You should see:

```
origin    https://github.com/YOUR_USERNAME/telescope.git (fetch)
origin    https://github.com/YOUR_USERNAME/telescope.git (push)
upstream  https://github.com/hyperweb-io/telescope.git (fetch)
upstream  https://github.com/hyperweb-io/telescope.git (push)
```

### Step 4: Install Dependencies

Install all dependencies for the project:

```bash
yarn install
```

This command installs dependencies for all packages in the monorepo.

### Step 5: Build the Packages

Build all packages:

```bash
yarn build
```

This compiles TypeScript code and prepares the packages for development.

## Making Your First Change

Now that your environment is set up, let's walk through the process of making a change to Telescope.

### Step 1: Create a New Branch

Always create a new branch for your changes:

```bash
git checkout -b feature/my-new-feature
```

Use a descriptive branch name that reflects the purpose of your changes. Common prefixes include:

- `feature/` - For new features
- `fix/` - For bug fixes
- `docs/` - For documentation changes
- `refactor/` - For code refactoring

### Step 2: Make Your Changes

Now you can make changes to the codebase. Here's a simple example of adding a new utility function to the `utils` package:

1. Navigate to the utils package:

```bash
cd packages/utils/src
```

2. Open a code editor and add your new function, for example in a new file called `formatters.ts`:

```typescript
/**
 * Formats a token amount with proper denomination
 * @param amount The token amount as a string
 * @param denom The token denomination (e.g., 'uatom')
 * @param decimals The number of decimal places (default: 6)
 * @returns Formatted token amount with denomination
 */
export function formatTokenAmount(
  amount: string,
  denom: string,
  decimals: number = 6
): string {
  // Handle empty or invalid input
  if (!amount || isNaN(Number(amount))) {
    return `0 ${denom.replace(/^u/, '')}`;
  }

  // Convert micro units to standard units
  const value = Number(amount) / Math.pow(10, decimals);
  
  // Format with appropriate decimal places
  const formatted = value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
  });
  
  // Remove the 'u' prefix from denomination if present
  const displayDenom = denom.replace(/^u/, '');
  
  return `${formatted} ${displayDenom}`;
}
```

3. Export your new function from the package's main entry point. Open `packages/utils/src/index.ts` and add:

```typescript
// ... existing exports
export * from './formatters';
```

### Step 3: Write Tests

Always write tests for your changes. Tests are located in the `__tests__` directory of each package:

1. Create a test file at `packages/utils/__tests__/formatters.spec.ts`:

```typescript
import { formatTokenAmount } from '../src/formatters';

describe('formatTokenAmount', () => {
  it('formats micro denominations correctly', () => {
    expect(formatTokenAmount('1000000', 'uatom')).toBe('1.00 atom');
    expect(formatTokenAmount('1500000', 'uatom')).toBe('1.50 atom');
    expect(formatTokenAmount('1234567', 'uatom')).toBe('1.23 atom');
  });

  it('handles zero and empty values', () => {
    expect(formatTokenAmount('0', 'uatom')).toBe('0.00 atom');
    expect(formatTokenAmount('', 'uatom')).toBe('0 atom');
    expect(formatTokenAmount('invalid', 'uatom')).toBe('0 atom');
  });

  it('handles custom decimal places', () => {
    expect(formatTokenAmount('1000000', 'wei', 18)).toBe('0.00 ei');
    expect(formatTokenAmount('1000000000000000000', 'wei', 18)).toBe('1.00 ei');
  });

  it('handles denominations without u prefix', () => {
    expect(formatTokenAmount('1000000', 'atom')).toBe('1.00 atom');
  });
});
```

2. Run the tests to verify your code works:

```bash
cd ../../  # Return to the root directory
yarn test packages/utils
```

### Step 4: Build the Package

Build the package to ensure it compiles correctly:

```bash
yarn workspace @cosmology/utils build
```

Or build all packages:

```bash
yarn build
```

### Step 5: Commit Your Changes

Telescope follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages:

```bash
git add .
git commit -m "feat(utils): add token amount formatter function"
```

Common commit types include:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `perf`: Performance improvements
- `test`: Adding or fixing tests
- `chore`: Changes to the build process or auxiliary tools

### Step 6: Push Your Changes

Push your changes to your fork:

```bash
git push origin feature/my-new-feature
```

### Step 7: Create a Pull Request

1. Go to your fork on GitHub
2. Click the "Compare & pull request" button
3. Fill in the pull request template with details about your changes
4. Click "Create pull request"

## Working on Different Types of Changes

Let's explore how to approach different types of changes to the Telescope codebase.

### 1. Fixing a Bug

When fixing a bug, follow these additional steps:

1. First, create an issue describing the bug if one doesn't exist
2. Reference the issue in your commit message and pull request
3. Add a test that reproduces the bug
4. Fix the bug
5. Verify that the test now passes

Example commit message:

```
fix(parser): resolve protocol import path resolution
```

### 2. Adding a Feature

When adding a new feature:

1. Consider discussing the feature in an issue first
2. Implement the feature with appropriate tests
3. Update documentation to reflect the new feature
4. Consider adding an example demonstrating the feature

Example commit message:

```
feat(telescope): add support for custom type mappings
```

### 3. Improving Documentation

Documentation improvements are highly valuable:

1. Fix typos, clarify explanations, or add examples
2. Make sure examples are correct and follow best practices
3. Consider adding diagrams for complex concepts

Example commit message:

```
docs: improve explanation of proto field mapping
```

### 4. Refactoring Code

When refactoring code:

1. Ensure tests pass before and after your changes
2. Avoid changing functionality
3. Focus on making the code more maintainable, readable, or efficient

Example commit message:

```
refactor(ast): simplify message type processing logic
```

## Advanced Development Topics

Let's explore some more advanced aspects of Telescope development.

### Working with the Protobuf Parser

Telescope's protobuf parser is a critical component. If you're making changes to how proto files are parsed:

1. Understand how the current parser works by reviewing code in `packages/parser`
2. Create test proto files with different constructs
3. Test with real-world proto files from different Cosmos SDK modules
4. Be careful about backward compatibility

### Testing Generated Code

To test how your changes affect generated code:

1. Create a simple project in the `examples` directory
2. Add proto files that exercise your changes
3. Generate code with your modified version of Telescope
4. Write tests that use the generated code
5. Verify everything works as expected

Example test project structure:

```
examples/test-feature/
├── proto/
│   └── test.proto
├── src/
│   └── index.ts
├── telescope.config.js
├── package.json
└── README.md
```

### Debugging Tips

When debugging issues in Telescope:

1. Enable verbose logging:

```typescript
import { logger } from '@cosmology/utils';
logger.setLevel('debug');
```

2. Use the Node.js debugger:

```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

3. Add console logs for specific parts of the code:

```typescript
console.log('Processing message:', JSON.stringify(message, null, 2));
```

## Contributing Best Practices

To make your contributions more likely to be accepted, follow these best practices:

### Code Quality

- Write clean, readable code
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused on a single task

### Testing

- Write comprehensive tests
- Test edge cases
- Ensure all tests pass before submitting a pull request
- Aim for high test coverage

### Documentation

- Document public APIs with JSDoc comments
- Update README files when necessary
- Add examples for new features
- Explain complex concepts

### Pull Requests

- Keep pull requests focused on a single topic
- Make multiple smaller PRs instead of one large PR
- Respond to feedback and make requested changes
- Be patient and respectful of reviewers' time

## Releasing a New Version

While you won't be directly responsible for releases as a contributor, it's useful to understand the process:

1. Update version numbers in package.json files (using Lerna)
2. Update CHANGELOG.md files with notable changes
3. Tag the release with version number
4. Publish to npm

The maintainers typically follow this process:

```bash
# Update versions
yarn lerna version patch --no-push --no-git-tag-version

# Update changelog and commit
git add .
git commit -m "chore: prepare for release vX.Y.Z"

# Create tag
git tag vX.Y.Z

# Push changes
git push origin main --tags

# Publish to npm
yarn lerna publish from-package
```

## Conclusion

Contributing to Telescope is a rewarding way to improve a tool that helps many developers in the Cosmos ecosystem. By following this guide, you can make meaningful contributions that help the project grow and improve.

Remember these key points:

- Set up your development environment properly
- Create focused branches for your changes
- Write good tests
- Follow the contribution guidelines
- Be responsive to feedback

Your contributions, whether they're bug fixes, new features, or documentation improvements, are valuable to the Telescope community. Thank you for considering contributing to the project! 