var assert = require('chai').assert
var area = require('../lib/rectangle')

describe('Rectangle', function(){
  it('calculate area', function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(area(rectangle), 200)
  })
})
