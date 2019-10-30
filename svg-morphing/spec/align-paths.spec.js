const { alignPaths } = require('../morphing/align-paths');
const { findAngle } = require('../morphing/find-angle');


describe('alignPaths should re-arrange path1 array to make it start at same angle as path0', () => {

  let pathArray0 = [ 
    [ 'M', 10, 30 ],
    [ 'C', 10, 50, 23, 70, 50, 90 ],
    [ 'C', 77, 70, 90, 50, 90, 30 ],
    [ 'C', 90, 19, 81, 10, 70, 10 ],
    [ 'C', 59, 10, 50, 19, 50, 30 ],
    [ 'C', 50, 19, 41, 10, 30, 10 ],
    [ 'C', 19, 10, 10, 19, 10, 30 ] 
  ];
  let pathArray1 = [ 
    [ 'M', 80, 50 ],
    [ 'C', 80, 33, 67, 20, 50, 20 ],
    [ 'C', 33, 20, 20, 33, 20, 50 ],
    [ 'C', 20, 67, 33, 80, 50, 80 ],
    [ 'C', 67, 80, 80, 67, 80, 50 ] 
  ];
  let ref = { x: 60, y: 60 };
  

  it('should transform pathArray1 to make it start at a very close angle to pathArray0 starting angle', () => {
    let result = alignPaths(pathArray0, pathArray1, ref);
    let startingPoint = {
      x: pathArray0[0][1],
      y: pathArray0[0][2]
    };
    let startingAngle = findAngle(startingPoint, ref);

    let resultStartingPoint = {
      x: result.pathArray1[0][1],
      y: result.pathArray1[0][2],
    };

    let resultStartingAngle = findAngle(resultStartingPoint, ref);
    
    let difference = Math.abs(startingAngle - resultStartingAngle);
    expect(difference).toBeLessThan(2);
  });

  it('should transform pathArray1 so that its length is either its previous length (no alignement needed) or +1', () => {
    let result = alignPaths(pathArray0, pathArray1, ref);
    expect(result.pathArray1.length).toBeGreaterThan(4);
    expect(result.pathArray1.length).toBeLessThan(7);
  });


});