class Picker {
	/**
	 * @param {Function} [randomFn] Random number generator.
	 */
	constructor (randomFn) {
		if (typeof randomFn === 'function') {
			this.random = randomFn;
		}
	}

	/**
	 * Generates a random number.
	 * @return {Number}
	 */
	random () {
		return Math.random();
	}

	/**
	 * Pick a random value based on its weight.
	 * @param {Array} data Array of values.
	 * @return {Mixed}
	 */
	pick (data) {
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

		const rand = this.random() * sum;
		const value = values[accumulatedWeights.filter(element => element <= rand).length];

		return value;
	}
}

/**
 * All-in-one function that picks a random value based on its weight.
 * @param {Array} data Array of values.
 * @return {Mixed}
 */
const pick = function (data) {
	const picker = new Picker();

	return picker.pick(data);
};

export default pick;

export { pick, Picker };
