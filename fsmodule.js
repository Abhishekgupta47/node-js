const fs = require('fs');


//fs.readFileSync('file.txt', 'utf8', (err, data) => {
    //console.log(err, data)
//})
//const a = fs.readdirSync('file.txt')

//console.log(a.toString())

// fs.writeFile('file2.txt',"this is a data",()=>{
//     console.log("written to the file")
// })
b=fs.writeFileSync('file2.txt',"This is a data again")
console.log(b);
console.log("finished reading file")