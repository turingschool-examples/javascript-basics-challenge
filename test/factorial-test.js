const factorial = require('../lib/factorial')
const expect = require('chai').expect

describe('factorial function', function(){
  it('returns the total factorial of the number', function(){
    expect(factorial(4)).to.eq(24)
    expect(factorial(5)).to.eq(120)
    expect(factorial(0)).to.eq(1)
  })
})
