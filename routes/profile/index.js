const express = require("express");
const router = express.Router();
const setProfileRouter = require("./setProfile");
const getMyProfileRouter = require("./getProfile");
const seeDefaultUserRouter = require("./seeProfile");

router.use("/", setProfileRouter);
router.use("/", getMyProfileRouter);
router.use("/", seeDefaultUserRouter);
module.exports = router;
