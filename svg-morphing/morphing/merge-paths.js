exports.mergePaths = (path0Details, path1Details) => {
  let merged = path0Details.concat(path1Details);
  merged.sort((a, b) => {
    return a.endingAngle - b.endingAngle;
  });
  return merged;
}

