const { isRangeOverlap } = require('range-overlap')

console.log(isRangeOverlap(1, 10, 2, 12))
console.log(isRangeOverlap(
  new Date(1615452500000),
  new Date(1615452800000),
  new Date(1615452700000),
  new Date(1615452900000),
))
console.log(isRangeOverlap([1, 10], [2, 12]))
console.log(isRangeOverlap(
  { start: 1, end: 10 },
  { start: 2, end: 12 }
))
