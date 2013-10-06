'use strict'


/**
 * Dependencies
 */

var net = require('net');

var server = net.createServer(function (socket) {
  var date = new Date(Date.now());
  var formated = date.getFullYear() + '-'
      + zeroFill(date.getMonth() + 1) + '-'
      + zeroFill(date.getDate()) + ' '
      + zeroFill(date.getHours()) + ':'
      + zeroFill(date.getMinutes());
  socket.end(formated + '\n');
});
server.listen(8000);


function zeroFill (i) {
  return (i < 10 ? '0' : '') + i;
}
