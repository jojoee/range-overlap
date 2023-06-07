# range-overlap

[![Version - npm](https://img.shields.io/npm/v/range-overlap.svg)](https://www.npmjs.com/package/range-overlap)
[![License - npm](https://img.shields.io/npm/l/range-overlap.svg)](http://opensource.org/licenses/MIT)
![continuous integration](https://github.com/jojoee/range-overlap/workflows/continuous%20integration/badge.svg?branch=main)
![runnable](https://github.com/jojoee/range-overlap/workflows/runnable/badge.svg?branch=main)
![release](https://github.com/jojoee/range-overlap/workflows/release/badge.svg?branch=main)
[![Codecov](https://img.shields.io/codecov/c/github/jojoee/range-overlap.svg)](https://codecov.io/github/jojoee/range-overlap)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Greenkeeper badge](https://badges.greenkeeper.io/jojoee/range-overlap.svg)](https://greenkeeper.io/)
[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fjojoee%2Frange-overlap%2Fmain)](https://dashboard.stryker-mutator.io/reports/github.com/jojoee/range-overlap/main)

Are 2 ranges overlap ?, [demo page](https://jojoee.github.io/range-overlap/example/).

[![Demo image](./example/range-overlap-demo.png)](https://jojoee.github.io/range-overlap/example/)

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
// integer and floating numbers as a param
isRangeOverlap(1, 10, 2, 12) // true
isRangeOverlap(1, 10, 2, 8) // true
isRangeOverlap(100, 200, 201, 300) // false

// Date as a param
isRangeOverlap( // true
  new Date(1615452500000),
  new Date(1615452800000),
  new Date(1615452700000),
  new Date(1615452900000),
)

// array of numbers or Date(s) as a param
isRangeOverlap([1, 10], [2, 12]) // true
isRangeOverlap( // true
  [new Date(1615452500000), new Date(1615452800000)],
  [new Date(1615452700000), new Date(1615452900000)]
)

// custom type as a param
isRangeOverlap( // true
  { start: 1, end: 10 },
  { start: 2, end: 12 }
)

// support is-exclusive param
isRangeOverlap(1, 10, 10, 12, true) // false
isRangeOverlap( // false
  new Date(1615452500000),
  new Date(1615452600000),
  new Date(1615452600000),
  new Date(1615452800000),
  true
)
isRangeOverlap([1, 10], [10, 12], true) // false
isRangeOverlap( // false
  [new Date(1615452500000), new Date(1615452600000)],
  [new Date(1615452600000), new Date(1615452800000)],
  true
)
isRangeOverlap({ start: 1, end: 10 }, { start: 10, end: 12 }, true) // false
```

## Algorithm

The detailed logic is described [here](https://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap), but in summary is explained below.
```
2 cases that will not overlapping
case1) |----range1----|  |----range2----|
       x1             x2 y1             y2

case2) |----range2----|  |----range1----|
       y1             y2 x1             x2

so isNotOverlap
= case1) or case2)
= x2 < y1 || y2 < x1

due to isOverlap
= ~isNotOverlap
= ~(x2 < y1 || y2 < x1)
= x2 >= y1 && y2 >= x1
= x1 <= y2 && y1 <= x2
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

