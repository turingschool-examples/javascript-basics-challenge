assert = require('chai').assert;
const myFunctions = require('../lib/rectangles')
describe ("rectangle properties", function() {

  it("the area function returns area", function(){
    var rectangle = {width: 10, height: 20}
    assert.strictEqual(myFunctions.area(rectangle), 200)

  })

  it("the perimeter function returns perimeter", function(){
    var rectangle = {width: 10, height: 20}
    assert.strictEqual(myFunctions.perimeter(rectangle), 60)
  })

  it("returns the length of the rectangle's diagonal", function(){
    var rectangle = {width: 10, height: 20}
    assert.strictEqual(myFunctions.diagonal(rectangle), 22.36)
  })

  it("returns `true` if the rectangle is a square and `false` otherwise", function(){
    var rectangle = {width: 10, height: 20}
    assert.strictEqual(myFunctions.isSquare(rectangle), false)
  })

  it("returns `true` if the rectangle is a square and `false` otherwise", function(){
    var rectangle = {width: 10, height: 10}
    assert.strictEqual(myFunctions.isSquare(rectangle), true)
  })
})
