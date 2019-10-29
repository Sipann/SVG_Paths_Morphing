exports.findEndingIndex = (arr, index, property, label) => {
  let searching = true;
  let i = index < arr.length - 1 ? index + 1 : 0;
  let counter = 0;
  while (searching && counter < arr.length) {
    if (arr[i][property].includes(label)) {
      searching = false;
      return i;
    } 
    else if (i < arr.length - 1) i++;
    else i = 0;
    counter++;
  }
}






