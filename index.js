const express = require('express');
const app = express();
const serv = require('./handles');
const port = 3000;

app.use('/', serv);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
