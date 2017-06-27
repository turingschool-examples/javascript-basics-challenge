const assert = require('chai').assert
const area = require('./rectangle').area
const perimeter = require('./rectangle').perimeter
const diagonal = require('./rectangle').diagonal
const isSquare = require('./rectangle').isSquare

describe('rectangle functionality', function() {
  context('area function', function(){
    it('it can return area of the rectangle', function(){
      assert.deepEqual(area({width: 10, height: 20}), 200)
    })
  })

  context('perimeter function', function(){
    it('it can return perimeter of the rectangle', function(){
      assert.deepEqual(perimeter({width: 10, height: 20}), 60)
    })
  })

context('diagonal function', function(){
    it('it can return diagonal of the rectangle', function(){
      assert.deepEqual(diagonal({width: 10, height: 20}), 22.360679774997898)
    })
  })

  context('isSqure function', function(){
    it('it can return isSqure of the rectangle', function(){
      assert.deepEqual(isSquare({width: 10, height: 20}), false)
    })
  })
})

