"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let d = b ** b - 4 * a * c;

	if (d = 0) {

		let x = -b / (2 * a);
		arr.push(x);
	} else if (d > 0) {
		let x = (-b + Math.sqrt(d)) / (2 * a);
		let y = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x, y)
	}
	return arr;

}

console.log(solveEquation(0, 1, 2))

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

}