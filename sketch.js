const start = document.getElementById("start");

const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "mainContainer");
document.body.appendChild(mainContainer);

const container = document.createElement("div");
mainContainer.appendChild(container);

const bottomBar = document.createElement("div");
bottomBar.setAttribute("class", "bottomBar");
mainContainer.appendChild(bottomBar);

const buttonContainer = document.createElement("div");


let mouseDown = false;
let redActive = false;
let blueActive = false;
let greenActive = false;
let randomActive = true;

document.body.addEventListener("mousedown", () => mouseDown = true);
document.body.addEventListener("mouseup", () => mouseDown = false);

start.addEventListener("click", () => {
    start.remove();
    gridSize();
})

function gridSize(){
    buttonContainer.setAttribute("id", "buttonContainer");
    container.appendChild(buttonContainer);

    const smallGrid = document.createElement("button");
    smallGrid.setAttribute("class", "gridSize small");
    smallGrid.textContent = "Small Grid";
    buttonContainer.appendChild(smallGrid);
    smallGrid.addEventListener("mousedown", () => {
        initStart();
        newGrid(32);
    })

    const mediumGrid = document.createElement("button");
    mediumGrid.setAttribute("class", "gridSize medium");
    mediumGrid.textContent = "Medium Grid";
    buttonContainer.appendChild(mediumGrid);
    mediumGrid.addEventListener("mousedown", () => {
        initStart();
        newGrid(64);
    })

    const largeGrid = document.createElement("button");
    largeGrid.setAttribute("class", "gridSize large");
    largeGrid.textContent = "Large Grid";
    buttonContainer.appendChild(largeGrid);
    largeGrid.addEventListener("mousedown", () => {
        initStart();
        newGrid(128);
    })
}

function initStart(){
    buttonContainer.remove();

    const red = document.createElement("button");
    red.setAttribute("class", "bottomBar red");
    red.textContent = "Red";
    bottomBar.appendChild(red);

    const blue = document.createElement("button");
    blue.setAttribute("class", "bottomBar blue");
    blue.textContent = "Blue";
    bottomBar.appendChild(blue);

    const green = document.createElement("button");
    green.setAttribute("class", "bottomBar green");
    green.textContent = "Green";
    bottomBar.appendChild(green);

    const randomColor = document.createElement("button");
    randomColor.setAttribute("class", "bottomBar randomColor");
    randomColor.textContent = "?";
    bottomBar.appendChild(randomColor);

    const clear = document.createElement("button");
    clear.setAttribute("class", "bottomBar clear");
    clear.textContent = "Clear";
    bottomBar.appendChild(clear);

    red.addEventListener("click", () => {
        redActive = true;
        blueActive = false;
        greenActive = false;
        randomActive = false;
    });

    blue.addEventListener("click", () => {
        redActive = false;
        blueActive = true;
        greenActive = false;
        randomActive = false;
    });

    green.addEventListener("click", () => {
        redActive = false;
        blueActive = false;
        greenActive = true;
        randomActive = false;
    });

    randomColor.addEventListener("click", () => {
        redActive = false;
        blueActive = false;
        greenActive = false;
        randomActive = true;
    });

    clear.addEventListener("click", () => {
        redActive = false;
        blueActive = false;
        greenActive = false;
        randomActive = false;

        const allCols = container.querySelectorAll(".col");
        allCols.forEach(col => {
            col.style.backgroundColor = "white";
        });
    });
}

function newGrid(size){
    container.innerHTML = "";
    for (let i = 0; i < size; i++){
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        
        for (let i = 0; i < size; i++){
            const col = document.createElement("div");
            col.setAttribute("class", "col");
            row.appendChild(col);

            col.addEventListener("mouseover", () => {
                if (mouseDown){
                    if (redActive) {
                        col.style.backgroundColor = "rgb(255, 117, 117)";
                    } else if (blueActive) {
                        col.style.backgroundColor = "rgb(131, 131, 255)";
                    } else if (greenActive) {
                        col.style.backgroundColor = "rgb(131, 255, 131)";
                    } else if (randomActive) {
                        const r = Math.floor(Math.random() * 256);
                        const g = Math.floor(Math.random() * 256);
                        const b = Math.floor(Math.random() * 256);
                        col.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
                    }
                }
            })
        }
        container.appendChild(row);
    }
}