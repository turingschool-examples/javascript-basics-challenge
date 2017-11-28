const assert = require('chai').assert;
const pry = require('pryjs')
const factorial = require('../lib/fatorials')

describe('Factoral', function(){
  it('can find factorial for number', function() {
    var num = 5
    assert.equal(factorial(num), 120)
  });
})
