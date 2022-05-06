function execute(line,lNumber,lFile) {
    let args = line.split(" ")
    if(args.length !== 2){
        throw `bilangh is not on right syntax on {${lFile}:${lNumber}}`
    }

    return `console.log(${args[1]})`
}
module.exports = execute