
const area = function(rectangle){
return rectangle.width * rectangle.height
}

const perimeter = function(rectangle){
    return (rectangle.width*2) + (rectangle.height*2)
}
const diagonal = function(rectangle){
    return Math.floor(Math.sqrt( (rectangle.width*2) + (rectangle.height*2)));
}
const isSquare = function(rectangle){
    if(rectangle.width === rectangle.height){
    return true
    }
    else 
    return false
}

module.exports = {
    area,
    perimeter,
    diagonal,
    isSquare
 }