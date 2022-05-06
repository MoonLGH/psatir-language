const fs = require("fs");

function parseAllLogics() {
    const logics = fs.readdirSync("./utils/modal")

    let arr = []

    for (const log of logics) {
        arr.push(
            {
            name:log,
            execute:require(`./modal/${log}`)
            }
        )
    }
    return arr
}

function parse(text,file){
    let logics = parseAllLogics()
    let lines = text.split("\n")

    let evalstr = ""
    for (let i = 0; i < lines.length; i++) {
        let arg = lines[i].split(" ")

        let logic = logics.find(l => l.name === `${arg[0]}.js`)
        if(logic){
            let ret = logic.execute(lines[i],i,file,text)
            evalstr += `${ret}\n`
        }
      }
    return evalstr
}
module.exports = parse