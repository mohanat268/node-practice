import { createServer } from 'http'

let server = createServer((req,res)=>{
    let employees = [
        {
            name:"Mohan",
            esal:120000,
            skills:["mern","java"]
        },
        {
            name:"Sujan",
            esal:130000,
            skills:["mern","java","aws"]
        }
    ]
    res.writeHead(200,"okay",{"content-type":"application/json",
        "access-control-allow-origin":"http://127.0.0.1:5500"
        // "access-control-allow-origin":"*"
    })

    res.end(JSON.stringify(employees));

   
})
server.listen(8080,()=>{
    console.log(`Server is on 8080...`)})

