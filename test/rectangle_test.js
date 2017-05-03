const assert = require('chai').assert

const area = require('../rectangle').area;
const perimeter = require('../rectangle').perimeter;
const diagonal = require('../rectangle').diagonal;
const isSquare = require('../rectangle').isSquare;

describe("rectangle object", function(){
  var rectangle = {width: 10, height: 20}
  context("area function", function(){
    it("takes rectangle as an argument and returns the area", function() {
      assert(area(rectangle), 200);
    });
  });

  context("perimeter function", function(){
    it("returns the perimeter", function() {
    assert(perimeter(rectangle), 60);
    });
  });

  context("diagonal function", function(){
    var rectangle_diagonal = {width: 3, height: 4}
    it("returns the diagonal", function() {
      assert(diagonal(rectangle_diagonal), 5);
    });
  });

  context("isSquare function", function(){
    var rectangle_square = {width: 4, height: 4}
    it("returns true if it's a square", function() {
      assert(isSquare(rectangle_square), true);
    });
  });
});
