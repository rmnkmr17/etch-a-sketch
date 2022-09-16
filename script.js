const container = document.querySelector(".container");

function createDivs(num) {
    for (let i = 0; i < 256; i++) {
        const divPixels = document.createElement("div");
        container.appendChild(divPixels);
    }
}

