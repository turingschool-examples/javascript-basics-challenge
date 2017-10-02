const assert = require('chai').assert
const Rectangle = require('./rectangles')

describe('rectangle calculations can be made', function() {
  context('when calling on area', function() {
    it('returns the area of a given rectangle', function() {
      var rectangle = { width: 6, height: 8 };
      assert.equal(Rectangle.area(rectangle), 48);
    });
  });

  context('when calling on permimeter', function() {
    it('returns the perimeter of a given rectangle', function() {
      var rectangle = { width: 5, height: 6 };
      assert.equal(Rectangle.perimeter(rectangle), 22);
    });
  });

  context('when calling on diagonal', function() {
    it('returns the diagonal of a given rectangle', function() {
      var rectangle = { width: 3, height: 4 };
      assert.equal(Rectangle.diagonal(rectangle), 5);
    });
  });

  context('when calling on isSquare', function() {
    it('returns a true or false response when given a rectangle', function() {
      var rectangle = { width: 10, height: 10 };
      assert.isTrue(Rectangle.isSquare(rectangle));
    });
  });
});
