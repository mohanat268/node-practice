import { createServer } from 'http';
import fs from 'fs'

let PORT = 5000;
let server = createServer((req,res)=>{
    if(req.url === "/" || req.url === "/home"){
        res.writeHead(200,"ok",{"content-type":"text/html"})
        let home = fs.readFileSync("./index.html","utf-8")
        res.end(home)
    }else if(req.url === "/contact"){
        res.writeHead(200,"ok",{"content-type":"text/html"})
        let contact = fs.createReadStream("./contact.html","utf-8")
        contact.pipe(res)
    }else if(req.url === "/style"){
        res.writeHead(200,"ok",{"content-type":"text/css"})
        let css = fs.createReadStream("./style.css","utf-8")
        css.pipe(res)
    }
    else{
        res.writeHead(404,"not found",{"content-type":"text/html"});
        let pnf = fs.readFileSync("./pnf.html","utf-8")
        res.end(pnf);
    }
})

server.listen(PORT,()=>{
    console.log(`server is on ${PORT}..`);  
})