//Grid generation
let gridSize = 16;
const squareGrid = document.querySelector(".square-grid");

function removeAllChild (parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateGrid() {
    for (let i = 0; i < gridSize; i++) {
        const squareSubGrid = document.createElement("div");
        squareSubGrid.classList.add("row-flex");
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            squareSubGrid.appendChild(square);
        }
        squareGrid.appendChild(squareSubGrid);
    }
    squareEventListener();
}

//run starting function
generateGrid();

//track status of mousedown and mouseup in penStatus
const body = document.querySelector("body");
let penStatus = false;

function enablePen(){
    penStatus = true;
}

function disablePen(){
    penStatus = false;
}

document.addEventListener("mousedown",enablePen);
document.addEventListener("mouseup",disablePen);

//Change color of square when holding down the mouse and mouseover square
function changeColor(){
    if(penStatus){
        this.classList.add("colored");
    }
}

function squareEventListener() {
    const squareAll = document.querySelectorAll(".square");
    squareAll.forEach(square => {
        square.addEventListener("mouseover",changeColor);
    });
}

//Reset button
const resetButton = document.querySelector(".reset");

function reset(){
    removeAllChild (squareGrid);
    generateGrid();
}

resetButton.addEventListener("click",reset)

//Slider to adjust grid size
const slider = document.querySelector(".grid-slider input");
const sliderValueDisplay = document.querySelector(".grid-slider p");

slider.addEventListener("input",() => {
    sliderValueDisplay.textContent = `${slider.value} x ${slider.value}`;
    gridSize = slider.value;
})
