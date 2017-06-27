const assert = require('chai').assert
const longestString = require('../lib/longestString')

it('it returns null if input is empty', function(){
  assert.equal(longestString([]), null)
})

it('it returns longest string if not empty', function(){
  var array1 = ['horses', 'cats', 'pineapples']
  var array2 = ['boo', 'booo', 'bo']

  assert.isString(longestString(array1))
  assert.equal(longestString(array1), 'pineapples')
  assert.isString(longestString(array2))
  assert.equal(longestString(array2), 'booo')
})
