const fs = require('fs')
fs.readFile('01a_textoQualquer.txt', (err, buf) => {
    if(err)
        console.log("Houve um erro")
    else
        console.log(buf.toString())
})