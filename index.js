const express = require("express");
const userRouter = require("./routes/user");
//const profileRouter =  require('./routes/profile');
const router = express.Router();

router.use("/user", userRouter);
//router.use('/profile', profileRouter);

module.exports = router;
