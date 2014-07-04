var http = require('http');
var md = require('marked');

var mde = process.argv[2];
if (mde != 'prod') {
   mde = 'dev';
}

var port = require('./' + mde + '.json').port;


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Bahia\n');
}).listen(port, '127.0.0.1');
console.log('Server running at http://127.0.0.1:' + port.toString() + '/');

