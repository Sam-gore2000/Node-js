const { log } = require('console');
let fs=require('fs');

// const CreateFile=async ()=>{
//     try {
//      await fs.promises.writeFile("fsAsyncAwait.txt","This is Async Await file")
//      console.log("new File Created");
     
        
//     } catch (error) {
//         console.error(error)
//     }
// }
// CreateFile();


const readFile=async (data)=>{
    try {
     await fs.promises.readFile("fsAsyncAwait.txt")
     console.log("read file starting");
     console.log(data);
     
     
        
    } catch (error) {
        console.error(error)
    }
}
readFile();