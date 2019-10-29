const { counterClockwise } = require('../morphing/counter-clockwise');


describe('counterClockwise should reverse the direction of a clockwise-drawn path array', () => {

  it('should return the expected array of length 5 as described below', () => {
    let pathArray = [
      [ 'M', 80, 50 ],
      [ 'C', 80, 67, 67, 80, 50, 80 ],
      [ 'C', 33, 80, 20, 67, 20, 50 ],
      [ 'C', 20, 33, 33, 20, 50, 20 ],
      [ 'C', 67, 20, 80, 33, 80, 50]
    ];
    let expected = [ 
      [ 'M', 80, 50 ],
      [ 'C', 80, 33, 67, 20, 50, 20 ],
      [ 'C', 33, 20, 20, 33, 20, 50 ],
      [ 'C', 20, 67, 33, 80, 50, 80 ],
      [ 'C', 67, 80, 80, 67, 80, 50 ] 
    ];
    expect(counterClockwise(pathArray)).toEqual(expected);
  });

  it('should return the expected array of length 7 as described below', () => {
    let pathArray = [ 
      [ 'M', 10, 30 ],
      [ 'C', 10, 19, 19, 10, 30, 10 ],
      [ 'C', 41, 10, 50, 19, 50, 30 ],
      [ 'C', 50, 19, 59, 10, 70, 10 ],
      [ 'C', 81, 10, 90, 19, 90, 30 ],
      [ 'C', 90, 50, 77, 70, 50, 90 ],
      [ 'C', 23, 70, 10, 50, 10, 30 ],
    ];
    let expected = [ 
      [ 'M', 10, 30 ],
      [ 'C', 10, 50, 23, 70, 50, 90 ],
      [ 'C', 77, 70, 90, 50, 90, 30 ],
      [ 'C', 90, 19, 81, 10, 70, 10 ],
      [ 'C', 59, 10, 50, 19, 50, 30 ],
      [ 'C', 50, 19, 41, 10, 30, 10 ],
      [ 'C', 19, 10, 10, 19, 10, 30 ] 
    ];
    expect(counterClockwise(pathArray)).toEqual(expected);
  });

});