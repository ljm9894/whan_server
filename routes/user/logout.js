const express = require("express");
const router = express.Router();
const util = require("../../module/utils");
const resMessage = require("../../module/responseMessage");
const statusCode = require("../../module/statusCode");

router.delete("/logout", (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  return res.status(200).send(util.successTrue(statusCode.OK, resMessage.USER_LOGOUT));
});

module.exports = router;
