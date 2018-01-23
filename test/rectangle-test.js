const assert = require('chai').assert
const myFunctions = require('../lib/rectangle')

describe ('rectangle', function() {
  it ('calculates area', function() {
    var rectangle = {width: 10, height: 20}
    assert.strictEqual(myFunctions.area(rectangle), 200)
  })

  it ('calculates perimeter', function()  {
    var rectangle = {width: 10, height: 20}
    assert.strictEqual(myFunctions.perimeter(rectangle), 60)
  })

  it ('calculates diagonal', function() {
    var rectangle = {width: 10, height: 20}
    assert.strictEqual(myFunctions.diagonal(rectangle), 22.36)
  })

  it ('determines squares', function()  {
    var rectangle = {width: 10, height: 20}
    assert.strictEqual(myFunctions.isSquare(rectangle), false)
  })
})
