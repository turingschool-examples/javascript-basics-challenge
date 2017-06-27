function isTriangle(num1, num2, num3){
  var triangle;
  var count = 0;
 if(num1 + num2 + num3 == 0){ 
    triangle = false
    console.log(triangle + ", because a triangle can't have 0 length sides")
  }
  else if(num1 < 0 || num2<0 || num3<0){ 
    triangle = false
    console.log(triangle + ", because a triangle can't have negative length sides")
  }
  else if(num1 == num2 && num1 == num3 && num2 == num3){ 
    triangle = true
    console.log(triangle + ", an equilateral triangle")
  }
  else if( num1+num2 > num3 ){
    triangle = true
    count +=1
    console.log(triangle + ", a right triangle")
  }
  
  else if(num1 + num2 < num3){ 
    triangle = false
    console.log(triangle + ",no such triangle exists")
  }

  return triangle
}
 //isTriangle(2, 2, 3)
//isTriangle(0, 0, 0)
isTriangle(-4, 4, 5)

module.exports = isTriangle
