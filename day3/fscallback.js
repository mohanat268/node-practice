// import fs, { appendFile } from 'fs';

// fs.writeFile("demo.txt","good afternoon",(err)=>{
//     if(err)console.log(err);
//     console.log("file written");
// })


// fs.readFile("demo.txt","utf-8",(err,data)=>{
//     if(err)console.log(err);
//     console.log(data);
// })


// fs,appendFile("demo.txt","\nwelcome",(err)=>{
//     if(err)console.log(err);
//     console.log("updated");
// })


// fs.unlink("demo1.txt",(err)=>{
//     if(err)console.log(err);
//     console.log("removed");
// })


// fs.mkdir("mkdir",(err)=>{
//     if(err)console.log(err);
//     console.log("created new file");
// })


// fs.rmdir("mkdir.js",(err)=>{
//     if(err)console.log(err);
//     console.log("removed the file");
// })


// nested

// fs.mkdir("react-app",(err)=>{
//     fs.mkdir("react-app/public",(err)=>{
//         fs.mkdir("react-app/src",(err)=>{
//             fs.mkdir("react-app/src/components",(err)=>{
//                 fs.writeFile("react-app/src/components/Home.jsx","",(err)=>{
//                     console.log("happy hacking");
                    
//                 })
//             })
//         })
//     })
// })


// promises

import fs from 'fs/promises';

// fs.writeFile("./text.txt","hello").then(()=>{
//     console.log("file written");
// }).catch((err)=>{
//     console.log(err);
// })


// fs.readFile("./text.txt","utf-8").then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


async function resolvepromise(){
    try{
        // await fs.writeFile("./text.txt","hai");
        // let data=await fs.readFile("./text.txt","utf-8")
        // console.log(data);
        await fs.appendFile("./text.txt",", welcome")
        await fs.unlink("./text.txt")
        await fs.rmdir("./mkdir")
    }
    catch(err){
        console.log(err);
    }
}
resolvepromise()