exports.getStepsPoints = pathArray => {
  return pathArray.map(commandLine => {
    return [commandLine[commandLine.length - 2], commandLine[commandLine.length - 1]];
  });
}
