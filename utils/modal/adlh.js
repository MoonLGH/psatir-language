function execute(line, lNumber, lFile) {
  const args = line.split(' ');
  if (args.length !== 3) {
    throw new Error(`adlh is not on right syntax on {${lFile}:${lNumber}}`);
  }

  return `let ${args[1]} = ${args[2]}`;
}

const attr = {
  'name': 'adlh',
  'logics': 'let',
  'paramsLength': '2',
  'params': [
    {
      'name': 'key',
      'uses': 'name of variable that would be assigned',
    },
    {
      'name': 'value',
      'uses': 'value of the variable',
    },
  ],
  'description': 'make javascript variable, `let params.key params.value`',
  'usage': 'adlh nomer 1',
};
module.exports = {execute, attr};
