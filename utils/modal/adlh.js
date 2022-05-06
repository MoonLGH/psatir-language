function execute(line,lNumber,lFile) {
    let args = line.split(" ")
    if(args.length !== 3){
        throw `adlh is not on right syntax on {${lFile}:${lNumber}}`
    }

    return `let ${args[1]} = "${args[2]}"`
}
module.exports = execute