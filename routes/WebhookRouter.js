const express = require('express');
const { getConversion } = require('../controllers/WebhookController.js');
const router = express.Router();

router.post('/webhook', getConversion);

module.exports = router;