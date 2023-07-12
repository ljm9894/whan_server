const express = require('express');
const router = express.Router();
const db = require('../../models');
const util = require('../../module/utils');
const resMessage = require('../../module/responseMessage');
const statusCode = require('../../module/statusCode');
const { authenticateUser } = require('../../jwt/authenticate');
const Profile = db.Profile;

router.patch('/fix',authenticateUser ,async (req, res) => {
  try {
    console.log(req.user);
    const { img, info, nick, age, location } = req.body;
    
    const profile = await Profile.findOne({}); // 프로필을 수정할 대상을 찾는 적절한 방법으로 수정해주세요
    if (!profile) {
      return res.status(404).send(util.successFalse(statusCode.NOT_FOUND, resMessage.PROFILE_NOT_FOUND));
    }

    // 프로필 수정
    profile.img = img || profile.img; // img 값이 주어진 경우에만 수정
    profile.info = info || profile.info; // info 값이 주어진 경우에만 수정
    profile.nick = nick || profile.nick; // nick 값이 주어진 경우에만 수정
    profile.age = age || profile.age; // age 값이 주어진 경우에만 수정
    profile.location = location || profile.location; // location 값이 주어진 경우에만 수정

    await profile.save(); // 수정된 프로필을 저장

    return res.status(200).send(util.successTrue(statusCode.OK, resMessage.PROFILE_UPDATED));
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send(util.successFalse(statusCode.INTERNAL_SERVER_ERROR, resMessage.PROFILE_ERROR));
  }
});

module.exports = router;
