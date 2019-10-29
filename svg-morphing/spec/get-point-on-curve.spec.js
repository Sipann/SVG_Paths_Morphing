const { getPointOnCurve } = require('../morphing/get-point-on-curve');

describe('getPointOnCurve should return coordinates (x, y) of point on a curve @ provided position', () => {

  it('should return {x: 0, y: 0}', () => {
    let result = getPointOnCurve(0, 0, 0, 20, 0, 40, 50, 60, 80);
    let expected = { x: 0, y: 0};
    for (property in result) {
      expect(result[property]).toBe(expected[property]);
    }
  });

  it('should return {x: 0, y: 0}', () => {
    let result = getPointOnCurve(-1, 0, 0, 20, 0, 40, 50, 60, 80);
    let expected = { x: 0, y: 0};
    for (property in result) {
      expect(result[property]).toBe(expected[property]);
    }
  });

  it('should return {x: 60, y: 80}', () => {
    let result = getPointOnCurve(1, 0, 0, 20, 0, 40, 50, 60, 80);
    let expected = { x: 60, y: 80};
    for (property in result) {
      expect(result[property]).toBe(expected[property]);
    }
  });

  it('should return {x: 60, y: 80}', () => {
    let result = getPointOnCurve(1.2, 0, 0, 20, 0, 40, 50, 60, 80);
    let expected = { x: 60, y: 80};
    for (property in result) {
      expect(result[property]).toBe(expected[property]);
    }
  });

  it('should return {x: 30, y: 40}', () => {
    let result = getPointOnCurve(0.5, 0, 0, 0, 0, 60, 80, 60, 80);
    let expected = { x: 30, y: 40 };
    for (property in result) {
      expect(result[property]).toBe(expected[property]);
    }
  });

  it('should return {x: 41.25, y: 58.75}', () => {
    let result = getPointOnCurve(0.5, 30, 30, 30, 40, 50, 80, 60, 80);
    let expected = { x: 41.25, y: 58.75 };
    for (property in result) {
      expect(result[property]).toBe(expected[property]);
    }
  });

  it('should return {x: 34.59, y: 45.21}', () => {
    let result = getPointOnCurve(0.3, 30, 30, 30, 40, 50, 80, 60, 80);
    let expected = { x: 34.59, y: 45.21 };
    for (property in result) {
      expect(result[property]).toBe(expected[property]);
    }
  });

});