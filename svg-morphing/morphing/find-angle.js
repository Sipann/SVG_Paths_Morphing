exports.findAngle = (coords, ref) => {
  let angle, width, height;

  if (coords.x >= ref.x && coords.y === ref.y) angle = 0;

  else if (coords.x === ref.x && coords.y < ref.y) angle = 90;
  
  else if (coords.x < ref.x && coords.y === ref.y) angle = 180;
  
  else if (coords.x === ref.x && coords.y >= ref.y) angle = 270;

  else if (coords.x >= ref.x && coords.y < ref.y) {
    width = coords.x - ref.x;
    height = ref.y - coords.y;
    angle = Math.atan2(height, width) * 180 / Math.PI;
  }
  else if (coords.x < ref.x && coords.y < ref.y) {
    width = ref.x - coords.x;
    height = ref.y - coords.y;
    angle = 180 - (Math.atan2(height, width) * 180 / Math.PI);
  }
  else if (coords.x >= ref.x && coords.y >= ref.y) {
    width = coords.x - ref.x;
    height = coords.y - ref.y;
    angle = 360 - (Math.atan2(height, width) * 180 / Math.PI);
  }
  else if (coords.x < ref.x && coords.y >= ref.y) {
    width = ref.x - coords.x;
    height = coords.y - ref.y;
    angle = 180 + (Math.atan2(height, width) * 180 / Math.PI);
  }
  // return angle;
  return Number(parseFloat(angle).toFixed(2));
}


