function execute(line, lNumber, lFile) {
  const args = line.split(' ');
  if (args.length !== 3) {
    throw new Error(`adlh is not on right syntax on {${lFile}:${lNumber}}`);
  }

  return `let ${args[1]} = ${args[2]}`;
}
module.exports = execute;
