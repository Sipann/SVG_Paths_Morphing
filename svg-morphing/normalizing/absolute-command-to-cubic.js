const arcToBezier = require('svg-arc-to-cubic-bezier');
const { decimal2 } = require('../utils');

exports.absoluteArcToCubic = (previous, current) => {
  let replacementCurves = [];
  let startingX = previous[previous.length - 2];
  let startingY = previous[previous.length - 1];

  let curves = arcToBezier({
    px: startingX,
    py: startingY,
    cx: current[6],
    cy: current[7],
    rx: current[1],
    ry: current[2],
    xAxisRotation: current[3],
    largeArcFlag: current[4],
    sweepFlag: current[5],
  });
  
  curves.forEach(curve => {
    // replacementCurves.push(['C', '' + curve.x1, '' + curve.y1, '' + curve.x2, '' + curve.y2, '' + curve.x, '' + curve.y ]);
    replacementCurves.push(['C', decimal2(curve.x1), decimal2(curve.y1), decimal2(curve.x2), decimal2(curve.y2), decimal2(curve.x), decimal2(curve.y) ]);
  });

  return replacementCurves;
};

exports.absoluteLineToCubic = (previous, current) => {
  let startingX = previous[previous.length - 2];
  let startingY = previous[previous.length - 1];
  let endingX = current[current.length - 2];
  let endingY = current[current.length - 1];
  let cubicControlPoint1X = startingX;
  let cubicControlPoint1Y = startingY;
  let cubicControlPoint2X =  endingX;
  let cubicControlPoint2Y = endingY;

  return [
    'C',
    cubicControlPoint1X, 
    cubicControlPoint1Y,
    cubicControlPoint2X,
    cubicControlPoint2Y,
    endingX,
    endingY
  ];
};

exports.absoluteQuadraticToCubic = (previous, current) => {
  let startingX = previous[previous.length - 2];
  let startingY = previous[previous.length - 1];
  let endingX = current[current.length - 2];
  let endingY = current[current.length - 1];
  let quadraticControlPointX = current[1];
  let quadraticControlPointY = current[2];

  let cubicControlPoint1X = startingX + 2/3 * (quadraticControlPointX - startingX);
  let cubicControlPoint1Y = startingY + 2/3 * (quadraticControlPointY - startingY);
  let cubicControlPoint2X =  endingX + 2/3 * (quadraticControlPointX - endingX);
  let cubicControlPoint2Y = endingY + 2/3 * (quadraticControlPointY - endingY);

  return [
    'C',
    cubicControlPoint1X, 
    cubicControlPoint1Y,
    cubicControlPoint2X,
    cubicControlPoint2Y,
    current[current.length - 2],
    current[current.length - 1]
  ];
};


