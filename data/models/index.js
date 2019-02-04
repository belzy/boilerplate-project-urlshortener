const mongo = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI);

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
