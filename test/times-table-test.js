const assert = require('chai').assert;
const timesTable = require('../lib/times-table/times-table');

describe('times table', function() {
  context('given an integer representing number of rows', function() {
    it('produces a string representing times table', function() {
      var expected = '1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25';

      assert((timesTable(5)), expected);
    });
  });
});
