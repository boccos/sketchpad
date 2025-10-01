const start = document.getElementById("start");
const container = document.querySelector("#container");

let mouseDown = false;

document.body.addEventListener("mousedown", () => mouseDown = true);
document.body.addEventListener("mouseup", () => mouseDown = false);

start.addEventListener("click", () => {
    start.remove();
    console.log("test");
    newGrid();
})

function newGrid(){
    for (let i = 0; i < 64; i++){
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        
        for (let i = 0; i < 64; i++){
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

/*
const start = document.getElementById("start");
const container = document.querySelector(".container");

const row = document.createElement("div");
row.setAttribute("class", "row");

const col = document.createElement("div");
col.setAttribute("class", "col");

const cell = document.createElement("div");
cell.setAttribute("class", "cell");
cell.textContent = "test21";
//content.classList.add("cell");


start.addEventListener("click", () => {
    start.remove();
    console.log("test");
    newGrid();
})

function newGrid(){

    container.append(row);
    rowCells();

}

function rowCells(){
    for (let i = 0; i < 16; i++){
        container.append(colCells());
    }
}

function colCells(){
    for (let i = 0; i < 14; i++){
        const cell = document.createElement("div");
        // cell.setAttribute("class", "cell");
        cell.textContent = "test23";

        col.appendChild(row);

        console.log("test 23");
    }
}
*/ 