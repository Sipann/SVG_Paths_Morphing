const { findStartingIndex } = require('../morphing/find-starting-index');

describe('findStartingIndex should return index of previous item in the array whose property includes label parameter, starting @ provided index', () => {

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

  it('should return 3', () => {
    expect(findStartingIndex(arr, 5, property, 'path1')).toBe(3);
  });

  it('should return 9', () => {
    expect(findStartingIndex(arr, 10, property, 'path1')).toBe(9);
  });

  it('should return 9', () => {
    expect(findStartingIndex(arr, 0, property, 'path1')).toBe(9);
  });

  it('should return 9', () => {
    expect(findStartingIndex(arr, 2, property, 'path1')).toBe(9);
  });

  it('should return 4', () => {
    expect(findStartingIndex(arr, 5, property, 'path0')).toBe(4);
  });

  it('should return 1', () => {
    expect(findStartingIndex(arr, 4, property, 'path0')).toBe(1);
  });
});