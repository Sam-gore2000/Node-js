import express from "express";
import home from "../controller/auth-controll.js";

const router=express.Router();

// router.get("/",(req,res)=>{
//     res.send("Hello i am sam gore from router team");
// });

router.route('/').get(home);

export default router;