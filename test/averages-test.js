var chai = require('chai');
var assert = require('assert');
var pry = require('pryjs');
var total = require('../average').total
var mean = require('../average').mean
var median = require('../average').median
var mode = require('../average').mode



describe("Numbers", function(){
  it("will return total of all array values", function(){
    var array = [ 1,3,4,5,6]

    assert.equal(total(array), 19)
  })


  it("will return mean of all array values", function(){
    var array = [ 1,3,4,5,6]

    assert.equal(mean(array), 3.8)
  })

  it("will return median of all array values in array of odd length", function(){
    var array = [ 1,3,4,5,6]

    assert.equal(median(array), 4)
  })

  it("will return median of all array values in array of even length", function(){
    var array = [ 1,3,4,5,6, 1]

    assert.equal(median(array), 3.5)
  })

  it("will return mode of array", function(){
    var array = [ 1, 2, 3, 2, 4, 5, 6, 7, 2]

    assert.equal(mode(array), 2)
  })
})
