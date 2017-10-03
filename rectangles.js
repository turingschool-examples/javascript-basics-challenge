
function area(rectangle) {
    return rectangle.width * rectangle.height;
}

function perimeter(rectangle) {
    return (rectangle.width + rectangle.height) * 2;
}

function diagonal(rectangle) {
    return Math.sqrt(Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2))
}

function isSquare(rectangle) {
    return rectangle.width === rectangle.height
}
module.exports = {
    area,
    perimeter,
    diagonal,
    isSquare
};