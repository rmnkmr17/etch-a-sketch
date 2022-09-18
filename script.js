const container = document.querySelector(".container");
// let numSquares = 16;

let resetButton = document.querySelector("#btn-reset");



function createDivs(squaresNum) {

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");
    container.appendChild(mainContainer);

    for (let i = 0; i < squaresNum; i++) {
        let rows = document.createElement("div");
        rows.classList.add("div-rows");
        mainContainer.appendChild(rows);

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

createDivs(16);







resetButton.addEventListener("click", () => {
    
    let input = Number(prompt("How many squares per side do you want?", "Min 1 = Max 100"));
    if (input > 100 || input < 1) {
        alert("You picked an invalid number.");
    }
    else {
        const mainContainer = document.querySelector(".main-container");
        mainContainer.remove();
        createDivs(input);
    }
})

const divBoxes = document.querySelectorAll(".div-box");
divBoxes.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
    }) 
})
