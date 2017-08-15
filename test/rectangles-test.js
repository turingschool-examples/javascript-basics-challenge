const assert = require('chai').assert
const rectangles = require('../rectangles')

describe('Rectangle properties', function() {
  // beforeEach(function() {
  //   let rectangle = {width: 10, height: 20};
  // })

  context('.area()', function() {
    it('can calculate the area of a rectangle', function() {
      let rectangle = {width: 10, height: 20};
      assert.equal(rectangles.area(rectangle), 200)
    })
  });

  context('.perimeter()', function() {
    it('can calculate the perimeter of a rectangle', function() {
      let rectangle = {width: 10, height: 20};
      assert.equal(rectangles.perimeter(rectangle), 60)
    })
  });

  context('.diagonal()', function() {
    it('can calculate the diagonal of a rectangle', function() {
      let rectangle = {width: 10, height: 20};
      assert.equal(rectangles.diagonal(rectangle), 22.360679774997898)
    })
  });

  context('.isSquare()', function() {
    it('can calculate the isSquare of a rectangle', function() {
      let rectangle = {width: 10, height: 20};
      assert.isFalse(rectangles.isSquare(rectangle))
    })
  });
})