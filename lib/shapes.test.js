const {Triangle, Circle, Square} = require('./shapes.js');


test('adds shapeColor to Triangle', () => {
    const shape = new Triangle()
    shape.setShapeColor('red')
    expect(shape.shapeColor).toBe('red');
  });