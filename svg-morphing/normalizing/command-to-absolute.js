exports.arcToAbsolute = (previous, current) => {
  let previousX = previous[previous.length - 2];
  let previousY = previous[previous.length - 1];
  let newCommand = [...current];
  if (newCommand[0] === 'a') {
    newCommand[0] = 'A';
    // newCommand[1] = current[1] + previousX;
    // newCommand[2] = current[2] + previousY;
    newCommand[6] = current[6] + previousX;
    newCommand[7] = current[7] + previousY;
  }
  return newCommand;
};

exports.cubicToAbsolute = (previous, current) => {
  let previousX = previous[previous.length - 2];
  let previousY = previous[previous.length - 1];
  let newCommand = [...current];
  if (current[0] === 'c') {
    newCommand[0] = 'C';
    newCommand[1] = current[1] + previousX;
    newCommand[2] = current[2] + previousY;
    newCommand[3] = current[3] + previousX;
    newCommand[4] = current[4] + previousY;
    newCommand[5] = current[5] + previousX;
    newCommand[6] = current[6] + previousY;
  }
  return newCommand;
};

exports.endToAbsolute = initial => {
  let newCommand = [...initial];
  newCommand[0] = 'L';
  return newCommand;
};


exports.horizontalToAbsolute = (previous, current) => {
  let previousX = previous[previous.length - 2];
  let previousY = previous[previous.length - 1];
  let newCommand = ['L'];
  if (current[0] === 'h') {
    newCommand.push(current[1] + previousX);
  } else if (current[0] === 'H') {
    newCommand.push(current[1]);
  }
  newCommand.push(previousY);  
  return newCommand;
};

exports.lineToAbsolute = (previous, current) => {
  let previousX = previous[previous.length - 2];
  let previousY = previous[previous.length - 1];
  let newCommand = [...current];
  if (newCommand[0] === 'l') {
    newCommand[0] = 'L';
    newCommand[1] = current[1] + previousX;
    newCommand[2] = current[2] + previousY;
  }
  return newCommand;
};

exports.moveToAbsolute = (previous, current) => {
  let newCommand = [...current];
  newCommand[0] = 'M';
  if (previous && current[0] === 'm') {
    let previousX = previous[previous.length - 2];
    let previousY = previous[previous.length - 1];
    newCommand[1] = current[1] + previousX;
    newCommand[2] = current[2] + previousY;
  } 
  return newCommand;
};

exports.quadraticToAbsolute = (previous, current) => {
  let previousX = previous[previous.length - 2];
  let previousY = previous[previous.length - 1];
  let newCommand = [...current];
  if (current[0] === 'q') {
    newCommand[0] = 'Q';
    newCommand[1] = current[1] + previousX;
    newCommand[2] = current[2] + previousY;
    newCommand[3] = current[3] + previousX;
    newCommand[4] = current[4] + previousY;
  }
  return newCommand;
};

exports.verticalToAbsolute = (previous, current) => {
  let previousX = previous[previous.length - 2];
  let previousY = previous[previous.length - 1];
  let newCommand = ['L'];
  newCommand.push(previousX);
  if (current[0] === 'v') {
    newCommand.push(current[1] + previousY);
  } else if (current[0] === 'V') {
    newCommand.push(current[1]);
  }
  return newCommand;
}
