import fs from 'fs';

let readStream = fs.createReadStream("./india.txt")


readStream.on("data",(chunk)=>{
    console.log("---chunk---");
    console.log(chunk);
})
readStream.on("end", () => {
    console.log("File reading completed.");
})