const express = require("express");
const signUpRouter = require("./signup");
const signInRouter = require("./signin");
const logoutRouter = require("./logout");
const deleteRouter = require("./delete");
const router = express.Router();

router.use("/", signUpRouter);
router.use("/", signInRouter);
router.use("/", logoutRouter);
router.use("/", deleteRouter);
module.exports = router;
