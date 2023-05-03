"use strict"

function solveEquation(a, b, c) {
	const roots = [];

	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant === 0) {

		let x = -b / (2 * a);
		roots.push(x);
	} else if (discriminant > 0) {
		let x = (-b + Math.sqrt(discriminant)) / (2 * a);
		let y = (-b - Math.sqrt(discriminant)) / (2 * a);
		roots.push(x, y)
	}
	return roots;

}

console.log(solveEquation(0, 1, 2))

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	Number(percent)
	Number(contribution)
	Number(amount)
	Number(countMonths)


	if  (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return amountMonth;
	}

let paymentMonth = percent / 12 / 100;
let difference = amount - contribution;
let month = countMonths;


let amount = difference * (paymentMonth + (paymentMonth / (((1 + paymentMonth)** month) - 1))); //.toFixed(7);
let amountMonth = amount * countMonths;
amountMonth = amountMonth.toFixed(2);
isNaN(amountMonth)
return amountMonth
}


console.log(calculateTotalMortgage(10,0,50000,12))