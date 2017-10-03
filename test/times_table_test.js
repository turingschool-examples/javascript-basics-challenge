const assert = require('chai').assert;
const timesTable = require('../lib/times_table');

describe('Times Table', function() {
  it('creates a few lines of times tables', function() {
    var expected = '1\t2\t3\t4\t5\t\n2\t4\t6\t8\t10\t\n3\t6\t9\t12\t15\t\n4\t8\t12\t16\t20\t\n5\t10\t15\t20\t25\t\n'

    assert.equal(timesTable(5), expected);
  });
});
