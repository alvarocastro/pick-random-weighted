# pick-random-weighted

[![NPM](https://img.shields.io/npm/v/pick-random-weighted)](https://www.npmjs.com/package/pick-random-weighted)
[![Build status](https://img.shields.io/github/workflow/status/alvarocastro/pick-random-weighted/build)](https://github.com/alvarocastro/pick-random-weighted/actions?query=workflow%3Abuild)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability/alvarocastro/pick-random-weighted)](https://codeclimate.com/github/alvarocastro/pick-random-weighted/maintainability)
[![Coverage status](https://img.shields.io/coveralls/github/alvarocastro/pick-random-weighted)](https://coveralls.io/github/alvarocastro/pick-random-weighted?branch=master)
[![Bundle size](https://img.shields.io/bundlephobia/min/pick-random-weighted)](https://bundlephobia.com/result?p=pick-random-weighted)
[![Code style: XO](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Release: Semantic](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Simple, fast and lightweight function to pick a random element from a weighted array.

- [Install](#install)
- [Usage](#usage)
- [Randomness](#random-number-generation)
- [Contributing](#contributing)
- [Support](#support)

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

## Contributing

Contributions are always welcome! Please run `npm test` beforehand to ensure everything is ok.

## Support

If you use this package please consider starring it :)
