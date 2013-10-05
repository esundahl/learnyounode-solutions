'use strict'


/**
 * Dependencies
 */

var fs = require('fs');


module.exports = function (dir, filter, callback) {
  fs.readdir(dir, function (err, files) {
    if (err && callback) return callback(err);
    var filtered = files.filter(function (file) {
      return file.split('.').length >= 2 && filter === file.split('.').pop();
    });
    if (callback) callback(null, filtered);
  });
};
