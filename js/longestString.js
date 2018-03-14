
const longestString = function(array){
   var longest=  array.sort((a,b)=>{
        if(a.length > b.length){
            return -1
        }
        else
        {return 1}
    })
    return longest[0]
}

    module.exports = longestString
     