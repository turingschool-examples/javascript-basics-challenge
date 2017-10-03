const assert = require('chai').assert;
const expect = require('chai').expect;
const area = require("../rectangles/area");
const diagonal = require("../rectangles/diagonal");
const isSquare = require("../rectangles/isSquare");
const perimeter = require("../rectangles/perimeter");

describe("rectangle function tests", function(){
  context("area", function(){
    it("can calculate area", function(){
      var rectangle = {width: 10, height: 10}
      var rectangle2 = {width: 6, height: 8}
      assert.equal(100, area(rectangle))
      assert.equal(48, area(rectangle2))
    })
    it("only responds to numbers", function(){
      var rectangle = {width: "a", height: "b"}
      expect(area("a", "b")).to.be.NaN;
    })
  });
  context("perimeter", function(){
    it("can calculate perimeter", function(){
      var rectangle = {width: 10, height: 25};
      assert.equal(70, perimeter(rectangle));
    })
  })
  context("diagonal", function(){
    it("can calculate correct diagonal length", function(){
      var rectangle = {width: 3, height: 4};
      var rectangle2 = {width: 24, height: 7}
      assert.equal(5, diagonal(rectangle));
      assert.equal(25, diagonal(rectangle2));
    })
    it("returns a rounded decimal for complex hypotenuse", function(){
      var rectangle = {width: 12, height: 15};
      assert.equal(19, diagonal(rectangle));
    })
  });
  context("isSquare", function(){
    it("can determine if a hash is a square or not", function(){
      var rectangle = {width: 12, height: 15};
      var rectangle2 = {width: 4, height: 4};
      assert.isTrue(isSquare(rectangle2));
      assert.isFalse(isSquare(rectangle));
    })
  });
});
