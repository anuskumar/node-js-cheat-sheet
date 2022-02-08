const fs= require('fs');
const path = require('path');

// console.log(path.basename);
// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));
// console.log(path.join(__dirname,"anu","anu.js"));
// fs.mkdir(path.join(__dirname,"/api1"),{},(err)=>{
//     if(err) throw err;
// })
// fs.rmdir(path.join(__dirname,"/api1"),{recursive:true},(err)=>{
//     if(err) throw err;
// })
// const variable ="anu s kumar";
// fs.writeFile(path.join(__dirname,"/api","anu.txt"),`username:${variable}`,(err)=>{
//     if(err) throw err;
// })

// const variable ="binu s kumar";
// const variable1 ="sanu s kumar";
// fs.appendFile(path.join(__dirname,"/api","anu.txt"),`\n \t username:${variable}`,(err)=>{
//     if(err) throw err;
// })

// const repeatfunction=()=>{

//     fs.appendFile(path.join(__dirname,"/api","anu.txt"),`\n \t username:${variable1}`,(err)=>{
//         if(err) throw err;
//     })
// };

// for(i=0;i<10;i++){

//     repeatfunction();

// }

    // fs.readFile(path.join(__dirname,"/api","anu.txt"),"utf8",(err,data)=>{
    //     if(err) throw err;
    //     console.log(data);
        
    // })



    // nodejs events


    const EventEmitter = require("events");
    const emitter= new EventEmitter();
    emitter.on("demo",(data)=>{

        console.log(data);
    })
    emitter.on("message",(data)=>{

        console.log(data);
    })

    emitter.emit("message",{text:"Üser logged in"});
    emitter.emit("message",{text:"anu logged in"});
    emitter.emit("demo",{text:"demo logged in"});



