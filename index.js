'use strict';

const pick = function (data) {
	if (!Array.isArray(data)) {
		throw new TypeError('Expected an Array as the first argument');
	}

	// Split input into two separate arrays of values and weights.
	const values = data.map(d => d[0]);
	const weights = data.map(d => d[1]);

	// Will contain the sum of all weights
	let sum = 0;
	// Will contain an array of each weight accumilating the sum of previous weights
	const accumulatedWeights = [];
	let weight;

	for (weight of weights) {
		sum += weight;
		accumulatedWeights.push(sum);
	}

	const rand = pick.random() * sum;
	const value = values[accumulatedWeights.filter(element => element <= rand).length];

	return value;
};

pick.random = function () {
	/* istanbul ignore next */
	return Math.random();
};

module.exports = pick;
