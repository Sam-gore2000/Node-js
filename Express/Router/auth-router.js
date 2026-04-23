import express from 'express'

const router=express.Router()

router.get('/',(req,res)=>{
    res.send("Hey i am sam gore from router")
})


export default router;