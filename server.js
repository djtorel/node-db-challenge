const express = require('express');

const apiRouter = require('./routes');

const server = express();
server.use(express.json());

server.use('/api', apiRouter);

module.exports = server;
