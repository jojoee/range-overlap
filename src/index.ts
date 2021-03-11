// custom type
type range = {
  start: number|Date,
  end: number|Date
}

// overloading
function isRangeOverlap(x1: number, x2: number, y1: number, y2: number): boolean;
function isRangeOverlap(x1: Date, x2: Date, y1: Date, y2: Date): boolean;
function isRangeOverlap(r1: number[], r2: number[]): boolean;
function isRangeOverlap(r1: Date[], r2: Date[]): boolean;
function isRangeOverlap(r1: range, r2: range): boolean;

// implementation
function isRangeOverlap(
  p1: number|Date|number[]|Date[]|range, p2: number|Date|number[]|Date[]|range,
  p3?: number|Date, p4?: number|Date
): boolean {
  let x1
  let x2
  let y1
  let y2

  if (Array.isArray(p1) && Array.isArray(p2)) {
    // number[], Date[]
    x1 = p1[0]
    x2 = p1[1]
    y1 = p2[0]
    y2 = p2[1]

  } else if (p3 === undefined) {
    // range, force convert
    p1 = p1 as range
    p2 = p2 as range
 
    x1 = p1.start
    x2 = p1.end
    y1 = p2.start
    y2 = p2.end
  } else {
    // number, Date
    x1 = p1
    x2 = p2
    y1 = p3 || p1 // hack
    y2 = p4 || p2 // hack
  }

  return x1 <= y2 && y1 <= x2
}

export {
  isRangeOverlap
}
