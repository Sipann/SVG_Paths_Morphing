const { isClockwise } = require('../morphing/is-clockwise');

describe('isClockwise should return true if shape is drawn clockwise and false if drawn counter-clockwise', () => {

  it('should return false', () => {
    let pointsArray = [
      [80, 50],
      [50, 20],
      [20, 50],
      [50, 80],
      [80, 50]
    ];
    expect(isClockwise(pointsArray)).toBe(false);
  });

  it('should return true', () => {
    let pointsArray = [
      [80, 50],
      [50, 80],
      [20, 50],
      [50, 20],
      [80, 50]
    ];
    expect(isClockwise(pointsArray)).toBe(true);
  });

  it('should catch the error', () => {
    let pointsArray = [
      [80, 50],
      [50, 80]
    ];
    expect(function(pointsArray) { isClockwise(...args) }).toThrow();
  });

});