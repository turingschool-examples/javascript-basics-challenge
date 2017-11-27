assert = require('chai').assert;
const total = require('../lib/averages').total;
const mean = require('../lib/averages').mean;
const median = require('../lib/averages').median;
const mode = require('../lib/averages').mode;

describe("Averages Calculations", function() {
  var numset = [1, 4, 4, 5, 8, 9, 10]

  it("can calculate the total", function() {
    assert.deepEqual(total(numset), 42)
  })

  it("can calculate the mean", function(){
    assert.deepEqual(mean(numset), 6)
  })

  it("can calculate the diagonal", function() {
    assert.deepEqual(median(numset), 5)
  })

  it("can determine if square", function() {
    assert.deepEqual(mode(numset), 4)
  })
})
