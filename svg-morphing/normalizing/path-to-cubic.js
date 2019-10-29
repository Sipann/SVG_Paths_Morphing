const {
  absoluteArcToCubic,
  absoluteLineToCubic,
  absoluteQuadraticToCubic
} = require('./absolute-command-to-cubic');

exports.pathToCubic = path => {
  let i=1;

  function commandToCubic(commandLines) {
    while (i < path.length) {
      let current = commandLines[i];
      let previous = commandLines[i-1];
      let command = current[0];
      if (command === 'A') {
        let newCurves = absoluteArcToCubic(previous, current)
        commandLines[i] = newCurves[0];
        commandLines.splice(i+1, 0, newCurves[1]);
      }
      if (command === 'L') commandLines[i] = absoluteLineToCubic(previous, current);
      if (command === 'Q') commandLines[i] = absoluteQuadraticToCubic(previous, current);
      i++;
      
      commandToCubic(commandLines);
    }
    return commandLines;
  }

  return commandToCubic(path);
};