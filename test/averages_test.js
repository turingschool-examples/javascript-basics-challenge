const assert = require('chai').assert;
const total = require('../averages/total.js');
const mean = require('../averages/mean.js');

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
});
