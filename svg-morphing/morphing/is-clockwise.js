exports.isClockwise = pointsArray => {
  try {
    if (!pointsArray || pointsArray.length < 3) throw new Error('Points array length must be > or = to 3');
    let end = pointsArray.length - 1;
    let sum = pointsArray[end][0]*pointsArray[0][1] - pointsArray[0][0]*pointsArray[end][1];
    for(let i=0; i<end; ++i) {
      const n=i+1;
      sum += pointsArray[i][0]*pointsArray[n][1] - pointsArray[n][0]*pointsArray[i][1];
    }
    return sum > 0
  }
  catch (e) {
    console.error(e);
  }
};

