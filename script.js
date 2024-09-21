const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

let userinput = prompt ()

while (userinput < 2 || userinput > 100 || userinput === undefined || Number(userinput) != userinput || userinput === null) {
   userinput = prompt ("please enter a number between 2 and 100")
    
}

function defaultGrid() {
    createRows(userinput);
    createColumns(userinput);
};

function createRows (rowNum) {
    for(let r=0; r<rowNum; r++) {
        const row = document.createElement ("div");
        row.classList.add("gridRow");
        container.appendChild(row);
    };
};

function createColumns (cellNum) {
    const rows = document.getElementsByClassName ("gridRow");
    for (let i=0; i<rows.length; i++ ) {
        for (let j=0; j<cellNum; j++) {
            const newCell = document.createElement ("div");
            newCell.classList.add("cell");
            rows[j].appendChild(newCell);
        };
    };

for (let i=0; i<cells.length; i++) {
    cells[i].addEventListener("mousedown", () => {
        const randomColour = Math.floor(Math.random()*16777215).toString(16);
        cells[i].style.backgroundColor = "#" + randomColour;
        })
    };
};




window.onload = defaultGrid();