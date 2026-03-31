const { log } = require('console');
const fs=require('fs');

fs.writeFileSync('file.txt',"This is same Gore file")
// fs.unlinkSync('file.txt'); 
console.log(__dirname)