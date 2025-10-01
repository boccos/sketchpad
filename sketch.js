const start = document.getElementById("start");
const container = document.querySelector("#container");


let mouseDown = false;
document.body.addEventListener("mousedown", () => mouseDown = true);
document.body.addEventListener("mouseup", () => mouseDown = false);

start.addEventListener("click", () => {
    start.remove();
    console.log("test");
    gridSize();
})

function gridSize(){
    const buttonContainer = document.createElement("buttonContainer");
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
}

function newGrid(size){
    for (let i = 0; i < size; i++){
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        
        for (let i = 0; i < size; i++){
            const col = document.createElement("div");
            col.setAttribute("class", "col");
            row.appendChild(col);

            col.addEventListener("mouseover", () => {
                if (mouseDown){
                    col.style.backgroundColor = "aquamarine";
                }
            })
        }
        container.appendChild(row);
    }
}