const routes = require('express').Router();
const controllers = require('./controllers');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      // error first callback: null
      cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
      // error first callback: null
      cb(null, file.originalname)
      console.log(file)
  }
});
const upload = multer({ storage });

routes.get('/', controllers.index);
routes.get('/:post_id', controllers.singlePost);
routes.post('/', upload.single('image'), controllers.create);

module.exports = routes;
