
//let num = +(prompt("Number of Squares", ''));


document.addEventListener("DOMContentLoaded", function() {
   //createGrid(16);
   let btn = document.querySelector('.new');
   btn.addEventListener('click', function(){
   getSize();
   createGrid();
});
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
        cell.addEventListener('mouseover', function(e) {
        
            this.setAttribute('style', 'background-color: black;');
        });
        
    }
}


function getSize() {
    num = +(prompt("enter number for square grid", ''))

    if (num <= 100) {
      
    createGrid(num);
}
else if (num.typeOf !== 'number'){
    alert("please enter a number of divs");
    
}
else {
    alert("100 is the limit");
}
}