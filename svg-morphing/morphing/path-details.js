const { findAngle } = require('./find-angle');

exports.setPathDetails = (pathArray, ref, label) => {

  function setDetails(commandLine) {
    let x = commandLine[commandLine.length - 2];
    let y = commandLine[commandLine.length - 1];
    let angle = findAngle({ x, y }, ref);
    return {
      command: commandLine,
      endingPoint: [x, y],
      endingAngle: angle,
      origin: label,
    }
  }

  let completePath = [];

  // insert last commandLine first
  // completePath.push(setDetails(pathArray[pathArray.length - 1]));

  // insert other commandLines except the 'M' one
  for (let i = 1; i < pathArray.length; i++) {
    // if (pathArray[i][0] === 'C') {
      completePath.push(setDetails(pathArray[i]));
    // }
  }


  // // first commandLine
  // let angle = findAngle({ x: pathArray[0][1], y: pathArray[0][2] }, ref);
  // let completePath = [
  //   {
  //     command: pathArray[0],
  //     endingPoint: [ pathArray[0][1], pathArray[0][2] ],
  //     endingAngle: angle,
  //     origin: label,
  //   }
  // ];

  // // remaining commandLines
  // for (let i = 1; i <pathArray.length; i++) {
  //   let x = pathArray[i][pathArray[i].length - 2];
  //   let y = pathArray[i][pathArray[i].length - 1];

  //   let angle = findAngle({ x, y }, ref);

  //   completePath.push({
  //     command: pathArray[i],
  //     endingPoint: [x, y],
  //     endingAngle: angle,
  //     origin: label,
  //   });
  // }

  return completePath;
};



