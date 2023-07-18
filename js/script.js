for (let i = 0; i < 16; i++) {
    const squareGrid = document.querySelector(".square-grid");
    const squareSubGrid = document.createElement("div");
    squareSubGrid.classList.add("row-flex");
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        squareSubGrid.appendChild(square);
    }
    squareGrid.appendChild(squareSubGrid);
}

const body = document.querySelector("body");
let penStatus = false;

function enablePen(){
    penStatus = true;
    event.preventDefault();
}

function disablePen(){
    penStatus = false;
    event.preventDefault();
}

body.addEventListener("mousedown",enablePen);
body.addEventListener("mouseup",disablePen);