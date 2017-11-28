const assert = require('chai').assert;
const longestString = require('../longest-string')

describe("longest string", function(){
  it('can determine the longest word in an array of words', function(){
    array = ['horses', 'cats', 'pineapples'];
    assert.deepEqual(longestString(array), 'pineapples')
  })
})
