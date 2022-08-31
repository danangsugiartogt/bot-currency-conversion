const { successResponse, errorResponse } = require('../../helpers/response')
    , axios                              = require('axios')
    , currencyFormatter                  = require('../../helpers/currency');
  
/**
 *
 * Get conversion base on command
 *
 * @param {string} command
 */
const getConversionBase = async(command) => {
  console.log(`conversion service: command param ${command}`);

  const params = command.split(" ");
  const from = params[1];
  const to = params[2];
  const amount= params[3];

  console.log(command);

  // TODO:: call conversion api
  let config = {
    headers: {'apikey': process.env.APILAYER_API_KEY}
  };

  const requestURL = `${process.env.APILAYER_BASE_URL}exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;

  console.log(`conversion service: requestURL ${requestURL}`);

  return axios
    .get(requestURL, config)
    .then((response) => {
      console.log(response.data.result);

      return currencyFormatter(to, response.data.result);
    })
    .catch((e) => {
      console.log(`conversion service: response failed from layerapi ${e.message}`);

      return e.message;
    });
};

module.exports = {
  getConversionBase
};
