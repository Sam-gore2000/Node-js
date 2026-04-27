import express from "express";
import router from "./auth-router.js";
import profileRouter from "./profile-router.js";

const app = express();

app.use('/auth/profile',router)

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use('/auth',profileRouter)

app.set("view engine", "ejs")

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});

