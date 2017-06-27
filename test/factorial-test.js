const assert = require('chai').assert
const factorial = require('../lib/factorial')

it('it returns 1 for factorial of zero or one', function(){
  assert.equal(factorial(0), 1)
  assert.equal(factorial(1), 1)
})

it('it returns factorials for numbers above one', function(){
  assert.equal(factorial(2), 2)
  assert.equal(factorial(3), 6)
  assert.equal(factorial(4), 24)
  assert.equal(factorial(5), 120)
})
