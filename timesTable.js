function timesTable(number) {
	rowNumber = 1;
	for(var i = 1; i <= number; i++) {
		var row = ""
		for(var j = 1; j <= number; j++) {
			row += (j * rowNumber) + " "
		}
		console.log(row);
		rowNumber++;
	}
}

module.exports = timesTable;