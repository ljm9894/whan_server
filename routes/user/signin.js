const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const db = require('../../models');
const util = require('../../module/utils');
const resMessage = require('../../module/responseMessage');
const statusCode = require('../../module/statusCode');
const jwtUtils = require('../../jwt/jwt')
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
            const tokens = jwtUtils.sign(getUser);
            const refreshToken = tokens.refreshToken;
            const updateUser = await User.update({
                refreshtoken : refreshToken    
            },{where : {email : getUser.email}}
            )
            if(!updateUser){
                res.status(200).send(util.successTrue(statusCode.DB_ERROR, resMessage.REFRESH_UPDATE_ERROR));
            }else{
                const tokenResult = [];
                let json = new Object();
                json.token = tokens.token;
                json.refreshToken = tokens.refreshToken;
                json.email = email;
                json.expires_in = 3600;
                tokenResult.push(json);
                return res.status(200).send(util.successTrue(statusCode.OK, resMessage.SIGNIN_SUCCESS,tokenResult));
            }
            

        }

    }catch(err){
        console.log(err);
        return res.status(500)
                  .send(util.successFalse(statusCode.INTERNAL_SERVER_ERROR,resMessage.SIGNIN_FAIL));
    }
})


module.exports = router;
