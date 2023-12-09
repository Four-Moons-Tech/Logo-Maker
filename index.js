const inquirer = require('inquirer');
const generateSVG = require('./lib/generatelogo.js')
const { Triangle, Circle, Square } = require('./lib/shapes.js')


inquirer
    .prompt([
        { /* Pass your questions in here */
            name: 'characters',
            type: 'input',
            message: 'Enter characters for your logo',
        },
        {
            name: 'characterColor',
            type: 'input',
            message: 'What color do you want for your characters for your logo?',
        },
        {
            type: "list",
            name: "shapeChoices",
            message: "Choose Logo shape",
            choices:
                ["Circle",
                    "Square",
                    "Triangle",
                ]
        },
        {
            name: 'shapeColor',
            type: 'input',
            message: 'Enter shape color',
        },
    ])
    .then((answers) => {

        const { characters, characterColor, shapeChoices, shapeColor } = answers;


        if (characters.length > 3) {
            console.log('Please enter up to 3 characters')
        }
        let logoShape;

        if (shapeChoices == "Triangle") {
            logoShape = new Triangle()
        } else if (shapeChoices == "Circle") {
            logoShape = new Circle()
        } else if (shapeChoices == "Square") {
            logoShape = new Square()
        }
        logoShape.setText(characters)
        logoShape.setShapeColor(shapeColor)
        logoShape.setTextColor(characterColor)


        return generateSVG(logoShape.render(), shapeChoices)




    })



