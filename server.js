
// require('dotenv').config();
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

server.use('/', express.static(path.join(__dirname, './client/build/')));

server.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './client/index.html'));
});

server.listen(PORT, function () {
  console.log(chalk.blue(`Server is listening on port ${PORT}...`));
});
