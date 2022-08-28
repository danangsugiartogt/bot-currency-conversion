const { successResponse, errorResponse } = require('../../helpers/response')
    , axios                              = require('axios');

/**
 *
 * Get conversion base on command
 *
 * @param {string} command
 */
const getConversionBase = async(command) => {
  console.log(`conversion service: command param ${command}`);

  const params = command.split(" ");
  const to = params[1];
  const from = params[2];
  const amount= params[3];

  console.log(command);

  // TODO:: call conversion api
  let config = {
    headers: {'apikey': 'g6hWTYLwwjZoQ0ePMKbCmzeQs2LWVIWR'}
  };

  const requestURL = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;

  console.log(`conversion service: requestURL ${requestURL}`);

  return axios
    .get(requestURL, config)
    .then((response) => {
      console.log(response.data.result);

      return response.data.result;
    })
    .catch((e) => {
      console.log(`conversion service: response failed from layerapi ${e.message}`);

      return e.message;
    });
};

module.exports = {
  getConversionBase
};
