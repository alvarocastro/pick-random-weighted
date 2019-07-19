# pick-random-weighted [![Build Status](https://travis-ci.org/alvarocastro/pick-random-weighted.svg?branch=master)](https://travis-ci.org/alvarocastro/pick-random-weighted)

Pick a random item from a weighted list.

## Install

```bash
npm install pick-random-weighted
```

## Usage

```js
const pick = require('pick-random-weighted');

const colors = [
	['Red', 30],
	['Green', 20],
	['Blue', 40]
];

const color = pick(colors);
```

### pick(values)

Returns a value.

#### values

Type: `Array`

List of values to pick from.

Each element should be provided in the format `[value, weight]`.

## Random number generation

By default, and to keep a small footprint, the library uses `Math.random()` to generate the random number to pick the value.

If you need you can define a custom function to generate random values, you can create a function that returns fixed values to use on your unit tests or implement a more specialized library like [random-js](https://www.npmjs.com/package/random-js).

### Using a custom random generator

By overwriting `pick.random` you can define your custom function.
> Remember the returned value should be a number within the [0,1) range.

```js
const pick = require('pick-random-weighted');

pick.random = function () {
	return 0.3;
};

const colors = [
	['Red', 30],
	['Green', 20],
	['Blue', 40]
];

const color = pick(colors);
// Will always return 'Green'
```
