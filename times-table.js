
function timesTable(num) {
    let numbers = [];
    let string = '';
    for (let i = 1; i < num + 1; i ++ ){
        for(let j = 1 ; j < num + 1; j++){
            numbers.push(i * j);
        }
    }
    for (let n = 0; n < num; n ++){
        string += numbers.splice(0, num).join(' ') + '\n';
    }
    return string
}

module.exports = timesTable;