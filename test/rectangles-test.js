const assert = require('chai').assert
const rectangles = require('../rectangles')

describe('rectangle tests', function() {
  context('math trig', function(){
    it('can compute the area of a rectangle', function(){
      var rectangle1 = {width: 10, height: 20};
      var rectangle2 = {width: 5, height: 2};
      assert.equal(rectangles.area(rectangle1), 200)
      assert.equal(rectangles.area(rectangle2), 10)
    });

    it('can compute the perimeter of a rectangle', function(){
      var rectangle1 = {width: 10, height: 20};
      var rectangle2 = {width: 5, height: 2};
      assert.equal(rectangles.perimeter(rectangle1), 60)
      assert.equal(rectangles.perimeter(rectangle2), 14)
    });

    it('can compute the diagonal of a rectangle', function(){
      var rectangle1 = {width: 4, height: 2};
      assert.equal(rectangles.diagonal(rectangle1), Math.sqrt(20) )
    });

    it('can decide if the rectangle is a square', function(){
      var rectangle1 = {width: 4, height: 4};
      var rectangle2 = {width: 4, height: 2};
      assert.isTrue(rectangles.isSquare(rectangle1))
      assert.isFalse(rectangles.isSquare(rectangle2))
    });
  });
});
