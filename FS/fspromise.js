const { log } = require('console');
let fs=require('fs');

// Create file 

// fs.promises.writeFile("fspromise.txt","This is promise file").then(()=>{
//     console.log("file created successfully");
    
// }).catch((err)=>{
//     console.log(err);

// })


//Read fs 

// fs.promises.readFile('fspromise.txt','utf-8').then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// Read all file 
fs.promises.readdir(__dirname).then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
})

//  update fs

// fs.promises.appendFile('fspromise.txt',"/n Hey I am updated ",'utf-8').then(()=>{
//     console.log(" data updated ");
    
// }).catch((err)=>{
//     console.log(err);
    
// })
