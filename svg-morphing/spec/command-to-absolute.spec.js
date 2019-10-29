const {
  arcToAbsolute,
  cubicToAbsolute,
  endToAbsolute,
  horizontalToAbsolute,
  lineToAbsolute,
  moveToAbsolute,
  quadraticToAbsolute,
  verticalToAbsolute,
} = require('../normalizing/command-to-absolute');


describe('arcToAbsolute should set arc path coordinates as absolute arc path values', () => {

  let previous = ['M', 10, 20];
  let current = ['a', 10, 10, 0, 0, 1, 30, 50];
  

  it('should adapt current path based on previous one', () => {
    let expected = ['A', 10, 10, 0, 0, 1, 40, 70];
    expect(arcToAbsolute(previous, current)).toEqual(expected);
  });

  it('should return an array of shape ["A", number * 7]', () => {
    let result = arcToAbsolute(previous, current);

    expect(result.length).toBe(8);
    expect(result[0]).toBe('A');
    for (let i=1; i<result.length; i++) {
      expect(result[i] === Number(result[i]));
      expect(Number.isFinite(result[i]));
    }
  });

  it('should not modify arc path coordinates if already in absolute values', () => {
    let previous = ['M', 10, 20];
    let current = ['A', 20, 30, 0, 0, 1, 40, 70];
    let expected = ['A', 20, 30, 0, 0, 1, 40, 70];
    expect(arcToAbsolute(previous, current)).toEqual(expected);
  });

});


describe('cubicToAbsolute should set cubic path coordinates as absolute cubic path values', () => {

  it('should adapt current path based on previous one', () => {
    let previous = ['M', 10, 20];
    let current = ['c', 10, 15, 20, 25, 20, 40];
    let expected = ['C', 20, 35, 30, 45, 30, 60];
    expect(cubicToAbsolute(previous, current)).toEqual(expected);
  });

  it('should not modify cubic path coordinates if already in absolute values', () => {
    let previous = ['M', 10, 20];
    let current = ['C', 20, 35, 30, 45, 30, 60];
    let expected = ['C', 20, 35, 30, 45, 30, 60];
    expect(cubicToAbsolute(previous, current)).toEqual(expected);
  });

}); 


describe('endToAbsolute should set relative or absolute z end path as absolute line values', () => {

  it('should adapt path based on starting point of the array', () => {
    let initial = ['M', 10, 20];
    let expected = ['L', 10, 20];
    expect(endToAbsolute(initial)).toEqual(expected);
  });

});



describe('horizontalToAbsolute should set horizontal path coordinates as absolute line path values', () => {

  it('should adapt current path based on previous one', () => {
    let previous = ['M', 10, 20];
    let current = ['h', 20];
    let expected = ['L', 30, 20];
    expect(horizontalToAbsolute(previous, current)).toEqual(expected);
  });

  it('should set absolute horizontal coordinates as absolute line values', () => {
    let previous = ['M', 10, 20];
    let current = ['H', 20];
    let expected = ['L', 20, 20];
    expect(horizontalToAbsolute(previous, current)).toEqual(expected);
  });

});


describe('lineToAbsolute should set line path coordinates as absolute line path values', () => {

  it('should adapt current path based on previous one', () => {
    let previous = ['M', 10, 20];
    let current = ['l', 20, 40];
    let expected = ['L', 30, 60];
    expect(lineToAbsolute(previous, current)).toEqual(expected);
  });

  it('should not modify line path coordinates if already in absolute values', () => {
    let previous = ['M', 10, 20];
    let current = ['L', 30, 60];;
    let expected = ['L', 30, 60];
    expect(lineToAbsolute(previous, current)).toEqual(expected);
  });

});




describe('moveToAbsolute should set move path coordinates as absolute move path values', () => {

  it('should adapt current path based on previous one', () => {
    let previous = ['L', 10, 20];
    let current = ['m', 20, 30];
    let expected = ['M', 30, 50];
    expect(moveToAbsolute(previous, current)).toEqual(expected);
  });

  it('should not modify move path coordinates if already in absolute values', () => {
    let previous = ['L', 10, 20];
    let current = ['M', 30, 50];
    let expected = ['M', 30, 50];
    expect(moveToAbsolute(previous, current)).toEqual(expected);
  });

  it('should set absolute values even when there is no previous command line', () => {
    let previous = null;
    let current = ['m', 30, 50];
    let expected = ['M', 30, 50];
    expect(moveToAbsolute(previous, current)).toEqual(expected);
  });

});


describe('quadraticToAbsolute should set quadratic curve path coordinates as absolute quadratic curve path values', () => {

  it('should adapt current path based on previous one', () => {
    let previous = ['M', 10, 20];
    let current = ['q', 10, 15, 20, 25];
    let expected = ['Q', 20, 35, 30, 45];
    expect(quadraticToAbsolute(previous, current)).toEqual(expected);
  });

  it('should not modify quadratic path coordinates if already in absolute values', () => {
    let previous = ['M', 10, 20];
    let current = ['Q', 20, 35, 30, 45];
    let expected = ['Q', 20, 35, 30, 45];
    expect(quadraticToAbsolute(previous, current)).toEqual(expected);
  });

});


describe('verticalToAbsolute should set vertical path coordinates as absolute line path values', () => {

  it('should adapt current path based on previous one', () => {
    let previous = ['M', 10, 20];
    let current = ['v', 20];
    let expected = ['L', 10, 40];
    expect(verticalToAbsolute(previous, current)).toEqual(expected);
  });

  it('should set absolute vertical coordinates as absolute line values', () => {
    let previous = ['M', 10, 20];
    let current = ['V', 20];
    let expected = ['L', 10, 20];
    expect(verticalToAbsolute(previous, current)).toEqual(expected);
  });

});



