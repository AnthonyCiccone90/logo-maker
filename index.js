const inquirer = require("inquirer");
const fs = require("fs");
const colorNames = require("colors");
const SVGStart = '<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">'
const SVGEnd = '</svg>'
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");
const Circle = require("./lib/circle")



function init () {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter up to three characters",
                name: "characters",
            },
            {
                type: "input",
                message: "Select text color",
                name: "textColor",
                validate: function (value) {
                    const isColorName = colorNames.hasOwnProperty(value.toLowerCase());
                    const isHexColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(value);

                    if (isColorName || isHexColor) {
                        return true;
                    }

                    return "Please enter a valid color name or a valid hexadecimal color code (e.g., blue or #RRGGBB or #RRGGBBAA)";
                },

            },
            {
                type: "list",
                message: "Select shape",
                choices: ["circle", "triangle", "square"],
                name: "shape",
            },
            {
                type: "input",
                message: "Select shape color",
                name: "shapeColor",
                validate: function (value) {
                    const isColorName = colorNames.hasOwnProperty(value.toLowerCase());
                    const isHexColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(value);

                    if (isColorName || isHexColor) {
                        return true;
                    }

                    return "Please enter a valid color name or a valid hexadecimal color code (e.g., blue or #RRGGBB or #RRGGBBAA)";
                },
            },
        ])
    
        .then((data) => {
            if (data.shape === "square") {
                const square = new Square(data.shapeColor, data.characters, data.textColor);
                const SVGString = SVGStart + square.render() + SVGEnd
                fs.writeFile("logo.svg", SVGString, (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("Generated logo.svg");
                    }
                });
            }
                if (data.shape === "circle") {
                    const circle = new Circle(data.shapeColor, data.characters, data.textColor);
                    const SVGString = SVGStart + circle.render() + SVGEnd
                    fs.writeFile("logo.svg", SVGString, (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log("Generated logo.svg");
                        }
                    });
                }
                else if (data.shape === "triangle") {
                    const triangle = new Triangle(data.shapeColor, data.characters, data.textColor);
                    const SVGString = SVGStart + triangle.render() + SVGEnd
                    fs.writeFile("logo.svg", SVGString, (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log("Generated logo.svg");
                        }
                    });
                }
            })
    .catch((error) => {
            console.error(error);
        });
    }

function generateLogo(content) {
        fs.writeFile("logo.svg", content, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Generated logo.svg");
            }
        });
    };

init();
