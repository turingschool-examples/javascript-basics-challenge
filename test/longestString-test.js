/*jshint esversion: 6 */

const assert = require('chai').assert;
const longestString = require('../longestString');

describe('Longest string', function() {
  it('will return the longest string in an array of strings', function() {
    assert.equal(longestString(['horses', 'cats', 'pineapples']), 'pineapples');
    assert.equal(longestString([]), null);
  });
});
