"use strict"

function solveEquation(a, b, c) {
	const arr = [];

	const d = b ** b - 4 * a * c;

	if (d === 0) {

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


let P = percent / 12 / 100;
let S = amount - contribution;
let n = countMonths;


let res = S * (P + (P / (((1 + P)**n) - 1))).toFixed(7);
let num = Number(res);
let sym = num * countMonths;
return sym
}


console.log(calculateTotalMortgage(10,0,50000,12))