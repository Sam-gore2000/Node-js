import express from 'express';

import router from './auth-router.js';

const app=express();

app.use('/auth/profile',router)


app.get('/',(req,res)=>{
    res.send("Hey i am sam gore")
})

app.listen(3001,()=>{
    console.log("Server has been run on port 3001")
})