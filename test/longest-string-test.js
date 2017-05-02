const longestString = require('../lib/longest-string');
const assert = require('chai').assert;

describe("longestString", function(){
  it("returns longest string in collection", function(){
    assert.equal(longestString(['horses', 'cats', 'pineapples']), "pineapples")
  });
});
