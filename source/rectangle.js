pry = require('pryjs')

function area(rectangle) {
  return (Object.values(rectangle)[0]) * (Object.values(rectangle)[1])
}

module.exports = area

// > rectangleOne[Object.keys(rectangleOne)[0]]
// 20
// > rectangleOne[Object.keys(rectangleOne)[1]]
// 30
// > [Object.keys(rectangleOne)[1]]
// [ 'height' ]
// > [Object.values(rectangleOne)[1]]
// [ 30 ]
