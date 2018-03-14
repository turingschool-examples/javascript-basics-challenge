
const timesTable = function(number){
    var array =[]
        for(var i = number-1 ;i > 0;i--){
        array.push(number-i)
        }
        array.push(number)
        return array
        for(var x = 0; x<=number-2;x++){
            var arr = []
            for(var i=0; i <= 0 ; i++){
                arr.push(array[x+1])
                arr.push(array[x+1]*array[i+1])
                arr.push(array[x+1]*array[i+2])
                arr.push(array[x+1]*array[i+3])
                arr.push(array[x+1]*array[i+4])       
                return arr              
            }  
        }
 }
 
 timesTable(5)
     module.exports = timesTable
      