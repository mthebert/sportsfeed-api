const express = require('express');

const CONFIG = require('config');

// CONFIG START
const port = process.env.PORT || CONFIG.get('PORT');
const host = CONFIG.get('HOST');
// CONFIG END

const app = express();

var routes = require('./routes');
routes(app);

app.get('/', (req, res) => {
  res.send('welcome to the API');
});

app.server = app.listen(port, host, () => {
  console.log(`running in: ${process.env.NODE_ENV}`);
  console.log(`Dotson! We got Dotson here! on: ${host}:${port}`);
});

module.exports = app;
