const Application = require('./app');

require('dotenv').config();

const application = new Application({
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGO_URL || '',
});

setImmediate(() => {
  application.start();
});
