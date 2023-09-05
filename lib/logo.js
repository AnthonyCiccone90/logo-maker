
function createLogo(data) {
    const characters = data.characters;
    const textColor = data["text-color"];
    const shapeColor = data["shape-color"];
    const textPosition = data.textPosition;



    let shapeSVG = ""; //SVG inputs
    let shapeWidth = 150; //width of shape
    let shapeHeight = 150; //height of shape



    switch (data.shape.toLowerCase()) {
        case "square":
            shapeSVG = `<rect x="50" y="50" width="${shapeWidth}" height="${shapeHeight}" rx="50" ry="50" stroke="${shapeColor}" fill="${shapeColor}" stroke-width="5"/>`;
            break;
        case "circle":
            shapeSVG = `<circle cx="75" cy="75" r="70" stroke="${shapeColor}" fill="${shapeColor}" stroke="${shapeColor}" stroke-width="5"/>`;
            break;
        case "triangle":
            shapeSVG = `<polygon points="75,0 0,150 150,150" stroke="${shapeColor}" fill="${shapeColor}" stroke-width="5"/>`;
            break;
        default:
            break;
    }

    let XPosition = shapeWidth / 2; // image's x position on web browser
    let YPosition = shapeHeight / 2; //images' y position of web brower

    if (textPosition === "bottom") {
        YPosition = shapeHeight - 20;
    }

    const SVGLogo = `
    <svg xmlns="http://www.w3.org/2000/svg" height="${shapeHeight}" width="${shapeWidth}">
        ${shapeSVG}
        <text x="${XPosition}" y="${YPosition}" fill="${textColor}" font-size="30" text-anchor="middle" alignment-baseline="middle">${characters}</text>
    </svg>`;

    return SVGLogo;
}

module.exports = createLogo;