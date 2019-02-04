'use strict';

const Url = require('../models/index.js');

let urlNum = 1;
// let projectUrl = process.env.URL || 'http://localhost:3000/api/url/';

module.exports = {


  createNewUrl: function(url, done) {

    const newUrl = {
      original_url: url,
      short_url: urlNum,
    };

    Url.create(newUrl, (err, doc) => {
      err ? done(err) : done(null, doc);
    });
    urlNum += 1;
  },

  findByShortUrl: function(short_url, done) {
    Url.findOne({ short_url }, (err, doc) => {
      err ? done(err) : done(null, doc);
    });
  },




}
