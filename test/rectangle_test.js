const assert = require('chai').assert
const area = require('../source/rectangle')

describe('rectangle calculations', function() {
  it('can return the area of a rectangle', function(){
    let rectangleOne = {width: 20, height: 30}
    let rectangleTwo = {width: 50, height: 10}
    assert.equal(area(rectangleOne), 600)
    assert.equal(area(rectangleTwo), 500)
  })

})

// area(rectangle) - returns the area of the rectangle
// perimeter(rectangle) - returns the perimeter of the rectangle
// diagonal(rectangle) - returns the length of the rectangle's diagonal
// isSquare(rectangle) - returns true if the rectangle is a square and false otherwise
