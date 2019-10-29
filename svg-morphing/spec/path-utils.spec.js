const {
  addSpaceAfterCommand,
  addSpaceBeforeCommand,
  cleanLast,
  normalizePath,
  numberize,
  replaceCommas,
  splitPath,
} = require('../normalizing/path-utils');


describe('addSpaceAfterCommand should add a space character after command letter where there is not one already', () => {

  it('should add a space after M, a and h commands', () => {
    let str = 'M10 20a20 40h30';
    let expected = 'M 10 20a 20 40h 30';
    expect(addSpaceAfterCommand(str)).toBe(expected);
  });

  it('should add a space after M and a but not after h commands', () => {
    let str = 'M10 20a20 40 h 30';
    let expected = 'M 10 20a 20 40 h 30';
    expect(addSpaceAfterCommand(str)).toBe(expected);
  });

});


describe('addSpaceBeforeCommand should add a space character before command letter where there is something else', () => {

  it('should add a space before a and h commands', () => {
    let str = 'M10 20a20 40h30';
    let expected = 'M10 20 a20 40 h30';
    expect(addSpaceBeforeCommand(str)).toBe(expected);
  });

  it('should add a space before a but not before h', () => {
    let str = 'M10 20a20 40 h30';
    let expected = 'M10 20 a20 40 h30';
    expect(addSpaceBeforeCommand(str)).toBe(expected);
  });

});


describe('cleanLast should delete last item in array when command line is useless', () => {

  it('should delete last item', () => {
    let arr = [ 
      [ 'M', 10, 30 ],
      [ 'C', 10, 18.96, 18.96, 10, 29.99, 10 ],
      [ 'C', 41.03, 10, 50, 18.96, 50, 29.99 ],
      [ 'C', 50, 18.94, 58.95, 9.99, 70, 9.99 ],
      [ 'C', 81.05, 9.99, 90, 18.95, 89.99, 30 ],
      [ 'C', 89.99, 50, 76.66, 70, 50, 90 ],
      [ 'C', 23.33, 70, 10, 50, 10, 30 ],
      [ 'C', 10, 30, 10, 30, 10, 30] 
    ];
    expect(cleanLast(arr).length).toEqual(arr.length - 1);
  });

  it('should not delete last item', () => {
    let arr = [ 
      [ 'M', 10, 30 ],
      [ 'C', 10, 18.96, 18.96, 10, 29.99, 10 ],
      [ 'C', 41.03, 10, 50, 18.96, 50, 29.99 ],
      [ 'C', 50, 18.94, 58.95, 9.99, 70, 9.99 ],
      [ 'C', 81.05, 9.99, 90, 18.95, 89.99, 30 ],
      [ 'C', 89.99, 50, 76.66, 70, 50, 90 ],
      [ 'C', 23.33, 70, 10, 50, 10, 30 ],
    ];
    expect(cleanLast(arr).length).toEqual(arr.length);
  });
});

describe('normalizePath should apply replaceCommas, addSpaceAfterCommand and addSpaceBeforeCommand', () => {

  it('should replace commas by spaces and add space before and after command letters', () => {
    let str = 'M10 30, c20 20 40 40 60 60h20 l50h20 z';
    let expected = 'M 10 30  c 20 20 40 40 60 60 h 20 l 50 h 20 z ';
    expect(normalizePath(str)).toBe(expected);
  });

});


describe('numberize should parse each command line coordinate', () => {

  it('should return an array of same shape', () => {
    let arr = [ 
      [ 'M', 10, 30 ],
      [ 'C', 10, 18.996, 18.996, 10.524, 29, 10.658 ],
      [ 'C', 41.03, 10, 50.584, 18.96, 50, 29.9259 ],
      [ 'C', 50, 18.9423, 58.95, 9.99, 70, 9.99 ],
      [ 'C', 81.05, 9.9985, 90, 18.95, 89.99, 30 ],
      [ 'C', 89.99, 50, 76.62266, 70, 50, 90 ],
      [ 'C', 23.33457, 70, 10, 50, 10.457, 30 ],
    ];
    let result = numberize(arr); 
    expect(result.length).toEqual(arr.length);
    result.forEach((item, i) => {
      expect(item.length).toEqual(arr[i].length);
    });
  });

});

describe('replaceCommas should replace commas by spaces in a given string', () => {
  
  it('should replace commas', () => {
    let str = 'M,10,20 50,60,80';
    let expected = 'M 10 20 50 60 80';
    expect(replaceCommas(str)).toBe(expected);
  });

});


describe('splitPath should split a string into an array of arrays using "space followed by a letter" as a separator for main array and "space" for sub-arrays', () => {

  it('should return an array of arrays', () => {
    let str = 'M 10 30 A 20 20 0 0 1 50 30 A 20 20 0 0 1 90 30 Q 90 60 50 90 Q 10 60 10 30 Z';
    let expected = [
      ['M', '10', '30' ],
      ['A', '20', '20', '0', '0', '1', '50', '30'],
      ['A', '20', '20', '0', '0', '1', '90', '30'],
      ['Q', '90', '60', '50', '90'],
      ['Q', '10', '60', '10', '30'],
      ['Z']
    ];
    expect(splitPath(str)).toEqual(expected);
  });

});


