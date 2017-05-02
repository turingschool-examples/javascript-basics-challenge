const assert = require('chai').assert
const total = require('../averages').total;
const mean = require('../averages').mean;
const median = require('../averages').median;

describe("array object returns the total", function(){
  context("total method", function(){
    it("can be called on an array and return the total", function() {
      var array = [1, 2, 3, 4, 5]
      var array2 = [10, 20, 30, 40, 50]
      assert(array.total, 15);
      assert(array2.total, 150);
    });
  });

  context("mean method", function(){
    it("can be called on an array and return the average", function() {
      var array = [2, 4, 6]
      assert(array.mean, 4);
    });
  });

  context("median method", function(){
    it("can be called on an array and return the median", function() {
      var array = [2, 4, 6]
      var array2 = [2, 4, 6, 8, 10, 12]
      assert(array.median, 4);
      assert(array2.median, 6);
    });
  });
});