const fs = require('fs');

function parseAllLogics() {
  const logics = fs.readdirSync('./utils/modal');

  const arr = [];

  for (const log of logics) {
    arr.push(
        {
          name: log,
          execute: require(`./modal/${log}`),
        },
    );
  }
  return arr;
}

function parse(text, file) {
  const logics = parseAllLogics();
  const lines = text.split('\n');

  let evalstr = '';
  for (let i = 0; i < lines.length; i++) {
    const arg = lines[i].split(' ');

    const logic = logics.find((l) => l.name === `${arg[0]}.js`);
    if (logic) {
      const ret = logic.execute(lines[i], i, file, text);
      evalstr += `${ret}\n`;
    }
  }
  return evalstr;
}
module.exports = parse;
