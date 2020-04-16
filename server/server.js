const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./login-router');
const app = express();
require('dotenv/config');

app.use('/user', userRouter)

app.listen(8000,()=>{
    console.log("Server Started");
})

mongoose.connect('mongodb://localhost:27017/userAuth', ()=>{
    console.log("DB connected successfully");
})