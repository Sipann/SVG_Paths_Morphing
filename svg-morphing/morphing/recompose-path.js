exports.recomposePath = (pathSplitArray, startingPoint) => {
  let pathString = `M ${startingPoint[0]} ${startingPoint[1]}`;

  let finalCommand = pathSplitArray.findIndex(element => element.command[5] === startingPoint[0] && element.command[6] === startingPoint[1]);

  let ordered = pathSplitArray.slice(finalCommand + 1).concat(pathSplitArray.slice(0, finalCommand + 1));
  ordered.forEach(item => {
    pathString += ' ' + item.command.join(' ');
  });
  return pathString;
}
