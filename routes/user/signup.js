const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const crypto = require('crypto');
const db = require('../../models');
const util = require('../../module/utils');
const resMessage = require('../../module/responseMessage');
const statusCode = require('../../module/statusCode');
const User = db.User
const Profile = db.Profile
=======
const crypto = require("crypto");
const db = require("../../models");
const util = require("../../module/utils");
const resMessage = require("../../module/responseMessage");
const statusCode = require("../../module/statusCode");
const User = db.User;
>>>>>>> jinsoo1004

router.post("/signup", async (req, res) => {
  const { email, name, password } = req.body;
  const hashedPwd = crypto.createHash("sha512").update(password).digest("base64");
  const getUser = async () => {
    await User.findOne({
      where: { email: email },
    }).catch((err) => console.log(err));
  };
  if (getUser.email > 0) {
    return res.status(200).send(util.successFalse(statusCode.BAD_REQUEST, resMessage.SIGNUP_FAIL));
  }

<<<<<<< HEAD
    const data = {
        email : email,
        name : name,
        password : hashedPwd
    }
    try{
        const user = await User.create(data)
        const createdProfile = await Profile.create({
            user_id : user.id,
        })
        console.log(user);
        console.log(createdProfile)
         return res.status(200).send(util.successTrue(statusCode.OK, resMessage.SIGNUP_SUCCESS,));
    }catch(err){
        console.log(err);
        return res.status(500).send(util.successFalse(statusCode.INTERNAL_SERVER_ERROR, resMessage.SIGNUP_SERVER_ERROR))   
    }
=======
  const data = {
    email: email,
    name: name,
    password: hashedPwd,
  };
  try {
    const user = await User.create(data);
    console.log(user);
    return res.status(200).send(util.successTrue(statusCode.OK, resMessage.SIGNUP_SUCCESS));
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send(util.successFalse(statusCode.INTERNAL_SERVER_ERROR, resMessage.SIGNUP_SERVER_ERROR));
  }
>>>>>>> jinsoo1004
});

module.exports = router;
