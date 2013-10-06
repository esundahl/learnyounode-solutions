'use strict'


/**
 * Dependencies
 */

var http = require('http');

var server = http.createServer(function (req, res) {
  console.log(req);
  if (req.method === 'POST') {
    req.on('data', function (data) {
      res.write(data.toString().toUpperCase());
    })
    .on('end', function () {
      res.end();
    });
  }
});
server.listen(8000);
