const http=require('http');
const {add,mult}=require('./color');
const path = require('path');
const Userdata=[
    {
        name:"Sam",
        age:24,
        email:"Sam@test.com"
    },
     {
        name:"tom",
        age:22,
        email:"tom@test.com"
    },
     {
        name:"jack",
        age:25,
        email:"jack@test.com"
    }
]

http.createServer((req,resp)=>{
resp.setHeader("Content-Type","application/json");
resp.write(JSON.stringify(Userdata));
resp.end()

}).listen(5000)

console.log(add(20,35))
console.log(mult(5,6))

