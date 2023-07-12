const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const db = require("../../models");
const util = require("../../module/utils");
const resMessage = require("../../module/responseMessage");
const statusCode = require("../../module/statusCode");
const { generateAccessToken, generateRefreshToken } = require("../../jwt/token");
const User = db.User;

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const hashedCheckPassword = crypto.createHash("sha512").update(password).digest("base64");

  try {
    const getUser = await User.findOne({
      where: {
        email,
      },
    });

    console.log(getUser);

    if (!getUser || getUser.password !== hashedCheckPassword) {
      return res
        .status(200)
        .send(util.successFalse(statusCode.BAD_REQUEST, resMessage.SIGNIN_FAIL));
    } else {
      const accessToken = generateAccessToken(email);
      const refreshToken = generateRefreshToken(email);
      // Refresh Token을 쿠키로 설정
      res.cookie("refreshToken", refreshToken, { httpOnly: true });
      res.cookie("accessToken", accessToken, { httpOnly: true });
      return res
        .status(200)
        .send(util.successTrue(statusCode.OK, resMessage.SIGNIN_SUCCESS, accessToken));
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send(util.successFalse(statusCode.INTERNAL_SERVER_ERROR, resMessage.SIGNIN_FAIL));
  }
});

module.exports = router;
