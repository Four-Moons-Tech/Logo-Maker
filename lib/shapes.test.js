const {Triangle, Circle, Square} = require('./shapes.js');

//test shape color
test('adds shapeColor to Triangle', () => {
    const shape = new Triangle()
    shape.setShapeColor('red')
    expect(shape.shapeColor).toBe('red');
  });

  test('adds shapeColor to Circle', () => {
    const shape = new Circle()
    shape.setShapeColor('purple')
    expect(shape.shapeColor).toBe('purple');
  });

  test('adds shapeColor to Square', () => {
    const shape = new Square()
    shape.setShapeColor('yellow')
    expect(shape.shapeColor).toBe('yellow');
  });
  
  //test text color
  test('adds textColor', () => {
    const shape = new Triangle()
    shape.setTextColor('red')
    expect(shape.textColor).toBe('red');
  });

  test('adds textColor', () => {
    const shape = new Circle()
    shape.setTextColor('purple')
    expect(shape.textColor).toBe('purple');
  });

  test('adds textColor', () => {
    const shape = new Square()
    shape.setTextColor('yellow')
    expect(shape.textColor).toBe('yellow');
  });
  
  //test text 
  test('adds text', () => {
    const shape = new Triangle()
    shape.setText('ANM')
    expect(shape.text).toBe('ANM');
  });

  test('adds text', () => {
    const shape = new Circle()
    shape.setText('MLF')
    expect(shape.text).toBe('MLF');
  });

  test('adds text', () => {
    const shape = new Square()
    shape.setText('RUS')
    expect(shape.text).toBe('RUS');
  });
  