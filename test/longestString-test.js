const assert = require('chai').assert;
const longestString = require('../longestString');

describe('Longest String function', function(){
  it('sorts the longest string from an array', function(){
    testArray = ["word", "longer word", "longest word"]
    assert.isArray(testArray);
    assert.isString(testArray[0]);
    assert.equal(longestString(testArray), "longest word")
  });
});
