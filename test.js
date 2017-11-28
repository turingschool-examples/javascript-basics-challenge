var Methods = require('./rectangle');
var TriangleStuff = require('./triangle');
var Averages = require('./averages');
var Factorial = require('./factorial');
var Longest = require('./longestString')
var Times = require('./timesTable')
var Random = require('./guesser')
var area = Methods.area;
var perimeter = Methods.perimeter;
var diagonal = Methods.diagonal;
var isSquare = Methods.isSquare;
var isTriangle = TriangleStuff.isTriangle;
var total = Averages.total;
var mean = Averages.mean;
var median = Averages.median;
var mode = Averages.mode;
var factorial = Factorial.factorial;
var longestString = Longest.longestString;
var timesTable = Times.timesTable;
var randomNum = Random.randomNum
var GuessingGame = Random.GuessingGame

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

describe('Factorial', function() {
  describe('#factorial()', function() {
    it('should return 1', function(){
      assert.equal(1, factorial(0));
    });
    it('should return a factorial', function(){
      assert.equal(1, factorial(1));
    });
    it('should return a the factorial', function(){
      assert.equal(6, factorial(3));
    });
  });
});


describe('Array', function() {
  describe('#longestString()', function() {
    it('should return a null for an empty array', function(){
      assert.equal(null, longestString([]));
    });
    it('should return a string for an array with just one string', function(){
      assert.equal("cat", longestString(["cat"]));
    });
    it('should the longest String', function(){
      assert.equal("horse", longestString(["cat", "horse"]));
    });
    it('should return a the first of the longest Strings', function(){
      assert.equal("llama", longestString(["llama","cat", "horse"]));
    });
  });
});

describe('Times Table', function() {
  describe('#timesTable()', function() {
    it('should print a times table for 1', function(){
      assert.equal("1", timesTable(1));
    });
    it('should print a times table for 5', function(){
      assert.equal("1,2,3\n2,4,6\n3,6,9", timesTable(5));
    });
  });
});

describe('Guessing Game', function() {
  describe('GuessingGame#guess', function() {
    it('should return You got it!', function(){
      game = new GuessingGame(1);
      assert.equal("You got it!", game.guess(1));
    });
  });
});

