const { decimal2, groupArray } = require('../utils.js');

describe('decimal2 should "truncate" a number @ 2 decimal max', () => {

  it('should return 54.55', () => {
    expect(decimal2(54.5569532)).toBe(54.55);
  });

  it('should return 54.55', () => {
    expect(decimal2('54.5569532')).toBe(54.55);
  });

  it('should return 20', () => {
    expect(decimal2(20)).toBe(20);
  });

  it('should return 20.01', () => {
    expect(decimal2(20.01)).toBe(20.01);
  });

});


describe('groupArray shoud group items based on their group property', () => {

  it('should return an object with 2 keys', () => {

    let sourcesDetails = [
      { 
        group: 'svg-adapt-a',
        path: 'first path svg-adapt-a',
        parentViewBox: '0 0 100 100'
      },
      { 
        group: 'svg-adapt-a',
        path: 'second path svg-adapt-a',
        parentViewBox: '0 0 100 100'
      },
      { 
        group: 'svg-adapt-b',
        path: 'first path svg-adapt-b',
        parentViewBox: '0 0 100 100'
      },
      { 
        group: 'svg-adapt-b',
        path: 'second path svg-adapt-b',
        parentViewBox: '0 0 100 100'
      },
    ];

    let result = groupArray(sourcesDetails);
    console.log('result', result);
    expect(Object.keys(result).length).toBe(2);

    expect(Object.keys(result)).toContain('svg-adapt-a');
    expect(Object.keys(result)).toContain('svg-adapt-b');

  });

});