import { existsSync } from 'fs';
import { resolve } from 'path';
import pkg from '../package.json';

describe('bin entry point', () => {
  const binEntries = Object.entries(pkg.bin);

  it.each(binEntries)('%s should exist in dist after build', (_, file) => {
    const binPath = resolve(__dirname, '../dist', file);
    expect(existsSync(binPath)).toBe(true);
  });

  it('telescope --version should print version', () => {
    const binPath = resolve(__dirname, '../dist/telescope.js');
    const output = require('child_process')
      .execSync(`node ${binPath} --version`)
      .toString()
      .trim();
    expect(output).toBe(pkg.version);
  });
});
