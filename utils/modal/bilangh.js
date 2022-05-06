function execute(line,lNumber,lFile) {
    let args = line.split(" ")
    if(args.length <= 1){
        throw `bilangh is not on right syntax on {${lFile}:${lNumber}}`
    }
    args.shift()

    return `console.log(${args.join(" ")})`
}
module.exports = execute