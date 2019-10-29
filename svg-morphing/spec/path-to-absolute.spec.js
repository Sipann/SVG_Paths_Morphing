const { pathToAbsolute } = require('../normalizing/path-to-absolute');

describe('pathToAbsolute should return an array of command lines all in absolute values', () => {

  let path = [
    ['M', 10, 20],
    ['V', 30],
    ['H', 10],
    ['q', 4, 5, 6, 7],
    ['a', 1, 1, 0, 0, 1, 20, 20]
  ];

  it('should return an array of same length as input', () => {
    let result = pathToAbsolute(path);
    expect(result.length).toBe(path.length);
  });

  it('should only contain A(rc), C(ubic), L(ine), Q(uadratic) and M(ove) commands', () => {
    let authorizedCommands = ['A', 'C', 'L', 'Q', 'M'];
    let result = pathToAbsolute(path);
    result.forEach(item => {
      expect(authorizedCommands.indexOf(item[0])).toBeGreaterThan(-1);
    });
  });

});