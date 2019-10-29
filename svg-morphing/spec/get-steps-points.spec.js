const { getStepsPoints } = require('../morphing/get-steps-points');

describe('getStepsPoints should return an array of coordinates representing each subsegment limit', () => {

  it('should return the expected array of length 5 as defined below', () => {
    let pathArray = [ 
      [ 'M', 80, 50 ],
      [ 'C', 80, 33, 67, 20, 50, 20 ],
      [ 'C', 33, 20, 20, 33, 20, 50 ],
      [ 'C', 20, 67, 33, 80, 50, 80 ],
      [ 'C', 67, 80, 80, 67, 80, 50 ] 
    ];
    let expected = [
      [80, 50],
      [50, 20],
      [20, 50],
      [50, 80],
      [80, 50]
    ];
    expect(getStepsPoints(pathArray)).toEqual(expected);
  });

  it('should return the expected array of length 3 as defined below', () => {
    let pathArray = [ 
      [ 'M', 80, 50 ],
      [ 'C', 80, 33, 67, 20, 50, 20 ],
      [ 'C', 33, 20, 20, 33, 80, 50 ]
    ];
    let expected = [
      [80, 50],
      [50, 20],
      [80, 50]
    ];
    expect(getStepsPoints(pathArray)).toEqual(expected);
  });

});