const {
  normalizePath,
  splitPath,
  numberize,
  cleanLast,
} = require('./path-utils');
const { pathToAbsolute } = require('./path-to-absolute');
const { pathToCubic } = require('./path-to-cubic');
const { pipe } = require('../utils');

exports.decomposePath = path => {
  return pipe(
    normalizePath,
    splitPath,
    numberize,
    pathToAbsolute,
    pathToCubic,
    numberize,
    cleanLast,
  )(path);
};

