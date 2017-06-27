const assert = require('chai').assert
const longestString = require('../longestString')

describe('longest string calulation', function() {
  context('string', function(){
    it('calculate the longest string in the array', function(){
      assert.equal(longestString.longestString(['horses', 'cats', 'pineapples']), "pineapples");
    });
  });
});
