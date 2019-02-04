'use strict';

require('dotenv').config();
const chalk = require('chalk');
const apiRouter = require('./api/index.js');
const cors = require('cors');
const path = require('path');
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;


server.use(cors());
server.use(express.json());
server.use(apiRouter);

server.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

server.listen(PORT, function () {
  console.log(chalk.blue(`Server is listening on port ${PORT}...`));
});
