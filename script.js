
const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clearBtn")

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

clearBtn.addEventListener("click", ()=>{
    for(let i = 0 ; i < 16*16; i++){
        gridSquares[i].style.backgroundColor = "white"; 
    }
});