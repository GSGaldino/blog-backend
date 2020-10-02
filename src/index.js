const app = require('./app');
const port = process.env.PORT || 7733;

app.listen(port, () => {
  return console.log(`Server running on port ${port} | REST`)
})
