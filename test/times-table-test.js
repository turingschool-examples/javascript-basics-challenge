var assert = require('assert');
var expect    = require("chai").expect;
var timesTableFunction = require("../lib/times-table");
describe('times table', function() {
  describe('times table', function() {
    it('should return a times table of the given size', function() {

      var five = timesTableFunction.timesTable(5)
      var ten = timesTableFunction.timesTable(10)

      var timesTableFive = "1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n"

      assert.deepEqual(five, timesTableFive, "five is computed correctly");
    });
  });
});
