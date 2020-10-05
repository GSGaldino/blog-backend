const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const middlewares = require('./middlewares');
const path = require('path');


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);

app.use(express.static('public'));

app.use(middlewares.notFound);

module.exports = app;
