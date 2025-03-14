import EventEmitter from 'events';

let emitter=new EventEmitter();

// this async function which lets event emit only once
emitter.once("some-event",()=>{
    console.log("this statement is executed only once");
})

emitter.once("some-event",()=>{
    console.log("this statement is executed only once");
})

// emitter.emit("some-event")
// emitter.emit("some-event")
// this statement is executed only once even though i emit twice

// this gives number of events count
console.log(emitter.listenerCount("some-event"));
