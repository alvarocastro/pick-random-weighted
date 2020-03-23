const test = require('ava');
const pick = require('.');

// Mock random number generation.
let randomSequence = [];
pick.random = function () {
	const n = randomSequence.shift();
	randomSequence.push(n);
	return n;
};

test('Should return ’undefined’ with empty lists', t => {
	t.assert(pick([]) === undefined);
});

test('Should work with lists of one item', t => {
	randomSequence = [0.1, 0.6, 0.3, 0.4]; // Reset random generation.
	const data = [
		['a', 1]
	];

	t.assert(pick(data) === 'a');
	t.assert(pick(data) !== 'b');
});

test('Should work with lists of multiple items', t => {
	randomSequence = [0.1, 0.6, 0.3, 0.4]; // Reset random generation.
	const data = [
		['a', 2],
		['b', 2],
		['c', 4],
		['d', 3]
	];

	t.assert(pick(data) === 'a');
	t.assert(pick(data) === 'c');
});

test('Should validate input', t => {
	t.throws(() => pick(), {
		instanceOf: TypeError,
		message: 'Expected an Array as the first argument'
	});
	t.throws(() => pick('bad'), {
		instanceOf: TypeError,
		message: 'Expected an Array as the first argument'
	});
});
