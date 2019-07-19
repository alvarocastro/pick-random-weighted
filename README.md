# pick-random-weighted

Pick a random item from a weighted list.

## Install

```
npm install pick-random-weighted
```

## Usage

```
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
