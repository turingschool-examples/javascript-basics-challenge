const assert = require('chai').assert
const longestString = require('../js/longestString.js')


describe('longestString', function() {

    it('returns the longest string in an array', function(){
      assert.equal(longestString(['cat','dogs','building']), 'building')
      assert.equal(longestString(['horses', 'cats', 'pineapples']), 'pineapples') 
    })
})
