const express = require('express');
const router = express.Router();
const db = require('../../models');
const util = require('../../module/utils');
const resMessage = require('../../module/responseMessage');
const statusCode = require('../../module/statusCode');


router.get('/', async(req,res)=>{
    try{

        const getAllUser = await db.User.findAll({});
        return res.status(200).send(util.successTrue(statusCode.OK, resMessage.USER_GET_ALL, getAllUser));
    }catch(err){
        console.log(err);
        return res.status(500).send(
            util.successFalse(statusCode.INTERNAL_SERVER_ERROR,resMessage.SIGNIN_FAIL)    
        );
    }

})


module.exports = router;