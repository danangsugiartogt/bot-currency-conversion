const { successResponse, errorResponse } = require('../../helpers/response')
    , ConversionService                  = require('../../services/conversion/conversionService')
    , BotService                         = require('../../services/bot/botService');


/**
 * Get Conversion
 *
 */
const getConversion = async(req, res) => {
  const chatId = req.body.message.chat.id;
  const command = req.body.message.text;

  try {
    const conversion = await ConversionService.getConversionBase(command);

    console.log(`conversion controller: received response > ${conversion}`);

    console.log(conversion);

    const botResponse = await BotService.sendMessage(chatId, conversion);

    console.log(botResponse);

    return res
      .status(200)
      .json(successResponse("success", conversion));
  } catch (e) {
    console.log(`conversion controller: command failed for ${command}`);

    return res
      .status(200)
      .json(errorResponse(e.message));
  }
};

module.exports = {
  getConversion
};
