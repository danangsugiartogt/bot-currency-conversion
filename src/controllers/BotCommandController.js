const axios = require('axios');

const conversionHandler = async (from, to, value) => {
    return `Convert from ${from} to ${to} ${value}`;
}

module.exports = { conversionHandler };