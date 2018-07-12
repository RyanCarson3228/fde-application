const sequence = (element) => {
	var elemUse = element;
	var output = 0;
	elemNum = 0;

	while (output != element) {
		console.log("a" + elemNum + "= ");
		elemNum += 1;
		let squareSum = 0;
		for(var i = 0; i < elemUse.length; i++){
			squareSum += charAt(i)^2;
			if(i < elem.length){
				console.log(charAt(i) + "^2 + ");
			} else {
				console.log(charAt(i) + "^2 = ");
			}
		}
		console.log(squareSum);
		if(squareSum != element){
			elemUse == squareSum;
		} else if(squareSum == element) {
			output == element;
		}
	}
	console.log(", which has already occured before (a0)")
}

console.log(sequence(16));