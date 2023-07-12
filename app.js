<<<<<<< HEAD
const express =require('express');
const morgan = require('morgan');
require('dotenv').config();
const {sequelize} = require('./models');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const indexRouter = require('./index');
=======
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const { sequelize } = require("./models");
const cors = require("cors");
const indexRouter = require("./index");
>>>>>>> jinsoo1004
const app = express();

const port = process.env.SERVER_PORT;

app.use(morgan("dev"));
app.use(cors());

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db연결 성공");
  })
  .catch((err) => {
    console.error(err);
<<<<<<< HEAD
})
app.use(cookieParser());
=======
  });

>>>>>>> jinsoo1004
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터오류 발생`);
  error.status = 404;
  next(error);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}에서 대기중입니다.`);
});
