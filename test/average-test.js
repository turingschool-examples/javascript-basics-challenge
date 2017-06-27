const assert = require('chai').assert
const average = require('../lib/average')

it('it can sum the elements of an array', function(){
  var array1 = [1, 2, 3, 4]
  var array2 = [0, 8, 3, 2, 34, 5]

  assert.equal(array1.total(), 10)
  assert.equal(array2.total(), 52)
})

it('it can provide the average of the elements of an array', function(){
  var array1 = [1, 2, 3, 4]
  var array2 = [2, 8, 3, 2, 34, 5]

  assert.equal(array1.mean(), 2.5)
  assert.equal(array2.mean(), 9)
})

it('it can provide the median of the elements of an array', function(){
  var array1 = [1, 2, 3, 4]
  var array2 = [3, 2, 8, 2, 34]

  assert.equal(array1.median(), 2.5)
  assert.equal(array2.median(), 3)
})

it('it can provide mode of the elements of an array', function() {

  var array1 = [1, 2, 3, 4, 4]
  var array2 = [2, 8, 3, 2, 34, 8]

  assert.isObject(array1.mode())
  assert.deepEqual(array1.mode(), {4: 2})
  assert.isObject(array2.mode())
  assert.deepEqual(array2.mode(), {2: 2, 8: 2})
})
