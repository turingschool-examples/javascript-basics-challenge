const assert = require('chai').assert;
const timesTable = require('../times-table.js');

it('is a function', function () {
  assert.isFunction(timesTable, 'this is a function');
});

it('can return one row in multiplication table', function () {
  assert.deepEqual(timesTable(1), '1\t\n');
});

it('can return five rows in multiplication table', function () {
  assert.deepEqual(timesTable(5), '1\t2\t3\t4\t5\t\n2\t4\t6\t8\t10\t\n3\t6\t9\t12\t15\t\n4\t8\t12\t16\t20\t\n5\t10\t15\t20\t25\t\n');;
});
