const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const port=8081;
require('dotenv').config();
const db = require('./configs/database');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port,(err)=>{
    if(!err){
        console.log("server started");
        console.log("http://localhost:"+port);
    }
})