const assert = require('chai').assert;
const timesTable = require('../times')

it('returns times table', function() {
  assert.equal(timesTable(5), "1 2 3 4 5" + "\n" + "2 4 6 8 10" + "\n" + "3 6 9 12 15" + "\n" + "4 8 12 16 20" + "\n" + "5 10 15 20 25" + "\n")
});
