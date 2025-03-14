import EventEmitter from 'events';

class myClass extends EventEmitter{}
let student = new myClass();

// parents
student.on("result", (grade) => {
    if(grade==="distinction"){
        console.log("parents are happy");
    }
    else{
        console.log("parents are sad");
    }
})

// relatives
student.on("result", (grade) => {
    if(grade==="distinction"){
        console.log("relatives are jealous");
    }
    else{
        console.log("relatives are happy");
    }})

// friends
student.on("result", (grade) => {
    if(grade==="distinction"){
        console.log("let's party");
    }
    else{
        console.log("let's party");
    }})

student.emit("result", "distinction")