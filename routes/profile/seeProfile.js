const express = require("express");
const router = express.Router();
const db = require("../../models");
const util = require("../../module/utils");
const resMessage = require("../../module/responseMessage");
const statusCode = require("../../module/statusCode");
const { authenticateUser } = require("../../jwt/authenticate");
const Profile = db.Profile;

router.get("/:nick", authenticateUser, async (req, res) => {
  try {
    const params = req.params.nick;
    const defaultProfile = await Profile.findOne({
      where: {
        nick: params,
      },
    }); // 프로필을 수정할 대상을 찾는 적절한 방법으로 수정해주세요
    if (!defaultProfile) {
      return res
        .status(404)
        .send(util.successFalse(statusCode.NOT_FOUND, resMessage.PROFILE_NOT_FOUND));
    }

    return res.status(200).send(util.successTrue(statusCode.OK, resMessage.GET_PROFILE_SEE));
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send(util.successFalse(statusCode.INTERNAL_SERVER_ERROR, resMessage.GET_PROFILE_SEE_ERROR));
  }
});

module.exports = router;
