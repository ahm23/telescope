import _commands_generate from './commands/generate';
import _commands_install from './commands/install';
import _commands_download from './commands/download';
import _commands_transpile from './commands/transpile';

const Commands = {
  generate: _commands_generate,
  install: _commands_install,
  download: _commands_download,
  transpile: _commands_transpile
};

export { Commands };
