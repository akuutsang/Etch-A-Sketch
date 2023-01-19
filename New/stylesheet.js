let board = document.querySelector(".grid-container");

function styleBoard(){
    for (let i = 0; i <256; i++) {
        let square = document.createElement("divs")
        square.style.backgroundColor ="blue"
        board.insertAdjacentElement("beforeend", square)
    }
}

styleBoard();

function changeSize(input){
 styleBoard(input)
}