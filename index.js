const express   = require('express')
    , dotenv    = require('dotenv')
    , router    = require('./src/routes/index.route');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/v1', router);

const port = process.env.PORT || 2007;
app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});