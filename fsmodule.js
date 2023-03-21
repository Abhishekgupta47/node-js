const fs=require('fs');


fs.readFileSync('file.txt','utf8',(err,data)=>{
    console.log(err,data)
})