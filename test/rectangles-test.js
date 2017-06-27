const assert = require('chai').assert
const rectangleFunctions = require("../rectangles")


describe('rectangles', function(){
  context('is able to perform math on a rectangle', function (){
    var rectangle = {width: 10, height: 20};
    it('finds the area of a rectangle', function(){
      rectangleFunctions.area(rectangle);
      assert.equal(rectangleFunctions.area(rectangle), 200)
    })

    it('finds the perimeter of a rectangle', function(){
      rectangleFunctions.perimeter(rectangle);
      assert.equal(rectangleFunctions.perimeter(rectangle), 60)
    })

    it('finds the diagonal of a rectangle', function(){
      rectangleFunctions.diagonal(rectangle);
      assert.equal(rectangleFunctions.diagonal(rectangle), 22.36)
    })

    it('finds if a rectangle is a square', function(){
      rectangleFunctions.isSquare(rectangle);
      assert.isFalse(rectangleFunctions.isSquare(rectangle))
      var square = {width: 15, height: 15}
      assert.isTrue(rectangleFunctions.isSquare(square))
    })

  })
})
