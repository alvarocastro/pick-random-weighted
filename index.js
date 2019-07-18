'use strict';
module.exports = (data) => {
	// Split input into two separate arrays of values and weights.
	const values = data.map(d => d[0]);
	const weights = data.map(d => d[1]);

	
	let acc = 0;
	const sum = weights.reduce((acc, el) => acc + el, 0);
	const weightsSum = weights.map(el => (acc = el + acc));
	const rand = Math.random() * sum;

	return values[weightsSum.filter(el => el <= rand).length];
};
