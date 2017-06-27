const Rectangle = require('../lib/rectangle')
const assert = require('chai').assert

describe("Rectangle", () => {
  const rectangle = new Rectangle()

  it("#area", () => {
    let rec        = {width: 10, height: 20}
    let assertion  = rectangle.area(rec)
    let expected   = 200

    assert.deepEqual(assertion, expected)
  })

  it("#perimeter", () => {
    let rec        = {width: 10, height: 20}
    let assertion  = rectangle.perimeter(rec)
    let expected   = 60

    assert.equal(assertion, expected)
  })

  it("#diagonal", () => {
    let rec        = {width: 10, height: 20}
    let assertion  = rectangle.diagonal(rec)
    let expected   = 22.360679774997898

    assert.deepEqual(assertion, expected)
  })

  it("#isSquare", () => {
    let rec        = {width: 10, height: 20}
    let assertion  = rectangle.isSquare(rec)
    let expected   = false

    assert.deepEqual(assertion, expected)
  })
})
