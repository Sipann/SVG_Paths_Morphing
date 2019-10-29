exports.counterClockwise = pathArray => {
  let newPath = [pathArray[0]];
  for (let i = pathArray.length - 1; i > 0; i--) {
    let commandLine = pathArray[i];
    newPath.push([
      'C',
      commandLine[3],
      commandLine[4],
      commandLine[1],
      commandLine[2],
      pathArray[i-1][pathArray[i-1].length - 2],
      pathArray[i-1][pathArray[i-1].length - 1]
    ]);
  }
  return newPath;
}

