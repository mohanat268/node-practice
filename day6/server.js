import http from 'http';

// let server = http.createServer((req,res)=>{
//     res.write("Hello world.!")
//     res.end()
// })

// server.listen(5000,()=>{
//     console.log("serveris on 5000.");
// })


let server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.statusMessage="Okay";
    res.setHeader("Content-Type","text/plain");
    // res.writeHead(200,"Okay",{"content-type":"text/plain"})      shorthand property for above 3 lines
    res.write("Helloo...");
    res.end();
})

server.listen(5000,()=>{
    console.log("server is on 5000..");
})