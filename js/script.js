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

//change color mode
let color = "gray"

const colorButtons = document.querySelectorAll(".color-button")

function changeMode(event){
    switch (event.target.value) {
        case "gray":
            color = "gray"//"rgb(185, 185, 185)";
            break;
        case "grayscale":
            color = "grayscale"//"rgb(0, 0, 0)";
            break;        
        case "random":
            color = "random"//`#${Math.floor(Math.random()*16777215).toString(16)}`;
            break;            
    }
}

colorButtons.forEach(colorButton => {
    colorButton.addEventListener("click",changeMode)
});

//Change behavior of changeColor based on mode (run function everytime mouse event occur to randomize color)
let gradientValue = 0;

function changeBgColor(event) {
    switch (color) {
        case "gray":
            event.target.style.backgroundColor = "rgb(185, 185, 185)";
            break;
        case "grayscale":
            if (gradientValue >= 200){
                gradientValue = 0
            }
            else{
                gradientValue += 20
            }
            event.target.style.backgroundColor = "#"+(gradientValue).toString(16)+(gradientValue).toString(16)+(gradientValue).toString(16)
            break;        
        case "random":
            event.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            break;
    }
}

//Change color of square when holding down the mouse and mouseover square

function changeColor(event){
    if(penStatus){
        changeBgColor(event)
    }
}

function squareEventListener() {
    const squareAll = document.querySelectorAll(".square");
    squareAll.forEach(square => {
        square.addEventListener("mouseover",changeColor);
        square.addEventListener("click",changeColor);
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
    sliderValueDisplay.textContent = slider.value;
    gridSize = slider.value;
})
