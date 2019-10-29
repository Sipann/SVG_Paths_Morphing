const { splitCurveAt } = require('../morphing/split-curve-at');

describe('splitCurveAt should split a cubic bezier curve in two @ provided position', () => {

  let position = 0.4;
  // coordinates a of curve defined as 'M 20 80 C 30 100 70 90 100 50'
  let x1 = 20;
  let y1 = 80;
  let x2 = 30;
  let y2 = 100;
  let x3 = 70;
  let y3 = 90;
  let x4 = 100;
  let y4 = 50;

  let customEquality = (first, second) => {
    return first - second < 1;
  };

  it('should return an array of length equal to 13', () => {
    expect(splitCurveAt(position, x1, y1, x2, y2, x3, y3, x4, y4).length).toBe(14);
  });

  it('should return x1 and y1 as first coordinates', () => {
    let result = splitCurveAt(position, x1, y1, x2, y2, x3, y3, x4, y4);
    expect(result[0]).toEqual(x1);
    expect(result[1]).toEqual(y1);
  });

  it('should return x4 and y4 as last coordinates', () => {
    let result = splitCurveAt(position, x1, y1, x2, y2, x3, y3, x4, y4);
    expect(result[12]).toEqual(x4);
    expect(result[13]).toEqual(y4);
  });

  it('should return x and y coordinates of split point at index 6 and 7', () => {
    jasmine.addCustomEqualityTester(customEquality);
    let result = splitCurveAt(position, x1, y1, x2, y2, x3, y3, x4, y4);
    expect(result[6]).toEqual(43.8);
    expect(result[7]).toEqual(89.6);
  });

});