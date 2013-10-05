'use strict'


/**
 * Dependencies
 */

var fs = require('fs');

fs.readdir(process.argv[2], function (err, files) {
  if (err) throw err;
  return files.forEach(function (file) {
    if (process.argv[3] === file.split('.').pop()) {
      console.log(file);
    }
  });
});
