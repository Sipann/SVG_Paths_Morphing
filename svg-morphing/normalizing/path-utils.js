const { pipe, decimal2 } = require('../utils');

const addSpaceBeforeCommand = path => {
  return path.replace(/(\S)(?=[maqclhvz])/gi, '$&' + ' ')
};

const addSpaceAfterCommand = path => {
  return path.replace(/[maqclhvz](?!\s)/gi, '$&' + ' ')
};

const cleanLast = pathArray => {
  let firstCL = pathArray[0];
  let penultimateCL = pathArray[pathArray.length - 2];
  let lastCL = pathArray[pathArray.length - 1];
  if (
    lastCL[5] === penultimateCL[5] && 
    lastCL[5] === lastCL[1] &&
    lastCL[5] === lastCL[3] &&
    lastCL[6] === penultimateCL[6] &&
    lastCL[6] === lastCL[2] &&
    lastCL[6] === lastCL[4] &&
    penultimateCL[5] === firstCL[1] &&
    penultimateCL[6] === firstCL[2]
  ) return pathArray.slice(0, pathArray.length - 1);
  else return pathArray;
};

const normalizePath = path => {
  return pipe(
    replaceCommas, 
    addSpaceAfterCommand, 
    addSpaceBeforeCommand)(path);
};

const numberize = pathArray => {
  let newPathArray = [];
  pathArray.forEach(path => {
    let newPath = [];
    newPath.push(path[0]);
    for (let i=1; i<path.length; i++) {
      newPath.push(decimal2(path[i]));
    }
    newPathArray.push(newPath);
  });
  return newPathArray;
};

const replaceCommas = path => {
  return path.replace(/,/g, ' ');
};

const splitPath = path => {
  let pathSplit = [];
  path.split(/\s(?=[a-z])/gi).forEach(command => {
    pathSplit.push(command.split(' '));
  });
  return pathSplit;
};

module.exports = { cleanLast, numberize, replaceCommas, addSpaceAfterCommand, addSpaceBeforeCommand, splitPath, normalizePath };