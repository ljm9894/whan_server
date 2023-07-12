const express =require('express');
require('dotenv').config();
const {sequelize} = require('./models');
const indexRouter = require('./index');
const app = express();
const port = process.env.SERVER_PORT;


app.use(morgan('dev'));

sequelize.sync({force: false})
.then(()=>{
    console.log('db연결 성공');
})
.catch((err)=>{
    console.error(err);
})

app.use('/',indexRouter);

app.use((req,res,next)=> {
    const error = new Error(`${req.method} ${req.url}`);
    error.status =404;
    next(error);
})




app.listen(port, ()=> { 
    console.log(`http://localhost:${port}에서 대기중입니다.`);
})