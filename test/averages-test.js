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
  describe('median', function() {
    it('should return the median of the array', function() {
      var array = [20,20,20,50,50]

      var expectedMedian = 20
      var median = averagesFunctions.median(array)

      assert.deepEqual(expectedMedian, median, "median is computed correctly");
    });
  });
  describe('mode', function() {
    it('should return the mode of the array', function() {
      var array = [20,20,20,50,50]

      var expectedMode = 20
      var mode = averagesFunctions.mode(array)

      assert.deepEqual(expectedMode, mode, "mode is computed correctly");
    });
  });
});
