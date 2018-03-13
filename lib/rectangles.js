const area = (rectangle) => {
  return rectangle.height * rectangle.width
}

const perimeter = (rectangle) => {
  return rectangle.height * 2 + rectangle.width * 2
}

const diagonal = (rectangle) => {
  return (rectangle.height ** 2 + rectangle.width ** 2) ** (1/2)
}

const isSquare = (rectangle) => {
  if (rectangle.height === rectangle.width) {
    return true
  } else {
    return false
  }
}

module.exports = [area, perimeter, diagonal, isSquare]
