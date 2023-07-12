const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const db = require('../../models');
const util = require('../../module/utils');
const resMessage = require('../../module/responseMessage');
const statusCode = require('../../module/statusCode');
const User = db.User;


router.post('/signin', async(req,res)=>{
    const { email, password} = req.body;
    const hashedCheckPassword = crypto.createHash("sha512").update(password).digest("base64");
    try{
        
        const getUser = await User.findOne({
                where : {
                    email 
                }
            });
        console.log(getUser)
        if(!getUser || getUser.password !== hashedCheckPassword){
            return res.status(200).send(util.successFalse(statusCode.BAD_REQUEST, resMessage.SIGNIN_FAIL));
        }else{
            const data = `로그인된 사용자 이메일: ${email}`
            return res.status(200).send(util.successFalse(statusCode.OK, resMessage.SIGNIN_SUCCESS, data));

        }

    }catch(err){
        return res.status(500).send(util.successFalse(statusCode.INTERNAL_SERVER_ERROR,resMessage.SIGNIN_FAIL));
    }
})


module.exports = router;
