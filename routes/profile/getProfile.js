const express = require("express");
const router = express.Router();
const db = require("../../models");
const util = require("../../module/utils");
const resMessage = require("../../module/responseMessage");
const statusCode = require("../../module/statusCode");
const { authenticateUser } = require("../../jwt/authenticate");
const Profile = db.Profile;

router.get("/my", authenticateUser, async (req, res) => {
  try {
    const userEmail = req.user.email;
    const user = await User.findOne({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return res
        .status(404)
        .send(util.successFalse(statusCode.NOT_FOUND, resMessage.USER_NOT_FOUND));
    }

    const myProfile = await Profile.findOne({
      where: {
        userId: user.id,
      },
    });

    if (!myProfile) {
      return res
        .status(404)
        .send(util.successFalse(statusCode.NOT_FOUND, resMessage.PROFILE_NOT_FOUND));
    }

    return res
      .status(200)
      .send(util.successTrue(statusCode.OK, resMessage.GET_MYPROFILE, myProfile));
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send(util.successFalse(statusCode.INTERNAL_SERVER_ERROR, resMessage.GET_MYPROFILE_ERROR));
  }
});

module.exports = router;
