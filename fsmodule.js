const fs = require('fs');


//fs.readFileSync('file.txt', 'utf8', (err, data) => {
    //console.log(err, data)
//})
const a = fs.readdirSync('file.txt')

console.log(a.toString())
console.log("finished reading file")