const assert = require('chai').assert;
const longestString = require('../lib/longestString/longestString.js');

describe('longestString', function() {
  it('returns longest string in array', function() {
    let words = ["hello", "hi", "bye"];
    
    assert(longestString(words), "hello");
  });
});
