const { conversionHandler } = require('./BotCommandController.js');

const getConversion = async (req, res) => {
    console.log(req.body);
    const command = req.body.message.text.split(" ")[0];
    switch(command){
        case '/convert':
            const data = req.body.message.text.split(" ");
            const from = data[1];
            const to = data[2];
            const value = data[3];

            console.log(await conversionHandler(from, to, value));
            break;
        default:
            console.log('command not found.');
    }

    res.status(200).json({ msg: 'success' });
}

module.exports = { getConversion };