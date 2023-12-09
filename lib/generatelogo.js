const fs = require('fs');

function generateSVG(LogoSVG, shape) {

    fs.writeFile(`./examples/${shape}-logo.svg`, LogoSVG, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    );

}

module.exports = generateSVG; 