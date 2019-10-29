exports.getSplitCurves = (coords) => {
  let firstCommand = ['C', coords[2], coords[3], coords[4], coords[5], coords[6], coords[7] ];
  let secondCommand = ['C', coords[8], coords[9], coords[10], coords[11], coords[12], coords[13]];
  return { firstCommand, secondCommand };
};