exports.getViewBoxRef = viewboxStr => {
  let viewboxArr = viewboxStr.split(' ');
  return {
    x: (viewboxArr[2] - viewboxArr[0]) / 2,
    y: (viewboxArr[3] - viewboxArr[1]) / 2,
  };
};