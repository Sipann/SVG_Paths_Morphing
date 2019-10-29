exports.findStartingIndex = (arr, index, property, label) => {
  let searching = true;
  let i = index === 0 ? arr.length - 1 : index - 1;
  let counter = 0;
  while (searching && counter < arr.length) {
    if (arr[i][property].includes(label)) {
      searching = false;
      return i;
    }
    else if (i > 0) i--;
    else i = arr.length - 1;
    counter++;
  }
}