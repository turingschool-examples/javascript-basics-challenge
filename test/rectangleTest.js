const assert = require('chai').assert
const area = require('../rectangle')

describe('rectangle functions', function() {
  context('with area', function() {
    it('it can calculate area', function() {
      var rectangle = {width: 5, height: 6}
      assert.equal(area(rectangle), 30)
    })
  })
})
