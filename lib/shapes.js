
class Shapes {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }

    setShapeColor(newColor) {
        this.shapeColor = newColor
    }
    setTextColor(newTextColor) {
        this.textColor = newTextColor
    }
    setText(newText) {
        this.text = newText
    }

}

class Triangle extends Shapes {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }
    render() {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
    
        <polygon points="220,0 300,200 100,220" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" />
      
        <text x="205" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class Circle extends Shapes {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }
    render() {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
        </svg>`
    }
}

class Square extends Shapes {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }
    render() {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <rect width="200" height="200" fill="${this.shapeColor}" />
    
        <text x="100" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
        </svg>`
    }
}

module.exports = { Triangle, Circle, Square };