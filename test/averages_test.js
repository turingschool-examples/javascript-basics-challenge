const assert = require('chai').assert
const averages = require('../source/averages.js')
const total = averages.total

describe('average calculations', function() {

  it('can return the total of an array of numbers', function(){
    var arrayOne = [4, 6, 10, 99, 4]
    var arrayTwo = [1, 2, 3, 4, 5]
    assert.equal(total(arrayOne), 123)
    assert.equal(total(arrayTwo), 15)
  })

})
