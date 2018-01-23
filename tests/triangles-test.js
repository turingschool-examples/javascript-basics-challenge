assert = require('chai').assert;
fail = require('chai').fail;
const myFunctions = require('../lib/triangles')
describe ("triangle properies", function(){

  it("isTriangle returns true if the three numbers could form a triangle and `false` otherwise", function(){
    assert.isNotOk(false, myFunctions.isTriangle(0,0,0))
    })

  it('cannot have negative numbers', function(){
    assert.isNotOk(false, myFunctions.isTriangle(-2,1,5))
  })

  it('is true if equilateral', function(){
    assert(myFunctions.isTriangle(4,4,4))
  })

  it('is true if right trianle', function(){
    assert(myFunctions.isTriangle(10,8,6))
  })

  it('is false if no triangle exists', function(){
    assert.isNotOk(false, myFunctions.isTriangle(4,8,50))
  })

})
