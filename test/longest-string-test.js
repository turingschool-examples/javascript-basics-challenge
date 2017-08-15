const assert = require('chai').assert;
const longestString = require('../longest-string.js');

it('is a function', function () {
  assert.isFunction(longestString, 'this is a function');
});

it('can find the longest string in an array', function () {
  var arr = ["cat", "mouse"];
  assert.deepEqual(longestString(arr), "mouse");
});
