const assert = require('chai').assert
const averages = require('../lib/averages')
var pry = require('pryjs');


describe ("array", function() {
  it ("returns the total of the array", function(){
    var array=[2,3,4]
    assert.equal(array.total(), 9)
  });

  it("returns the average of the array", function(){
    var array=[3, 5]
    assert.equal(array.average(), 4)
  });

  it("returns the median of the array", function(){
    var array=[3,2,4]
    assert.equal(array.median(), 3)
    var array=[2,3,4,5]
    assert.equal(array.median(), 3.5)
  });

  it("returns the mode of an array", function(){
    var array = [2,2,4,5]
    assert.deepEqual(array.mode(), {'2': 2})
  });
});
