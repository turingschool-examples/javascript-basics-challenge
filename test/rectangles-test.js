const assert = require('chai').assert
const Rectangles = require('../lib/rectangles')

describe('Rectangles Methods', function() {
  it("returns the correct area", function() {
    var rectangle = {width: 10, height: 20}
    var expected = Rectangles.area(rectangle)
    
    assert.isFunction(Rectangles);
    assert.isObject(new Rectangles(rectangle))
    assert.equal(200, )
  })
})
