const express = require('express');

const apiV1Router = express.Router();

apiV1Router.use('/employees', require('./employees'));

module.exports = apiV1Router;