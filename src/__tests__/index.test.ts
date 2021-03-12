import { isRangeOverlap } from '../index'

describe('isRangeOverlap, number', () => {
  it('is overlapping', () => {
    // overlap
    expect(isRangeOverlap(1, 10, 2, 12)).toBeTruthy()

    // subset of each other
    expect(isRangeOverlap(1, 10, 2, 8)).toBeTruthy()

    // floating number
    expect(isRangeOverlap(1, 10.98, 10.98, 12)).toBeTruthy()

    // at boundary
    // at boundary, isExclusive is not provided
    expect(isRangeOverlap(1, 10, 10, 12)).toBeTruthy()

    // at boundary, isExclusive = false
    expect(isRangeOverlap(1, 10, 10, 12, false)).toBeTruthy()
  })

  it('is not overlapping', () => {
    // not overlap
    expect(isRangeOverlap(100, 200, 201, 300)).toBeFalsy()

    // at boundary, isExclusive = true
    expect(isRangeOverlap(1, 10, 10, 12, true)).toBeFalsy()
  })
})

describe('isRangeOverlap, Date', () => {
  it('is overlapping', () => {
    // overlap
    expect(
      isRangeOverlap(
        new Date(1615452500000),
        new Date(1615452800000),
        new Date(1615452700000),
        new Date(1615452900000),
      ),
    ).toBeTruthy()

    // subset of each other
    expect(
      isRangeOverlap(
        new Date(1615452500000),
        new Date(1615452800000),
        new Date(1615452600000),
        new Date(1615452800000),
      ),
    ).toBeTruthy()

    // at boundary
    // at boundary, isExclusive is not provided
    expect(
      isRangeOverlap(
        new Date(1615452500000),
        new Date(1615452600000),
        new Date(1615452600000),
        new Date(1615452800000),
      ),
    ).toBeTruthy()

    // at boundary, isExclusive = false
    expect(
      isRangeOverlap(
        new Date(1615452500000),
        new Date(1615452600000),
        new Date(1615452600000),
        new Date(1615452800000),
        false,
      ),
    ).toBeTruthy()
  })

  it('is not overlapping', () => {
    // not overlap
    expect(
      isRangeOverlap(
        new Date(1615452500000),
        new Date(1615452700000),
        new Date(1615452800000),
        new Date(1615452900000),
      ),
    ).toBeFalsy()

    // at boundary, isExclusive = true
    expect(
      isRangeOverlap(
        new Date(1615452500000),
        new Date(1615452600000),
        new Date(1615452600000),
        new Date(1615452800000),
        true,
      ),
    ).toBeFalsy()
  })
})

describe('isRangeOverlap, array of number(s)', () => {
  it('is overlapping', () => {
    // overlap
    expect(isRangeOverlap([1, 10], [2, 12])).toBeTruthy()

    // subset of each other
    expect(isRangeOverlap([1, 10], [2, 8])).toBeTruthy()

    // floating number
    expect(isRangeOverlap([1, 10.98], [10.98, 12])).toBeTruthy()

    // at boundary
    // at boundary, isExclusive is not provided
    expect(isRangeOverlap([1, 10], [10, 12])).toBeTruthy()

    // at boundary, isExclusive = false
    expect(isRangeOverlap([1, 10], [10, 12], false)).toBeTruthy()
  })

  it('is not overlapping', () => {
    // not overlap
    expect(isRangeOverlap([100, 200], [201, 300])).toBeFalsy()

    // at boundary, isExclusive = true
    expect(isRangeOverlap([1, 10], [10, 12], true)).toBeFalsy()
  })
})

describe('isRangeOverlap, array of Date(s)', () => {
  it('is overlapping', () => {
    // overlap
    expect(
      isRangeOverlap(
        [new Date(1615452500000), new Date(1615452800000)],
        [new Date(1615452700000), new Date(1615452900000)],
      ),
    ).toBeTruthy()

    // subset of each other
    expect(
      isRangeOverlap(
        [new Date(1615452500000), new Date(1615452800000)],
        [new Date(1615452600000), new Date(1615452800000)],
      ),
    ).toBeTruthy()

    // at boundary
    // at boundary, isExclusive is not provided
    expect(
      isRangeOverlap(
        [new Date(1615452500000), new Date(1615452600000)],
        [new Date(1615452600000), new Date(1615452800000)],
      ),
    ).toBeTruthy()

    // at boundary, isExclusive = false
    expect(
      isRangeOverlap(
        [new Date(1615452500000), new Date(1615452600000)],
        [new Date(1615452600000), new Date(1615452800000)],
        false,
      ),
    ).toBeTruthy()
  })

  it('is not overlapping', () => {
    // not overlap
    expect(
      isRangeOverlap(
        [new Date(1615452500000), new Date(1615452700000)],
        [new Date(1615452800000), new Date(1615452900000)],
      ),
    ).toBeFalsy()

    // at boundary, isExclusive = true
    expect(
      isRangeOverlap(
        [new Date(1615452500000), new Date(1615452600000)],
        [new Date(1615452600000), new Date(1615452800000)],
        true,
      ),
    ).toBeFalsy()
  })
})

describe('isRangeOverlap, "range" type', () => {
  it('is overlapping', () => {
    // overlap
    expect(isRangeOverlap({ start: 1, end: 10 }, { start: 2, end: 12 })).toBeTruthy()

    // subset of each other
    expect(isRangeOverlap({ start: 1, end: 10 }, { start: 2, end: 8 })).toBeTruthy()

    // floating number
    expect(isRangeOverlap({ start: 1, end: 10.98 }, { start: 10.98, end: 12 })).toBeTruthy()

    // at boundary
    // at boundary, isExclusive is not provided
    expect(isRangeOverlap({ start: 1, end: 10 }, { start: 10, end: 12 })).toBeTruthy()

    // at boundary, isExclusive = false
    expect(isRangeOverlap({ start: 1, end: 10 }, { start: 10, end: 12 }, false)).toBeTruthy()
  })

  it('is not overlapping', () => {
    // not overlap
    expect(isRangeOverlap({ start: 100, end: 200 }, { start: 201, end: 300 })).toBeFalsy()

    // at boundary, isExclusive = true
    expect(isRangeOverlap({ start: 1, end: 10 }, { start: 10, end: 12 }, true)).toBeFalsy()
  })
})
