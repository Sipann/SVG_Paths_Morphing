const { findAngle } = require('./find-angle');
const { projectPoint } = require('./project-point');
const { splitCurveAt } = require('./split-curve-at');
const { decimal2 } = require('../utils');

exports.alignPaths = (pathArray0, pathArray1, ref) => {
  let startingAngle = findAngle({ x: pathArray0[0][1], y: pathArray0[0][2]}, ref);
 for (let i = 1; i < pathArray1.length; i++) {
   let targetPath = {
     start: [pathArray1[i-1][pathArray1[i-1].length - 2], pathArray1[i-1][pathArray1[i-1].length - 1]],
     commandLine: pathArray1[i],
   };
   let projection = projectPoint(targetPath, startingAngle, ref);
   if (projection) {
    let newCoords = splitCurveAt(
      projection.position, 
      targetPath.start[0],
      targetPath.start[1],
      targetPath.commandLine[1],
      targetPath.commandLine[2],
      targetPath.commandLine[3],
      targetPath.commandLine[4],
      targetPath.commandLine[5],
      targetPath.commandLine[6]
    );
    
    let currentReplacement = ['C', 
      decimal2(newCoords[2]),
      decimal2(newCoords[3]),
      decimal2(newCoords[4]),
      decimal2(newCoords[5]),
      decimal2(newCoords[6]),
      decimal2(newCoords[7]), 
    ];
    let newStart = ['M', decimal2(newCoords[6]), decimal2(newCoords[7])];
    let following = ['C', 
      decimal2(newCoords[8]),
      decimal2(newCoords[9]),
      decimal2(newCoords[10]),
      decimal2(newCoords[11]),
      decimal2(newCoords[12]),
      decimal2(newCoords[13]), 
    ];
    
    let final = [
      newStart,
      following,
      ...pathArray1.slice(i+1),
      ...pathArray1.slice(1, i),
      currentReplacement,
    ];
    return { 
      pathArray1: final, 
      startPoint1: [decimal2(newCoords[6]), decimal2(newCoords[7])], 
      startPoint0: [pathArray0[0][1], pathArray0[0][2]]
    };
   }
 }
};



