import { isRangeOverlap } from '../index'

describe('isRangeOverlap', () => {
  it('is overlapping', () => {
    expect(isRangeOverlap(1, 10, 2, 8)).toBeTruthy()
  })

  it('is overlapping at boundary', () => {
    expect(isRangeOverlap(1, 10, 10, 8)).toBeTruthy()
  })

  it('is overlapping with floating number', () => {
    expect(isRangeOverlap(1, 10.98, 10.98, 8)).toBeTruthy()
  })

  it('is not overlapping', () => {
    expect(isRangeOverlap(100, 200, 201, 300)).toBeFalsy()
  })
})

describe('isRangeOverlap, function overloading', () => {
  it('accepts number param', () => {
    expect(isRangeOverlap(1, 10, 2, 8)).toBeTruthy()
  })

  it('accepts Date param', () => {
    expect(isRangeOverlap(
      new Date(1615452715142),
      new Date(1615452800000),
      new Date(1615452800000),
      new Date(1615452900000)
    )).toBeTruthy()
  })

  it('accepts array of numbers param', () => {
    expect(isRangeOverlap([1, 10], [2, 8])).toBeTruthy()
  })

  it('accepts array of Date(s) param', () => {
    expect(isRangeOverlap(
      [new Date(1615452715142), new Date(1615452800000)],
      [new Date(1615452800000), new Date(1615452900000)],
    )).toBeTruthy()
  })

  it('accepts "range" param', () => {
    expect(isRangeOverlap(
      { start: 1, end: 2 },
      { start: 2, end: 8}
    )).toBeTruthy()
  })
})