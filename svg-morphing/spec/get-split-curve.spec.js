const { getSplitCurves } = require('../morphing/get-split-curves');

describe('getSplitCurves should return coordinates - provided by split-curve-at - as two command lines arrays such as ["C", "CP1.x", "CP1.y", "CP2.x", "CP2.y", "EndPoint.x", "EndPoint.y"] ', () => {

  let coords = [ 20, 80, 24, 88, 33, 91, 44, 90, 61, 87, 82, 74, 100, 50 ]

  it ('should return an object of 2 arrays', () => {
    let result = getSplitCurves(coords);
    for (property in result) {
      expect(Array.isArray(result[property])).toBe(true);
    }
  });

  it ('should return arrays of length 7', () => {
    let result = getSplitCurves(coords);
    for (property in result) {
      expect(result[property].length).toEqual(7);
    }
  });

  it ('should return arrays with letter C @ index 0', () => {
    let result = getSplitCurves(coords);
    for (property in result) {
      expect(result[property][0]).toBe('C');
    }
  });

});