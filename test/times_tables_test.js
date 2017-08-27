const assert = require('chai').assert
const timesTables = require('../lib/times_tables')

describe('Times tables maker', function() {

  it('can make times tables (0)', function() {
    var actual = timesTables.make(0)
    var expected = "cannot make table of 0"
     
    assert.equal(actual, expected)
  })

  it('can make times tables (1)', function() {
    var actual = timesTables.make(1)
    var expected = "cannot make table of 1"
     
    assert.equal(actual, expected)
  })

  it('can make times tables (2)', function() {
    var actual = timesTables.make(2)
    var expected = `1  2  \n2  4  `

    assert.equal(actual, expected)
  })

  it('can make times tables (3)', function() {
    var actual = timesTables.make(3)
    var expected = `1  2  3  \n2  4  6  \n3  6  9  `

    assert.equal(actual, expected)
  })

  it('can make times tables (4)', function() {
    var actual = timesTables.make(4)
    var expected = `1  2  3  4  \n2  4  6  8  \n3  6  9  12  \n4  8  12  16  `

    assert.equal(actual, expected)
  })
  
  it('can make times tables (5)', function() {
    var actual = timesTables.make(5)
    var expected = "1  2  3  4  5  \n2  4  6  8  10  \n3  6  9  12  15  \n4  8  12  16  20  \n5  10  15  20  25  "

    assert.equal(actual, expected)
  })
})
