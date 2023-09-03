class Triangle {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/><text x="135" y="135" fill="${this.textColor}">${this.text}</text>`
    }
}
module.exports = Triangle; 
