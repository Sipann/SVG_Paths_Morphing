const { pipe } = require('../utils.js');
const { getStepsPoints } = require('./get-steps-points');
const { isClockwise } = require('./is-clockwise');
const { counterClockwise } = require('./counter-clockwise');

exports.getCounterClockwisePath = pathArray => {
  let isPathClockwise = pipe(getStepsPoints, isClockwise)(pathArray);
  if (isPathClockwise) return counterClockwise(pathArray);
  else return pathArray;
};