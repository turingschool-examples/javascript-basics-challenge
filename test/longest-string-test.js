var expect = require("chai").expect;
var longest_string = require("../app/longest-string");

describe("Longest string does a thing", function() {
  it("finds the longest string in an array", function() {

    var array = ['horses', 'cats', 'pineapples'];
    var longStr = longest_string.longestString(array);

    expect(longStr).to.deep.equal('pineapples');
  })
})
