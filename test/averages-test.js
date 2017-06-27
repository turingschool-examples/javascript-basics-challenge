var assert = require('chai').assert;
const array = require('../averages')

describe("Array extensions", function() {
  it(".total totals input", function(){
    var numbers = [1, 2, 3, 4, 5]
    assert.equal(numbers.total(), 15)
  })

  it(".mean returns mean of array", function() {
    var numbers = [1, 2, 3, 4, 5, 22]
    assert.equal(numbers.mean(), 6.17)
  })

  it(".median finds middle value", function() {
    var evenNumbers = [1, 20, 3, 11, 5, 22]
    var oddNumbers = [20, 3, 11, 5, 22]
    assert.equal(evenNumbers.median(), 8)
    assert.equal(oddNumbers.median(), 11)
  })

  it(".mode finds most repeated value", function() {
    var withMode = [2, 2, 2, 3, 3, 6, 9]
    var withoutMode = [1, 2, 3]
    assert.equal(withMode.mode(), 2)
    // assert.equal(withoutMode.mode, "N/A")
  })

})
