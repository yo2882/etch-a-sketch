//Grid generation
let gridSize = 16;
const squareGrid = document.querySelector(".square-grid");

function removeAllChild (parent){
    while (parent.firstChild) {
        parent.remove(parent.firstChild);
    }
}

function generateGrid() {
    removeAllChild (squareGrid);
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
}

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

const squareAll = document.querySelectorAll(".square");
squareAll.forEach(square => {
    square.addEventListener("mouseover",changeColor);
});

//Reset button
const resetButton = document.querySelector(".reset");

function reset(){
    squareAll.forEach(square => {
        square.classList.remove("colored");
    });
}

resetButton.addEventListener("click",reset)

//Slider to adjust grid size
const slider = document.querySelector(".grid-slider input");
const sliderValueDisplay = document.querySelector(".grid-slider p");

slider.addEventListener("input",() => {
    sliderValueDisplay.textContent = slider.value;
})
