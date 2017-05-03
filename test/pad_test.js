const assert = require('chai').assert
const pad = require('../pad').pad;


describe("array object returns a padded function", function(){
  context("pad method", function(){
    it("when passed 0 returns the array", function() {
      var array = [1, 2, 3, 4, 5]
      var result = array.pad(0)
      assert.deepEqual(array.pad(0), array);
    });
  });
});