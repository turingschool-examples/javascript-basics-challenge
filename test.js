var Methods = require('./rectangle');
var TriangleStuff = require('./triangle');
var Averages = require('./averages');
var area = Methods.area;
var perimeter = Methods.perimeter;
var diagonal = Methods.diagonal;
var isSquare = Methods.isSquare;
var isTriangle = TriangleStuff.isTriangle;
var total = Averages.total;
var mean = Averages.mean;
var median = Averages.median;
var mode = Averages.mode;

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
  
  describe('#isTriangle()', function() {
    it('should return false if a side is equal to the other sides together', function(){
      assert.equal(false, isTriangle(1,1,2));
    });
  });
  
  describe('#isTriangle()', function() {
    it('should return false if a side is greater to the other sides together', function(){
      assert.equal(false, isTriangle(1,1,10));
    });
  });
  
  describe('#isTriangle()', function() {
    it('should return true if all the sides are the same', function(){
      assert.equal(true, isTriangle(1,1,1));
    });
  });
});

describe('Averages', function() {
  describe('#total()', function() {
    it('should return a number from a single number array', function(){
      assert.equal(1, total([1]));
    });
    it('should return a the sum from a number array', function(){
      assert.equal(6, total([1,2,3]));
    });
  });
  describe('#mean()', function() {
    it('should return a number from a single number array', function(){
      assert.equal(1, mean([1]));
    });
    it('should return a the mean from a number array', function(){
      assert.equal(2, mean([1,2,3]));
    });
  });
  
  describe('#median()', function() {
    it('should return a number from a single number array', function(){
      assert.equal(1, median([1]));
    });
    it('should return a the median from a odd number array', function(){
      assert.equal(2, median([1,1,2,5,10]));
    });
    it('should return the "lower" median from a even number array', function(){
      assert.equal(2, median([1,1,2,3,5,10]));
    });
  });
  
  describe('#mode()', function() {
    it('should return a number from a single number array', function(){
      assert.equal(1, mode([1]));
    });
    it('should return a the mode from an odd (count) array', function(){
      assert.equal(1, mode([1,1,2,5,10]));
    });
    it('should return the "lower" mode from an even (count) array', function(){
      assert.equal(3, mode([1,1,2,3,3,3]));
    });
  });
});