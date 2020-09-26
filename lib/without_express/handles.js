const url = require('url');
const qs = require('querystring');

module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url);
    const path = route.pathname;
    const params = qs.parse(route.query);

    res.writeHead(200, {'Content-Type': 'text/plain'});

    if( path === '/' )
    {
      res.write('Go to /hello?name=your_name to get greeted');
    }
    else if (path === '/hello' && 'name' in params)
    {
      if( params['name'] === 'jean' )
      {
        res.write('Hi I\'m Jean, I like programming and carbonaras.' );
      }
      else
      {
        res.write('Hello ' + params['name']);
      }
    }
    else
    {
      res.writeHead(404, 'Not Found');
    }

    res.end();
  }
}
// const serverHandle =
