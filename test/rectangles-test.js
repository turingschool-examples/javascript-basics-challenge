const assert = require('chai').assert;
const pry = require('pryjs')
const rectangle = {width: 10, height: 20};
const area = require('../lib/rectangles/area');
const perimeter = require('../lib/rectangles/perimeter');
const diagonal = require('../lib/rectangles/diagonal');
const isSquare = require('../lib/rectangles/isSquare');
describe('calculate properties of a rectangle', function() {
  context('with given width and height', function() {
    it('returns the area of the rectangle', function() {

      assert(area(rectangle), 200);
    });

    it('returns the perimeter', function() {

      assert(perimeter(rectangle), 60);
    });

    it('returns the length of diagonal', function() {

      assert(diagonal(rectangle), 22.36);
    });

    it('returns true if square', function() {

      assert.isFalse(isSquare(rectangle));
    });
  });
});
