const container = document.querySelector(".container");
numSquares = 4;

function createDivs(squaresNum) {
    for (let i = 0; i < squaresNum; i++) {
        let divSquare = document.createElement("div");
        divSquare.classList.add("div-square");
        container.appendChild(divSquare);
        for (let j = 0; j < squaresNum; j++) {
            let divBox = document.createElement("div");
            divBox.classList.add("div-box");
            divSquare.appendChild(divBox);
        } 
        }
    }


createDivs(numSquares);