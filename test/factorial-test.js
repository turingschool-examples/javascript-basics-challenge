const assert = require('chai').assert;
const factorial = require('../factorial')

describe("factorial", function(){
  it('can determine the factorial of a number', function(){
    assert.deepEqual(factorial(4), 24)
    assert.deepEqual(factorial(0), 1)
  })
})
