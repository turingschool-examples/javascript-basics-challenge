var assert = require('chai').assert
var pads = require('../lib/pad').pads

describe ('pads', function(){
  it('pads mcpadders', function(){
    var list = [(1,2,3), null]
    assert.equal(pads(2,5),[1,2,3,null,null])
  })
})
