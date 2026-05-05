// import http from 'http'

// http.createServer((req,res)=>{
//   res.setHeader('Content-Type','text/html')
//   // res.write('<h1>Hello World</h1>')
//   res.end('<h1>Hello World</h1>') 
// }).listen(3000,()=>{
//   console.log('Server is running on port 3000')
// })

import http from 'http'

http.createServer((req,res)=>{
  res.setHeader('Content-Type','text/html')
 if(req.url=='/') {
  res.end('<h1>Hello World</h1>')
 }else if(req.url=='/about'){
  res.end('<h1>About Page</h1>')
 }else{
  res.end('<h1>404 Not Found</h1>')
 }
  
}).listen(3000,()=>{
  console.log('Server is running on port 3000')
})

