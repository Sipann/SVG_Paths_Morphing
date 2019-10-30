const { recomposePath } = require('../morphing/recompose-path');

describe('recomposePath should transform an array of command lines into a string fit for d attribute', () => {

  let startingPoint0 = [10, 30];
  let compiledArray0 = [ 
    { endingPoint: [ 80.125, 60 ],
      command: [ 'C', 63.5, 80, 73.5, 70, 80.13, 60 ],
      origin: 'path0-projected',
      endingAngle: 0 },
    { command: [ 'C', 86.75, 50, 90, 40, 90, 30 ],
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
    { command: [ 'C', 50, 19, 41, 10, 30, 10 ],
      endingPoint: [ 30, 10 ],
      endingAngle: 116.57,
      origin: 'path0' },
    { command: [ 'C', 19, 10, 10, 19, 10, 30 ],
      endingPoint: [ 10, 30 ],
      endingAngle: 153.43,
      origin: 'path0' },
    { endingPoint: [ 19.875, 60 ],
      command: [ 'C', 10, 40, 13.25, 50, 19.88, 60 ],
      origin: 'path0-projected',
      endingAngle: 180 },
    { command: [ 'C', 26.5, 70, 36.5, 80, 50, 90 ],
      endingPoint: [ 50, 90 ],
      endingAngle: 270,
      origin: 'path0' } 
  ];

  let startingPoint1 = [ 23.04, 36.48 ];
  let compiledArray1 = [ 
  { command: [ 'C', 67, 80, 80, 67, 80, 50 ],
    endingPoint: [ 80, 50 ],
    endingAngle: 0,
    origin: 'path1' },
  { endingPoint: [ 79.99940544366837, 49.80096489191055 ],
    command: [ 'C', 80, 49.93, 80, 49.87, 80, 49.8 ],
    origin: 'path1-projected',
    endingAngle: 26.57 },
  { endingPoint: [ 74.10323217584599, 31.780515081592238 ],
    command: [ 'C', 79.96, 42.93, 77.79, 36.73, 74.1, 31.78 ],
    origin: 'path1-projected',
    endingAngle: 63.43 },
  { command: [ 'C', 68.71, 24.55, 60.05, 20, 50, 20 ],
    endingPoint: [ 50, 20 ],
    endingAngle: 90,
    origin: 'path1' },
  { endingPoint: [ 40.352427368164065, 21.487232971191403 ],
    command: [ 'C', 46.6, 20, 43.36, 20.52, 40.35, 21.49 ],
    origin: 'path1-projected',
    endingAngle: 116.57 },
  { command: [ 'C', 32.67, 23.96, 26.5, 29.36, 23.04, 36.48 ],
    endingPoint: [ 23.04, 36.48 ],
    endingAngle: 153.37,
    origin: 'path1' },
  { command: [ 'C', 21.09, 40.51, 20, 45.09, 20, 50 ],
    endingPoint: [ 20, 50 ],
    endingAngle: 180,
    origin: 'path1' },
  { command: [ 'C', 20, 67, 33, 80, 50, 80 ],
    endingPoint: [ 50, 80 ],
    endingAngle: 270,
    origin: 'path1' } 
];


  it('should return a string', () => {
    let recomposed0 = recomposePath(compiledArray0, startingPoint0);
    let recomposed1 = recomposePath(compiledArray1, startingPoint1);
    expect(typeof(recomposed0)).toBe('string');
    expect(typeof(recomposed1)).toBe('string');
  });

  it('should return a string starting @ M ...startingPoints coordinates', () => {
    let recomposed0 = recomposePath(compiledArray0, startingPoint0);
    let recomposed1 = recomposePath(compiledArray1, startingPoint1);
    let expectedStart0 = `M ${startingPoint0[0]} ${startingPoint0[1]}`;
    let expectedStart1 = `M ${startingPoint1[0]} ${startingPoint1[1]}`;
    expect(recomposed0.startsWith(expectedStart0)).toBe(true);
    expect(recomposed1.startsWith(expectedStart1)).toBe(true);
  });

  it('should return a string ending with ...startingPoints coordinates', () => {
    let recomposed0 = recomposePath(compiledArray0, startingPoint0);
    let recomposed1 = recomposePath(compiledArray1, startingPoint1);
    let expectedEnd0 = `${startingPoint0[0]} ${startingPoint0[1]}`;
    let expectedEnd1 = `${startingPoint1[0]} ${startingPoint1[1]}`;
    expect(recomposed0.slice(recomposed0.length - expectedEnd0.length)).toBe(expectedEnd0);
    expect(recomposed1.slice(recomposed1.length - expectedEnd1.length)).toBe(expectedEnd1);
  });

});