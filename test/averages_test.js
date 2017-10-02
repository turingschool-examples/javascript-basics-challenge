const assert = require('chai').assert;
const total = require('../averages/total.js');
const mean = require('../averages/mean.js');
const median = require('../averages/median.js');

describe("averages functions", function(){
  context("calculating totals", function(){
    it("returns sum values of array", function(){
      array = [25, 57, 10, 8]
      assert.equal(100, total(array))
    })
  });
  context("calculating means", function(){
    it("returns sum values of array", function(){
      array = [5, 10, 15, 20, 5]
      assert.equal(11, mean(array))
    })
  });
  context("calculating medians", function(){
    it("returns sum values of array", function(){
      array = [13, 18, 13, 14, 13, 16, 14, 21, 13]
      assert.equal(14, median(array))
    })
  });
});
