const express = require('express');
 const signUpRouter =  require('./signup');
// const signInRouter = require('./signin');

const router = express.Router();


 router.use('/', signUpRouter);
//router.use('/signin', signInRouter);


module.exports = router;