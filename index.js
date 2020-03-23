'use strict';

const pick = function (data) {
	if (!Array.isArray(data)) {
		throw new TypeError('Expected an Array as the first argument');
	}

	// Split input into two separate arrays of values and weights.
	const values = data.map(d => d[0]);
	const weights = data.map(d => d[1]);

	let acc = 0;
	const sum = weights.reduce((acc, element) => acc + element, 0);
	const weightsSum = weights.map(element => {
		acc = element + acc;
		return acc;
	});
	const rand = pick.random() * sum;

	return values[weightsSum.filter(element => element <= rand).length];
};

pick.random = function () {
	/* istanbul ignore next */
	return Math.random();
};

module.exports = pick;
