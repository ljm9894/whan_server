const jwt = require('./jwt');

const resMessage = require('../module/responseMessage');
const statusCode = require('../module/statusCode');
const util = require('../module/utils');


const authUtil = {
    
    isLoggedin : async(req,res,next) =>{
        let token = req.headers.token;
        if(!token){
            return res.json(util.successFalse(statusCode.BAD_REQUEST, resMessage.EMPTY_TOKEN));

        }else{
            const user = jwt.verify(token);
            if(user == -3){
                return res.json(util.successFalse(statusCode.UNAUTHORIZED, resMessage.INVALID_TOKEN));
            }else if(user == -2){
                return res.json(util.successFalse.UNAUTHORIZED, resMessage.INVALID_TOKEN);
            }else{
                req.decoded = user;
                next();
            }
        }
    },
};

module.exports = authUtil