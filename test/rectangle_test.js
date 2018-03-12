const assert = require('chai').assert
const rectangle = require('../source/rectangle.js')
const area = rectangle.area
const perimeter = rectangle.perimeter
const diagonal = rectangle.diagonal


describe('rectangle calculations', function() {

  it('can return the area of a rectangle', function(){
    var rectangleOne = {width: 20, height: 30}
    var rectangleTwo = {width: 50, height: 10}
    assert.equal(area(rectangleOne), 600)
    assert.equal(area(rectangleTwo), 500)
  })

  it('can return the perimeter of a rectangel', function(){
    var rectangleOne = {width: 20, height: 30}
    var rectangleTwo = {width: 50, height: 10}
    assert.equal(perimeter(rectangleOne), 100)
    assert.equal(perimeter(rectangleTwo), 120)
  })

  it('can return the diagonal of a rectangle', function(){
    var rectangleOne = {width: 20, height: 30}
    var rectangleTwo = {width: 50, height: 10}
    assert.equal(diagonal(rectangleOne), 36)
    assert.equal(diagonal(rectangleTwo), 50)
  })
})



// area(rectangle) - returns the area of the rectangle
// perimeter(rectangle) - returns the perimeter of the rectangle
// diagonal(rectangle) - returns the length of the rectangle's diagonal
// isSquare(rectangle) - returns true if the rectangle is a square and false otherwise
