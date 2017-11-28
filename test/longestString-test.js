const assert        = require('chai').assert
const longestString = require('../longestString').longestString

describe('longestString', function() {
  it('can find the longest string in an array', function () {
    assert.equal(longestString(['horses', 'cats', 'pineapples']), 'pineapples');
  })

  it('returns null if the array is empty', function () {
    assert.equal(longestString([]), null);
  })
})
