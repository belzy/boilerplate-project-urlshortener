'use strict';

const Url = require('../models/index.js');

module.exports = {

  createNewUrl: function(url, done) {



    getNewShortUrl((err, num) => {
      if (err) {
        done(err);
      } else {

        const newUrl = {
          original_url: url,
          short_url: num,
        };

        Url.create(newUrl, (err, doc) => {
          err ? done(err) : done(null, doc);
        });
      }

    });

  },

  findByShortUrl: function(short_url, done) {
    Url.findOne({ short_url }, (err, doc) => {
      err ? done(err) : done(null, doc);
    });
  },

}

const getNewShortUrl = (done) => {
  // Checks if there is an available number less than the max number used.
  // If not, passes the next greatest number into done().

  Url.find({}).sort({ 'short_url': 'asc' }).exec((err, docs) => {
    if (err) {
      done(err);
    } else {
      if (docs.length > 0) {
        for (let i = 0; i < docs.length; i++) {
          if (i !== docs[i]['short_url']) {
            done(null, i);
            break;
          } else if (i === docs.length - 1) {
            done (null, i + 1);
          }
        }
      } else {
        done(null, 0);
      }

    }
  });
}
