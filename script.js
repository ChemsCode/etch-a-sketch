function makeGrid(rows, colums){


}



const container = document.querySelector("#container");


for(let i = 0 ; i < (16*16); i++){
    let gridElement = document.createElement("div");
    gridElement.classList.add("gridSquare");
    container.appendChild(gridElement);
}

const gridSquares = document.querySelectorAll(".gridSquare")


for(let i = 0 ; i < 16*16; i++){
    gridSquares[i].addEventListener("mouseover", () => {
        gridSquares[i].style.backgroundColor = "black"; 
    });
}