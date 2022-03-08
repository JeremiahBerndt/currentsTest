const express = require('express');
const app = express();

app.use('/chicos', (req, res, next) => {
  console.log('this is the chicos')
  res.send('<h1>This is chicos</h1>');
  // next()
});

app.use('/', (req, res) => {
  console.log('this is the root')
  res.send('<h1>This is nuttin</h1>')
});

app.listen(3000);