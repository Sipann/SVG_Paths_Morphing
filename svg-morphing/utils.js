const _pipe = (a, b) => (arg) => b(a(arg));

exports.pipe = (...ops) => ops.reduce(_pipe);

exports.decimal2 = num =>{
  return (parseInt(num * 100)) / 100;
};

exports.groupArray = arr => {
  let final = {};
  arr.forEach(item => {
    if (final[item.group]) {
      final[item.group].paths.push(item.path);
    } else {
      final[item.group] = {
        parentViewBox: item.parentViewBox,
        paths: [item.path],
      }
    }
  });
  return final;
}
