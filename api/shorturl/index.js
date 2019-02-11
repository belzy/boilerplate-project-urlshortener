var urlExists = require('url-exists');
const collection = require('../../data/helpers/index.js');
const express = require('express');
const router = express.Router();

router.get('/api/shorturl/test', (req, res, next) => {
  res.send('test');
});

router.post('/api/shorturl/new', (req, res, next) => {

  const url = req.body.url;
  urlExists(url, (error, exists) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error });
    } else if (exists) {
      next();
    } else {
      res.status(404).json({ "error": "invalid URL" });
    }
  });

},(req, res, next) => {

  console.log('connected');

  const url = req.body.url;

  collection.createNewUrl(url, (error, doc) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      console.log(doc);
      const newUrl = {
        "original_url": doc.original_url,
        "short_url": doc.short_url,
      }
      res.status(201).json(newUrl);
    }
  });
});

router.get('/api/shorturl/:shortUrl', (req, res, next) => {
  const shortUrl = req.params.shortUrl;

  collection.findByShortUrl(shortUrl, (error, doc) => {
    error ? res.status(500).json({ error }) : res.status(302).redirect(doc["original_url"]);
  });
});

module.exports = router;
