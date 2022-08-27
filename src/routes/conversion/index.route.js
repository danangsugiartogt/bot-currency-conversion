const express         = require('express')
    , routes          = express.Router()
    , ConversionController  = require('../../controllers/conversion/conversionController')

/**
|--------------------------------------------------
| Conversion Route
|--------------------------------------------------
*/
routes.post(
  '/',
  ConversionController.getConversion
);

module.exports = routes;
