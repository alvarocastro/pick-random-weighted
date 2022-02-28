import test from 'ava';
import { pick, Picker } from './index.js';

// Mock random number generation.
const randomGen = function (sequence = []) {
	return function () {
		const n = sequence.shift();
		sequence.push(n);
		return n;
	};
};

test('Should return ’undefined’ with empty lists', t => {
	t.assert(pick([]) === undefined);
});

test('Should work with lists of one item', t => {
	const picker = new Picker(randomGen([0.1, 0.6, 0.3, 0.4]));
	const data = [
		['a', 1],
	];

	t.assert(picker.pick(data) === 'a');
	t.assert(picker.pick(data) !== 'b');
});

test('Should work with lists of multiple items', t => {
	const picker = new Picker(randomGen([0.1, 0.6, 0.3, 0.4]));
	const data = [
		['a', 2],
		['b', 2],
		['c', 4],
		['d', 3],
	];

	t.is(picker.pick(data), 'a');
	t.is(picker.pick(data), 'c');
	t.is(picker.pick(data), 'b');
	t.is(picker.pick(data), 'c');
});

test('Should validate input', t => {
	t.throws(() => pick(), {
		instanceOf: TypeError,
		message: 'Expected an Array as the first argument',
	});
	t.throws(() => pick('bad'), {
		instanceOf: TypeError,
		message: 'Expected an Array as the first argument',
	});
});
