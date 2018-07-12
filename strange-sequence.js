// const sequence = (element) => {
// 	var elemUse = element;
// 	var output = 0;
// 	elemNum = 0;

// 	while (output != element) {
// 		console.log("a" + elemNum + "= ");
// 		elemNum += 1;
// 		let squareSum = 0;
// 		for(var i = 0; i < elemUse.length; i++){
// 			squareSum += charAt(i)^2;
// 			if(i < elem.length -1){
// 				console.log(charAt(i) + "^2 + ");
// 			} else {
// 				console.log(charAt(i) + "^2 = ");
// 			}
// 		}
// 		console.log(squareSum);
// 		if(squareSum != element){
// 			elemUse == squareSum;
// 		} else if(squareSum == element) {
// 			output == element;
// 		}
// 	}
// 	console.log(", which has already occured before (a0)")
// }


const sequence = (element) => {
	var elemUse = element.toString();
	var output = 0;
	var elemNum = 0;

	console.log("a0 = " + element)
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
		process.stdout.write(squareSum);
		if(squareSum != element){
			elemUse = squareSum.toString();
		} else if(squareSum == element) {
			output = element;
		}
	}
	process.stdout.write(", which has already occured before (a0)");
};

console.log(sequence(16));