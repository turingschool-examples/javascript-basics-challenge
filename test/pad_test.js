const assert = require('chai').assert
const pad = require('../pad').pad;


describe("array object returns a padded function", function(){
  context("pad method", function(){
    it("when passed 0 returns the array", function() {
      var array = [1, 2, 3, 4, 5]
      var result = array.pad(0)
      assert.deepEqual(result, array);
    });

    it("when passed more than the array index returns the array", function() {
      var array = [1, 2, 3]
      var result = array.pad(5)
      var expected = [1, 2, 3, null, null]
      console.log(result)
      assert.deepEqual(result, expected);
    });
  });
});