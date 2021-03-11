import { isRangeOverlap } from '../index'

describe('isRangeOverlap, number', () => {
  it('is overlapping', () => {
    expect(isRangeOverlap(1, 10, 2, 12)).toBeTruthy()
  })

  it('is subset of each other', () => {
    expect(isRangeOverlap(1, 10, 2, 8)).toBeTruthy()
  })

  it('is overlapping at boundary', () => {
    expect(isRangeOverlap(1, 10, 10, 12)).toBeTruthy()
  })

  it('is overlapping with floating number', () => {
    expect(isRangeOverlap(1, 10.98, 10.98, 12)).toBeTruthy()
  })

  it('is not overlapping', () => {
    expect(isRangeOverlap(100, 200, 201, 300)).toBeFalsy()
  })
})

describe('isRangeOverlap, Date', () => {
  it('is overlapping', () => {
    expect(
      isRangeOverlap(
        new Date(1615452500000),
        new Date(1615452800000),
        new Date(1615452700000),
        new Date(1615452900000),
      ),
    ).toBeTruthy()
  })

  it('is subset of each other', () => {
    expect(
      isRangeOverlap(
        new Date(1615452500000),
        new Date(1615452800000),
        new Date(1615452600000),
        new Date(1615452800000),
      ),
    ).toBeTruthy()
  })

  it('is overlapping at boundary', () => {
    expect(
      isRangeOverlap(
        new Date(1615452500000),
        new Date(1615452800000),
        new Date(1615452800000),
        new Date(1615452900000),
      ),
    ).toBeTruthy()
  })

  it('is not overlapping', () => {
    expect(
      isRangeOverlap(
        new Date(1615452500000),
        new Date(1615452700000),
        new Date(1615452800000),
        new Date(1615452900000),
      ),
    ).toBeFalsy()
  })
})
describe('isRangeOverlap, array of number(s)', () => {
  it('is overlapping', () => {
    expect(isRangeOverlap([1, 10], [2, 12])).toBeTruthy()
  })

  it('is subset of each other', () => {
    expect(isRangeOverlap([1, 10], [2, 8])).toBeTruthy()
  })

  it('is overlapping at boundary', () => {
    expect(isRangeOverlap([1, 10], [10, 12])).toBeTruthy()
  })

  it('is overlapping with floating number', () => {
    expect(isRangeOverlap([1, 10.98], [10.98, 12])).toBeTruthy()
  })

  it('is not overlapping', () => {
    expect(isRangeOverlap([100, 200], [201, 300])).toBeFalsy()
  })
})

describe('isRangeOverlap, array of Dates', () => {
  it('is overlapping', () => {
    expect(
      isRangeOverlap(
        [new Date(1615452500000), new Date(1615452800000)],
        [new Date(1615452700000), new Date(1615452900000)],
      ),
    ).toBeTruthy()
  })

  it('is subset of each other', () => {
    expect(
      isRangeOverlap(
        [new Date(1615452500000), new Date(1615452800000)],
        [new Date(1615452600000), new Date(1615452800000)],
      ),
    ).toBeTruthy()
  })

  it('is overlapping at boundary', () => {
    expect(
      isRangeOverlap(
        [new Date(1615452500000), new Date(1615452800000)],
        [new Date(1615452800000), new Date(1615452900000)],
      ),
    ).toBeTruthy()
  })

  it('is not overlapping', () => {
    expect(
      isRangeOverlap(
        [new Date(1615452500000), new Date(1615452700000)],
        [new Date(1615452800000), new Date(1615452900000)],
      ),
    ).toBeFalsy()
  })
})

describe('isRangeOverlap, "range" type', () => {
  it('is overlapping', () => {
    expect(isRangeOverlap({ start: 1, end: 10 }, { start: 2, end: 12 })).toBeTruthy()
  })

  it('is subset of each other', () => {
    expect(isRangeOverlap({ start: 1, end: 10 }, { start: 2, end: 8 })).toBeTruthy()
  })

  it('is overlapping at boundary', () => {
    expect(isRangeOverlap({ start: 1, end: 10 }, { start: 10, end: 12 })).toBeTruthy()
  })

  it('is overlapping with floating number', () => {
    expect(isRangeOverlap({ start: 1, end: 10.98 }, { start: 10.98, end: 12 })).toBeTruthy()
  })

  it('is not overlapping', () => {
    expect(isRangeOverlap({ start: 100, end: 200 }, { start: 201, end: 300 })).toBeFalsy()
  })
})
