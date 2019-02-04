const mongo = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb://belzy:12TestDb34@ds033740.mlab.com:33740/fcc-url-shortener';

mongoose.connect(MONGO_URI);

const urlSchema = new Schema({

  original_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: Number,
    required: true,
    unique: true,
  }

});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
