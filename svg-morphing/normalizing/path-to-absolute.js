const { 
  arcToAbsolute, 
  cubicToAbsolute, 
  horizontalToAbsolute, 
  quadraticToAbsolute, 
  lineToAbsolute, 
  moveToAbsolute, 
  verticalToAbsolute, 
  endToAbsolute } = require('./command-to-absolute');

exports.pathToAbsolute = path => {
  let i=0;

  function transformCommand(commandLines) {
    while (i < path.length) {
      let current = commandLines[i];
      let command = current[0];
      let previous = commandLines[i-1] || [];
      if (command === command.toLowerCase()) {
        if (command === 'a') commandLines[i] = arcToAbsolute(previous, current);
        else if (command === 'c') commandLines[i] = cubicToAbsolute(previous, current);
        else if (command === 'h') commandLines[i] = horizontalToAbsolute(previous, current);
        else if (command === 'q') commandLines[i] = quadraticToAbsolute(previous, current);
        else if (command === 'l') commandLines[i] = lineToAbsolute(previous, current);
        else if (command === 'm') commandLines[i] = moveToAbsolute(previous, current);
        else if (command === 'v' ) commandLines[i] = verticalToAbsolute(previous, current);
        else if (command === 'z') commandLines[i] = endToAbsolute(commandLines[0]);
      } 
      else if (command === 'V') commandLines[i] = verticalToAbsolute(previous, current);
      else if (command === 'H') commandLines[i] = horizontalToAbsolute(previous, current);
      else if (command === 'Z') commandLines[i] = endToAbsolute(commandLines[0]);

      i++;
      transformCommand(commandLines);
    }
    return commandLines;
  }
  return transformCommand(path);
};