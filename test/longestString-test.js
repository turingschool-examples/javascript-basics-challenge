const assert = require('chai').assert;
const longestString = require("../lib/longestString");

describe("longestString", function(){
  it("can return the longest string in an array", function(){
    var strings = ["word", "wordz", "wordzyword"];
    var result = "wordzyword";

    assert.deepEqual(longestString(strings), result);
  });

  it("can return null for an empty array", function(){
    var strings = [];
    var result = null;

    assert.deepEqual(longestString(strings), result);
  });

});
