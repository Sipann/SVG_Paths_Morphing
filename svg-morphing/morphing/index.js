const { getCounterClockwisePath } = require('./get-counter-clockwise-path');
const { alignPaths } = require('./align-paths');
const { setPathDetails } = require('./path-details');
const { mergePaths } = require('./merge-paths');
const { compilePath } = require('./compile-path');
const { recomposePath } = require('./recompose-path');

exports.morphPaths = (pathArrays, ref) => {
  let pathArray0 = getCounterClockwisePath(pathArrays[0]);
  let pathArray1_temp = getCounterClockwisePath(pathArrays[1]);

  let alignment = alignPaths(pathArray0, pathArray1_temp, ref);
  let { pathArray1, startPoint0, startPoint1 } = alignment;

  let path0Details = setPathDetails(pathArray0, ref, 'path0');
  let path1Details = setPathDetails(pathArray1, ref, 'path1');

  let mergedDetails = mergePaths(path0Details, path1Details);

  let compiledPath0 = compilePath(mergedDetails, 'path0', ref);
  let compiledPath1 = compilePath(mergedDetails, 'path1', ref);

  let recomposedPath0 = recomposePath(compiledPath0, startPoint0);
  let recomposedPath1 = recomposePath(compiledPath1, startPoint1);

  return { recomposedPath0, recomposedPath1 };

}
