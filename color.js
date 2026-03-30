
const color=require('colors')
console.log(color.green("Hey Green"));
console.log(color.red("Hey red"));
console.log(color.yellow("Hey Blue"));

const add=(a,b)=>{
    return a+b
}

const mult=(a,b)=>{
    return a*b
}

module.exports={add,mult};