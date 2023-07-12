const express = require("express");
const { authenticateUser } = require("../../jwt/authenticate");
const db = require("../../models");
const router = express.Router();
const util = require("../../module/utils");
const resMessage = require("../../module/responseMessage");
const statusCode = require("../../module/statusCode");

router.delete("/fire", authenticateUser, (req, res) => {
  const userEmail = req.user.email;
  db.User.destroy({ where: { email: userEmail } })
    .then((result) => {
      console.log("삭제 성공");
      return res
        .status(200)
        .send(util.successTrue(statusCode.OK, resMessage.SUCCESS_USER_DELETE, result));
    })
    .catch((err) => {
      console.log("삭제 Error", err);
      return res
        .status(500)
        .send(util.successFalse(statusCode.INTERNAL_SERVER_ERROR, resMessage.FALSE_USER_DELETE));
    });
});

module.exports = router;
