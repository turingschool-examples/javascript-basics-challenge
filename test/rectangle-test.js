const assert = require('chai').assert
const area = require("../rectangles").area
const perimeter = require("../rectangles").perimeter
const diagonal = require("../rectangles").diagonal
const isSquare = require("../rectangles").isSquare



describe('Rectangles', function () {

  context('area function', function () {
    it('calculates Area', function () {
      assert.equal(area({ width: 10, height: 20 }), 200)
    })
  })
  
  context('perimeter function', function () {
    it('calculates Perimemter', function () {
      assert.equal(perimeter({ width: 10, height: 20 }), 60 )
    })
  })
  context('diagonal function', function () {
    it('calculates the Diagnonal', function () {
      assert.equal(diagonal({ width: 10, height: 20 }), 22.360679774997898
)
    })
  })
  context('isSquare function', function () {
    it('checks if the rectangle is a square', function () {
      assert.equal(isSquare({ width: 10, height: 20 }), false)
      assert.equal(isSquare({ width: 50, height: 50 }), true)
    })
  })

})

