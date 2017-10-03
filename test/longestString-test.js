const assert = require('chai').assert;
const longestString = require('../lib/longestString.js')

var array = ['horses', 'cats', 'pineapples']

describe('longest string functionality', function(){
  it('longestString returns the longest string in an array', function(){
    assert.equal(longestString.longestString(array), 'pineapples');
  });
});
