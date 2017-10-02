const assert = require('chai').assert
const longestString = require('../../lib/longest-string/longest-string.js')

describe('longestString functionality', function() {
  context('longestString function', function(){
    it('it can determine the longestString of an array of strings', function(){
      let testArray = ["Cat", "in", "the", "Hat", "Homeboys"];
      let answer = longestString(testArray);

      assert.equal(answer, "Homeboys")

      testArray = [];
      answer = longestString(testArray);

      assert.equal(answer, null)

      testArray = ["a", "b", "asldhfjasdhasdhasdjg", "d"];
      answer = longestString(testArray);

      assert.equal(answer, "asldhfjasdhasdhasdjg")


      testArray = ["biggest", "small", "tiny", "bitty"];
      answer = longestString(testArray);

      assert.equal(answer, "biggest")
    })
  })
})
