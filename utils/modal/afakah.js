const parse = require('../index');
function execute(line, lNumber, lFile, text) {
  const args = line.split(' ');
  args.shift();
  if (args.length !== 2) {
    throw new Error(`afakh is not on right syntax on {${lFile}:${lNumber}}`);
  }

  const cond = `(${args[0]} === ${args[1]})`;

  let tx = '';
  const nextline = text.split('\n')[lNumber+1];
  const [nLine, ...lakukn] = nextline.split(' ');
  console.log(nextline);

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
module.exports = execute;
