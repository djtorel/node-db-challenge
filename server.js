const express = require('express');

const apiRouter = require('./routes');

const server = express();
server.use(express.json());

module.exports = server;
