const assert = require('chai').assert;
const myFunctions = require('../lib/triangle')

describe('triangles',  function()  {
  it ('identifies valid triangles', function()  {
    assert(myFunctions.isTriangle(2,3,4))
  })

  context ('it identifies invalid triangles', function()  {
    it ('identifies invalid dimensions', function()  {
      assert.isNotOk(false, myFunctions.isTriangle(1,1,4))
    })

    it ('identifies invalidity of zero dimemsnions', function() {
      assert.isNotOk(false, myFunctions.isTriangle(0,0,0))
    })

    it ('identifies invalidity of negative dimensions', function() {
      assert.isNotOk(false, myFunctions.isTriangle(-2,1,5))
    })
  })

})
