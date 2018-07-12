const sequence = (element) => {
	var elemUse = element.toString();
	var output = 0;
	var elemNum = 0;

	console.log("a0 = " + element);
	while (output != element) {
		elemNum += 1;
		process.stdout.write("a" + elemNum + "= ");
		let squareSum = 0;
		for(var i = 0; i < elemUse.length; i++){
			squareSum += Math.pow(elemUse.charAt(i), 2);
			if(i < elemUse.length -1){
				process.stdout.write(elemUse.charAt(i) + "^2 + ");
			} else {
				process.stdout.write(elemUse.charAt(i) + "^2 = ");
			}
		}
		console.log(squareSum);
		if(squareSum != element){
			elemUse = squareSum.toString();
		} else if(squareSum == element) {
			output = element;
			console.log(squareSum + " has already occured before (a0)");
		}
	}
	
};

console.log(sequence(16));