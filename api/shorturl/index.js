'use strict';

const collection = require('../../data/helpers/index.js');
const express = require('express');
const router = express.Router();

router.get('/api/url/test', (req, res, next) => {
  res.send('test');
});

router.post('/api/url/new', (req, res, next) => {

  const url = req.body.url;

  collection.createNewUrl(url, (error, doc) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.status(201).json(doc);
    }
  });
});

router.get('/api/url/:shortUrl', (req, res, next) => {
  const shortUrl = req.params.shortUrl;

  collection.findByShortUrl(shortUrl, (error, doc) => {
    error ? res.status(500).json({ error }) : res.status(302).redirect(doc.original_url);
  });
});

module.exports = router;
