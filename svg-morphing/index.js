const { decomposePath } = require('./normalizing/composing-path');
const { getViewBoxRef } = require('./normalizing/viewbox-ref');
const { morphPaths } = require('./morphing');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { getSourcesDetails } = require('./normalizing/sources-details');
const { groupArray } = require('./utils');

const compute = sourceDetails => {
  // transform paths strings into arrays of absolute cubic command lines
  let path0 = decomposePath(sourceDetails.paths[0]);
  let path1 = decomposePath(sourceDetails.paths[1]);

  let ref = getViewBoxRef(sourceDetails.parentViewBox);
  
  // morph paths
  return morphPaths([path0, path1], ref);
};




module.exports = function (content) {
  const dom = new JSDOM(content);

  let sources = dom.window.document.querySelectorAll('[svg-adapt]');
  let sourcesDetails = groupArray(getSourcesDetails(sources));
  
  for (let group in sourcesDetails) {  
    if (sourcesDetails[group].paths.length !== 2) {
      console.error('There must be 2 paths with same svg-adapt-[] attribute.');
      return `export default ${ content }`;
    }
    else if (!sourcesDetails[group].parentViewBox) {
      console.error('SVG viewBox attribute must be set.');
      return `export default ${ content }`;
    }
    else {
      let {recomposedPath0, recomposedPath1 } = compute(sourcesDetails[group]);
      let target = dom.window.document.querySelector(`.${group}`);
      target.setAttribute('from', recomposedPath0);
      target.setAttribute('to', recomposedPath1);
      let domStr = dom.window.document.documentElement.outerHTML;
      return `export default ${ JSON.stringify(domStr) }`;
    }
  }
}

