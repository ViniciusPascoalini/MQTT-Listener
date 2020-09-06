const path = require('path')
const fs = require('fs')



async function saveFile(fileContent) {
    const fileName = path.basename('../data.json')
    
    fs.writeFile(fileName, fileContent, function(err) {
        if(err) {
            console.log(err)
        } else {
            console.log("The file was saved!")
        }
    })

}

module.exports = saveFile