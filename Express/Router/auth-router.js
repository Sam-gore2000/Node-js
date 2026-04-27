import express from "express";
import home from "../controller/auth-controll.js";
// import report from '../views/report.ejs'

const router=express.Router();

// router.get("/",(req,res)=>{
//     res.send(`<h1>Hello i am sam gore from router team</h1>`);
// });

router.route('/').get(home);


export default router;