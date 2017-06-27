const assert = require('chai').assert
const rectangle = require('../lib/rectangle')

it('it can find the area of a rectangle', function(){
  rect1 = {width: 10, height: 20}
  rect2 = {width: 5, height: 6}

  assert.equal(rectangle.area(rect1), 200)
  assert.equal(rectangle.area(rect2), 30)
})

it('it can find the perimeter of a rectangle', function(){
  rect1 = {width: 10, height: 20}
  rect2 = {width: 5, height: 6}

  assert.equal(rectangle.perimeter(rect1), 60)
  assert.equal(rectangle.perimeter(rect2), 22)
})

it('it can find the diagonal of a rectangle', function(){
  rect1 = {width: 3, height: 4}
  rect2 = {width: 5, height: 12}

  assert.equal(rectangle.diagonal(rect1), 5)
  assert.equal(rectangle.diagonal(rect2), 13)
})

it('it can determine if a rectangle is a square', function(){
  rect1 = {width: 3, height: 4}
  rect2 = {width: 5, height: 5}

  assert.equal(rectangle.isSquare(rect1), false)
  assert.equal(rectangle.isSquare(rect2), true)
})
