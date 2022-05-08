const parse = require('../index');
function execute(line, lNumber, lFile, text) {
  const args = line.split(' ');
  args.shift();
  if (args.length < 2) {
    throw new Error(`afakh is not on right syntax on {${lFile}:${lNumber}}`);
  }

  let opr = '===';
  if (args.length === 3) {
    opr = args[2];
  }
  const cond = `(${args[0]} ${opr} ${args[1]})`;

  let tx = '';
  const nextline = text.split('\n')[lNumber+1];
  const [nLine, ...lakukn] = nextline.split(' ');

  if (['rill', 'fek'].includes(nLine)) {
    if (nextline.split(' ')[0] === 'rill') {
      tx += `
            if(${cond}){
                ${parse(lakukn.join(' '), lFile)}
            }`;
    } else if (nextline.split(' ')[0] === 'fek') {
      tx += `
            if(!${cond}){
                ${parse(lakukn.join(' '), lFile)}
            }`;
    }
  } else {
    throw new Error('use \'rill\' or \'fek\' on next line while using afakah');
  }
  return tx;
}

const attr = {
  'name': 'afakah',
  'logics': 'if',
  'paramsLength': '2/3',
  'params': [
    {
      'name': 'variable1',
      'uses': 'base for the compare',
    },
    {
      'name': 'variable2',
      'uses': 'comparer variable to compare variable1',
    }, {
      'name': 'operator',
      'uses': 'operation to cheeck in the if statement',
      'required': false,
      'default': '===',
    },
  ],
};
module.exports = {execute, attr};
