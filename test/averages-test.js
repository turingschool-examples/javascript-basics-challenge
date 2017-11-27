var assert = require('assert');
var expect    = require("chai").expect;
var averagesFunctions = require("../lib/averages");
describe('averages', function() {
  describe('area', function() {
    it('should return the total of the array', function() {
      var array = [20,20,20,50,50]

      var expectedTotal = 160
      var total = averagesFunctions.total(array)

      assert.deepEqual(expectedTotal, total , "total is computed correctly");
    });
  });
});
