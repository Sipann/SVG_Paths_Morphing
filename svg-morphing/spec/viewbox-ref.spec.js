const { getViewBoxRef } = require('../normalizing/viewbox-ref');

describe('getViewBoxRef should return central point of SVG viewBox attribute', () => {

  it('should return {x: 60, y: 60}', () => {
    let viewboxStr = '0 0 120 120';
    expect(getViewBoxRef(viewboxStr).x).toBe(60);
    expect(getViewBoxRef(viewboxStr).y).toBe(60);
  });

  it('should return {x: 65, y: 70}', () => {
    let viewboxStr = '-10 -20 120 120';
    expect(getViewBoxRef(viewboxStr).x).toBe(65);
    expect(getViewBoxRef(viewboxStr).y).toBe(70);
  });

});