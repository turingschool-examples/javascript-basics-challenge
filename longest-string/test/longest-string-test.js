var assert = require('chai').assert;
var longestString = require('../longest-string')

describe("It can find the longest string", function() {
  it("when it receives an array of strings", function() {
    var myLongest = new longestString;
    assert.equal(myLongest.findLongest(['horses', 'cats', 'pineapples']), "pineapples");
  })

  it("returns null when the array of strings is empty", function() {
    var myLongest = new longestString;
    assert.equal(myLongest.findLongest([]), null);
  })

  it("returns an error if any of the values is not a number", function() {
    var myLongest = new longestString;
    assert.equal(myLongest.findLongest(['Boudi', 'kitty', 5]), "This only works with words.");
    assert.equal(myLongest.findLongest(['Boudi', 'kitty', ['squee', 'human']]), "This only works with words.");
    assert.equal(myLongest.findLongest(['Boudi', 'kitty', {name: 'squee', type: 'human'}]), "This only works with words.");
  })
})
