assert = require('chai').assert;
pry = require('pryjs');

let Rectangle = require('./rectangle');
let Triangle = require('./triangle');

module.exports.assert = assert;
module.pry = pry;
module.exports = { Rectangle,
                   Triangle }
