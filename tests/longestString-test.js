assert = require('chai').assert;
const myFunctions = require('../lib/longestString')
describe("it can take an array of strings and returns the longest", function(){

  it("returns the longest string", function(){
    var array = ['horses', 'cats', 'pineapples']
    assert.strictEqual(myFunctions.longestString(array), 'pineapples' )
  })

  it("returns null is the array is empty", function(){
    var array = []
    assert.strictEqual(myFunctions.longestString(array), null )
  })
})
