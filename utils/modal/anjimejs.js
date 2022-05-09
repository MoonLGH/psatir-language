const ts = require('typescript');
function execute(line, lNumber, lFile, text) {
  const lines = text.split('\n').slice(lNumber, text.split('\n').length);

  const matches = lines.join('\n').match(/```(?:(?<lang>\S+)\n)?\s?(?<code>[^]+?)\s?```/)?.groups;
  let code = '';
  if (matches.lang === 'ts') {
    code = ts.transpile(matches.code);
  } else {
    code = matches.code;
  }
  return code;
}

const attr = {
  'name': 'anjimejs',
  'logics': 'eval',
  'paramsLength': '>2',
  'params': [
    {
      'name': '```*```',
      'uses': 'code to eval in js/ts',
    },
  ],
  'description': 'make js string to eval, anjimejs```\nconsole.log("test")```',
};
module.exports = {execute, attr};

