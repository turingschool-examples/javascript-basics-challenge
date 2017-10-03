let longestString = require('../lib/string');
let assert        = require('chai').assert

describe('longestString function', function(){
  it('returns the longest string from array', function(){
    let array = ['horses', 'cats', 'pineapples'];
    assert.equal(longestString(array), 'pineapples');
    assert.equal(longestString([]), null);
  });
});
