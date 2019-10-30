const { findEndingIndex } = require('./find-ending-index');
const { findStartingIndex } = require('./find-starting-index');
const { projectPoint } = require('./project-point');
const { splitCurveAt } = require('./split-curve-at');
const { getSplitCurves } = require('./get-split-curves');

exports.compilePath = (mergedPathsArray, label, ref) => {

  let i = 0;

  function compile(arr) {
    while (i < arr.length) {

      if (!arr[i].origin.includes(label)) {
        let targetPath;
        let targetAngle = arr[i].endingAngle;
        let endingIndex = findEndingIndex(arr, i, 'origin', label);
        let startingIndex = findStartingIndex(arr, i, 'origin', label);

        let previous = i === 0 ? arr.length - 1 : i - 1;
        let isCloseToPrevious = Math.abs(targetAngle - arr[previous].endingAngle) < 2;
        let isCloseToNext = Math.abs(targetAngle - arr[endingIndex].endingAngle) < 2;

        if (isCloseToNext || isCloseToPrevious) {
          arr = arr.slice(0, i).concat(arr.slice(i+1));
          i--;
        } else {
          targetPath = {
            start: arr[startingIndex].endingPoint,
            commandLine: arr[endingIndex].command,
          };
          let projection = projectPoint(targetPath, targetAngle, ref);
          if (!projection) break;
          let newCurves0 = splitCurveAt(
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
          let newCurves = getSplitCurves(newCurves0);
          arr[i] = {
            endingPoint: [ projection.x, projection.y ],
            command: newCurves.firstCommand,
            origin: `${label}-projected`,
            endingAngle: targetAngle,
          };
          arr[endingIndex].command = newCurves.secondCommand;
        }
      }
      i++;
      return compile(arr);
    }
    return arr;
  }

  return compile([...mergedPathsArray]);

};


