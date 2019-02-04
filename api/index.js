const urlRouter = require('./shorturl/index.js');
const express = require('express');
const router = express.Router();

router.use(urlRouter);

module.exports = router;
