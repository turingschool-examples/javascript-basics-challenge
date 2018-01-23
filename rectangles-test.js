const pry = require('pryjs');
const assert = require('chai').assert;
const area = require('./rectangles').area;
const perimeter = require('./rectangles').perimeter;
const diagonal = require('./rectangles').diagonal;
const isSquare = require('./rectangles').isSquare;

describe('Rectangle Tests', function() {
  context('can find area', function() {
    it('once', function() {
      var rectangle = {width: 10, height: 20};
      var aRea = area(rectangle);

      assert.equal(200, aRea);
    });

    it('twice', function() {
      var rectangle = { width: 546, height: 84 };
      var aRea = area(rectangle);

      assert.equal(45864, aRea);
    });
  });

  context('can find perimeter', function() {
    it('once', function() {
      var rectangle = { width: 10, height: 20 };
      var peRimeter = perimeter(rectangle);

      assert.equal(60, peRimeter);
    });

    it('twice', function() {
      var rectangle = { width: 234, height: 82 };
      var peRimeter = perimeter(rectangle);

      assert.equal(632, peRimeter);
    });
  });

  context('can find diagonal', function() {
    it('once', function() {
      var rectangle = { width: 2, height: 2 };
      var diaGonal = diagonal(rectangle);

      assert.equal(Math.sqrt(8), diaGonal);
    });
  });

  context('can tell if square', function() {
    it('if square', function() {
      var sQuare = { width: 20, height: 20 }

      assert.equal(true, isSquare(sQuare));
    });

    it('if not square', function() {
      var notSquare = { width: 30, height: 400 }

      assert.equal(false, isSquare(notSquare));
    });
  });
});
