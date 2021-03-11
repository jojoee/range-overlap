# range-overlap

[![Version - npm](https://img.shields.io/npm/v/range-overlap.svg)](https://www.npmjs.com/package/range-overlap)
[![License - npm](https://img.shields.io/npm/l/range-overlap.svg)](http://opensource.org/licenses/MIT)

![continuous integration](https://github.com/jojoee/range-overlap/workflows/continuous%20integration/badge.svg?branch=master)
![runnable](https://github.com/jojoee/range-overlap/workflows/runnable/badge.svg?branch=master)

Are 2 ranges overlap ?

## Installation

Install with `npm install range-overlap` then

```javascript
// CommonJS
const { isRangeOverlap } = require('range-overlap')

// ES6
import { isRangeOverlap } from "range-overlap"
```

## Example usage

```javascript
// integer and floating numbers
isRangeOverlap(1, 10, 2, 12) // true
isRangeOverlap(1, 10, 2, 8) // true
isRangeOverlap(100, 200, 201, 300) // false

// Date
isRangeOverlap(
  new Date(1615452500000),
  new Date(1615452800000),
  new Date(1615452700000),
  new Date(1615452900000)
)

// array of numbers or Date(s)
isRangeOverlap([1, 10], [2, 12])
isRangeOverlap(
  [new Date(1615452500000), new Date(1615452800000)],
  [new Date(1615452700000), new Date(1615452900000)]
)

// custom type
isRangeOverlap(
  { start: 1, end: 10 },
  { start: 2, end: 12 }
)
```

## TODO

- [ ] [demo] make it work with vanilla javascript `index.html`
- [ ] [demo] add demo page
- [ ] [CI] auto release with [semantic-release](https://github.com/semantic-release/semantic-release)
- [ ] [CI] run test coverage
- [ ] [CI] upload test coverage to "test report service" e.g. Codecov

## CMD

```bash
npm publish --dry-run
npm publish
npm run format && npm run lint && npm run test && npm run build
npm run version
```
