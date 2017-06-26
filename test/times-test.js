const assert = require('chai').assert;
const timesTable = require('../times')

it('returns times table', function() {
  assert.equal(timesTable(5), 123455)
});
