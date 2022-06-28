const container = document.querySelector('.container');
let currentColor
let mouseDown = false;

for (let i = 0; i <= 8315; i++) {
    const pixel = document.createElement('button');
    pixel.className = 'pixel';
    pixel.style.width = '5px';
    pixel.style.height = '10px';
    pixel.addEventListener('click', () => {
        pixel.style.background = currentColor;
    })
    pixel.addEventListener('mouseenter', () => {
        if (mouseDown === true) {
            pixel.style.background = currentColor;
        }
    })

    container.append(pixel);
}

container.addEventListener('mousedown', () => {
    mouseDown = true;
    console.log('Mouse Down')
})

window.addEventListener('mouseup', () => {
    mouseDown = false;
    console.log('Mouse Up')
})


container.addEventListener('mouseenter', (event) => {
    event.target.style.background = currentColor;
})


const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'black',
    'purple',
    'grey',
    'brown'
]

for (let n in colors) {
    currentColor = colors[n]

    const colorSel = document.createElement('div');
    colorSel.className = 'color-picker';
    colorSel.style.backgroundColor = currentColor;

    document.body.append(colorSel);

    let choseColor = colorSel.addEventListener('click', () => {
        currentColor = `${
            colors[n]
        }`;
    })
}

document.body.addEventListener('mousedown', (event) => {
    if (event.button === 1) {
        currentColor = 'white';
        console.log(currentColor)
    }
})
