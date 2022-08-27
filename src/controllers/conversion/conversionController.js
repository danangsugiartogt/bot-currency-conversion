const { successResponse, errorResponse } = require('../../helpers/response')
    , ConversionService                  = require('../../services/conversion/conversionService');


/**
 * Get Conversion
 *
 */
const getConversion = async(req, res) => {
  const { command } = req.body;

  try {
    const conversion = await ConversionService.getConversionBase(command);

    console.log(`conversion controller: command success for ${command}`);

    return res
      .status(200)
      .json(successResponse("success", conversion));
  } catch (e) {
    console.log(`conversion controller: command failed for ${command}`);

    return res
      .status(400)
      .json(errorResponse(e.message));
  }
};

module.exports = {
  getConversion
};
