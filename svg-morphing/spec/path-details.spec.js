const { setPathDetails } = require('../morphing/path-details');

describe('setPathDetails should provide information regarding targeting path and angle of points for each cubic command line - M command line not included', () => {

  let pathArray = [ 
    [ 'M', 80, 50 ],
    [ 'C', 80, 33, 67, 20, 50, 20 ],
    [ 'C', 33, 20, 20, 33, 20, 50 ],
    [ 'C', 20, 67, 33, 80, 50, 80 ],
    [ 'C', 67, 80, 80, 67, 80, 50 ] 
  ];

  let ref = { x: 60, y: 60 };

  it('should return an array of same length', () => {
    expect(setPathDetails(pathArray, ref, 'path1').length).toBe(4);
  });

  it('should return an array of objects with properties "command", "endingPoint", "endingAngle" and "origin"', () => {
    let result = setPathDetails(pathArray, ref, 'path1');
    result.forEach(item => {
      expect(Object.keys(item)).toContain('command');
      expect(Object.keys(item)).toContain('endingPoint');
      expect(Object.keys(item)).toContain('endingAngle');
      expect(Object.keys(item)).toContain('origin');
    })
  });
  
});