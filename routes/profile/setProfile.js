const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const db = require('../../models');
const util = require('../../module/utils');
const resMessage = require('../../module/responseMessage');
const statusCode = require('../../module/statusCode');
const Profile = db.Profile


router.post('/set', async(req,res)=>{
    try{
        const { img, info, nick, age, location} = req.body;
        const data = {
            img,
            info,
            nick,
            age,
            location
        }
        await Profile.create({
            data
        })
    }catch(err){
        console.log(err);
        return res.status(500).send(
            util.successFalse(statusCode.INTERNAL_SERVER_ERROR,resMessage.PROFILE_ERROR)
        )
    }
})

module.exports = router;