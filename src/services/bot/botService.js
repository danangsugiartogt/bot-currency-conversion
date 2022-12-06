const axios = require('axios');

const sendMessage = async (chatId, message) => {

    const requestURL = `${process.env.TELEGRAM_BASE_URL}bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    return axios.post(requestURL,
    { 
        chat_id: chatId,
        text: message
    })
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((e) => {
        console.log(e.message);
        return e.message;
    });
}

module.exports = { sendMessage }