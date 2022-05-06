const parse = require("../index")
function execute(line,lNumber,lFile,text) {
    let [afakah,...args] = line.split(" ")
    if(args.length !== 2){
        throw `afakh is not on right syntax on {${lFile}:${lNumber}}`
    }

    let cond = `(${args[0]} === '${args[1]}')`

    let tx = ""
    let nextline = text.split("\n")[lNumber+1]
    let [nLine,...lakukn] = nextline.split(" ")
    console.log(nextline)

    if(["iyh","ga"].includes(nLine)){
        if(nextline.split(" ")[0] === "iyh"){
            tx += `
            if(${cond}){
                ${parse(lakukn.join(" "),lFile)}
            }`
        } else if(nextline.split(" ")[0] === "ga"){
            tx += `
            if(!${cond}){
                ${parse(lakukn.join(" "),lFile)}
            }`
        }
    } else {
        throw "use 'iyh' or 'ga'"
    }
    return tx
}
module.exports = execute