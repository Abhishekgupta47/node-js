const http = require('http');

const port = process.env.PORT  || 3000;

const server =http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html')
    res.end('<h1>I am Abhishek</h> <p>this is the way to rock the world</p>')

    

})
server.listen(port,()=>{
  
    console.log(`server is listening on port ${port}`);

})