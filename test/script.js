const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==="/anu"){
        // res.write("this is the manu server");
        fs.readFile(path.join(__dirname,"views","index.html"),"utf8",(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(data);
        });
     
       

    }else{
    res.write("<h1>this is the demo server</h1>");
    res.end();
    
    }
    
   
});

const PORT = process.env.PORT ||3002;

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});