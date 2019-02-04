const db = require('../../data/helpers/index.js');
const express = require('express');
const router = express.Router();

router.get('/api/url/test', (req, res, next) => {
  res.status(200).json({ test: process.env.MESSAGE });
});

module.exports = router;
