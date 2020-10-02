const routes = require('express').Router();
const controllers = require('./controllers');

routes.get('/', controllers.index);

module.exports = routes;
