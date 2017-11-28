function area(rectangle) {
    return rectangle.width * rectangle.height;
}

function perimeter(rectangle) {
    return (rectangle.width + rectangle.height) * 2;
}

function diagonal(rectangle) {
    return Math.sqrt(Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2));
}

function isSquare(rectangle) {
    return(rectangle.width === rectangle.height);
}

// const area = (width, height) => width * height;
//
// const perimeter = (width, height) => (width + height) * 2;
//
// const diagional = (width, height) => Math.sqrt(a^2 + b^2);
//
// const isSquare = (width, height) => (width == height);

module.exports = {area: area, perimeter: perimeter, diagonal: diagonal, isSquare: isSquare}