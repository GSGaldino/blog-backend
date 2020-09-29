const routes = require('express').Router();
const posts = require('./posts');

routes.get('/', (req, res) => {
  res.json({
    message: "API =D"
  })
})

routes.use('/posts', posts);

module.exports = routes;
