
const fs=require('fs')

fs.writeFile('fsAsync.txt',"Hey this is Async file","utf-8",(err)=>{
console.log(err)
})

// const read=fs.readFile("fsAsync.txt",'utf-8',(err)=>{
//     console.log(err)
// })
// console.log(read)


// const append=fs.appendFile("fsAsync.txt","\n this is updated data","utf-8",(err,data)=>{
//     console.log(err)
//     console.log(data)


// })
// console.log(append);


// fs.unlink('fsAsync.txt',(err)=>{
//     console.log(err)

// })