const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./configs/database');
const express=require('express');
const cookieParser = require('cookie-parser');
const app=express();
const port=8081;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))
app.use('/',require('./routes/index'))
app.use(cookieParser());
app.listen(port,(err)=>{
    if(!err){
        db();
        console.log("server started");
        console.log("http://localhost:"+port);
    }
})