const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");

const app=express();2

app.use(express.json());
app.use(cors({
    origin:[process.env.CLIENT_URL],
    credentials:true
}))

app.use(cookieParser());

app.use('/ping', function(req,res){
  res.send('/pong');
})

app.all('*',(req,res)=>{
    res.status(404).send('OOPS! 404 page not found');
})

module.exports=app;

