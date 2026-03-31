import { prompt } from './prompt';
import { Commands as commands } from './cmds';
import * as pkg from '../package.json';
import type { ParsedArgs } from 'minimist';

export const cli = async (argv: ParsedArgs) => {
  if (argv.v || argv.version) {
    console.log(pkg.version);
    return;
  }



  console.log(`Telescope ${pkg.version}`);
  const { cmd } = await prompt(
    [
      {
        _: true,
        type: 'fuzzy',
        name: 'cmd',
        message: 'what do you want to do?',
        choices: Object.keys(commands)
      }
    ],
    argv
  );
  if (typeof commands[cmd] === 'function') {
    await commands[cmd](argv);
  } else {
    console.log('command not found.');
  }
};
