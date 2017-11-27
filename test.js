var Methods = require('./rectangle');
var TriangleStuff = require('./triangle');
var area = Methods.area;
var perimeter = Methods.perimeter;
var diagonal = Methods.diagonal;
var isSquare = Methods.isSquare;
var isTriangle = TriangleStuff.isTriangle;

var assert = require('assert');
describe('Rectangle', function() {
  describe('#area()', function() {
    it('should return area of a rectangle', function(){
      var rectangle = {width: 2, height: 5};
      assert.equal(10, area(rectangle));
    });
  });
});

describe('Rectangle', function() {
  describe('#perimeter()', function() {
    it('should return perimeter of a rectangle', function(){
      var rectangle = {width: 2, height: 5};
      assert.equal(14, perimeter(rectangle));
    });
  });
});

describe('Rectangle', function() {
  describe('#diagonal()', function() {
    it('should return diagonal of a rectangle', function(){
      var rectangle = {width: 3, height: 4};
      assert.equal(5, diagonal(rectangle));
    });
  });
});

describe('Rectangle', function() {
  describe('#isSquare()', function() {
    it('should return false if rectangle is not a square', function(){
      var rectangle = {width: 2, height: 5}
      assert.equal(false, isSquare(rectangle));
    });
    it('should return true if rectangle is a square', function(){
      var rectangle = {width: 5, height: 5}
      assert.equal(true, isSquare(rectangle));
    });
  });
});

describe('Triangle', function() {
  describe('#isTriangle()', function() {
    it('should return false if any of the sides are 0', function(){
      assert.equal(false, isTriangle(1,1,0));
    });
  });
  describe('#isTriangle()', function() {
    it('should return false if all of the sides are 0', function(){
      assert.equal(false, isTriangle(0,0,0));
    });
  });
  describe('#isTriangle()', function() {
    it('should return false if any of the sides are negative', function(){
      assert.equal(false, isTriangle(1,1,-1));
    });
  });
});