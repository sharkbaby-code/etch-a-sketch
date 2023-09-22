
//let num = +(prompt("Number of Squares", ''));


document.addEventListener("DOMContentLoaded", function() {
   createGrid(16);
} );

function createGrid(size){
    let container = document.querySelector('#container');

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; 

    let numCell = size * size;
    for (let i = 0; i < numCell; i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid');
        container.appendChild(cell);
        
    }
}