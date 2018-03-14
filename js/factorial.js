
const factorial = function(number){
    if(number > 0){
        var array =[]
        for(var i = number-1 ;i > 0;i--){
            array.push(number-i)
        }
        array.push(number)

        var factorial = array.reduce((acc,sum)=>{
                return acc*= sum
        })

        return factorial
    }
}


    module.exports = factorial
     