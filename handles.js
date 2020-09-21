const express = require('express');
const serv = express();
// const serv = express.Router();

serv.get('/', function (req, res) {
  res.send('Go to /hello and give your name, for example /hello/name=jean');
})

serv.get('/hello/name=:name', function (req, res) {
  if( req.params['name'] === 'jean' )
  {
    res.send( 'Hi I\'m Jean, I like programming and carbonaras.' );
  }
  else
  {
    res.send( 'Hello ' + req.params['name'] );
  }
})

module.exports = serv;
