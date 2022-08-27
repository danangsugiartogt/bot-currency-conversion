const express    = require('express')
    , routes     = express.Router()
    , convRoutes = require('./conversion/index.route');

routes.use('/conversion', convRoutes);

module.exports = routes;