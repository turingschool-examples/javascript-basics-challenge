const assert = require('chai').assert
const longestString = require('../longestString.js')

describe('longestString()', () => {
  it("it returns pineapples for ['horses', 'cats', 'pineapples']", () => {
    assert.equal(longestString(['horses', 'cats', 'pineapples']), 'pineapples')
  })

  it("it returns ccc for ['bb', 'a', 'ccc', 'dd']", () => {
    assert.equal(longestString(['bb', 'a', 'ccc', 'dd']), 'ccc')
  })
})

// Write a function `longestString` which takes as its input an `Array`
// of `Strings` and returns the longest `String` in the `Array`.
//
// For example:
//
// ```javascript
// longestString(['horses', 'cats', 'pineapples']); // => "pineapples"
// ```
//
// If the input `Array` is empty `longestString` should return `null`.
