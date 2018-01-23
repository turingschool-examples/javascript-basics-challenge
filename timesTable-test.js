const assert = require('chai').assert;
const timesTable = require('./timesTable');

describe('Times Table Tests', function() {
  it('can make a 5 by 5 table', function() {
    var output = timesTable(5);

    assert.equal("1", output[0]);
    assert.equal("6", output[22]);
  });
});
