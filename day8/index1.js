import { createServer } from 'http'
import fs from 'fs'
import { parse } from 'querystring'

let PORT = 5000;
let server=createServer((req,res)=>{
    if(req.method==="POST"){
        if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
            let body="";
            req.on("data",(chunks)=>{
                body+=chunks;
            })
            req.on("error",(err)=>{
                console.log(err);
            })
            req.on("end",()=>{
                console.log(body);
                console.log(parse(body))
                res.end(body);
            })
        }else{
            res.end("Not form data")
        }
    }else{
        if(req.url === "/" || req.url=== "/home"){
            res.writeHead(200,"Ok",{"content-type":"text/html"})
           let home=fs.readFileSync("./index.html","utf-8")
           res.end(home)
        }else if(req.url === "/contact"){
            res.writeHead(200,"Ok",{"content-type":"text/html"})
            let contact=fs.createReadStream("./contact.html","utf-8")
            contact.pipe(res)
        }else if(req.url === "/style"){
            res.writeHead(200,"Ok",{"content-type":"text/css"})
            let css=fs.createReadStream("./style.css","utf-8")
            css.pipe(res)
        }else{
            res.writeHead(404,"Not found",{"content-type":"text/html"})
            let html=fs.createReadStream("./pnf.html","utf-8")
            html.pipe(res)
        }
    }
})
server.listen(PORT,()=>console.log(`Server is on ${PORT}...`))
