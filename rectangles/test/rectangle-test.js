const assert = require('chai').assert
const rectangles = require('../rectangle')

const rectangle = { width: 3, height: 4 }

describe('rectangle peroperty', function() {
    it('can find the area', function(){
      assert.equal(rectangles.area(rectangle), 12)
    })

    it('can find the perimeter', function(){
      assert.equal(rectangles.perimeter(rectangle), 14)
    })
    
    it('can find the diagonal', function(){
      assert.equal(rectangles.diagonal(rectangle), 5)
    })

    it('can determine if it is a square', function(){
      assert.equal(rectangles.isSquare(rectangle), false)
    })
})