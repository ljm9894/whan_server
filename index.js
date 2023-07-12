const express = require("express");
const userRouter = require("./routes/user");
//const profileRouter =  require('./routes/profile');
const mainRouter = require("./routes/main");
const profileRouter = require("./routes/profile");
const translateRouter = require("./translate/translate");
const router = express.Router();

router.use("/user", userRouter);
router.use("/main", mainRouter);
router.use("/profile", profileRouter);
router.use("/translate", translateRouter);

module.exports = router;
