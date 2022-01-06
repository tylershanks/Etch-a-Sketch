console.log("this is gonna be a grid");


const columnContainer = document.querySelector('.gridColumn');
const square = document.querySelector("div");

let slider = document.getElementById('myRange');
let cellSqrt = 16;
let isDrawing = false;
let color = "black";
let rainbowColor = false;

document.getElementById("reset").addEventListener("click", reset);
document.getElementById("black").addEventListener("click", black);
document.getElementById("rainbow").addEventListener("click", rainbow);
document.getElementById("erase").addEventListener("click", erase);

//calls to redraw the whole grid which also resets the colors
function reset() { 
    createCells(cellSqrt);
}

function black() {
    rainbowColor = false;
    color = "black";
}

//sets rainbow to true, easier to have desired effect
function rainbow() { 
    rainbowColor = true;
}

function erase() {
    rainbowColor = false;
    color = "gray";
}

//adds the function of only drawing on mouse down, definitely not perfect
//but I think it's better than drawing on hover only
document.body.onmousedown = function() { 
    isDrawing = true;
    console.log(isDrawing);
}

document.body.onmouseup = function() {
    isDrawing = false;
    console.log(isDrawing);
}

//changes color of individual cells. Also checks if rainbowColor is true or false
square.addEventListener("mouseover", function(e) {
    if (e.target.matches('.gridCell') && isDrawing == true && rainbowColor == false) {
    console.log("pls");
    e.target.style.backgroundColor=color;
    }

    else if (e.target.matches('.gridCell') && isDrawing == true && rainbowColor == true) {
        console.log("pls");
        color = "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
        e.target.style.backgroundColor=color;
    }
})

//runs on initial startup so grid is populated by default
createCells(cellSqrt);

//changes grid every time the slider is changed
slider.addEventListener("change", function () {
    cellSqrt = slider.value;
    console.log(cellSqrt + " cellSqrt");
    
    createCells(cellSqrt)
    document.getElementById('cellSliderNumber').innerHTML = cellSqrt + "x" + cellSqrt;
})

//creates a grid of divs inside the grid container. adjustable by the slider
function createCells(cellsToCreate) { //loops through cellSqrt number of times and creates one row, populates it with however many cells, then does another row and populates etc.

    columnContainer.textContent = ""; //clears old cells

    for (let i = 1; i <= cellsToCreate; i++) {
        const gridRow = document.createElement("div")
            gridRow.classList.add('gridRow');
            columnContainer.appendChild(gridRow);            

            for (let j = 1; j <= cellsToCreate; j++) {
                const gridCell = document.createElement("div")
                    gridCell.classList.add('gridCell');
                    gridRow.appendChild(gridCell);
                    gridCell.id = "gridCell";
                    
            }
    }
}