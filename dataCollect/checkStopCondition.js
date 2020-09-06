const saveFile = require('./saveFile')
const data = { message: [], savedLocaly: []}

async function checkStopCondition(message) {

    const msg = message
    const row = msg.row
    

    if (data.savedLocaly.indexOf(row) == -1){
        data.savedLocaly.push(row)
        data.message.push(msg)
        var len = data.savedLocaly.length
        console.clear()
        console.log(len)
    }

    if(len >= 17016){
        saveFile(JSON.stringify(data))
    }

    return data
}

module.exports = checkStopCondition