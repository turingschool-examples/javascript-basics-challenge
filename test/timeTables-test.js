const assert = require('chai').assert;
const pry = require('pryjs')
const timesTable = require('../lib/timesTables')

describe('Times Tables', function(){
  it('can make a times table', function() {
    var expected = "1\t2\t3\t4\t5\t\n2\t4\t6\t8\t10\t\n3\t6\t9\t12\t15\t\n4\t8\t12\t16\t20\t\n5\t10\t15\t20\t25\t\n"
    assert.deepEqual(timesTable(5), expected)
  });
})
