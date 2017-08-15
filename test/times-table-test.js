const assert = require('chai').assert;
const timesTable = require('../times-table.js');

it('is a function', function () {
  assert.isFunction(timesTable, 'this is a function');
});
