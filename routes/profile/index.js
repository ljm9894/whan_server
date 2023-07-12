const express = require('express');
const router = express.Router();
const setProfileRouter = require('./setProfile');


router.use('/', setProfileRouter);



module.exports = router;