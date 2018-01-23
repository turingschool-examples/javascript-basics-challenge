var expect = require('chai').expect;
var string = require('../app/longest-string')

describe("Finds the longest string", function() {
  it("finding the string with the most characters", function(){
      var array = string.longestString(['horses', 'cats', 'pineapples']);
      var empty = string.longestString([]);

      expect(array).to.deep.equal('pineapples');
      expect(empty).to.deep.equal(null);
  });
});
