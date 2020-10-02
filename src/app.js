const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const middlewares = require('./middlewares');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use('/api', routes);

// Enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('public'));
app.use(express.static('public/*'));

app.use(middlewares.notFound);

module.exports = app;
