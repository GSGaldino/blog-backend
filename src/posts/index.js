const routes = require('express').Router();
const controllers = require('./controllers');

routes.get('/', controllers.index);
routes.post('/', controllers.create);

module.exports = routes;
