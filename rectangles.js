
function area(rectangle) {
    return rectangle.width * rectangle.height;
}

function perimeter(rectangle) {
    return (rectangle.width + rectangle.height) * 2;
}

module.exports = {
    area,
    perimeter
};