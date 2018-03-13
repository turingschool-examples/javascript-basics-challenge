var assert = require('chai').assert;
var longestString = require('../longestString').longestString;

describe('longest string', function(){
  it('can return the longest string in array', function(){
    var strings = ['horses', 'cats', 'pineapples'];
    assert.equal(longestString(strings), 'pineapples')
  })
})
