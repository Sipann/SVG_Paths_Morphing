const { findAngle } = require('../morphing/find-angle');

describe('findAngle should return the angle in degrees in a counterclockwise referential starting at 0 for vector(1, 0)', () => {

  let customEquality = (first, second) => {
    return first - second < 2;
  };

  let ref = { x: 60, y: 60 };

  it('should return an angle of 0', () => {
    let coords = { x: 80, y: 60 };
    expect(findAngle(coords, ref)).toBe(0);
  });

  it('should return an angle of 90', () => {
    let coords = { x: 60, y: 20 };
    expect(findAngle(coords, ref)).toBe(90);
  });

  it('should return an angle of 180', () => {
    let coords = { x: 20, y: 60 };
    expect(findAngle(coords, ref)).toBe(180);
  });

  it('should return an angle of 270', () => {
    let coords = { x: 60, y: 80 };
    expect(findAngle(coords, ref)).toBe(270);
  });

  it('should return an angle of 45', () => {
    let coords = { x: 120, y: 0 };
    let angle = findAngle(coords, ref);
    expect(angle).toEqual(45);
  });

  it('should return an angle of 30', () => {
    let coords = { x: 80, y: 48.453};
    let angle = findAngle(coords, ref);
    jasmine.addCustomEqualityTester(customEquality);
    expect(angle).toEqual(30);
  });

  it('should return an angle of 80', () => {
    let coords = { x: 65, y: 31.6436};
    let angle = findAngle(coords, ref);
    jasmine.addCustomEqualityTester(customEquality);
    expect(angle).toEqual(80);
  });

  it('should return an angle of 110', () => {
    let coords = { x: 35, y: -8.68};
    let angle = findAngle(coords, ref);
    jasmine.addCustomEqualityTester(customEquality);
    expect(angle).toEqual(110);
  }); 

  it('should return an angle of 150', () => {
    let coords = {x: 35, y: 45.5662};
    let angle = findAngle(coords, ref);
    jasmine.addCustomEqualityTester(customEquality);
    expect(angle).toEqual(150);
  });

  it('should return an angle of 200', () => {
    let coords = {x: 35, y: 69.099};
    let angle = findAngle(coords, ref);
    jasmine.addCustomEqualityTester(customEquality);
    expect(angle).toEqual(200);
  });

  it('should return an angle of 250', () => {
    let coords = {x: 20, y: 109.89};
    let angle = findAngle(coords, ref);
    jasmine.addCustomEqualityTester(customEquality);
    expect(angle).toEqual(250);
  });

  it('should return an angle of 290', () =>  {
    let coords = {x: 100, y: 169.89};
    let angle = findAngle(coords, ref);
    jasmine.addCustomEqualityTester(customEquality);
    expect(angle).toEqual(290);
  });

  it('should return an angle of 310', () => {
    let coords = {x: 100, y: 107.67};
    let angle = findAngle(coords, ref);
    jasmine.addCustomEqualityTester(customEquality);
    expect(angle).toEqual(310);
  });
  
  it('should return an angle of 340', () => {
    let coords = {x: 85, y: 69.099};
    let angle = findAngle(coords, ref);
    jasmine.addCustomEqualityTester(customEquality);
    expect(angle).toEqual(340);
  });

});
