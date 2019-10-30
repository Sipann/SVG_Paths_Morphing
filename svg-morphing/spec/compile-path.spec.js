const { compilePath } = require('../morphing/compile-path');

describe('compilePath should transform items of a merged-paths-array by splitting curves of labeled path at other path bounding points angles', () => {

  let mergedPaths = [ 
    { command: [ 'C', 67, 80, 80, 67, 80, 50 ],
      endingPoint: [ 80, 50 ],
      endingAngle: 0,
      origin: 'path1' },
    { command: [ 'C', 77, 70, 90, 50, 90, 30 ],
      endingPoint: [ 90, 30 ],
      endingAngle: 26.57,
      origin: 'path0' },
    { command: [ 'C', 90, 19, 81, 10, 70, 10 ],
      endingPoint: [ 70, 10 ],
      endingAngle: 63.43,
      origin: 'path0' },
    { command: [ 'C', 59, 10, 50, 19, 50, 30 ],
      endingPoint: [ 50, 30 ],
      endingAngle: 90,
      origin: 'path0' },
    { command: [ 'C', 80, 33, 67, 20, 50, 20 ],
      endingPoint: [ 50, 20 ],
      endingAngle: 90,
      origin: 'path1' },
    { command: [ 'C', 50, 19, 41, 10, 30, 10 ],
      endingPoint: [ 30, 10 ],
      endingAngle: 116.57,
      origin: 'path0' },
    { command: [ 'C', 37.91, 20, 27.85, 26.57, 23.04, 36.48 ],
      endingPoint: [ 23.04, 36.48 ],
      endingAngle: 153.37,
      origin: 'path1' },
    { command: [ 'C', 19, 10, 10, 19, 10, 30 ],
      endingPoint: [ 10, 30 ],
      endingAngle: 153.43,
      origin: 'path0' },
    { command: [ 'C', 21.09, 40.51, 20, 45.09, 20, 50 ],
      endingPoint: [ 20, 50 ],
      endingAngle: 180,
      origin: 'path1' },
    { command: [ 'C', 20, 67, 33, 80, 50, 80 ],
      endingPoint: [ 50, 80 ],
      endingAngle: 270,
      origin: 'path1' },
    { command: [ 'C', 10, 50, 23, 70, 50, 90 ],
      endingPoint: [ 50, 90 ],
      endingAngle: 270,
      origin: 'path0' } 
    ];

  let ref = { x: 60, y: 60 };

  
  it('should keep all targeted path command lines', () => {
    let label = 'path1';
    let result = compilePath(mergedPaths, label, ref);
    let filtered = result.filter(item => item.origin === label);
    expect(filtered.length).toBe(5);
  });

  it('should return an array of length 8 - 5 with origin path1 + 3 with origin path1-projected', () => {
    let label = 'path1';
    let result = compilePath(mergedPaths, label, ref);
    expect(result.length).toBe(8);
  });

  it('should filter out path0 points at angles 90, 153.43 and 270  since they already have a match on path1', () => {
    let label = 'path1';
    let result = compilePath(mergedPaths, label, ref);
    let outs = [90, 153.43, 270];
    outs.forEach(out => {
      let isInArray = result.findIndex(item => item.origin !== label && item.endingAngle === out);
      expect(isInArray).toEqual(-1);
    })
  });

  it('should return an array of lengh 8 - 6 with origin path0 + 2 with origin path0-projected', () => {
    let label = 'path0';
    let result = compilePath(mergedPaths, label, ref);
    expect(result.length).toBe(8);
  });

  it('should filter out path1 points at angles 90, 153.37 and 270  since they already have a match on path1', () => {
    let label = 'path1';
    let result = compilePath(mergedPaths, label, ref);
    let outs = [90, 153.37, 270];
    outs.forEach(out => {
      let isInArray = result.findIndex(item => item.origin !== label && item.endingAngle === out);
      expect(isInArray).toEqual(-1);
    });
  });

});