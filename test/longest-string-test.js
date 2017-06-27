const assert = require('chai').assert
const longestString = require("../longest-string")


describe('longestString', function(){
  context('finds the longest string in an array', function (){
    it('it returns the longest string in an array', function(){
      var myArray = ['horses', 'cats', 'pineapples']

      assert.equal(longestString(myArray), 'pineapples')
    })
  })
})
