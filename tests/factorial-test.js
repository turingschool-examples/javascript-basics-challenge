assert = require('chai').assert;
const myFunctions = require('../lib/factorial')
describe("takes as its input and calculates the factorial of that number", function(){
  it("returns the factorial for a correct value", function(){

    assert.strictEqual(myFunctions.factorial(4), 24 )
  })

  it("returns the factorial for a correct value", function(){
    assert.strictEqual(myFunctions.factorial(5), 120 )
  })

  it("returns the factorial for a correct value", function(){
    assert.strictEqual(myFunctions.factorial(0), 1 )
  })
})
