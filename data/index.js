
const chalk = require('chalk');
const mongo = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error:'));

database.once('open', function() {
  console.log(chalk.cyan('Successfully connected to database'));
});

module.exports = database;
