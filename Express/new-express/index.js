import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/profile", (req, res) => {
  res.send("This is sam Gore");
});

app.listen(3003, () => {
  console.log("Server is running on port 3000");
});