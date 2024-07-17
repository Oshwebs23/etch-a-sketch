const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function defaultGrid() {
    createRows(16);
    createColumns(16);
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
};


const hoverElement = document.getElementById("container");
    hoverElement.addEventListener('mouseover', () => {
        hoverElement.classList.add('hoverEffect');
    });


window.onload = defaultGrid();