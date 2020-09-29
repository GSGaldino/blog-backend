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

app.use(middlewares.notFound);

module.exports = app;
