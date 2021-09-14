console.log("this is gonna be a grid");


const columnContainer = document.querySelector('.gridColumn');

let slider = document.getElementById('myRange');
let cellSqrt = 16;
let isDrawing = false;

createCells(cellSqrt);

slider.addEventListener("change", function () {
    cellSqrt = slider.value;
    console.log(cellSqrt + " cellSqrt");
    
    createCells(cellSqrt)
    document.getElementById('cellSliderNumber').innerHTML = cellSqrt + "x" + cellSqrt;
})

/*const gridCell = document.querySelector('.gridCell');
gridCell.addEventListener("mousedown", function() {
    gridCell.style.backgroundColor = 'blue';
    console.log('color change');
})*/

function changeColor(divObj) {
    divObj.style.backgroundColor = blue;
}



function createCells(cellsToCreate) { //loops through cellSqrt number of times and creates one row, populates it with however many cells, then does another row and populates etc.

    columnContainer.textContent = ""; //clears old cells

    for (let i = 1; i <= cellsToCreate; i++) {
        const gridRow = document.createElement("div")
            gridRow.classList.add('gridRow');
            columnContainer.appendChild(gridRow);            

            for (let j = 1; j <= cellsToCreate; j++) {
                const gridCell = document.createElement("div")
                    gridCell.classList.add('gridCell');
                    //gridCell.addEventListener("mousedown", console.log("cliiick"));
                    gridRow.appendChild(gridCell);
            }
    }
}



