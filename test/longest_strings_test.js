var expect    = require("chai").expect;
var longestStrings = require("../app/longest_strings");

describe("Longest String function thing", function() {
  it("finds the longest string in an array", function() {

    var array = ['horses', 'cats', 'pineapples'];

    var longString = longestStrings.longestString(array);

    expect(longString).to.deep.equal("pineapples");

    });
  });
