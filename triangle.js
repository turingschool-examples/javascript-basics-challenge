const pry = require('pryjs')

const isPositive = function(int) {
    return int > 0
}

const hasHypot = function(sides) {
    let sorted = sides.sort(function(a, b) {
        return a - b
    })
    return (sorted[2] ** 2) === (sorted[1] ** 2) + (sorted[0] ** 2)
}

const isIsoceles = function(sides) {
    return (sides[0] === sides[1] && sides[1] === sides[2])
}


const isTriangle = function(sideA, sideB, sideC) {
    return isPositive(sideA) &&
        isPositive(sideB) &&
        isPositive(sideC) &&
        (
            hasHypot([sideA, sideB, sideC]) ||
            isIsoceles([sideA, sideB, sideC])
        )
}


module.exports = isTriangle