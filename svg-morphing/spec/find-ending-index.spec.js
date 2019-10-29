const { findEndingIndex } = require('../morphing/find-ending-index');

describe('findEndingIndex should return index of next item in the array whose property includes label parameter, starting @ provided index', () => {
  
  let arr = [
    { title: 'item0', origin: 'path0' },
    { title: 'item1', origin: 'path0' },
    { title: 'item2', origin: 'path1' },
    { title: 'item3', origin: 'path1' },
    { title: 'item4', origin: 'path0-modified' },
    { title: 'item5', origin: 'path1' },
    { title: 'item6', origin: 'path0' },
    { title: 'item7', origin: 'path0' },
    { title: 'item8', origin: 'path1-modified' },
    { title: 'item9', origin: 'path1' },
    { title: 'item10', origin: 'path0' },
  ];
  let property = 'origin';

  it('should return 2', () => {
    expect(findEndingIndex(arr, 0, property, 'path1')).toBe(2);
  });

  it('should return 4', () => {
    expect(findEndingIndex(arr, 1, property, 'path0')).toBe(4);
  });

  it('should return 8', () => {
    expect(findEndingIndex(arr, 7, property, 'path1')).toBe(8);
  });

  it('should return 2', () => {
    expect(findEndingIndex(arr, 9, property, 'path1')).toBe(2);
  });

  it('should return 0', () => {
    expect(findEndingIndex(arr, 10, property, 'path0')).toBe(0);
  });

  it('should return 10', () => {
    expect(findEndingIndex(arr, 9, property, 'path0')).toBe(10);
  });
  
});