var assert = require('chai').assert;
var longestString = require('../lib/longest-string');

describe("Longest String", function () {
  it("finds longest string", function () {
    var array = ['thing', 'different thing', 'double different thing', 'double differenter thing', 'this is the longest string'];
    assert.equal(longestString(array), 'this is the longest string');
  });
});
