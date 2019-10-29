// https://riptutorial.com/html5-canvas/example/19173/navigating-along-a-path

exports.getPointOnCurve = (position, x1, y1, x2, y2, x3, y3, x4, y4) => {

  let vec = {};

  if (position <= 0){
    vec.x = x1;
    vec.y = y1;
    return vec;
  }

  if (position >= 1){
    vec.x = x4;
    vec.y = y4;
    return vec;
  }

  c = position;
  
  x1 += (x2 - x1) * c;
  y1 += (y2 - y1) * c;
  x2 += (x3 - x2) * c;
  y2 += (y3 - y2) * c;
  x3 += (x4 - x3) * c;
  y3 += (y4 - y3) * c;
  x1 += (x2 - x1) * c;
  y1 += (y2 - y1) * c;
  x2 += (x3 - x2) * c;
  y2 += (y3 - y2) * c;
  vec.x = x1 + (x2 - x1) * c;
  vec.y = y1 + (y2 - y1) * c;

  return vec; 
}