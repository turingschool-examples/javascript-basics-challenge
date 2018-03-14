const assert = require('chai').assert
const rect = require('../js/rect.js')
const area = rect.area
const perimeter = rect.perimeter
const diagonal = rect.diagonal
const isSquare = rect.isSquare


describe('area', function() {
    it('gets area of rect', function(){
      var rectangle = {width: 10, height: 20}
      var rectangle1 = {width: 5, height: 20}
      
      assert.equal(area(rectangle), 200)

      assert.equal(area(rectangle1), 100)
    })
    it('gets perimeter of rect', function(){
      var rectangle = {width: 10, height: 20}
      var rectangle1 = {width: 5, height: 20}
      
      assert.equal(perimeter(rectangle), 60)

      assert.equal(perimeter(rectangle1), 50)
    })
    it('gets diagonal of rect', function(){
      var rectangle = {width: 10, height: 20}
      var rectangle1 = {width: 32, height: 20}
      
      assert.equal(diagonal(rectangle), 7)

      assert.equal(diagonal(rectangle1), 10)
    })
    it('returns true if is square', function(){
      var rectangle = {width: 10, height: 20}
      var rectangle1 = {width: 20, height: 20}
      
      assert.equal(isSquare(rectangle), false)

      assert.equal(isSquare(rectangle1), true)
    })
})
