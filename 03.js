'use strict'


/**
 * Dependencies
 */

var fs = require('fs');
// Seems there is a bug so - 1 is required at the end
console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length - 1);
