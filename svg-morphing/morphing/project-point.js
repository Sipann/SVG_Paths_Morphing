const { getPointOnCurve } = require('./get-point-on-curve');
const { findAngle } = require('./find-angle');

exports.projectPoint = (targetPath, targetAngle, ref) => {
  let x1 = targetPath.start[0];
  let y1 = targetPath.start[1];
  let x2 = targetPath.commandLine[1];
  let y2 = targetPath.commandLine[2];
  let x3 = targetPath.commandLine[3];
  let y3 = targetPath.commandLine[4];
  let x4 = targetPath.commandLine[5];
  let y4 = targetPath.commandLine[6];
  let delta = .25;
  let rotation = 0;
  let distanceStartToEnd, endingCross, endBoundary, distanceStartToTarget;
  
  let startingAngle = findAngle({ x: x1, y: y1}, ref);
  let endingAngle = findAngle({ x: x4, y: y4}, ref);
    
  if (endingAngle < startingAngle) {
    // path crossed the x axis back
    distanceStartToEnd = 360 - startingAngle + endingAngle;
    endingCross = true;
    endBoundary = endingAngle;
    rotation = -startingAngle;

    if (targetAngle < endingAngle) {
      // targetAngle after crossing the x axis too
      targetCross = true;
      distanceStartToTarget = 360 - startingAngle + targetAngle;
    } else {
      distanceStartToTarget = targetAngle - startingAngle;
    }
    endingAngle = distanceStartToEnd;
    targetAngle = distanceStartToTarget;
    startingAngle = 0;
  }
  return scanCurve(0.5, delta);

  function scanCurve(position, delta) {
    let {x, y} = getPointOnCurve(position, x1, y1, x2, y2, x3, y3, x4, y4);
    let pointAngle = findAngle({x, y}, ref);
    if (endingCross) {
      if (pointAngle < endBoundary) {
        pointAngle += 360 + rotation;
      } else {
        pointAngle +=  rotation;
      }
    }

    if (Math.abs(pointAngle - targetAngle) < .5) return { x, y, position }; 
    else if (delta < .00001) return null
    else {
      position = pointAngle < targetAngle ? position + delta : position - delta;
      delta = delta / 2;
      return scanCurve(position, delta);
    }
  }
};

