const { 
  absoluteArcToCubic,
  absoluteLineToCubic,
  absoluteQuadraticToCubic,
} = require('../normalizing/absolute-command-to-cubic');


describe('absoluteArcToCubic should transform an absolute arc path into 2 absolute cubic paths', () => {

  let customEquality = function (first, second) {
    return (first - second) < 0.2;
  };

  it('should return 2 arrays', () => {
    let previous = ['M', 10, 20];
    let current = ['A', 1, 1, 0, 0, 1, 30, 100];
    expect(absoluteArcToCubic(previous, current).length).toBe(2);
  });

  it('should transform path into appropriate fitting curves', () => {
    let previous = ['M', 10, 20];
    let current = ['A', 1, 1, 0, 0, 1, 30, 100];
    let expected = [
      [ 'C',32.09, 14.48, 54.48, 27.91, 60, 50 ],
      [ 'C', 65.52, 72.09, 52.09, 94.48, 30, 100 ]
    ];
    let result = absoluteArcToCubic(previous, current);
    
    jasmine.addCustomEqualityTester(customEquality);
    for (let i=0; i<result.length; i++) {
      for (let j=1; j<result[i].length; j++) {
        expect(result[i][j]).toEqual(expected[i][j]);
      }
    }
  });

});


describe('absoluteLineToCubic should transform an absolute line path into 1 absolute cubic path', () => {

  it('should transform path into appropriate fitting curve', () => {
    let previous = ['C', 0, 0, 0, 0, 10, 20];
    let current = ['L', 20, 40];
    let expected = ['C', 10, 20, 20, 40, 20, 40];
    expect(absoluteLineToCubic(previous, current)).toEqual(expected);
  });
  
});


describe('absoluteQuadraticToCubic should transform an absolute quadratic curve path into 1 absolute cubic path', () => {

  let customEquality = function (first, second) {
    return (first - second) < 0.2;
  };

  it('should transform path into appropriate fitting curve', () => {
    let previous = ['M', 10, 20];
    let current = ['Q', 60, 10, 100, 110];
    let expected = ['C', 43.33, 13.33, 73.33, 43.33, 100, 110];
    let result = absoluteQuadraticToCubic(previous, current);
    
    jasmine.addCustomEqualityTester(customEquality);
    for (let i=1; i<result.length; i++) {
      expect(result[i]).toEqual(expected[i]);
    }
  });

});