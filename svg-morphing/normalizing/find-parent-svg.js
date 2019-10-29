const findParentSVG = element => {
  let parent = element.parentElement;
  if (parent.nodeName === 'svg') {
    return parent;
  } else {
    return findParentSVG(parent);
  }
};

module.exports = { findParentSVG };