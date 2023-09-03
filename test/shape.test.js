const Square = require("../lib/square.js");
const Triangle = require("../lib/triangle.js");
const Circle = require("../lib/circle.js")

describe("Shape", () => {
    describe("Square", () => {
        it("should make a square with given input", () => {
            const square = new Square("blue", "Hey", "red");
            expect(square.color).toBe("blue"); 
            expect(square.text).toBe("Hey"); 
            expect(square.textColor).toBe("red"); 
            expect(square.render()).toBe(`<rect x="60" y="60" width="300" height="200" fill="${square.color}"/><text x="167" y="135" fill="${square.textColor}">${square.text}</text>`)
        });
    });
    
    describe("Triangle", () => {
        it("should make a triangle with given input", () => {
            const triangle = new Triangle("red", "Hey", "black");
            expect(triangle.color).toBe("red"); 
            expect(triangle.text).toBe("Hey"); 
            expect(triangle.textColor).toBe("black"); 
            expect(triangle.render()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="${triangle.color}"/><text x="135" y="135" fill="${triangle.textColor}">${triangle.text}</text>`);
        });
        });
    });

    describe("Circle", () => {
        it("should make a circle with the given input", () => {
            const circle = new Circle("purple", "Hey", "yellow");
            expect(circle.color).toBe("purple"); 
            expect(circle.text).toBe("Hey"); 
            expect(circle.textColor).toBe("yellow"); 
            expect(circle.render()).toBe(`<circle cx="150" cy="100" r="100" fill="${circle.color}"/><text x="137" y="105" fill="${circle.textColor}">${circle.text}</text>`);
        });
    });
