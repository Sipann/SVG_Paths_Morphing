const { projectPoint } = require('../morphing/project-point');

describe('projectPoint should return coordinates of a point on path @ a specified angle', () => {
  
  let ref = { x: 60, y: 60 };

  let customEquality = (first, second) => {
    return first - second < 1;
  };

  beforeEach(function() {
    jasmine.addCustomEqualityTester(customEquality);
  });


  it('should return projection @ {x: 90, y: 30}', () => {
    let targetPath = {
      start: [120, 60],
      commandLine: ['C', 120, 60, 60, 0, 60, 0],
    };
    let targetAngle = 45;

    let expected = {x: 90, y: 30};
    let result = projectPoint(targetPath, targetAngle, ref); 
    expect(result.x).toEqual(expected.x);
    expect(result.y).toEqual(expected.y);
    
  });

  it('should return {x: 90, y: 30}', () => {
    let targetPath = {
      start: [120, 60],
      commandLine: ['C', 120, 60, 60, 0, 60, 0],
    };
    let targetAngle = 45;

    let expected = {x: 90, y: 30};
    let result = projectPoint(targetPath, targetAngle, ref); 
    expect(result.x).toEqual(expected.x);
    expect(result.y).toEqual(expected.y);
    // for (property in expected) {
    //   expect(result[property]).toEqual(expected[property]);
    // }
  });

  it('should return {x: 90, y: 29.6}', () => {
    let targetPath = { 
      start: [ 115, 60 ],
      commandLine:
      [ 'C', 130, 55, 75, 20, 60, 5 ] 
    }
    let targetAngle = 45;

    let expected = {x: 90, y: 29.6};
    let result = projectPoint(targetPath, targetAngle, ref); 
    expect(result.x).toEqual(expected.x);
    expect(result.y).toEqual(expected.y);
    // for (property in expected) {
    //   expect(result[property]).toEqual(expected[property]);
    // }
  });

  it('should return null', () => {
    let targetPath = { 
      start: [ 115, 60 ],
      commandLine:
      [ 'C', 130, 55, 75, 20, 60, 5 ] 
    }
    let targetAngle = 110;

    expect(projectPoint(targetPath, targetAngle, ref)).toBe(null);
  });

  it('should return {x: 75, y: 33 }', () => {
    let targetPath = { 
      start: [ 115, 60 ],
      commandLine:
      [ 'C', 100, 40, 75, 20, 20, 40 ] 
    };
    let targetAngle = 60;
    let expected = {x: 75, y: 33 };
    let result = projectPoint(targetPath, targetAngle, ref);
    expect(result.x).toEqual(expected.x);
    expect(result.y).toEqual(expected.y);
  });

  it('should return {x: 55, y: 32 }', () => {
    let targetPath = { 
      start: [ 115, 60 ],
      commandLine:
      [ 'C', 100, 40, 75, 20, 20, 40 ] 
    };
    let targetAngle = 100;
    let expected = {x: 55, y: 32};
    let result = projectPoint(targetPath, targetAngle, ref);
    expect(result.x).toEqual(expected.x);
    expect(result.y).toEqual(expected.y);
  });

  it('should return null', () => {
    let targetPath = { 
      start: [ 115, 60 ],
      commandLine:
      [ 'C', 100, 40, 75, 20, 20, 40 ] 
    };
    let targetAngle = 180;

    expect(projectPoint(targetPath, targetAngle, ref)).toBe(null);
  });

  it('should return {x: 49, y: 59}', () => {
    let targetPath = { 
      start: [ 50, 40 ],
      commandLine:
      [ 'C', 40, 50, 60, 70, 50, 100 ] 
    };
    let targetAngle = 175;
    let expected = {x: 49, y: 59};
    let result = projectPoint(targetPath, targetAngle, ref);
    expect(result.x).toEqual(expected.x);
    expect(result.y).toEqual(expected.y);
  });

  it('should return {x: 30, y: 71}', () => {
    let targetPath = { 
      start: [ 20, 70 ],
      commandLine:
      [ 'C', 30, 70, 80, 80, 90, 70 ] 
    };
    let targetAngle = 200;
    let expected = {x: 30, y: 71};
    let result = projectPoint(targetPath, targetAngle, ref);
    expect(result.x).toEqual(expected.x);
    expect(result.y).toEqual(expected.y);
  });

  it('should return {x: 55, y: 86}', () => {
    let targetPath = { 
      start: [ 20, 80 ],
      commandLine:
      [ 'C', 30, 100, 70, 90, 100, 50 ] 
    };
    let targetAngle = 260;
    let expected = {x: 55, y: 86};
    let result = projectPoint(targetPath, targetAngle, ref);
    expect(result.x).toEqual(expected.x);
    expect(result.y).toEqual(expected.y);
  });

  it('should return {x: 83.5, y: 68.3}', () => {
    let targetPath = { 
      start: [ 20, 80 ],
      commandLine:
      [ 'C', 30, 100, 70, 90, 100, 50 ] 
    };
    let targetAngle = 340;
    let expected = {x: 83.5, y: 68.3};
    let result = projectPoint(targetPath, targetAngle, ref);
    expect(result.x).toEqual(expected.x);
    expect(result.y).toEqual(expected.y);
  });

  it('should return {x: 91.7, y: 60}', () => {
    let targetPath = { 
      start: [ 20, 80 ],
      commandLine:
      [ 'C', 30, 100, 70, 90, 100, 50 ] 
    };
    let targetAngle = 0;
    let expected = {x: 91.7, y: 60};
    let result = projectPoint(targetPath, targetAngle, ref);
    expect(result.x).toEqual(expected.x);
    expect(result.y).toEqual(expected.y);
  });

  it('should return {x: 94.3, y: 57}', () => {
    let targetPath = { 
      start: [ 20, 80 ],
      commandLine:
      [ 'C', 30, 100, 70, 90, 100, 50 ] 
    };
    let targetAngle = 5;
    let expected = {x: 94.3, y: 57};
    let result = projectPoint(targetPath, targetAngle, ref);
    expect(result.x).toEqual(expected.x);
    expect(result.y).toEqual(expected.y);
  });

  it('should return {x: 100, y: 50}', () => {
    let targetPath = { 
      start: [ 20, 80 ],
      commandLine:
      [ 'C', 30, 100, 70, 90, 100, 50 ] 
    };
    let targetAngle = 14;
    let expected = {x: 100, y: 50};
    let result = projectPoint(targetPath, targetAngle, ref);
    expect(result.x).toEqual(expected.x);
    expect(result.y).toEqual(expected.y);
  });

  it('should return {x: 20, y: 80}', () => {
    let targetPath = { 
      start: [ 20, 80 ],
      commandLine:
      [ 'C', 30, 100, 70, 90, 100, 50 ] 
    };
    let targetAngle = 206.6;
    let expected = {x: 20, y: 80};
    let result = projectPoint(targetPath, targetAngle, ref);
    expect(result.x).toEqual(expected.x);
    expect(result.y).toEqual(expected.y);
  });

  it('should return null', () => {
    let targetPath = { 
      start: [ 20, 80 ],
      commandLine:
      [ 'C', 30, 100, 70, 90, 100, 50 ] 
    };
    let targetAngle = 180;

    expect(projectPoint(targetPath, targetAngle, ref)).toBe(null);
  });

});