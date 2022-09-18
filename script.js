const container = document.querySelector(".container");
numSquares = 16;

function createDivs(squaresNum) {
    for (let i = 0; i < squaresNum; i++) {
        let rows = document.createElement("div");
        rows.classList.add("div-rows");
        container.appendChild(rows);
        for (let j = 0; j < squaresNum; j++) {
            const widthHeight = 560 / squaresNum;
            let divBox = document.createElement("div");
            divBox.classList.add("div-box");
            divBox.style.width = `${widthHeight}px`
            divBox.style.height = `${widthHeight}px`
            rows.appendChild(divBox);
        } 
        
        }
    }

createDivs(numSquares);