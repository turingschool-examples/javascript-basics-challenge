const assert = require('chai').assert;
const total = require('../averages/total.js');

describe("averages functions", function(){
  context("calculating totals", function(){
    it("returns sum values of array", function(){
      array = [25, 57, 10, 8]
      assert.equal(100, total(array))
    })
  });
});
