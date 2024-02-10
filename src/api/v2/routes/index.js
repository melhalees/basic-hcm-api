const express = require('express');
const establishDBConnection = require('../middlewares/establishDBConnection');

const apiV2Router = express.Router();

apiV2Router.use('/', establishDBConnection);

apiV2Router.use('/employees', require('./employees'));

module.exports = apiV2Router;