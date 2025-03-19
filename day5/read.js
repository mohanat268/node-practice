import fs from 'fs';

// ----------------------------------------------------readStream-------------------------------------------------

// let readStream = fs.createReadStream("./india.txt")


// readStream.on("data",(chunk)=>{
//     console.log("---chunk---");
//     console.log(chunk);
// })
// readStream.on("end", () => {
//     console.log("File reading completed.");
// })

// -----------------------------------

// let readStream = fs.createReadStream("./demo.txt",{
//     highWaterMark:2,
//     encoding:"utf-8"
// })

// readStream.on("data",(chunk)=>{
//     console.log(chunk); 
// })


// ------------------------------------------writeStream-------------------------------------------------

// let writeStream = fs.createWriteStream("test.txt")

// writeStream.write("hello good afternoon",(err)=>{
//     if(err)console.log(err);
//     console.log("file written");
// })


// let writeStream = fs.createWriteStream("test1.txt")

// let readStream = fs.createReadStream("test.txt")

// // readStream.on("data",(chunk)=>{
// //     writeStream.write(chunk,(err)=>{
// //         if(err)console.log(err);
// //         console.log("file written");
// //     })
// // })

// //---or---we can use duplex as below-----
// // ------------------Duplex---------------------

// readStream.pipe(writeStream)


import zlib from 'zlib'

let readStream = fs.createReadStream("./india.txt")
let gzip = zlib.createGzip()
let writeStream = fs.createWriteStream("./ind.gz")

readStream.pipe(gzip).pipe(writeStream)