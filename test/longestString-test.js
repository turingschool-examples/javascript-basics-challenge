const assert = require('chai').assert;
const longestStringFunctions = require('../longestString');

describe("Longest String", function() {
  it("returns the longest string in the array", function() {
    const stringArray = ['horses', 'cats', 'pineapples'];
    const stringArray2 = ['spider', 'bug', 'snake', 'vampire', 'werewolf'];
    assert.equal("pineapples", longestStringFunctions.longestString(stringArray))
    assert.equal("werewolf", longestStringFunctions.longestString(stringArray2))
  })
  it("returns 'null' if the array is emtpy", function() {
    const stringArray3 = []
    assert.isNull(longestStringFunctions.longestString(stringArray3))
  })
})
