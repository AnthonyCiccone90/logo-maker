class Square {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<rect x="60" y="60" width="300" height="200" fill="${this.color}"/><text x="167" y="135" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Square;

