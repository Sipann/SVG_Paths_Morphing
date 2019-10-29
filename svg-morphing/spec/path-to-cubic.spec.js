const { pathToCubic } = require('../normalizing/path-to-cubic');

describe('pathToCubic should return an array of cubic bezier command lines @ index 1 and above', () => {

  it('should transform an array into another of same length when there is no arc command line in input', () => {
    let path = [
      ['M', 10, 20],
      ['L', 20, 60],
      ['Q', 40, 50, 100, 120],
      ['L', 10, 20]
    ];
    expect(pathToCubic(path).length).toBe(path.length);
  });

  it('should transform an array into another of length greater by 1 for each arc command in input', () => {
    let path = [
      ['M', 10, 20],
      ['L', 20, 60],
      ['A', 1, 1, 0, 0, 1, 30, 80],
      ['Q', 40, 50, 100, 120],
      ['A', 1, 1, 0, 0, 1, 30, 80],
      ['L', 10, 20]
    ];
    expect(pathToCubic(path).length).toBe(8);
  });

  it('should only contain C(ubic)and M(ove) commands', () => {
    let authorizedCommands = ['C', 'M'];
    let path = [
      ['M', 10, 20],
      ['L', 20, 60],
      ['A', 1, 1, 0, 0, 1, 30, 80],
      ['Q', 40, 50, 100, 120],
      ['A', 1, 1, 0, 0, 1, 30, 80],
      ['L', 10, 20]
    ];
    let result = pathToCubic(path);
    result.forEach(item => {
      expect(authorizedCommands.indexOf(item[0])).toBeGreaterThan(-1);
    });
  });

});

