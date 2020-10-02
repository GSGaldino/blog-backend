const routes = require('express').Router();
const posts = require('./posts');

routes.get('/', (req, res) => {
  res.json({
    message: "Connected!"
  })
})

routes.use('/posts', posts);

module.exports = routes;
