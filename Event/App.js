const EventEmitter = require('events');

const emitter = new EventEmitter();

const eventCount={
    "user-login":0
}

// Listen for an event
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
emitter.emit('greet', 'Alice');


emitter.on('user-login',(username)=>{
    eventCount['user-login']++;
    console.log(`hello ${username } you are login`);
    
})

emitter.on('summery',()=>{
    console.log(eventCount);
    
})

emitter.emit("user-login",'Sam Gore')

emitter.emit('summery');


const http=require('http');

http.createServer((res,req)=>{
res.setHeader('content-type','application/json')
res.write("Servere created ")
res.end()
}).listen(3000)