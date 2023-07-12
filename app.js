const express =require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();
const port = process.env.SERVER_PORT;

require('dotenv').config;

app.use(morgan('dev'));


app.use((req,res,next)=> {
    const error = new Error(`${req.method} ${req.url}`);
    error.status =404;
    next(error);
})
app.listen(port, ()=> { 
    console.log(`http://localhost:8${port}에서 대기중입니다.`);
})