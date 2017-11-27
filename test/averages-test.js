var assert = require('assert');
var expect    = require("chai").expect;
var averagesFunctions = require("../lib/averages");
describe('averages', function() {
  describe('total', function() {
    it('should return the total of the array', function() {
      var array = [20,20,20,50,50]

      var expectedTotal = 160
      var total = averagesFunctions.total(array)

      assert.deepEqual(expectedTotal, total , "total is computed correctly");
    });
  });
  describe('mean', function() {
    it('should return the mean of the array', function() {
      var array = [20,20,20,50,50]

      var expectedMean = 32
      var mean = averagesFunctions.mean(array)

      assert.deepEqual(expectedMean ,mean , "mean is computed correctly");
    });
  });
});
