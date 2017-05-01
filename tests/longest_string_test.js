const assert = require('chai').assert;
const longest = require('../scripts/longest_string');
var pry = require('pryjs');

describe('longest', function(){
  context('longest string', function(){
    it('returns the longest string in an array', function(){
      assert.equal(longest.longestString(['horses', 'cats', 'pineapples']), "pineapples")
    });

    it('returns null if array is empty', function(){
      assert.equal(longest.longestString([]), null)
    });
  });
});
