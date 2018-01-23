const assert = require('chai').assert;
const longestString = require('./longestString');

describe('Longest String Tests', function() {
  it('can test longest string', function() {
    var arr = ['horses', 'cats', 'pineapples'];

    assert.equal(longestString(arr), 'pineapples');
  });

  it('can test if empty', function() {
    var arr = [];

    assert.equal(longestString(arr), null);
  });
});
