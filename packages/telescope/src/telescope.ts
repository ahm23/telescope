#!/usr/bin/env node
import { cli } from './cli';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2), {
  boolean: ['ssh']
});

(async () => {
  await cli(argv);
})();
