const assert = require('chai').assert
const longestString = require('../source/longest_string')

describe('Longest string calculations', function() {
  it('can find the longest string in an array', function() {
    arrayOne = ['One', 'Two', 'Three', 'Four']
    arrayTwo = ['Tulips', 'Sunflowers', 'Daisies', 'Roses']
    assert.equal(longestString(arrayOne), 'Three')
    assert.equal(longestString(arrayTwo), 'Sunflowers')
  })
})
