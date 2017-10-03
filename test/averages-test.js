const assert = require('chai').assert
const Averages= require('../lib/averages')

describe('Averages Methods', function() {

  it("should return the total", function() {
    var array = [0, 1, 2, 3]
    var averages = new Averages(array)
    assert.equal(6, averages.total)
  })

  it("should return the total", function() {
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 2]
    var averages = new Averages(array)
    assert.equal(30, averages.total)
  })

  it("should return the mean/average", function() {
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    var averages = new Averages(array)
    assert.equal(4, averages.mean)
  })

  it("should return the mean/average", function() {
    var array = [1, 2, 3]
    var averages = new Averages(array)
    assert.equal(2, averages.mean)
  })

  it("should return the mean/average", function() {
    var array = [20, 20, 100, 500]
    var averages = new Averages(array)
    assert.equal(160, averages.mean)
  })

  it("should return the mean/average", function() {
    var array = [20, 20, 20, 20]
    var averages = new Averages(array)
    assert.equal(20, averages.mean)
  })

  it("should return the median", function() {
    var array = [1, 2, 3]
    var averages = new Averages(array)
    assert.equal(2, averages.median())
  })

  it("should return the median", function() {
    var array = [1, 2, 3, 4, 5]
    var averages = new Averages(array)
    assert.equal(3, averages.median())
  })

  it("should return the median", function() {
    var array = [1, 2, 3, 4, 5, 6]
    var averages = new Averages(array)
    assert.equal(3.5, averages.median())
  })

  it("should return the median", function() {
    var array = [10, 2, 34, 4, 56, 69]
    var averages = new Averages(array)
    assert.equal(22, averages.median())
  })

  it("should return the mode", function() {
    var array = [2, 4, 56, 4]
    var averages = new Averages(array)
    assert.equal(4, averages.mode())
  })
})
