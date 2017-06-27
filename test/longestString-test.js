const assert = require('chai').assert
const longestString = require('../longestString')

describe("longestString", function(){
  it("can find longest string in an array", function(){
    assert.equal(longestString(['horses', 'cats', 'pineapples']), 'pineapples')
    assert.equal(longestString(['swimming', 'hats', 'pineapple']), 'pineapple')
    assert.equal(longestString(['two', 'four', 'one']), 'four')
  })
})