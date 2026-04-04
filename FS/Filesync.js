const { log } = require('console');
const fs=require('fs');


// Create File 
// fs.writeFileSync('file.txt',"This is same Gore file ")
// // fs.unlinkSync('file.txt'); 
// console.log(__dirname)


// read file 
// const read=fs.readFileSync('file.txt','utf-8')
// console.log(read);


// Append file

// const append=fs.appendFileSync("file.txt","\n this is updated data")
// console.log(append);


// Delete file

// fs.unlinkSync('file.txt');

// Rename file name

// fs.renameSync('file.txt','newfile.txt')

// Create a folder

fs.mkdirSync('myfolder')