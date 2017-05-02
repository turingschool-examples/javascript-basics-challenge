const assert = require('chai').assert;
const rectangle = require('../scripts/rectangles');
var pry = require('pryjs');

describe('rectangle', function() {
  context('area', function(){
    it('it can calculate area for a rectangle', function() {
      var r = {width: 30, height: 13}

      assert.equal(rectangle.area(r), 390)
    });
  });

  context('perimeter', function(){
    it('returns the perimeter of the rectangle', function() {
      var r = {width: 20, height: 10}

      assert.equal(rectangle.perimeter(r), 60)
    });
  });

  context('diagonal', function(){
    it('returns the diagonal of the rectangle', function() {
      var r = {width: 20, height: 10}

      assert.equal(rectangle.diagonal(r), 22.360679774997898)
    });
  });

  context('isSquare', function() {
    it('returns true if the rectangle is a square', function() {
      var r = {width: 20, height: 20}

      assert.isTrue(rectangle.isSquare(r))
    });

    it('returns false if the rectangle is not a square', function() {
      var r = {width: 20, height: 10}

      assert.isFalse(rectangle.isSquare(r))
    });
  });
});
