const routes = require('express').Router();
const controllers = require('./controllers');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/'});

routes.get('/', controllers.index);
routes.post('/', upload.single('image'), controllers.create);

module.exports = routes;
