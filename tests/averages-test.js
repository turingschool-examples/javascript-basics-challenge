assert = require('chai').assert;
const myFunctions = require('../lib/averages')
describe("it can take an array and compute a value", function(){

  it("returns the total of all the values in the array", function(){
    var array = [1, 2, 3, 4]
    assert.strictEqual(myFunctions.total(array), 10 )
  })

  it("returns the mean (average) of the array", function(){
    var array = [3, 2, 3, 2]
    assert.strictEqual(myFunctions.mean(array), 2.5 )
  })

  it("returns the median of the array", function(){
    var array = [3, 2, 1, 4, 5]
    assert.strictEqual(myFunctions.median(array), 3 )
  })

  it("returns the median of the array", function(){
    var array = [3, 2, 1, 4]
    assert.strictEqual(myFunctions.median(array), 2.5 )
  })

  it("returns an object representing the mode(s) of the array", function(){
    var array = [3, 2, 1, 3]
    assert.strictEqual(myFunctions.mode(array), 3 )
  })

})
