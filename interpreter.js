#!/usr/bin/env node
const fs = require('fs');
const parse = require('./utils');

let fileLocate = null;
const parseArgs = () => {
  const args = process.argv;

  if (args.length < 3) {
    console.log(
        'Require file args, ex: \'node interpreter.js example/example1.psatir\' or \'psatir example/example1.psatir\'',
    );
    return false;
  }

  fileLocate = args[2];
  if (!fs.existsSync(fileLocate)) {
    console.log(`File "${args[2]}" not found, please verify file location`);
    return false;
  }

  return true;
};

if (!parseArgs()) {
  process.exit(1);
}

const input = fs.readFileSync(fileLocate, 'utf-8');

const result = parse(input, fileLocate);
console.log(result);
eval(result);
