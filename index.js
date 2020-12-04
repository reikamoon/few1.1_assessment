// index.js

// Inputs
const height = document.getElementById("height")
const width = document.getElementById("width")
const color = document.getElementById("color")


// Outputs
const heightOutput = document.getElementById("height-output")
const widthOutput = document.getElementById("width-output")
const colorOutput = document.getElementById("color-output")
const box = document.getElementById("box")


//Event Listeners
/* create an eventListener */
height.addEventListener('change', heightListener);
width.addEventListener('change', widthListener);
color.addEventListener('change', colorListener);

function heightListener(e) {
    let myheight = height.value;
    heightOutput.innerHTML = myheight;
    box.style.height = `${myheight}px`;
};

function widthListener(e) {
    let mywidth = width.value;
    widthOutput.innerHTML = mywidth;
    box.style.width = `${mywidth}px`;
};

function colorListener(e){
    let mycolor = color.value;
    colorOutput.innerHTML = mycolor;
    box.style.backgroundColor = mycolor;
};


//console logs
console.log(height)
console.log(width)
console.log(color)
console.log(heightOutput)
console.log(widthOutput)
console.log(colorOutput)
