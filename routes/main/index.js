const express = require('express');
const router = express.Router();
const mainPageRouter = require('./page');


router.use('/',mainPageRouter);

module.exports = router;
