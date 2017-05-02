const assert = require('chai').assert
const {arrayTotal, arrayMean, arrayMode} = require('../lib/average')

describe('return handrolled array methods', function() {
  it('give total', function() {
    var array = [1,2,2]
    assert.equal(arrayTotal(array), 5);
  })

  it('give mean', function() {
    var array = [2,2,2]
    assert.equal(arrayMean(array), 2);
  })

  it('give mean', function() {
    var array = [2,2,2]
    assert.equal(arrayMean(array), 2);
  })

  it('give median', function() {
    var array = [4,6,6]
    assert.equal(arrayMode(array), 6);
  })
})
