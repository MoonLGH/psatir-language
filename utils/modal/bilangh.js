function execute(line, lNumber, lFile) {
  const args = line.split(' ');
  if (args.length <= 1) {
    throw new Error(`bilangh is not on right syntax on {${lFile}:${lNumber}}`);
  }
  args.shift();

  return `console.log(${args.join(' ')})`;
}

const attr = {
  'name': 'bilangh',
  'logics': 'console.log',
  'paramsLength': '>1',
  'params': [
    {
      'name': '...args',
      'uses': 'stuff for console.log',
    },
  ],
  'description': 'log with javascript console.log',
  'usage': 'bilangh "foo!"',
};
module.exports = {execute, attr};
