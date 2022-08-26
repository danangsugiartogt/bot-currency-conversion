const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const WebhookRouter = require('./routes/WebhookRouter.js');

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(WebhookRouter);

app.listen(process.env.APP_PORT, ()=> {
    console.log("Server up and running...");
});