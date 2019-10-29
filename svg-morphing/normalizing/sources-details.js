const { findParentSVG } = require('./find-parent-svg');

exports.getSourcesDetails = sources => {
  let sourcesDetails = [];
  
  // find parent SVG viewBox
  let parentSVG = findParentSVG(sources[0]);
  let parentViewBox = parentSVG.getAttribute('viewBox');
  
  sources.forEach(source => {
    let group, path, attrs;

    // get sources' attributes values
    path = source.getAttribute('d') || null;
    attrs = source.attributes;
    for (var i=attrs.length - 1; i>=0; i--) {
      if (attrs[i].name.includes('svg-adapt-')) {
        group = attrs[i].name;
      }
    }
    sourcesDetails.push({ group, path, parentViewBox});
  });
  return sourcesDetails;
}