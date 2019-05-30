const express = require('express');
const swaggerUi = require('swagger-ui-express');
const CONFIG = require('config');

const swaggerDocument = require('./swagger.json');
var routes = require('./routes');

// CONFIG START
const port = process.env.PORT || CONFIG.get('PORT');
const host = CONFIG.get('HOST');
// CONFIG END

const app = express();

routes(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('welcome to the API');
});

app.server = app.listen(port, host, () => {
  console.log(`running in: ${process.env.NODE_ENV}`);
  console.log(`Dodgson! We got Dodgson here! on: ${host}:${port}`);
});

module.exports = app;
