const axios = require('axios');

const sendMessage = async (chatId, message) => {
    axios.post('https://api.telegram.org/bot5725767934:AAG8LGD2Su4eJcFXsFOV2qrujKgefkQCphc/sendMessage',
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