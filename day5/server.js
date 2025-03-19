import http from 'http';

let server = http.createServer((req,res)=>{
    res.write("Hello world.!")
    res.end()
})

server.listen(5000,()=>{
    console.log("serveris on 5000.");
})