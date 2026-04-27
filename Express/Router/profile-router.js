
import express from 'express';
const profileRouter=express.Router();


profileRouter.get('/',(req,res)=>{
    res.send('Hey man i am sam gore . this is my profile');
})

export default profileRouter;