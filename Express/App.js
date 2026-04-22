import express from 'express';


const App=express();

App.get('/',(req,res)=>res.send("<h1>Hello Word !</h1>"));
App.get('/about',(req,res)=>res.send("<h1>Hello About page !</h1>"));

const PORT=process.env.PORT || 3000;
App.listen(PORT,()=>console.log(`Server run on port http://localhost:${PORT}`)
)