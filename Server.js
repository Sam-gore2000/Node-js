
const http = require('http');
const age=20;

const server = http.createServer((req, res) => {
   console.log(req);
   res.end(`hey i am ${age}`);
});

server.listen(3000, () => {
    console.log("The server has been running");
});