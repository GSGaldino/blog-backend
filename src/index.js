const app = require('./app');
const port = process.env.PORT || 3333;

app.listen(port, () => {
  return console.log(`Server running on port ${port} | REST`)
})
