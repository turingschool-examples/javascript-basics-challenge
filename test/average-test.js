assert = require('chai').assert;
const total = require('../lib/average').total;
const mean = require('../lib/average').mean;
const median = require('../lib/average').median;
const mode = require('../lib/average').mode;

describe("Averages Calculations", function() {
  var numset = [1, 4, 4, 5, 8, 9, 11]

  it("can calculate the total", function() {
    assert.deepEqual(total(numset), 42)
  })

  it("can calculate the mean", function(){
    assert.deepEqual(mean(numset), 6)
  })

  it("can calculate the median", function() {
    assert.deepEqual(median(numset), 5)
  })

  it("can determine mode", function() {
    var modeNumset = [1, 1, 2, 2, 4, 5]
    assert.deepEqual(mode(modeNumset), {"1": 2, "2": 2, "4": 1, "5": 1})
  })

  it("can determine multiple modes", function() {
    var modeNumset = [1, 1, 2, 2, 4, 5]
    assert.deepEqual(mode(modeNumset), {"1": 2, "2": 2, "4": 1, "5": 1})
  })
})
