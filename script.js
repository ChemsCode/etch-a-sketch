function squareDimensions(nOfSquares){
    return Math.sqrt((Math.pow(768,2))/(Math.pow(nOfSquares,2)))
}

function makeGrid(nOfSquares){

    let squareDim = squareDimensions(nOfSquares);

    for(let i = 0 ; i < (nOfSquares*nOfSquares); i++){
        let gridElement = document.createElement("div");
        gridElement.style.width = `${squareDim}px`;
        gridElement.style.height = `${squareDim}px`;
        gridElement.classList.add("gridSquare");
        container.appendChild(gridElement);
    }

}

const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clearBtn");

let numberOfSquares = 64;
const containerDimension = 768;
makeGrid(numberOfSquares);

const gridSquares = document.querySelectorAll(".gridSquare")


for(let i = 0 ; i < numberOfSquares*numberOfSquares; i++){
    gridSquares[i].addEventListener("mouseover", () => {
        gridSquares[i].style.backgroundColor = "black"; 
    });
}

clearBtn.addEventListener("click", ()=>{
    for(let i = 0 ; i < numberOfSquares*numberOfSquares; i++){
        gridSquares[i].style.backgroundColor = "white"; 
    }
});