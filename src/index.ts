// custom type
interface IRange {
  start: number | Date
  end: number | Date
}

// overloading
function isRangeOverlap(r1: number[], r2: number[], isExclusive?: boolean): boolean
function isRangeOverlap(r1: Date[], r2: Date[], isExclusive?: boolean): boolean

function isRangeOverlap(r1: IRange, r2: IRange, isExclusive?: boolean): boolean

function isRangeOverlap(x1: number, x2: number, y1: number, y2: number, isExclusive?: boolean): boolean
function isRangeOverlap(x1: Date, x2: Date, y1: Date, y2: Date, isExclusive?: boolean): boolean

// implementation
function isRangeOverlap(
  p1: number | Date | number[] | Date[] | IRange,
  p2: number | Date | number[] | Date[] | IRange,
  p3?: number | Date | boolean,
  p4?: number | Date | boolean,
  p5?: boolean,
): boolean {
  let x1
  let x2
  let y1
  let y2
  let isExclusive = false

  if (Array.isArray(p1) && Array.isArray(p2)) {
    // number[], Date[]
    x1 = p1[0]
    x2 = p1[1]
    y1 = p2[0]
    y2 = p2[1]
    isExclusive = p3 === true
  } else if (p3 === undefined) {
    // range, force convert
    p1 = p1 as IRange
    p2 = p2 as IRange

    x1 = p1.start
    x2 = p1.end
    y1 = p2.start
    y2 = p2.end
    isExclusive = p3 === true
  } else {
    // number, Date
    x1 = p1
    x2 = p2
    y1 = p3 || p1 // hack
    y2 = p4 || p2 // hack
    isExclusive = p5 === true
  }

  return isExclusive ? x1 < y2 && y1 < x2 : x1 <= y2 && y1 <= x2
}

export { isRangeOverlap }
