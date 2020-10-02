const routes = require('express').Router();
const posts = require('./posts');
const images = require('./images');

routes.get('/', (req, res) => {
  res.json({
    message: "Connected!"
  })
})

routes.use('/posts', posts);
routes.use('/images', images);

module.exports = routes;
