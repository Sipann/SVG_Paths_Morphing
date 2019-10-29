const { mergePaths } = require('../morphing/merge-paths');


describe('mergePaths should concat 2 arrays and sort them based on endingAngle property of each item', () => {

  let arr0 = [
    { title: 'item0', endingAngle: 50, origin: 'arr0' },
    { title: 'item0', endingAngle: 70, origin: 'arr0' },
    { title: 'item0', endingAngle: 100, origin: 'arr0' },
    { title: 'item0', endingAngle: 250, origin: 'arr0' },
    { title: 'item0', endingAngle: 280, origin: 'arr0' },
  ];
  let arr1 = [
    { title: 'item1', endingAngle: 0, origin: 'arr1' },
    { title: 'item1', endingAngle: 20, origin: 'arr1' },
    { title: 'item1', endingAngle: 80, origin: 'arr1' },
    { title: 'item1', endingAngle: 120, origin: 'arr1' },
    { title: 'item1', endingAngle: 300, origin: 'arr1' },
  ];

  it('should return an array of length 10', () => {
    expect(mergePaths(arr0, arr1).length).toEqual(arr0.length + arr1.length);
  });

  it('should return a sorted array - first item.engingAngle should be 0', () => {
    let result = mergePaths(arr0, arr1);
    expect(result[0].endingAngle).toBe(0);
  });

  it('should return a sorted array - last item.endingAngle should be 300', () => {
    let result = mergePaths(arr0, arr1);
    expect(result[9].endingAngle).toBe(300);
  });


});