class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    }
}

function addBox() {
    const box = new Box({
        selector: '#box',
        size: randomInteger(100, 200),
        color: randomColor()
    })
}

function addCircle() {
    const circle = new Circle({
        selector: '#circle',
        size: randomInteger(100, 200),
        color: randomColor()
    })
}


function randomInteger(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function randomColor() {
    let arrColor = new Array();
    arrColor = ['red', 'black', 'green', 'yellow', 'white', 'blue']
    const i = randomInteger(0, 6)
    return arrColor[i]
}